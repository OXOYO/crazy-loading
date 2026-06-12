import { detectLocale, type Locale } from '../i18n';
import { DEFAULT_CONFIG, type LoadingConfig } from '../types';
import type { Theme } from './PreferencesProvider';

export const LOCALE_KEY = 'crazy-loading-locale';
export const THEME_KEY = 'crazy-loading-theme';
export const GALLERY_ANIMATE_VISIBLE_KEY = 'crazy-loading-gallery-animate-visible';
export const CONFIG_KEY = 'crazy-loading-config';

const COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function normalizeConfig(partial: Partial<LoadingConfig>): LoadingConfig {
  const config: LoadingConfig = { ...DEFAULT_CONFIG };

  if (typeof partial.color === 'string' && COLOR_PATTERN.test(partial.color)) {
    config.color = partial.color;
  }

  if (typeof partial.size === 'number' && Number.isFinite(partial.size)) {
    config.size = clamp(Math.round(partial.size), 16, 128);
  }

  if (typeof partial.duration === 'number' && Number.isFinite(partial.duration)) {
    config.duration = clamp(partial.duration, 0.4, 4);
  }

  if (typeof partial.strokeWidth === 'number' && Number.isFinite(partial.strokeWidth)) {
    config.strokeWidth = clamp(partial.strokeWidth, 0.75, 3);
  }

  if (typeof partial.opacity === 'number' && Number.isFinite(partial.opacity)) {
    config.opacity = clamp(partial.opacity, 0.2, 1);
  }

  return config;
}

export function readStoredConfig(): LoadingConfig {
  try {
    const stored = localStorage.getItem(CONFIG_KEY);
    if (!stored) {
      return { ...DEFAULT_CONFIG };
    }
    return normalizeConfig(JSON.parse(stored) as Partial<LoadingConfig>);
  } catch {
    /* ignore */
  }
  return { ...DEFAULT_CONFIG };
}

export function writeStoredConfig(config: LoadingConfig): void {
  try {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(normalizeConfig(config)));
  } catch {
    /* ignore */
  }
}

export function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_KEY);
    if (stored === 'zh' || stored === 'en') {
      return stored;
    }
  } catch {
    /* ignore */
  }
  return detectLocale();
}

export function readStoredGalleryAnimateVisible(): boolean {
  try {
    const stored = localStorage.getItem(GALLERY_ANIMATE_VISIBLE_KEY);
    if (stored === '0') {
      return false;
    }
    if (stored === '1') {
      return true;
    }
  } catch {
    /* ignore */
  }
  return true;
}

export function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    /* ignore */
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

function withBasePath(assetPath: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${assetPath.replace(/^\//, '')}`;
}

export function getFaviconPath(theme: Theme): string {
  return withBasePath(theme === 'light' ? 'favicon-light.svg' : 'favicon-dark.svg');
}

export function applyDocumentPreferences(locale: Locale, theme: Theme): void {
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.dataset.theme = theme;

  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (favicon) {
    favicon.href = getFaviconPath(theme);
  }
}
