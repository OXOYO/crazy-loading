import { useMemo } from 'react';
import { CodeBlock } from './CodeBlock';
import { buildPartialIconifyJson } from '../lib/iconCollection';
import { buildCollectionShareUrl, copyText, downloadFile } from '../lib/generator';
import { usePreferences } from '../preferences/PreferencesProvider';
import type { LoadingConfig } from '../types';

interface CollectionExportPanelProps {
  pickedIcons: string[];
  config: LoadingConfig;
  onNotify: (message: string) => void;
  embedded?: boolean;
}

export function CollectionExportPanel({
  pickedIcons,
  config,
  onNotify,
  embedded = false,
}: CollectionExportPanelProps) {
  const { locale, t } = usePreferences();

  const json = useMemo(
    () => (pickedIcons.length > 0 ? buildPartialIconifyJson(pickedIcons) : ''),
    [pickedIcons],
  );

  const shareUrl = useMemo(
    () => (pickedIcons.length > 0 ? buildCollectionShareUrl(pickedIcons, config) : ''),
    [pickedIcons, config],
  );

  const canExport = pickedIcons.length > 0;
  const nameSeparator = locale === 'zh' ? '、' : ', ';

  async function handleCopy() {
    if (!json) {
      return;
    }
    const ok = await copyText(json);
    onNotify(ok ? t('toast.copiedJson') : t('toast.copyFailed'));
  }

  function handleDownload() {
    if (!json) {
      return;
    }
    downloadFile('crazy-loading.json', json, 'application/json');
    onNotify(t('toast.downloadedJson'));
  }

  async function handleCopyShareLink() {
    if (!shareUrl) {
      return;
    }
    const ok = await copyText(shareUrl);
    onNotify(ok ? t('toast.copiedCollectionLink') : t('toast.copyFailed'));
  }

  const body = (
    <>
      {!embedded ? (
        <h2>{t('collection.title')}</h2>
      ) : (
        <p className="workspace-lead">{t('collection.lead')}</p>
      )}

      {pickedIcons.length > 0 ? (
        <p className="collection-count">
          <span className="collection-names">
            {pickedIcons.slice(0, 5).join(nameSeparator)}
            {pickedIcons.length > 5 ? t('collection.more', { count: pickedIcons.length }) : ''}
          </span>
        </p>
      ) : null}

      <div className="collection-actions">
        <button type="button" onClick={() => void handleCopy()} disabled={!canExport}>
          {t('collection.copyJson')}
        </button>
        <button type="button" onClick={handleDownload} disabled={!canExport}>
          {t('collection.downloadJson')}
        </button>
        <button
          type="button"
          className="collection-share-btn"
          onClick={() => void handleCopyShareLink()}
          disabled={!canExport}
        >
          {t('collection.copyShareLink')}
        </button>
      </div>

      {canExport ? (
        <details className="collection-json-details">
          <summary>{t('collection.previewJson')}</summary>
          <CodeBlock code={json} language="json" maxHeight={200} onNotify={onNotify} />
        </details>
      ) : (
        <p className="collection-empty">{t('collection.empty')}</p>
      )}
    </>
  );

  if (embedded) {
    return <section className="workspace-section collection-section">{body}</section>;
  }

  return <div className="panel collection-panel">{body}</div>;
}
