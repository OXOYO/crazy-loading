import type { IconifyIcon } from '@iconify/types';
import type { LoadingConfig } from '../types';

const PREFIX = 'crazy-loading';

function sanitizeScope(scope: string): string {
  return scope.replace(/[^a-zA-Z0-9_-]/g, '-');
}

function collectSvgClassNames(body: string): Set<string> {
  const names = new Set<string>();

  body.replace(/<style>([\s\S]*?)<\/style>/g, (_match, css: string) => {
    css.replace(/(?:^|[,{}\s])\.([a-zA-Z_][\w-]*)/g, (_m, cls: string) => {
      names.add(cls);
      return _m;
    });
    return _match;
  });

  body.replace(/class="([^"]+)"/g, (_match, classes: string) => {
    classes.split(/\s+/).forEach((cls) => {
      if (cls) {
        names.add(cls);
      }
    });
    return _match;
  });

  return names;
}

/** 为每个图标的 class / @keyframes 加唯一前缀，避免网格同时渲染时全局 CSS 冲突 */
function scopeSvgBody(body: string, scopeId: string): string {
  const prefix = `cl-${sanitizeScope(scopeId)}`;
  const classNames = collectSvgClassNames(body);
  const scopedClass = (cls: string) => `${prefix}-${cls}`;
  const scopedKeyframe = (name: string) => `${prefix}-kf-${name}`;
  const keyframeNames = new Set<string>();

  body.replace(/<style>([\s\S]*?)<\/style>/g, (_match, css: string) => {
    css.replace(/@keyframes\s+([a-zA-Z0-9_-]+)/g, (_m, name: string) => {
      keyframeNames.add(name);
      return _m;
    });
    return _match;
  });

  let result = body.replace(/<style>([\s\S]*?)<\/style>/g, (_match, css: string) => {
    let scoped = css.replace(/@keyframes\s+([a-zA-Z0-9_-]+)/g, (_m, name: string) => {
      return `@keyframes ${scopedKeyframe(name)}`;
    });

    for (const name of keyframeNames) {
      const kf = scopedKeyframe(name);
      scoped = scoped.replace(new RegExp(`(animation\\s*:\\s*)${name}\\b`, 'g'), `$1${kf}`);
      scoped = scoped.replace(
        new RegExp(`(animation-name\\s*:\\s*)${name}\\b`, 'g'),
        `$1${kf}`,
      );
    }

    for (const cls of [...classNames].sort((a, b) => b.length - a.length)) {
      scoped = scoped.replace(new RegExp(`\\.${cls}\\b`, 'g'), `.${scopedClass(cls)}`);
    }

    return `<style>${scoped}</style>`;
  });

  result = result.replace(/class="([^"]+)"/g, (_match, classes: string) => {
    const next = classes
      .split(/\s+/)
      .filter(Boolean)
      .map((cls) => scopedClass(cls))
      .join(' ');
    return `class="${next}"`;
  });

  for (const name of keyframeNames) {
    const kf = scopedKeyframe(name);
    result = result.replace(
      new RegExp(`(style="[^"]*animation:\\s*)${name}\\b`, 'g'),
      `$1${kf}`,
    );
  }

  return result;
}

export function buildSvgString(
  icon: IconifyIcon,
  config: LoadingConfig,
  scopeId?: string,
): string {
  return buildSvgFromBody(
    icon.body,
    config,
    icon.width ?? 24,
    icon.height ?? 24,
    scopeId,
  );
}

export function buildSvgFromBody(
  body: string,
  config: LoadingConfig,
  width = 24,
  height = 24,
  scopeId?: string,
): string {
  let next = scopeId ? scopeSvgBody(body, scopeId) : body;

  next = next.replace(/currentColor/g, config.color);
  next = next.replace(
    /(?<=(?:^|[;\s{]))stroke-width:\s*[\d.]+/g,
    `stroke-width: ${config.strokeWidth}`,
  );
  // 兼容缺省单位的 animation 时长（如 `1.4 ease` → `1.4s ease`）
  next = next.replace(
    /animation:\s*([a-zA-Z0-9_-]+)\s+([\d.]+)(?!\s*s|\s*ms)\s+/g,
    `animation: $1 ${config.duration}s `,
  );
  next = next.replace(
    /animation:\s*([a-zA-Z0-9_-]+)\s+([\d.]+)s([^;}"']*)/g,
    (_match, name, _seconds, tail) => `animation: ${name} ${config.duration}s${tail}`,
  );
  next = next.replace(
    /animation-duration:\s*[\d.]+s/g,
    `animation-duration: ${config.duration}s`,
  );

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${config.size}" height="${config.size}" viewBox="0 0 ${width} ${height}" style="color:${config.color}">${next}</svg>`;
}

export function buildIconifyName(iconName: string): string {
  return `${PREFIX}:${iconName}`;
}

export function buildReactSnippet(iconName: string, config: LoadingConfig): string {
  return `import { Icon } from '@iconify/react';

export function Loading() {
  return (
    <Icon
      icon="${buildIconifyName(iconName)}"
      width={${config.size}}
      style={{ color: '${config.color}', opacity: ${config.opacity} }}
    />
  );
}`;
}

export function buildHtmlSnippet(iconName: string, config: LoadingConfig): string {
  return `<script src="https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js"></script>
<iconify-icon
  icon="${buildIconifyName(iconName)}"
  width="${config.size}"
  style="color: ${config.color}; opacity: ${config.opacity}"
></iconify-icon>`;
}

export function buildShareUrl(iconName: string, config: LoadingConfig): string {
  const params = new URLSearchParams({
    icon: iconName,
    color: config.color,
    size: String(config.size),
    duration: String(config.duration),
    stroke: String(config.strokeWidth),
    opacity: String(config.opacity),
  });
  return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
}

export function parseShareUrl(): Partial<LoadingConfig & { icon: string }> {
  const params = new URLSearchParams(window.location.search);
  const result: Partial<LoadingConfig & { icon: string }> = {};

  const icon = params.get('icon');
  if (icon) {
    result.icon = icon;
  }

  const color = params.get('color');
  if (color) {
    result.color = color;
  }

  const size = params.get('size');
  if (size) {
    result.size = Number(size);
  }

  const duration = params.get('duration');
  if (duration) {
    result.duration = Number(duration);
  }

  const stroke = params.get('stroke');
  if (stroke) {
    result.strokeWidth = Number(stroke);
  }

  const opacity = params.get('opacity');
  if (opacity) {
    result.opacity = Number(opacity);
  }

  return result;
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function downloadFile(filename: string, content: string, mime: string): void {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}
