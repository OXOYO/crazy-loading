import { useCallback, useMemo, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { CATEGORIES, type CategoryId } from '../data/categories';
import { countIconsByCategory, ICON_META } from '../data/iconMeta';
import { getCategoryLabel, getLocalizedIconMeta } from '../i18n';
import { usePreferences } from '../preferences/PreferencesProvider';
import {
  GALLERY_ANIMATE_VISIBLE_KEY,
  readStoredGalleryAnimateVisible,
} from '../preferences/storage';
import type { LoadingConfig } from '../types';
import { VirtualIconGallery } from './VirtualIconGallery';

interface IconGridProps {
  icons: string[];
  selected: string;
  picked: ReadonlySet<string>;
  config: LoadingConfig;
  onSelect: (name: string) => void;
  onTogglePick: (name: string) => void;
  onPickVisible: (names: string[]) => void;
  onClearPick: () => void;
}

export function IconGrid({
  icons,
  selected,
  picked,
  config,
  onSelect,
  onTogglePick,
  onPickVisible,
  onClearPick,
}: IconGridProps) {
  const { locale, t } = usePreferences();
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryId>('all');
  const [animateVisible, setAnimateVisible] = useState(readStoredGalleryAnimateVisible);

  const handleAnimateVisibleChange = useCallback((checked: boolean) => {
    setAnimateVisible(checked);
    try {
      localStorage.setItem(GALLERY_ANIMATE_VISIBLE_KEY, checked ? '1' : '0');
    } catch {
      /* ignore */
    }
  }, []);

  const counts = useMemo(() => countIconsByCategory(icons), [icons]);

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    return icons.filter((name) => {
      const meta = ICON_META[name];
      if (!meta) {
        return false;
      }

      if (category !== 'all' && meta.category !== category) {
        return false;
      }

      if (!keyword) {
        return true;
      }

      const localized = getLocalizedIconMeta(name, locale);
      const categoryLabel = getCategoryLabel(locale, meta.category);
      const haystack = [name, localized.title, localized.description, categoryLabel]
        .join(' ')
        .toLowerCase();
      return haystack.includes(keyword);
    });
  }, [icons, query, category, locale]);

  const showFilteredCount = filtered.length !== icons.length;

  const gridPreviewConfig = useMemo(
    () => ({ ...config, size: 48 }),
    [config],
  );

  const pickExportTitle = t('gallery.pickExportTitle');

  return (
    <div
      className={`panel gallery-panel ${animateVisible ? 'gallery-animate-on' : 'gallery-animate-off'}`}
    >
      <div className="gallery-sticky">
        <div className="gallery-toolbar">
          <div className="gallery-toolbar-search-row">
            <input
              className="gallery-search"
              type="search"
              placeholder={t('gallery.searchPlaceholder')}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {showFilteredCount ? (
              <span
                className={`gallery-stat-muted ${isMobile ? 'gallery-stat-badge' : 'gallery-stat-inline'}`}
                title={t('gallery.showing', { count: filtered.length })}
              >
                {isMobile
                  ? t('gallery.showingShort', { count: filtered.length })
                  : t('gallery.showing', { count: filtered.length })}
              </span>
            ) : null}
          </div>
          <div className="gallery-toolbar-actions">
            <div className="gallery-toolbar-pick">
              <button
                type="button"
                className="gallery-action-chip"
                title={t('gallery.selectAllTitle')}
                onClick={() => onPickVisible(filtered)}
                disabled={filtered.length === 0}
              >
                {t('gallery.selectAll')}
              </button>
              <button
                type="button"
                className="gallery-action-chip"
                title={t('gallery.clearTitle')}
                onClick={onClearPick}
                disabled={picked.size === 0}
              >
                {t('gallery.clear')}
              </button>
            </div>
            {isMobile ? (
              <button
                type="button"
                className={`gallery-action-chip gallery-action-chip-toggle ${animateVisible ? 'active' : ''}`}
                title={t('gallery.animateVisibleTitle')}
                aria-pressed={animateVisible}
                onClick={() => handleAnimateVisibleChange(!animateVisible)}
              >
                {t('gallery.animateShort')}
              </button>
            ) : (
              <label
                className="gallery-animate-toggle"
                title={t('gallery.animateVisibleTitle')}
              >
                <input
                  type="checkbox"
                  checked={animateVisible}
                  onChange={(event) => handleAnimateVisibleChange(event.target.checked)}
                />
                <span className="gallery-animate-switch" aria-hidden="true" />
                <span className="gallery-animate-label">{t('gallery.animateVisible')}</span>
              </label>
            )}
          </div>
        </div>

        <div className="category-tabs-row" role="tablist" aria-label={t('gallery.categoryAria')}>
          <div className="category-tabs-fixed">
            <button
              type="button"
              role="tab"
              aria-selected={category === 'all'}
              className={`category-tab ${category === 'all' ? 'active' : ''}`}
              onClick={() => setCategory('all')}
            >
              {getCategoryLabel(locale, 'all')}
              <span className="category-tab-count">{counts.all}</span>
            </button>
          </div>
          <div className="category-tabs-scroll">
            <div className="category-tabs" role="presentation">
              {CATEGORIES.filter((item) => item.id !== 'all').map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={category === item.id}
                  className={`category-tab ${category === item.id ? 'active' : ''}`}
                  onClick={() => setCategory(item.id)}
                >
                  {getCategoryLabel(locale, item.id)}
                  <span className="category-tab-count">{counts[item.id]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filtered.length > 0 ? (
        <VirtualIconGallery
          icons={filtered}
          locale={locale}
          selected={selected}
          picked={picked}
          previewConfig={gridPreviewConfig}
          pickExportTitle={pickExportTitle}
          exportAriaLabel={(title) => t('gallery.exportAria', { title })}
          onSelect={onSelect}
          onTogglePick={onTogglePick}
        />
      ) : (
        <div className="gallery-scroll">
          <div className="gallery-empty">{t('gallery.empty')}</div>
        </div>
      )}
    </div>
  );
}
