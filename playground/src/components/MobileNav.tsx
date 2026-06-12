import type { ReactNode } from 'react';
import { usePreferences } from '../preferences/PreferencesProvider';
import type { WorkspaceTab } from './WorkspacePanel';

export type MobileSection = 'gallery' | WorkspaceTab;

interface MobileNavProps {
  active: MobileSection;
  pickedCount: number;
  onChange: (section: MobileSection) => void;
}

interface NavItem {
  id: MobileSection;
  labelKey: 'mobile.nav.gallery' | 'workspace.preview' | 'workspace.collection' | 'workspace.help';
  icon: ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'gallery',
    labelKey: 'mobile.nav.gallery',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"
        />
      </svg>
    ),
  },
  {
    id: 'preview',
    labelKey: 'workspace.preview',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
        />
      </svg>
    ),
  },
  {
    id: 'collection',
    labelKey: 'workspace.collection',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H4V8h16v12z"
        />
      </svg>
    ),
  },
  {
    id: 'help',
    labelKey: 'workspace.help',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
        />
      </svg>
    ),
  },
];

export function MobileNav({ active, pickedCount, onChange }: MobileNavProps) {
  const { t } = usePreferences();

  return (
    <nav className="mobile-nav" aria-label={t('mobile.navAria')}>
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.id;
        const showBadge = item.id === 'collection' && pickedCount > 0;

        return (
          <button
            key={item.id}
            type="button"
            className={`mobile-nav-item ${isActive ? 'active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onChange(item.id)}
          >
            <span className="mobile-nav-icon-wrap">
              {item.icon}
              {showBadge ? (
                <span className="mobile-nav-badge" aria-label={t('gallery.picked', { count: pickedCount })}>
                  {pickedCount > 99 ? '99+' : pickedCount}
                </span>
              ) : null}
            </span>
            <span className="mobile-nav-label">{t(item.labelKey)}</span>
          </button>
        );
      })}
    </nav>
  );
}
