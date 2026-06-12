import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('svg', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('vue', xml);

export type HighlightLanguage = 'svg' | 'xml' | 'html' | 'javascript' | 'json' | 'vue';

const LANGUAGE_MAP: Record<HighlightLanguage, string> = {
  svg: 'xml',
  xml: 'xml',
  html: 'xml',
  javascript: 'javascript',
  json: 'json',
  vue: 'xml',
};

export function highlightCode(code: string, language: HighlightLanguage): string {
  const grammar = LANGUAGE_MAP[language] ?? 'xml';

  try {
    return hljs.highlight(code, { language: grammar }).value;
  } catch {
    return hljs.highlightAuto(code).value;
  }
}
