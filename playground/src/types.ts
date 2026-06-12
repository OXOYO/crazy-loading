export interface LoadingConfig {
  color: string;
  size: number;
  duration: number;
  strokeWidth: number;
  opacity: number;
}

export const DEFAULT_CONFIG: LoadingConfig = {
  color: '#3b82f6',
  size: 64,
  duration: 1.4,
  strokeWidth: 1.75,
  opacity: 1,
};

export function isDefaultConfig(config: LoadingConfig): boolean {
  return (Object.keys(DEFAULT_CONFIG) as (keyof LoadingConfig)[]).every(
    (key) => config[key] === DEFAULT_CONFIG[key],
  );
}

import type { IconCategory } from './data/categories';

export interface IconMeta {
  name: string;
  title: string;
  description: string;
  category: IconCategory;
}
