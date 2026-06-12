import { useMemo } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { buildPartialIconifyJson } from '../lib/iconCollection';
import { copyText, downloadFile } from '../lib/generator';
import { usePreferences } from '../preferences/PreferencesProvider';

interface PickDockProps {
  pickedIcons: string[];
  onOpenCollection: () => void;
  onNotify: (message: string) => void;
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
      />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
      />
    </svg>
  );
}

export function PickDock({ pickedIcons, onOpenCollection, onNotify }: PickDockProps) {
  const { t } = usePreferences();
  const isMobile = useMediaQuery('(max-width: 900px)');

  const json = useMemo(
    () => (pickedIcons.length > 0 ? buildPartialIconifyJson(pickedIcons) : ''),
    [pickedIcons],
  );

  if (pickedIcons.length === 0) {
    return null;
  }

  async function handleCopy() {
    if (!json) {
      return;
    }
    const ok = await copyText(json);
    onNotify(ok ? t('toast.copiedJson') : t('toast.copyFailedShort'));
  }

  function handleDownload() {
    if (!json) {
      return;
    }
    downloadFile('crazy-loading.json', json, 'application/json');
    onNotify(t('toast.downloadedJson'));
  }

  if (isMobile) {
    return (
      <div className="pick-dock pick-dock-compact" role="status">
        <span className="pick-dock-badge" title={t('pickDock.picked', { count: pickedIcons.length })}>
          {t('pickDock.pickedShort', { count: pickedIcons.length })}
        </span>
        <div className="pick-dock-actions">
          <button
            type="button"
            className="pick-dock-icon-btn"
            aria-label={t('pickDock.copyJson')}
            title={t('pickDock.copyJson')}
            onClick={() => void handleCopy()}
          >
            <CopyIcon />
          </button>
          <button
            type="button"
            className="pick-dock-icon-btn"
            aria-label={t('pickDock.downloadJson')}
            title={t('pickDock.downloadJson')}
            onClick={handleDownload}
          >
            <DownloadIcon />
          </button>
          <button
            type="button"
            className="pick-dock-icon-btn secondary"
            aria-label={t('pickDock.details')}
            title={t('pickDock.details')}
            onClick={onOpenCollection}
          >
            <ListIcon />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pick-dock" role="status">
      <span className="pick-dock-label">
        {t('pickDock.picked', { count: pickedIcons.length })}
      </span>
      <div className="pick-dock-actions">
        <button type="button" onClick={() => void handleCopy()}>
          {t('pickDock.copyJson')}
        </button>
        <button type="button" onClick={handleDownload}>
          {t('pickDock.downloadJson')}
        </button>
        <button type="button" className="secondary" onClick={onOpenCollection}>
          {t('pickDock.details')}
        </button>
      </div>
    </div>
  );
}
