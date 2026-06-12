import { useMemo } from 'react';
import { CodeBlock } from './CodeBlock';
import { ICON_META } from '../data/iconMeta';
import { getCategoryLabel } from '../i18n';
import { getIconBody } from '../data/iconBodies';
import {
  buildHtmlSnippet,
  buildIconifyName,
  buildReactSnippet,
  buildShareUrl,
  buildSvgFromBody,
  buildVueSnippet,
  copyText,
  downloadFile,
} from '../lib/generator';
import { usePreferences } from '../preferences/PreferencesProvider';
import type { LoadingConfig } from '../types';
import { TabSwitch, type TabItem } from './TabSwitch';
import { AnimatedIcon } from './AnimatedIcon';

interface PreviewPanelProps {
  iconName: string;
  config: LoadingConfig;
  title: string;
  description: string;
  onNotify: (message: string) => void;
  embedded?: boolean;
}

interface PreviewExportSectionProps {
  iconName: string;
  config: LoadingConfig;
  onNotify: (message: string) => void;
}

export function PreviewExportSection({
  iconName,
  config,
  onNotify,
}: PreviewExportSectionProps) {
  const { t } = usePreferences();

  const svg = useMemo(() => {
    const body = getIconBody(iconName);
    return body ? buildSvgFromBody(body, config, 24, 24, iconName) : '';
  }, [iconName, config]);

  const reactCode = useMemo(
    () => buildReactSnippet(iconName, config),
    [iconName, config],
  );

  const vueCode = useMemo(
    () => buildVueSnippet(iconName, config),
    [iconName, config],
  );

  const rawBody = useMemo(() => getIconBody(iconName) ?? '', [iconName]);

  const htmlCode = useMemo(
    () => buildHtmlSnippet(iconName, config, rawBody),
    [iconName, config, rawBody],
  );

  const codeTabs = useMemo<TabItem[]>(
    () => [
      {
        id: 'svg',
        label: 'SVG',
        content: <CodeBlock code={svg} language="svg" onNotify={onNotify} />,
      },
      {
        id: 'react',
        label: 'React',
        content: <CodeBlock code={reactCode} language="javascript" onNotify={onNotify} />,
      },
      {
        id: 'vue',
        label: 'Vue',
        content: <CodeBlock code={vueCode} language="vue" onNotify={onNotify} />,
      },
      {
        id: 'html',
        label: 'HTML',
        content: <CodeBlock code={htmlCode} language="html" onNotify={onNotify} />,
      },
    ],
    [svg, reactCode, vueCode, htmlCode, onNotify],
  );

  function handleDownload() {
    if (!svg) {
      return;
    }
    downloadFile(`${iconName}.svg`, svg, 'image/svg+xml');
    onNotify(t('toast.downloadedSvg'));
  }

  async function handleShare() {
    const url = buildShareUrl(iconName, config);
    const ok = await copyText(url);
    const label = t('export.label.shareLink');
    onNotify(ok ? t('toast.copied', { label }) : t('toast.copyFailed'));
  }

  return (
    <section className="workspace-section preview-export-section">
      <h3 className="workspace-subtitle">{t('export.title')}</h3>
      <p className="workspace-lead">{t('export.lead')}</p>

      <div className="export-actions">
        <button type="button" onClick={handleDownload}>
          {t('export.downloadSvg')}
        </button>
        <button type="button" className="secondary" onClick={() => void handleShare()}>
          {t('export.copyShareLink')}
        </button>
      </div>

      <TabSwitch tabs={codeTabs} defaultTab="svg" ariaLabel={t('export.codeFormatAria')} />
    </section>
  );
}

export function PreviewPanel({
  iconName,
  config,
  title,
  description,
  onNotify,
  embedded = false,
}: PreviewPanelProps) {
  const { locale, t } = usePreferences();
  const category = ICON_META[iconName]?.category;
  const iconifyName = buildIconifyName(iconName);

  async function handleCopyName() {
    const ok = await copyText(iconifyName);
    onNotify(
      ok
        ? t('toast.copied', { label: t('export.label.iconName') })
        : t('toast.copyFailedShort'),
    );
  }

  const body = (
    <>
      <div className="preview-header">
        <div className="preview-heading">
          {category ? (
            <span className="preview-category">{getCategoryLabel(locale, category)}</span>
          ) : null}
          <button
            type="button"
            className="preview-title"
            title={t('preview.copyName')}
            onClick={() => void handleCopyName()}
          >
            {title}
          </button>
        </div>
        <p className="preview-desc">{description}</p>
        <button
          type="button"
          className="preview-code"
          title={t('preview.copyName')}
          onClick={() => void handleCopyName()}
        >
          {iconifyName}
        </button>
      </div>

      <div className="preview-stage-single" style={{ color: config.color }}>
        <div className="preview-custom">
          <AnimatedIcon name={iconName} config={config} />
        </div>
      </div>
    </>
  );

  if (embedded) {
    return <section className="workspace-section preview-section">{body}</section>;
  }

  return <div className="panel preview-panel">{body}</div>;
}
