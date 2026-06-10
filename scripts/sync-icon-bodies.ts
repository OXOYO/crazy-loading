import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ICON_CATALOG } from './catalog.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.resolve(__dirname, '..', 'icons');
const outFile = path.resolve(__dirname, '..', 'playground', 'src', 'data', 'iconBodies.ts');

function extractBody(svg: string): string {
  const match = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  return match ? match[1].trim() : svg.trim();
}

async function main() {
  const bodies: Record<string, string> = {};

  for (const def of ICON_CATALOG) {
    const filePath = path.join(iconsDir, `${def.id}.svg`);
    const raw = await fs.readFile(filePath, 'utf8');
    bodies[def.id] = extractBody(raw);
  }

  const content = `/** 自动生成：源 SVG 内联内容，Playground 预览用（保留完整 CSS 动画） */
export const ICON_BODIES: Record<string, string> = ${JSON.stringify(bodies, null, 2)};

export function getIconBody(name: string): string | null {
  return ICON_BODIES[name] ?? null;
}
`;

  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, content + '\n', 'utf8');
  console.log(`Synced ${ICON_CATALOG.length} icon bodies → playground/src/data/iconBodies.ts`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
