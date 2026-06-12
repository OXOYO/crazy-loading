import { useCallback, useEffect, useMemo, useState } from 'react';
import { addCollection } from '@iconify/react';
import icons from '@iconify-json/crazy-loading/icons.json';
import type { IconifyJSON } from '@iconify/types';
import { AppSettings } from './components/AppSettings';
import { IconGrid } from './components/IconGrid';
import { MobileNav, type MobileSection } from './components/MobileNav';
import { PickDock } from './components/PickDock';
import { WorkspacePanel, type WorkspaceTab } from './components/WorkspacePanel';
import { useMediaQuery } from './hooks/useMediaQuery';
import { getLocalizedIconMeta } from './i18n';
import { listIconNames } from './lib/icons';
import { parseShareUrl } from './lib/generator';
import { usePreferences } from './preferences/PreferencesProvider';
import {
  getFaviconPath,
  readStoredConfig,
  writeStoredConfig,
} from './preferences/storage';
import { DEFAULT_CONFIG, type LoadingConfig } from './types';

function resolveInitialConfig(shared: Partial<LoadingConfig>): LoadingConfig {
  const { icon: _icon, ...sharedConfig } = shared as Partial<LoadingConfig & { icon?: string }>;
  const hasSharedConfig = Object.keys(sharedConfig).length > 0;

  if (hasSharedConfig) {
    return { ...DEFAULT_CONFIG, ...readStoredConfig(), ...sharedConfig };
  }

  return readStoredConfig();
}

addCollection(icons as IconifyJSON);

const iconNames = listIconNames();

function resolveSharedPick(pick: string[] | undefined): string[] {
  if (!pick?.length) {
    return [];
  }
  return [...new Set(pick.filter((name) => iconNames.includes(name)))].sort();
}

export default function App() {
  const { locale, theme } = usePreferences();
  const shared = useMemo(() => parseShareUrl(), []);
  const sharedPick = useMemo(() => resolveSharedPick(shared.pick), [shared.pick]);
  const hasSharedPick = sharedPick.length > 0;

  const [selectedIcon, setSelectedIcon] = useState(() => {
    if (shared.icon && iconNames.includes(shared.icon)) {
      return shared.icon;
    }
    if (sharedPick.length > 0) {
      return sharedPick[0];
    }
    return iconNames[0];
  });
  const [config, setConfig] = useState<LoadingConfig>(() => resolveInitialConfig(shared));
  const [toast, setToast] = useState('');
  const [pickedIcons, setPickedIcons] = useState(sharedPick);
  const [workspaceTab, setWorkspaceTab] = useState<WorkspaceTab>(
    hasSharedPick ? 'collection' : 'preview',
  );
  const [mobileSection, setMobileSection] = useState<MobileSection>(
    hasSharedPick ? 'collection' : 'gallery',
  );
  const isMobile = useMediaQuery('(max-width: 900px)');

  const pickedSet = useMemo(() => new Set(pickedIcons), [pickedIcons]);

  const localizedMeta = useMemo(
    () => getLocalizedIconMeta(selectedIcon, locale),
    [selectedIcon, locale],
  );

  const togglePick = useCallback((name: string) => {
    setPickedIcons((prev) =>
      prev.includes(name) ? prev.filter((id) => id !== name) : [...prev, name],
    );
  }, []);

  const pickVisible = useCallback((names: string[]) => {
    setPickedIcons((prev) => [...new Set([...prev, ...names])].sort());
  }, []);

  const clearPick = useCallback(() => setPickedIcons([]), []);

  const notify = useCallback((message: string) => setToast(message), []);

  const handleConfigChange = useCallback((next: LoadingConfig) => {
    setConfig(next);
    writeStoredConfig(next);
  }, []);

  const handleSelectIcon = useCallback(
    (name: string) => {
      setSelectedIcon(name);
      if (isMobile) {
        setWorkspaceTab('preview');
        setMobileSection('preview');
      }
    },
    [isMobile],
  );

  const handleMobileSectionChange = useCallback((section: MobileSection) => {
    setMobileSection(section);
    if (section !== 'gallery') {
      setWorkspaceTab(section);
    }
  }, []);

  const openCollection = useCallback(() => {
    setWorkspaceTab('collection');
    if (isMobile) {
      setMobileSection('collection');
    }
  }, [isMobile]);

  useEffect(() => {
    if (!toast) {
      return;
    }
    const timer = window.setTimeout(() => setToast(''), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  return (
    <div className={`app ${isMobile ? 'app-mobile' : ''}`}>
      <header className="hero">
        <div className="hero-brand">
          <img
            className="hero-logo"
            src={getFaviconPath(theme)}
            width={34}
            height={34}
            alt=""
            aria-hidden="true"
          />
          <h1>Crazy Loading</h1>
          <span className="hero-version">v{__APP_VERSION__}</span>
        </div>
        <AppSettings />
      </header>

      <main className="layout">
        <section
          className={`gallery-column ${isMobile && mobileSection !== 'gallery' ? 'mobile-hidden' : ''}`}
        >
          <IconGrid
            icons={iconNames}
            selected={selectedIcon}
            picked={pickedSet}
            config={config}
            onSelect={handleSelectIcon}
            onTogglePick={togglePick}
            onPickVisible={pickVisible}
            onClearPick={clearPick}
          />
        </section>

        <aside
          className={`detail-column ${isMobile && mobileSection === 'gallery' ? 'mobile-hidden' : ''}`}
        >
          <WorkspacePanel
            activeTab={workspaceTab}
            onTabChange={setWorkspaceTab}
            hideTabs={isMobile}
            iconName={selectedIcon}
            title={localizedMeta.title}
            description={localizedMeta.description}
            config={config}
            onConfigChange={handleConfigChange}
            pickedIcons={pickedIcons}
            onNotify={notify}
          />
        </aside>
      </main>

      <PickDock
        pickedIcons={pickedIcons}
        onOpenCollection={openCollection}
        onNotify={notify}
      />

      {isMobile ? (
        <MobileNav
          active={mobileSection}
          pickedCount={pickedIcons.length}
          onChange={handleMobileSectionChange}
        />
      ) : null}

      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  );
}
