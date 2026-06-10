import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  blankIconSet,
  cleanupSVG,
  runSVGO,
  parseColors,
  isEmptyColor,
  SVG,
} from '@iconify/tools';
import { ICON_CATALOG } from './catalog.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const iconsDir = path.join(rootDir, 'icons');
const outputDir = path.join(rootDir, 'packages', 'json');
const prefix = 'crazy-loading';

function isCssAnimated(code: string): boolean {
  return code.includes('@keyframes') || /animation\s*:/.test(code);
}

async function build() {
  const iconSet = blankIconSet(prefix);

  for (const def of ICON_CATALOG) {
    const filePath = path.join(iconsDir, `${def.id}.svg`);
    const raw = await fs.readFile(filePath, 'utf8');
    const svg = new SVG(raw);
    const animated = isCssAnimated(raw);

    if (animated) {
      parseColors(svg, {
        defaultColor: 'currentColor',
        callback: (attr, colorStr, color) => {
          return !color || isEmptyColor(color) ? colorStr : 'currentColor';
        },
      });
    } else {
      cleanupSVG(svg);
      parseColors(svg, {
        defaultColor: 'currentColor',
        callback: (attr, colorStr, color) => {
          return !color || isEmptyColor(color) ? colorStr : 'currentColor';
        },
      });
      runSVGO(svg, { animated: false });
    }

    iconSet.fromSVG(def.id, svg);
  }

  const exported = iconSet.export();
  const iconNames = Object.keys(exported.icons ?? {});

  exported.info = {
    name: 'Crazy Loading',
    total: iconNames.length,
    author: {
      name: 'crazy-loading',
      url: 'https://github.com/crazy-loading/crazy-loading',
    },
    license: {
      title: 'MIT',
      spdx: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
    samples: iconNames.slice(0, 6),
    height: 24,
    category: 'UI 24px',
    tags: ['Contains Animations', 'Precise Shapes', 'Has Padding'],
    palette: false,
  };

  await fs.mkdir(outputDir, { recursive: true });

  const iconsJson = JSON.stringify(exported, null, '\t') + '\n';
  await fs.writeFile(path.join(outputDir, 'icons.json'), iconsJson);

  const infoJson = JSON.stringify(exported.info, null, '\t') + '\n';
  await fs.writeFile(path.join(outputDir, 'info.json'), infoJson);

  const packageJson = {
    name: '@iconify-json/crazy-loading',
    version: '0.1.0',
    description: 'Crazy Loading icon set in Iconify JSON format',
    license: 'MIT',
    type: 'module',
    main: 'index.js',
    types: 'index.d.ts',
    files: ['icons.json', 'info.json', 'index.js', 'index.d.ts'],
    dependencies: {
      '@iconify/types': '^2.0.0',
    },
  };

  await fs.writeFile(
    path.join(outputDir, 'package.json'),
    JSON.stringify(packageJson, null, '\t') + '\n',
  );

  await fs.writeFile(
    path.join(outputDir, 'index.js'),
    `import icons from './icons.json' with { type: 'json' };\nimport info from './info.json' with { type: 'json' };\n\nexport { icons, info };\nexport default icons;\n`,
  );

  await fs.writeFile(
    path.join(outputDir, 'index.d.ts'),
    `import type { IconifyJSON, IconifyInfo } from '@iconify/types';\n\nexport declare const icons: IconifyJSON;\nexport declare const info: IconifyInfo;\nexport default icons;\n`,
  );

  console.log(`Built ${iconNames.length} icons → packages/json/icons.json`);
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});
