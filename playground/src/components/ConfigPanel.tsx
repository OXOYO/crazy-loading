import { useMemo } from 'react';
import { usePreferences } from '../preferences/PreferencesProvider';
import { DEFAULT_CONFIG, isDefaultConfig, type LoadingConfig } from '../types';

interface ConfigPanelProps {
  config: LoadingConfig;
  onChange: (config: LoadingConfig) => void;
  embedded?: boolean;
}

function update<K extends keyof LoadingConfig>(
  config: LoadingConfig,
  key: K,
  value: LoadingConfig[K],
): LoadingConfig {
  return { ...config, [key]: value };
}

function ConfigHeader({
  embedded,
  isDefault,
  onReset,
}: {
  embedded: boolean;
  isDefault: boolean;
  onReset: () => void;
}) {
  const { t } = usePreferences();
  const TitleTag = embedded ? 'h3' : 'h2';
  const titleClass = embedded ? 'workspace-subtitle' : undefined;

  return (
    <div className="config-header">
      <TitleTag className={titleClass}>{t('config.title')}</TitleTag>
      <button
        type="button"
        className="config-reset-btn"
        title={t('config.resetTitle')}
        disabled={isDefault}
        onClick={onReset}
      >
        {t('config.reset')}
      </button>
    </div>
  );
}

export function ConfigPanel({ config, onChange, embedded = false }: ConfigPanelProps) {
  const { t } = usePreferences();
  const isDefault = useMemo(() => isDefaultConfig(config), [config]);

  const body = (
    <div className={`config-grid ${embedded ? 'config-grid-compact' : ''}`}>
      <label>
        <span>{t('config.color')}</span>
        <div className="color-input">
          <input
            type="color"
            value={config.color}
            onChange={(event) => onChange(update(config, 'color', event.target.value))}
          />
          <input
            type="text"
            value={config.color}
            onChange={(event) => onChange(update(config, 'color', event.target.value))}
          />
        </div>
      </label>

      <label>
        <span>{t('config.size', { size: config.size })}</span>
        <input
          type="range"
          min={16}
          max={128}
          step={1}
          value={config.size}
          onChange={(event) => onChange(update(config, 'size', Number(event.target.value)))}
        />
      </label>

      <label>
        <span>{t('config.duration', { duration: config.duration.toFixed(1) })}</span>
        <input
          type="range"
          min={0.4}
          max={4}
          step={0.1}
          value={config.duration}
          onChange={(event) =>
            onChange(update(config, 'duration', Number(event.target.value)))
          }
        />
      </label>

      <label>
        <span>{t('config.strokeWidth', { width: config.strokeWidth.toFixed(2) })}</span>
        <input
          type="range"
          min={0.75}
          max={3}
          step={0.25}
          value={config.strokeWidth}
          onChange={(event) =>
            onChange(update(config, 'strokeWidth', Number(event.target.value)))
          }
        />
      </label>

      <label>
        <span>{t('config.opacity', { opacity: config.opacity.toFixed(2) })}</span>
        <input
          type="range"
          min={0.2}
          max={1}
          step={0.05}
          value={config.opacity}
          onChange={(event) =>
            onChange(update(config, 'opacity', Number(event.target.value)))
          }
        />
      </label>
    </div>
  );

  const handleReset = () => onChange({ ...DEFAULT_CONFIG });

  if (embedded) {
    return (
      <section className="workspace-section config-section">
        <ConfigHeader embedded isDefault={isDefault} onReset={handleReset} />
        {body}
      </section>
    );
  }

  return (
    <div className="panel config-panel">
      <ConfigHeader embedded={false} isDefault={isDefault} onReset={handleReset} />
      {body}
    </div>
  );
}
