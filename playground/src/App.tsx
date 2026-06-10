import { useEffect, useMemo, useState } from 'react';
import { addCollection } from '@iconify/react';
import icons from '@iconify-json/crazy-loading/icons.json';
import type { IconifyJSON } from '@iconify/types';
import { ConfigPanel } from './components/ConfigPanel';
import { ExportPanel } from './components/ExportPanel';
import { IconGrid } from './components/IconGrid';
import { PreviewPanel } from './components/PreviewPanel';
import { ICON_META } from './data/iconMeta';
import { listIconNames } from './lib/icons';
import { parseShareUrl } from './lib/generator';
import { DEFAULT_CONFIG, type LoadingConfig } from './types';

addCollection(icons as IconifyJSON);

const iconNames = listIconNames();

export default function App() {
  const shared = useMemo(() => parseShareUrl(), []);
  const [selectedIcon, setSelectedIcon] = useState(
    shared.icon && iconNames.includes(shared.icon) ? shared.icon : iconNames[0],
  );
  const [config, setConfig] = useState<LoadingConfig>({
    ...DEFAULT_CONFIG,
    ...shared,
  });
  const [toast, setToast] = useState('');

  useEffect(() => {
    if (!toast) {
      return;
    }
    const timer = window.setTimeout(() => setToast(''), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const meta = ICON_META[selectedIcon];

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-brand">
          <img
            className="hero-logo"
            src="/favicon.svg"
            width={34}
            height={34}
            alt=""
            aria-hidden="true"
          />
          <h1>Crazy Loading</h1>
        </div>
        <div className="hero-meta">
          <span>{iconNames.length} icons</span>
          <span className="hero-divider" aria-hidden="true" />
          <span>
            <code>crazy-loading</code>
          </span>
          <span className="hero-divider" aria-hidden="true" />
          <span>MIT</span>
        </div>
      </header>

      <main className="layout">
        <section className="gallery-column">
          <IconGrid
            icons={iconNames}
            selected={selectedIcon}
            config={config}
            onSelect={setSelectedIcon}
          />
        </section>

        <aside className="detail-column">
          <PreviewPanel
            iconName={selectedIcon}
            config={config}
            title={meta?.title ?? selectedIcon}
            description={meta?.description ?? ''}
          />
          <ConfigPanel config={config} onChange={setConfig} />
          <ExportPanel
            iconName={selectedIcon}
            config={config}
            onNotify={setToast}
          />
        </aside>
      </main>

      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  );
}
