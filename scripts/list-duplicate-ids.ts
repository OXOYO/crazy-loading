import { createHash } from 'node:crypto';
import { ICON_CATALOG } from './catalog.ts';
import { renderIcon } from './icon-templates.ts';

function structuralKey(content: string): string {
  return content
    .replace(/\s+/g, ' ')
    .replace(/\d+\.?\d*s/g, 'Ts')
    .replace(/animation-delay:\s*[\d.]+s/g, 'animation-delay:Ts')
    .trim();
}

const groups = new Map<string, string[]>();
for (const def of ICON_CATALOG) {
  const key = createHash('sha256').update(structuralKey(renderIcon(def))).digest('hex').slice(0, 12);
  if (!groups.has(key)) {
    groups.set(key, []);
  }
  groups.get(key)!.push(def.id);
}

const needOverride: string[] = [];
for (const ids of groups.values()) {
  if (ids.length <= 1) {
    continue;
  }
  for (let i = 1; i < ids.length; i++) {
    needOverride.push(ids[i]);
  }
}

console.log(JSON.stringify(needOverride.sort(), null, 2));
console.error(`count: ${needOverride.length}`);
