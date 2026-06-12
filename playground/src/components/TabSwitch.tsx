import { useState, type ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabSwitchProps {
  tabs: TabItem[];
  defaultTab?: string;
  activeTab?: string;
  onTabChange?: (id: string) => void;
  ariaLabel: string;
  className?: string;
}

export function TabSwitch({
  tabs,
  defaultTab,
  activeTab,
  onTabChange,
  ariaLabel,
  className,
}: TabSwitchProps) {
  const [internalActive, setInternalActive] = useState(defaultTab ?? tabs[0]?.id ?? '');
  const active = activeTab ?? internalActive;

  if (tabs.length === 0) {
    return null;
  }

  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  function selectTab(id: string) {
    if (activeTab === undefined) {
      setInternalActive(id);
    }
    onTabChange?.(id);
  }

  const rootClass = className ? `tab-switch ${className}` : 'tab-switch';

  return (
    <div className={rootClass}>
      <div className="panel-tabs" role="tablist" aria-label={ariaLabel}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={`panel-tab ${active === tab.id ? 'active' : ''}`}
            onClick={() => selectTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="panel-tab-panel" role="tabpanel">
        {current.content}
      </div>
    </div>
  );
}
