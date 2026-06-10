import { memo, useLayoutEffect, useMemo, useRef } from 'react';
import { getIconBody } from '../data/iconBodies';
import { buildSvgFromBody } from '../lib/generator';
import type { LoadingConfig } from '../types';

interface AnimatedIconProps {
  name: string;
  config: LoadingConfig;
  size?: number;
  className?: string;
}

/** 使用源 SVG 内联渲染；ref 写入 DOM，避免父级重绘时 React 重置动画 */
export const AnimatedIcon = memo(function AnimatedIcon({
  name,
  config,
  size,
  className,
}: AnimatedIconProps) {
  const hostRef = useRef<HTMLSpanElement>(null);
  const cachedHtml = useRef('');

  const html = useMemo(() => {
    const body = getIconBody(name);
    if (!body) {
      return '';
    }

    return buildSvgFromBody(
      body,
      {
        ...config,
        size: size ?? config.size,
      },
      24,
      24,
      name,
    );
  }, [name, config, size]);

  useLayoutEffect(() => {
    const host = hostRef.current;
    if (!host || html === cachedHtml.current) {
      return;
    }
    host.innerHTML = html;
    cachedHtml.current = html;
  }, [html]);

  return (
    <span
      ref={hostRef}
      className={className ? `animated-icon ${className}` : 'animated-icon'}
      style={{ opacity: config.opacity }}
      aria-hidden="true"
    />
  );
});
