import { getCategoryLabel } from '../data/categories';
import { ICON_META } from '../data/iconMeta';
import { buildIconifyName } from '../lib/generator';
import type { LoadingConfig } from '../types';
import { AnimatedIcon } from './AnimatedIcon';

interface PreviewPanelProps {
  iconName: string;
  config: LoadingConfig;
  title: string;
  description: string;
}

export function PreviewPanel({
  iconName,
  config,
  title,
  description,
}: PreviewPanelProps) {
  const category = ICON_META[iconName]?.category;

  return (
    <div className="panel preview-panel">
      <div className="preview-header">
        <div>
          {category ? (
            <span className="preview-category">{getCategoryLabel(category)}</span>
          ) : null}
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <code className="preview-code">{buildIconifyName(iconName)}</code>

      <div
        className="preview-stage-single"
        style={{ color: config.color }}
      >
        <div className="preview-custom">
          <AnimatedIcon name={iconName} config={config} />
        </div>
      </div>

      <div className="preview-compare">
        <span>网格缩略图（48px，与左侧卡片一致）</span>
        <AnimatedIcon
          name={iconName}
          config={config}
          size={48}
        />
      </div>
    </div>
  );
}
