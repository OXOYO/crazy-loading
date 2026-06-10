import { useMemo, useState } from 'react';
import { CATEGORIES, getCategoryLabel, type CategoryId } from '../data/categories';
import { countIconsByCategory, ICON_META } from '../data/iconMeta';
import { buildIconifyName } from '../lib/generator';
import type { LoadingConfig } from '../types';
import { AnimatedIcon } from './AnimatedIcon';

interface IconGridProps {
  icons: string[];
  selected: string;
  config: LoadingConfig;
  onSelect: (name: string) => void;
}

export function IconGrid({ icons, selected, config, onSelect }: IconGridProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryId>('all');

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

      const categoryLabel = getCategoryLabel(meta.category);
      const haystack = [name, meta.title, meta.description, categoryLabel]
        .join(' ')
        .toLowerCase();
      return haystack.includes(keyword);
    });
  }, [icons, query, category]);

  return (
    <div className="panel gallery-panel">
      <div className="gallery-toolbar">
        <div>
          <h2>图标库</h2>
          <p className="gallery-count">
            共 {icons.length} 个 · 显示 {filtered.length} 个
          </p>
        </div>
        <input
          className="gallery-search"
          type="search"
          placeholder="搜索名称、分类、描述…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="category-tabs" role="tablist" aria-label="图标分类">
        {CATEGORIES.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={category === item.id}
            className={`category-tab ${category === item.id ? 'active' : ''}`}
            onClick={() => setCategory(item.id)}
          >
            {item.label}
            <span className="category-tab-count">{counts[item.id]}</span>
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="icon-gallery">
          {filtered.map((name) => {
            const meta = ICON_META[name];
            const active = name === selected;

            return (
              <button
                key={name}
                type="button"
                className={`gallery-card ${active ? 'active' : ''}`}
                onClick={() => onSelect(name)}
                title={buildIconifyName(name)}
              >
                <span className="gallery-card-category">
                  {meta ? getCategoryLabel(meta.category) : ''}
                </span>
                <div
                  className="gallery-card-preview"
                  style={{ color: config.color }}
                >
                  <AnimatedIcon name={name} config={config} size={48} />
                </div>
                <span className="gallery-card-title">{meta?.title ?? name}</span>
                <span className="gallery-card-slug">{name}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="gallery-empty">没有匹配的图标，试试其他分类或关键词。</div>
      )}
    </div>
  );
}
