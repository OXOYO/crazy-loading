import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ICON_META } from '../data/iconMeta';
import { getCategoryLabel, getLocalizedIconMeta } from '../i18n';
import type { Locale } from '../i18n';
import type { LoadingConfig } from '../types';
import { GalleryCard } from './GalleryCard';

const GRID_MIN_COL_WIDTH_DESKTOP = 132;
const GRID_MIN_COL_WIDTH_MOBILE = 108;
const GRID_GAP = 12;
const GRID_ROW_EXTRA = 78;
const GRID_HORIZONTAL_PADDING = 36;
const MOBILE_BREAKPOINT = '(max-width: 640px)';

function chunk<T>(items: T[], size: number): T[][] {
  if (size <= 0) {
    return [];
  }
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

function getColumnCount(width: number, minColWidth: number): number {
  if (width <= 0) {
    return 1;
  }
  return Math.max(1, Math.floor((width + GRID_GAP) / (minColWidth + GRID_GAP)));
}

interface VirtualIconGalleryProps {
  icons: string[];
  locale: Locale;
  selected: string;
  picked: ReadonlySet<string>;
  previewConfig: LoadingConfig;
  pickExportTitle: string;
  exportAriaLabel: (title: string) => string;
  onSelect: (name: string) => void;
  onTogglePick: (name: string) => void;
}

export function VirtualIconGallery({
  icons,
  locale,
  selected,
  picked,
  previewConfig,
  pickExportTitle,
  exportAriaLabel,
  onSelect,
  onTogglePick,
}: VirtualIconGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [minColWidth, setMinColWidth] = useState(GRID_MIN_COL_WIDTH_DESKTOP);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_BREAKPOINT);
    const updateMinColWidth = () => {
      setMinColWidth(media.matches ? GRID_MIN_COL_WIDTH_MOBILE : GRID_MIN_COL_WIDTH_DESKTOP);
    };

    updateMinColWidth();
    media.addEventListener('change', updateMinColWidth);
    return () => media.removeEventListener('change', updateMinColWidth);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) {
      return;
    }

    const updateWidth = () => {
      setContentWidth(Math.max(0, element.clientWidth - GRID_HORIZONTAL_PADDING));
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const columns = getColumnCount(contentWidth, minColWidth);
  const columnWidth = useMemo(() => {
    if (columns <= 0 || contentWidth <= 0) {
      return minColWidth;
    }
    return (contentWidth - GRID_GAP * (columns - 1)) / columns;
  }, [columns, contentWidth, minColWidth]);

  const rowHeight = columnWidth + GRID_ROW_EXTRA + GRID_GAP;

  const rows = useMemo(() => chunk(icons, columns), [icons, columns]);

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => rowHeight,
    overscan: 3,
  });

  useEffect(() => {
    virtualizer.measure();
  }, [rowHeight, rows.length, virtualizer]);

  useEffect(() => {
    const index = icons.indexOf(selected);
    if (index < 0) {
      return;
    }
    const rowIndex = Math.floor(index / columns);
    virtualizer.scrollToIndex(rowIndex, { align: 'auto' });
  }, [selected, icons, columns, virtualizer]);

  return (
    <div ref={scrollRef} className="gallery-scroll">
      <div
        className="icon-gallery-virtual"
        style={{ height: `${virtualizer.getTotalSize()}px` }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const rowIcons = rows[virtualRow.index] ?? [];

          return (
            <div
              key={virtualRow.key}
              className="icon-gallery-row"
              style={{
                transform: `translateY(${virtualRow.start}px)`,
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              }}
            >
              {rowIcons.map((name) => {
                const meta = ICON_META[name];
                const localized = getLocalizedIconMeta(name, locale);

                return (
                  <GalleryCard
                    key={name}
                    name={name}
                    title={localized.title}
                    categoryLabel={getCategoryLabel(locale, meta.category)}
                    previewConfig={previewConfig}
                    active={name === selected}
                    checked={picked.has(name)}
                    pickExportTitle={pickExportTitle}
                    exportAriaLabel={exportAriaLabel(localized.title)}
                    onSelect={onSelect}
                    onTogglePick={onTogglePick}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
