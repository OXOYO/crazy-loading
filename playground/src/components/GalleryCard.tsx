import { memo } from 'react';
import { buildIconifyName } from '../lib/generator';
import type { LoadingConfig } from '../types';
import { AnimatedIcon } from './AnimatedIcon';

interface GalleryCardProps {
  name: string;
  title: string;
  categoryLabel: string;
  previewConfig: LoadingConfig;
  active: boolean;
  checked: boolean;
  pickExportTitle: string;
  exportAriaLabel: string;
  onSelect: (name: string) => void;
  onTogglePick: (name: string) => void;
}

export const GalleryCard = memo(function GalleryCard({
  name,
  title,
  categoryLabel,
  previewConfig,
  active,
  checked,
  pickExportTitle,
  exportAriaLabel,
  onSelect,
  onTogglePick,
}: GalleryCardProps) {
  return (
    <article className={`gallery-card ${active ? 'active' : ''} ${checked ? 'picked' : ''}`}>
      <label className="gallery-pick-check" title={pickExportTitle}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onTogglePick(name)}
          aria-label={exportAriaLabel}
        />
      </label>
      <button
        type="button"
        className="gallery-card-main"
        onClick={() => onSelect(name)}
        title={buildIconifyName(name)}
      >
        <span className="gallery-card-category">{categoryLabel}</span>
        <div className="gallery-card-preview" style={{ color: previewConfig.color }}>
          <AnimatedIcon name={name} config={previewConfig} size={48} />
        </div>
        <span className="gallery-card-title">{title}</span>
        <span className="gallery-card-slug">{name}</span>
      </button>
    </article>
  );
});
