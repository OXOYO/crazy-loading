import { useMemo } from 'react';
import { getIconBody } from '../data/iconBodies';
import {
  buildHtmlSnippet,
  buildIconifyName,
  buildReactSnippet,
  buildShareUrl,
  buildSvgFromBody,
  copyText,
  downloadFile,
} from '../lib/generator';
import type { LoadingConfig } from '../types';

interface ExportPanelProps {
  iconName: string;
  config: LoadingConfig;
  onNotify: (message: string) => void;
}

export function ExportPanel({ iconName, config, onNotify }: ExportPanelProps) {
  const svg = useMemo(() => {
    const body = getIconBody(iconName);
    return body ? buildSvgFromBody(body, config, 24, 24, iconName) : '';
  }, [iconName, config]);

  const reactCode = useMemo(
    () => buildReactSnippet(iconName, config),
    [iconName, config],
  );

  const htmlCode = useMemo(
    () => buildHtmlSnippet(iconName, config),
    [iconName, config],
  );

  async function handleCopy(text: string, label: string) {
    const ok = await copyText(text);
    onNotify(ok ? `已复制 ${label}` : '复制失败，请手动选择文本');
  }

  function handleDownload() {
    if (!svg) {
      return;
    }
    downloadFile(`${iconName}.svg`, svg, 'image/svg+xml');
    onNotify('SVG 已下载');
  }

  function handleShare() {
    const url = buildShareUrl(iconName, config);
    void handleCopy(url, '分享链接');
  }

  return (
    <div className="panel export-panel">
      <h2>导出</h2>

      <div className="export-actions">
        <button type="button" onClick={() => void handleCopy(svg, 'SVG')}>
          复制 SVG
        </button>
        <button type="button" onClick={() => void handleCopy(reactCode, 'React 代码')}>
          复制 React
        </button>
        <button type="button" onClick={() => void handleCopy(htmlCode, 'HTML 代码')}>
          复制 HTML
        </button>
        <button type="button" onClick={() => void handleCopy(buildIconifyName(iconName), '图标名')}>
          复制图标名
        </button>
        <button type="button" onClick={handleDownload}>
          下载 SVG
        </button>
        <button type="button" className="secondary" onClick={handleShare}>
          复制分享链接
        </button>
      </div>

      <div className="code-blocks">
        <div>
          <h3>SVG</h3>
          <pre>{svg}</pre>
        </div>
        <div>
          <h3>React</h3>
          <pre>{reactCode}</pre>
        </div>
      </div>
    </div>
  );
}
