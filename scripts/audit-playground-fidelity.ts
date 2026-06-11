import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import icons from '../packages/json/icons.json' assert { type: 'json' };
import { ICON_CATALOG, PRESERVED_HAND_ICONS } from './catalog.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.resolve(__dirname, '..', 'icons');
const bodiesFile = path.resolve(__dirname, '..', 'playground', 'src', 'data', 'iconBodies.ts');

function extractBody(svg: string): string {
  const match = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  return match ? match[1].trim() : svg.trim();
}

function normalize(body: string): string {
  return body
    .replace(/\s+/g, ' ')
    .replace(/\d+\.?\d*s/g, 'Ts')
    .replace(/animation-delay:\s*[\d.]+s/g, 'animation-delay:Ts')
    .trim();
}

function semanticKey(body: string): string {
  return normalize(
    body
      .replace(/class="[^"]*"/g, '')
      .replace(/\sstyle="animation-delay:[^"]*"/g, '')
      .replace(/fill="none"/g, '')
      .replace(/opacity="[^"]*"/g, ''),
  );
}

function countTags(body: string, tag: string): number {
  return (body.match(new RegExp(`<${tag}\\b`, 'g')) ?? []).length;
}

function keyframeNames(body: string): string[] {
  return [...body.matchAll(/@keyframes\s+([a-zA-Z0-9_-]+)/g)].map((m) => m[1]).sort();
}

function animationRefs(body: string): string[] {
  const refs: string[] = [];
  for (const m of body.matchAll(/animation(?:-name)?:\s*([a-zA-Z0-9_-]+)/g)) {
    refs.push(m[1]);
  }
  return refs.sort();
}

function classNames(body: string): string[] {
  const names = new Set<string>();
  body.replace(/(?:^|[,{}\s])\.([a-zA-Z_][\w-]*)/g, (_m, cls: string) => {
    names.add(cls);
    return _m;
  });
  body.replace(/class="([^"]+)"/g, (_m, classes: string) => {
    classes.split(/\s+/).forEach((cls) => cls && names.add(cls));
    return _m;
  });
  return [...names].sort();
}

/** 与 playground generator 同步的 scoping 逻辑（用于审计） */
function sanitizeScope(scope: string): string {
  return scope.replace(/[^a-zA-Z0-9_-]/g, '-');
}

function collectSvgClassNames(body: string): Set<string> {
  const names = new Set<string>();
  body.replace(/<style>([\s\S]*?)<\/style>/g, (_match, css: string) => {
    css.replace(/(?:^|[,{}\s])\.([a-zA-Z_][\w-]*)/g, (_m, cls: string) => {
      names.add(cls);
      return _m;
    });
    return _match;
  });
  body.replace(/class="([^"]+)"/g, (_match, classes: string) => {
    classes.split(/\s+/).forEach((cls) => cls && names.add(cls));
    return _match;
  });
  return names;
}

function scopeSvgBody(body: string, scopeId: string): string {
  const prefix = `cl-${sanitizeScope(scopeId)}`;
  const classNamesSet = collectSvgClassNames(body);
  const scopedClass = (cls: string) => `${prefix}-${cls}`;
  const scopedKeyframe = (name: string) => `${prefix}-kf-${name}`;
  const keyframeNamesSet = new Set<string>();

  body.replace(/<style>([\s\S]*?)<\/style>/g, (_match, css: string) => {
    css.replace(/@keyframes\s+([a-zA-Z0-9_-]+)/g, (_m, name: string) => {
      keyframeNamesSet.add(name);
      return _m;
    });
    return _match;
  });

  let result = body.replace(/<style>([\s\S]*?)<\/style>/g, (_match, css: string) => {
    let scoped = css.replace(/@keyframes\s+([a-zA-Z0-9_-]+)/g, (_m, name: string) => {
      return `@keyframes ${scopedKeyframe(name)}`;
    });
    for (const name of keyframeNamesSet) {
      const kf = scopedKeyframe(name);
      scoped = scoped.replace(new RegExp(`(animation\\s*:\\s*)${name}\\b`, 'g'), `$1${kf}`);
      scoped = scoped.replace(
        new RegExp(`(animation-name\\s*:\\s*)${name}\\b`, 'g'),
        `$1${kf}`,
      );
    }
    for (const cls of [...classNamesSet].sort((a, b) => b.length - a.length)) {
      scoped = scoped.replace(new RegExp(`\\.${cls}\\b`, 'g'), `.${scopedClass(cls)}`);
    }
    return `<style>${scoped}</style>`;
  });

  result = result.replace(/class="([^"]+)"/g, (_match, classes: string) => {
    const next = classes
      .split(/\s+/)
      .filter(Boolean)
      .map((cls) => scopedClass(cls))
      .join(' ');
    return `class="${next}"`;
  });

  for (const name of keyframeNamesSet) {
    const kf = scopedKeyframe(name);
    result = result.replace(
      new RegExp(`(style="[^"]*animation:\\s*)${name}\\b`, 'g'),
      `$1${kf}`,
    );
  }

  return result;
}

function findMissingKeyframes(body: string): string[] {
  const defined = new Set(
    [...body.matchAll(/@keyframes\s+([a-zA-Z0-9_-]+)/g)].map((m) => m[1]),
  );
  const missing: string[] = [];
  for (const m of body.matchAll(/animation(?:-name)?:\s*([a-zA-Z0-9_-]+)/g)) {
    const name = m[1];
    if (!defined.has(name) && !['none', 'inherit', 'initial', 'unset'].includes(name)) {
      missing.push(name);
    }
  }
  return [...new Set(missing)];
}

