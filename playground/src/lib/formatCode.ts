export function formatJson(code: string): string {
  try {
    return JSON.stringify(JSON.parse(code), null, 2);
  } catch {
    return code;
  }
}

export function formatXml(code: string): string {
  const normalized = code.replace(/>\s+</g, '><').trim();
  const lines = normalized.replace(/></g, '>\n<').split('\n');
  let depth = 0;

  return lines
    .map((raw) => {
      const line = raw.trim();
      if (!line) {
        return '';
      }

      if (line.startsWith('</')) {
        depth = Math.max(0, depth - 1);
      }

      const indented = `${'  '.repeat(depth)}${line}`;

      const opensTag =
        line.startsWith('<') &&
        !line.startsWith('</') &&
        !line.startsWith('<?') &&
        !line.endsWith('/>') &&
        !line.includes('</');

      if (opensTag) {
        depth += 1;
      }

      return indented;
    })
    .filter(Boolean)
    .join('\n');
}

export function formatCode(code: string, language: string): string {
  if (language === 'json') {
    return formatJson(code);
  }
  if (language === 'svg' || language === 'xml' || language === 'html' || language === 'vue') {
    return formatXml(code);
  }
  return code;
}
