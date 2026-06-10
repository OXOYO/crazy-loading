import icons from '@iconify-json/crazy-loading/icons.json';
import type { IconifyJSON, IconifyIcon } from '@iconify/types';
import { getIconData } from '@iconify/utils';

const iconSet = icons as IconifyJSON;

export function listIconNames(): string[] {
  return Object.keys(iconSet.icons).sort();
}

export function getIcon(name: string): IconifyIcon | null {
  return getIconData(iconSet, name);
}

export const ICON_PREFIX = iconSet.prefix;
