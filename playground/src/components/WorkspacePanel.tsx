import { useMemo } from 'react';
import { usePreferences } from '../preferences/PreferencesProvider';
import { CollectionExportPanel } from './CollectionExportPanel';
import { ConfigPanel } from './ConfigPanel';
import { PreviewExportSection, PreviewPanel } from './PreviewPanel';
import { TabSwitch, type TabItem } from './TabSwitch';
import { UsageGuide } from './UsageGuide';
import type { LoadingConfig } from '../types';

export type WorkspaceTab = 'preview' | 'collection' | 'help';

interface WorkspacePanelProps {
  activeTab: WorkspaceTab;
  onTabChange: (tab: WorkspaceTab) => void;
  hideTabs?: boolean;
  iconName: string;
  title: string;
  description: string;
  config: LoadingConfig;
  onConfigChange: (config: LoadingConfig) => void;
  pickedIcons: string[];
  onNotify: (message: string) => void;
}

export function WorkspacePanel({
  activeTab,
  onTabChange,
  hideTabs = false,
  iconName,
  title,
  description,
  config,
  onConfigChange,
  pickedIcons,
  onNotify,
}: WorkspacePanelProps) {
  const { t } = usePreferences();

  const tabs = useMemo<TabItem[]>(
    () => [
      {
        id: 'preview',
        label: t('workspace.preview'),
        content: (
          <div className="workspace-stack">
            <PreviewPanel
              embedded
              iconName={iconName}
              config={config}
              title={title}
              description={description}
              onNotify={onNotify}
            />
            <ConfigPanel embedded config={config} onChange={onConfigChange} />
            <PreviewExportSection
              iconName={iconName}
              config={config}
              onNotify={onNotify}
            />
          </div>
        ),
      },
      {
        id: 'collection',
        label: t('workspace.collection'),
        content: (
          <CollectionExportPanel
            embedded
            pickedIcons={pickedIcons}
            config={config}
            onNotify={onNotify}
          />
        ),
      },
      {
        id: 'help',
        label: t('workspace.help'),
        content: <UsageGuide embedded onNotify={onNotify} />,
      },
    ],
    [
      t,
      iconName,
      title,
      description,
      config,
      pickedIcons,
      onNotify,
      onConfigChange,
    ],
  );

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content ?? tabs[0]?.content;

  if (hideTabs) {
    return (
      <div className="workspace-panel panel">
        <div className="workspace-mobile-content">{activeContent}</div>
      </div>
    );
  }

  return (
    <div className="workspace-panel panel">
      <TabSwitch
        className="workspace-tabs"
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(id) => onTabChange(id as WorkspaceTab)}
        ariaLabel={t('workspace.aria')}
      />
    </div>
  );
}
