import icons from '@iconify-json/crazy-loading/icons.json';
import info from '@iconify-json/crazy-loading/info.json';
import type { IconifyJSON } from '@iconify/types';

const source = icons as IconifyJSON;

export function buildPartialIconifyJson(iconNames: string[]): string {
  const selected = [...new Set(iconNames)].sort();
  const partial: IconifyJSON = {
    prefix: source.prefix,
    lastModified: source.lastModified,
    icons: {},
    info: {
      ...info,
      total: selected.length,
      samples: selected.slice(0, 6),
    },
  };

  for (const name of selected) {
    const icon = source.icons?.[name];
    if (icon) {
      partial.icons![name] = icon;
    }
  }

  return `${JSON.stringify(partial, null, '\t')}\n`;
}
