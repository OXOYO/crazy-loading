import type { LoadingConfig } from '../types';

interface ConfigPanelProps {
  config: LoadingConfig;
  onChange: (config: LoadingConfig) => void;
}

function update<K extends keyof LoadingConfig>(
  config: LoadingConfig,
  key: K,
  value: LoadingConfig[K],
): LoadingConfig {
  return { ...config, [key]: value };
}

export function ConfigPanel({ config, onChange }: ConfigPanelProps) {
  return (
    <div className="panel config-panel">
      <h2>参数</h2>
      <div className="config-grid">
        <label>
          <span>颜色</span>
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
          <span>尺寸 {config.size}px</span>
          <input
            type="range"
            min={16}
            max={128}
            step={1}
            value={config.size}
            onChange={(event) =>
              onChange(update(config, 'size', Number(event.target.value)))
            }
          />
        </label>

        <label>
          <span>动画时长 {config.duration.toFixed(1)}s</span>
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
          <span>线宽 {config.strokeWidth.toFixed(2)}</span>
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
          <span>不透明度 {config.opacity.toFixed(2)}</span>
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
    </div>
  );
}
