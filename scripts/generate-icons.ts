import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ICON_CATALOG, PRESERVED_HAND_ICONS } from './catalog.ts';
import { renderIcon } from './icon-templates.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.resolve(__dirname, '..', 'icons');

async function generateIcons() {
  await fs.mkdir(iconsDir, { recursive: true });

  let created = 0;
  let skipped = 0;

  for (const def of ICON_CATALOG) {
    const filePath = path.join(iconsDir, `${def.id}.svg`);

    if (def.preserve && PRESERVED_HAND_ICONS.has(def.id)) {
      try {
        await fs.access(filePath);
        skipped += 1;
        continue;
      } catch {
        // fall through and generate fallback
      }
    }

    const svg = renderIcon(def);
    await fs.writeFile(filePath, svg + '\n', 'utf8');
    created += 1;
  }

  console.log(
    `Generated icons: ${created} written, ${skipped} preserved → ${ICON_CATALOG.length} total in catalog`,
  );
}

generateIcons().catch((error) => {
  console.error(error);
  process.exit(1);
});
