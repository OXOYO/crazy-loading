import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ICON_CATALOG } from './catalog.ts';
import { CATEGORIES } from './types.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const playgroundDataDir = path.resolve(__dirname, '..', 'playground', 'src', 'data');

function buildCategoriesFile(): string {
  const rows = CATEGORIES.map(
    (item) => `  { id: '${item.id}', label: '${item.label}' },`,
  ).join('\n');

  return `export const CATEGORIES = [\n${rows}\n] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];
export type IconCategory = Exclude<CategoryId, 'all'>;

const CATEGORY_LABEL_MAP = Object.fromEntries(
  CATEGORIES.filter((item) => item.id !== 'all').map((item) => [item.id, item.label]),
) as Record<IconCategory, string>;

export function getCategoryLabel(category: IconCategory): string {
  return CATEGORY_LABEL_MAP[category];
}
`;
}

function buildIconMetaFile(): string {
  const entries = ICON_CATALOG.map((item) => {
    const description = item.description.replace(/'/g, "\\'");
    const title = item.title.replace(/'/g, "\\'");
    return `  '${item.id}': {
    title: '${title}',
    description: '${description}',
    category: '${item.category}',
  },`;
  }).join('\n');

  const categoryKeys = CATEGORIES.filter((item) => item.id !== 'all')
    .map((item) => `    ${item.id}: 0,`)
    .join('\n');

  return `import type { CategoryId } from './categories';
import type { IconMeta } from '../types';

export const ICON_META: Record<string, Omit<IconMeta, 'name'>> = {
${entries}
};

export function countIconsByCategory(
  icons: string[],
): Record<CategoryId, number> {
  const counts: Record<CategoryId, number> = {
    all: icons.length,
${categoryKeys}
  };

  for (const name of icons) {
    const category = ICON_META[name]?.category;
    if (category) {
      counts[category] += 1;
    }
  }

  return counts;
}
`;
}

async function syncPlaygroundMeta() {
  await fs.mkdir(playgroundDataDir, { recursive: true });
  await fs.writeFile(
    path.join(playgroundDataDir, 'categories.ts'),
    buildCategoriesFile() + '\n',
    'utf8',
  );
  await fs.writeFile(
    path.join(playgroundDataDir, 'iconMeta.ts'),
    buildIconMetaFile() + '\n',
    'utf8',
  );
  console.log(`Synced playground metadata for ${ICON_CATALOG.length} icons`);
}

syncPlaygroundMeta().catch((error) => {
  console.error(error);
  process.exit(1);
});
