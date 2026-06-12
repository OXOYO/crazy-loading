import type { IconCategory } from '../data/categories';
import { ICON_META } from '../data/iconMeta';
import { messages, type Locale, type MessageKey } from './messages';

export type { Locale, MessageKey };

const ACRONYMS = new Set([
  'dna',
  'rlc',
  'pv',
  'lc',
  'html',
  'css',
  'api',
  'json',
  'svg',
  'id',
]);

export function translate(
  locale: Locale,
  key: MessageKey,
  vars?: Record<string, string | number>,
): string {
  let text: string = messages[locale][key] ?? messages.zh[key] ?? key;

  if (vars) {
    for (const [name, value] of Object.entries(vars)) {
      text = text.replaceAll(`{${name}}`, String(value));
    }
  }

  return text;
}

export function getCategoryLabel(locale: Locale, category: IconCategory | 'all'): string {
  const key = `category.${category}` as MessageKey;
  return translate(locale, key);
}

function humanizeIconName(name: string): string {
  return name
    .split('-')
    .map((part) => {
      const lower = part.toLowerCase();
      if (ACRONYMS.has(lower)) {
        return lower.toUpperCase();
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
}

export function getLocalizedIconMeta(
  iconName: string,
  locale: Locale,
): { title: string; description: string } {
  const meta = ICON_META[iconName];
  if (!meta) {
    return {
      title: humanizeIconName(iconName),
      description: translate(locale, 'icon.defaultDescription'),
    };
  }

  if (locale === 'zh') {
    return { title: meta.title, description: meta.description };
  }

  return {
    title: humanizeIconName(iconName),
    description: translate(locale, 'icon.defaultDescription'),
  };
}

export function detectLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return 'zh';
  }
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}
