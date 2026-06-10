import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import icons from '../packages/json/icons.json' assert { type: 'json' };
import { ICON_CATALOG } from './catalog.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.resolve(__dirname, '..', 'icons');

function strip(s: string): string {
  return s.replace(/\s+/g, ' ').trim();
}

async function main() {
  const issues: string[] = [];

  for (const def of ICON_CATALOG) {
    const src = strip(await fs.readFile(path.join(iconsDir, `${def.id}.svg`), 'utf8'));
    const jsonBody = strip(icons.icons[def.id]?.body ?? '');

    const srcAnim = (src.match(/animation:[^;}"']+/g) ?? []).map(strip);
    const jsonAnim = (jsonBody.match(/animation:[^;}"']+/g) ?? []).map(strip);

    const srcKf = (src.match(/@keyframes\s+[\w-]+/g) ?? []).length;
    const jsonKf = (jsonBody.match(/@keyframes\s+[\w-]+/g) ?? []).length;

    if (srcKf > 0 && jsonKf === 0) {
      issues.push(`${def.id}: JSON 丢失 @keyframes (${srcKf}→0)`);
    }
    if (srcAnim.length > jsonAnim.length) {
      issues.push(`${def.id}: JSON 动画条目减少 (${srcAnim.length}→${jsonAnim.length})`);
    }
  }

  console.log(`# 源 SVG vs Iconify JSON 动画对比 (${ICON_CATALOG.length} 个)\n`);
  if (issues.length) {
    for (const line of issues) {
      console.log(`- ${line}`);
    }
    console.log(`\n共 ${issues.length} 个差异（Playground 已改用源 SVG 规避）`);
    process.exitCode = 1;
  } else {
    console.log('✅ JSON 与源 SVG 动画条目一致');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
