import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { ICON_CATALOG } from './catalog.ts';
import { renderIcon } from './icon-templates.ts';
import { OVERRIDE_ICON_IDS } from './icon-overrides.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.resolve(__dirname, '..', 'icons');

/** 抹平动画时长、delay 等参数，只比较结构与路径 */
function structuralKey(content: string): string {
  return content
    .replace(/\s+/g, ' ')
    .replace(/\d+\.?\d*s/g, 'Ts')
    .replace(/animation-delay:\s*[\d.]+s/g, 'animation-delay:Ts')
    .replace(/seed-\d+/g, 'seed-N')
    .trim();
}

function groupByKey(ids: string[], keyFn: (id: string) => string): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const id of ids) {
    const key = keyFn(id);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(id);
  }
  return map;
}

async function main() {
  const allIds = ICON_CATALOG.map((d) => d.id);

  const renderGroups = groupByKey(allIds, (id) => {
    const def = ICON_CATALOG.find((x) => x.id === id)!;
    return createHash('sha256').update(structuralKey(renderIcon(def))).digest('hex').slice(0, 12);
  });

  const templateGroups = new Map<string, string[]>();
  for (const def of ICON_CATALOG) {
    if (!templateGroups.has(def.template)) {
      templateGroups.set(def.template, []);
    }
    templateGroups.get(def.template)!.push(def.id);
  }

  const structuralDupes = [...renderGroups.entries()].filter(([, ids]) => ids.length > 1);
  const templateDupes = [...templateGroups.entries()].filter(([, ids]) => ids.length > 1);

  console.log(`# 全面视觉排查 (${ICON_CATALOG.length} 个)\n`);

  console.log(`## 结构完全相同 (${structuralDupes.length} 组, ${structuralDupes.reduce((n, [, ids]) => n + ids.length, 0)} 个图标)\n`);
  for (const [, ids] of structuralDupes.sort((a, b) => b[1].length - a[1].length)) {
    const detail = ids.map((id) => {
      const d = ICON_CATALOG.find((x) => x.id === id)!;
      return `${id}[${d.template}]`;
    });
    console.log(`- ${detail.join(' = ')}`);
  }

  console.log(`\n## 共用模板 (${templateDupes.length} 组)\n`);
  for (const [template, ids] of templateDupes.sort((a, b) => b[1].length - a[1].length).slice(0, 30)) {
    console.log(`- ${template} (${ids.length}): ${ids.join(', ')}`);
  }

  const missingOverrides: string[] = [];
  for (const [, ids] of templateDupes) {
    const canonical = ids[0];
    for (const id of ids.slice(1)) {
      const def = ICON_CATALOG.find((x) => x.id === id)!;
      if (!OVERRIDE_ICON_IDS.has(id)) {
        missingOverrides.push(`${id} (模板 ${def.template}, 基准 ${canonical})`);
      }
    }
  }

  const structuralAffected = new Set(structuralDupes.flatMap(([, ids]) => ids));
  const ok = structuralDupes.length === 0 && missingOverrides.length === 0;
  console.log(`\n结构重复图标: ${structuralAffected.size}`);
  console.log(`共用模板图标: ${templateDupes.reduce((n, [, ids]) => n + ids.length, 0)}`);
  if (missingOverrides.length) {
    console.log(`\n## 共用模板但缺少独立视觉 (${missingOverrides.length} 个)\n`);
    for (const line of missingOverrides) {
      console.log(`- ${line}`);
    }
  }
  console.log(ok ? '\n✅ 无结构重复且共用模板均已覆盖' : '\n❌ 仍需修复');
  if (!ok) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