function hasAnimation(body: string): boolean {
  return body.includes('@keyframes') || /animation\s*:/.test(body);
}

function findUnscopedAnimations(scoped: string, scopeId: string): string[] {
  const prefix = `cl-${sanitizeScope(scopeId)}-kf-`;
  const issues: string[] = [];
  for (const m of scoped.matchAll(/animation(?:-name)?:\s*([a-zA-Z0-9_-]+)/g)) {
    const name = m[1];
    if (!name.startsWith(prefix)) {
      issues.push(name);
    }
  }
  return [...new Set(issues)];
}

async function loadIconBodies(): Promise<Record<string, string>> {
  const raw = await fs.readFile(bodiesFile, 'utf8');
  const match = raw.match(/export const ICON_BODIES[^=]*=\s*(\{[\s\S]*?\n\});/);
  if (!match) {
    throw new Error('无法解析 iconBodies.ts');
  }
  return JSON.parse(match[1]) as Record<string, string>;
}

async function main() {
  const iconBodies = await loadIconBodies();
  const issues: { id: string; type: string; detail: string }[] = [];
  const passed: string[] = [];

  for (const def of ICON_CATALOG) {
    const id = def.id;
    const filePath = path.join(iconsDir, `${id}.svg`);
    const rawSvg = await fs.readFile(filePath, 'utf8');
    const srcBody = extractBody(rawSvg);
    const syncedBody = iconBodies[id] ?? '';
    const jsonBody = icons.icons[id]?.body ?? '';

    const iconIssues: string[] = [];

    if (normalize(srcBody) !== normalize(syncedBody)) {
      issues.push({ id, type: 'bodies 未同步', detail: 'icons/*.svg ≠ iconBodies.ts' });
      iconIssues.push('bodies');
    }

    if (!PRESERVED_HAND_ICONS.has(id) && semanticKey(srcBody) !== semanticKey(jsonBody)) {
      const srcKf = keyframeNames(srcBody).join(',');
      const jsonKf = keyframeNames(jsonBody).join(',');
      const srcTags = `p${countTags(srcBody, 'path')}c${countTags(srcBody, 'circle')}r${countTags(srcBody, 'rect')}`;
      const jsonTags = `p${countTags(jsonBody, 'path')}c${countTags(jsonBody, 'circle')}r${countTags(jsonBody, 'rect')}`;
      issues.push({
        id,
        type: '源 SVG ≠ Iconify JSON',
        detail: `结构/样式差异 tags ${srcTags}→${jsonTags} kf [${srcKf}]→[${jsonKf}]`,
      });
      iconIssues.push('json');
    }

    if (!hasAnimation(srcBody)) {
      issues.push({ id, type: '缺少动画', detail: '无 @keyframes 或 animation 声明' });
      iconIssues.push('anim');
    }

    const missingKf = findMissingKeyframes(srcBody);
    if (missingKf.length) {
      issues.push({
        id,
        type: '动画名未定义',
        detail: `引用但未定义 @keyframes: ${missingKf.join(', ')}`,
      });
      iconIssues.push('keyframes');
    }

    const scoped = scopeSvgBody(srcBody, id);
    const unscoped = findUnscopedAnimations(scoped, id);
    if (unscoped.length) {
      issues.push({
        id,
        type: 'CSS 作用域遗漏',
        detail: `未隔离 animation: ${unscoped.join(', ')}`,
      });
      iconIssues.push('scope');
    }

    const cssClasses = new Set<string>();
    srcBody.replace(/<style>([\s\S]*?)<\/style>/g, (_m, css: string) => {
      css.replace(/(?:^|[,{}\s])\.([a-zA-Z_][\w-]*)/g, (_m2, cls: string) => {
        cssClasses.add(cls);
        return _m2;
      });
      return _m;
    });
    const htmlClasses = new Set<string>();
    srcBody.replace(/class="([^"]+)"/g, (_m, classes: string) => {
      classes.split(/\s+/).forEach((cls) => cls && htmlClasses.add(cls));
    });
    const orphanCss = [...cssClasses].filter((cls) => !htmlClasses.has(cls));
    const orphanHtml = [...htmlClasses].filter((cls) => !cssClasses.has(cls));
    if (orphanCss.length || orphanHtml.length) {
      issues.push({
        id,
        type: 'class 不匹配',
        detail: `CSS无元素:${orphanCss.join(',')||'-'} 元素无CSS:${orphanHtml.join(',')||'-'}`,
      });
      iconIssues.push('class');
    }

    if (/style="[^"]*animation:\s*[a-zA-Z]/.test(srcBody)) {
      issues.push({
        id,
        type: '内联 animation',
        detail: 'style 属性含 animation，网格作用域需额外处理',
      });
      iconIssues.push('inline');
    }

    if (iconIssues.length === 0) {
      passed.push(id);
    }
  }

  const byType = new Map<string, typeof issues>();
  for (const item of issues) {
    if (!byType.has(item.type)) byType.set(item.type, []);
    byType.get(item.type)!.push(item);
  }

  console.log(`# Playground 一致性审计 (${ICON_CATALOG.length} 个图标)\n`);
  console.log(`通过: ${passed.length} · 有问题: ${ICON_CATALOG.length - passed.length} · 共 ${issues.length} 条\n`);

  for (const [type, rows] of [...byType.entries()].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`## ${type} (${rows.length})\n`);
    for (const row of rows.sort((a, b) => a.id.localeCompare(b.id))) {
      console.log(`- ${row.id}: ${row.detail}`);
    }
    console.log('');
  }

  if (issues.length) {
    process.exitCode = 1;
  } else {
    console.log('✅ 全部 222 个图标通过');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
