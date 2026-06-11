import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ICON_CATALOG } from './catalog.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.resolve(__dirname, '..', 'icons');

/** animation 时长缺少 s/ms 单位时，浏览器会忽略整条 animation 声明 */
const INVALID_DURATION =
  /animation(?:-duration)?:[^;{}]*?\s(\d+\.?\d*)\s+(?!s|ms)(?:linear|ease|ease-in|ease-out|ease-in-out|step|infinite|cubic-bezier)/;

async function main() {
  const bad: string[] = [];

  for (const def of ICON_CATALOG) {
    const svg = await fs.readFile(path.join(iconsDir, `${def.id}.svg`), 'utf8');
    if (INVALID_DURATION.test(svg)) {
      bad.push(def.id);
    }
  }

  console.log(`# animation 时长单位排查 (${ICON_CATALOG.length} 个)\n`);
  if (bad.length) {
    console.log(`## 无效时长（缺 s/ms）(${bad.length} 个)\n`);
    for (const id of bad) {
      console.log(`- ${id}`);
    }
    console.log('\n❌ 以上图标 animation 不会生效');
    process.exitCode = 1;
  } else {
    console.log('✅ 全部 animation 时长均含合法单位');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
