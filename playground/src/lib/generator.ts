import type { IconifyIcon } from '@iconify/types';
import { listIconNames } from './icons';
import type { LoadingConfig } from '../types';

/** 保守估计，避免 IE / 部分网关对超长 query 的限制 */
const SHARE_URL_SAFE_LENGTH = 1800;

const ICON_NAMES = listIconNames();
const ICON_INDEX = new Map(ICON_NAMES.map((name, index) => [name, index]));

const PREFIX = 'crazy-loading';

/** 业务项目中建议放置 Playground 导出的 Iconify JSON 路径 */
export const LOCAL_ICONS_JSON_PATH = './assets/crazy-loading.json';

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
  return `import { Icon, addCollection } from '@iconify/react';
// Playground「图标集导出」生成的 JSON，例如：
import icons from '${LOCAL_ICONS_JSON_PATH}';

addCollection(icons);

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

export function buildVueSnippet(iconName: string, config: LoadingConfig): string {
  return `<script setup>
import { Icon, addCollection } from '@iconify/vue';
// Playground「图标集导出」生成的 JSON，例如：
import icons from '${LOCAL_ICONS_JSON_PATH}';

addCollection(icons);
</script>

<template>
  <Icon
    icon="${buildIconifyName(iconName)}"
    :width="${config.size}"
    :style="{ color: '${config.color}', opacity: ${config.opacity} }"
  />
</template>`;
}

export function buildHtmlSnippet(
  iconName: string,
  config: LoadingConfig,
  iconBody: string,
): string {
  const collection = JSON.stringify({
    prefix: PREFIX,
    icons: {
      [iconName]: { body: iconBody },
    },
  });

  return `<script src="https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js"></script>
<script>
  // 自定义图标集：注册本地数据（下方为当前图标；全量请在 Playground 勾选后导出 JSON）
  Iconify.addCollection(${collection});
</script>
<iconify-icon
  icon="${buildIconifyName(iconName)}"
  width="${config.size}"
  style="color: ${config.color}; opacity: ${config.opacity}"
></iconify-icon>`;
}

function appendConfigParams(params: URLSearchParams, config: LoadingConfig): void {
  params.set('color', config.color);
  params.set('size', String(config.size));
  params.set('duration', String(config.duration));
  params.set('stroke', String(config.strokeWidth));
  params.set('opacity', String(config.opacity));
}

export function buildShareUrl(iconName: string, config: LoadingConfig): string {
  const params = new URLSearchParams({ icon: iconName });
  appendConfigParams(params, config);
  return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = '';
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/u, '');
}

function base64UrlToBytes(encoded: string): Uint8Array {
  const padded = encoded.replace(/-/g, '+').replace(/_/g, '/');
  const padLength = (4 - (padded.length % 4)) % 4;
  const base64 = padded + '='.repeat(padLength);
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function encodePickIndices(pickedIcons: string[]): string {
  const indices = [
    ...new Set(
      pickedIcons
        .map((name) => ICON_INDEX.get(name))
        .filter((index): index is number => index !== undefined),
    ),
  ].sort((a, b) => a - b);

  const bytes = new Uint8Array(indices.length * 2);
  const view = new DataView(bytes.buffer);
  indices.forEach((index, offset) => {
    view.setUint16(offset * 2, index, false);
  });
  return bytesToBase64Url(bytes);
}

function decodePickIndices(encoded: string): string[] {
  try {
    const bytes = base64UrlToBytes(encoded);
    if (bytes.length % 2 !== 0) {
      return [];
    }

    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    const names: string[] = [];
    for (let offset = 0; offset < bytes.length; offset += 2) {
      const index = view.getUint16(offset, false);
      const name = ICON_NAMES[index];
      if (name) {
        names.push(name);
      }
    }
    return names;
  } catch {
    return [];
  }
}

function buildCollectionSharePath(pickedIcons: string[], config: LoadingConfig): string {
  const baseParams = new URLSearchParams();
  if (pickedIcons[0]) {
    baseParams.set('icon', pickedIcons[0]);
  }
  appendConfigParams(baseParams, config);

  const plainParams = new URLSearchParams(baseParams);
  plainParams.set('pick', pickedIcons.join(','));
  const plainPath = `?${plainParams.toString()}`;
  if (plainPath.length <= SHARE_URL_SAFE_LENGTH) {
    return plainPath;
  }

  const compactParams = new URLSearchParams(baseParams);
  compactParams.set('picki', encodePickIndices(pickedIcons));
  return `?${compactParams.toString()}`;
}

export function buildCollectionShareUrl(pickedIcons: string[], config: LoadingConfig): string {
  return `${window.location.origin}${window.location.pathname}${buildCollectionSharePath(pickedIcons, config)}`;
}

export function isCollectionShareUrlTooLong(pickedIcons: string[], config: LoadingConfig): boolean {
  const path = buildCollectionSharePath(pickedIcons, config);
  return `${window.location.origin}${window.location.pathname}${path}`.length > SHARE_URL_SAFE_LENGTH;
}

export interface ShareUrlState extends Partial<LoadingConfig> {
  icon?: string;
  pick?: string[];
}

export function parseShareUrl(): ShareUrlState {
  const params = new URLSearchParams(window.location.search);
  const result: ShareUrlState = {};

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

  const pickIndices = params.get('picki');
  if (pickIndices) {
    result.pick = decodePickIndices(pickIndices);
  } else {
    const pick = params.get('pick');
    if (pick) {
      result.pick = pick
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean);
    }
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
