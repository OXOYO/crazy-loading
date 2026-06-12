import { useMemo } from 'react';
import { formatCode } from '../lib/formatCode';
import { copyText } from '../lib/generator';
import { highlightCode, type HighlightLanguage } from '../lib/highlight';
import { usePreferences } from '../preferences/PreferencesProvider';

const LANGUAGE_LABELS: Record<HighlightLanguage, string> = {
  svg: 'SVG',
  xml: 'XML',
  html: 'HTML',
  javascript: 'JavaScript',
  json: 'JSON',
  vue: 'Vue',
};

interface CodeBlockProps {
  code: string;
  language: HighlightLanguage;
  languageLabel?: string;
  format?: boolean;
  maxHeight?: number;
  onNotify?: (message: string) => void;
}

export function CodeBlock({
  code,
  language,
  languageLabel,
  format = true,
  maxHeight = 220,
  onNotify,
}: CodeBlockProps) {
  const { t } = usePreferences();

  const displayCode = useMemo(
    () => (format ? formatCode(code, language) : code),
    [code, language, format],
  );

  const lines = useMemo(() => {
    const highlighted = highlightCode(displayCode, language);
    const parts = highlighted.split('\n');
    return parts.map((html, index) => ({
      number: index + 1,
      html: html || '&#8203;',
    }));
  }, [displayCode, language]);

  async function handleCopy() {
    const ok = await copyText(displayCode);
    if (onNotify) {
      onNotify(ok ? t('codeBlock.copied') : t('toast.copyFailedShort'));
    }
  }

  const label = languageLabel ?? LANGUAGE_LABELS[language];

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-block-lang">{label}</span>
        <button type="button" className="code-block-copy" onClick={() => void handleCopy()}>
          {t('codeBlock.copy')}
        </button>
      </div>
      <div className="code-block-body" style={{ maxHeight }}>
        <table className="code-block-table">
          <tbody>
            {lines.map((line) => (
              <tr key={line.number}>
                <td className="code-block-gutter">{line.number}</td>
                <td
                  className="code-block-line hljs"
                  dangerouslySetInnerHTML={{ __html: line.html }}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
