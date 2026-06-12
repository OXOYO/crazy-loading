import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const appPackage = JSON.parse(
  readFileSync(path.join(rootDir, 'package.json'), 'utf-8'),
) as { version: string };

function resolveBasePath(): string {
  if (process.env.GITHUB_PAGES !== 'true') {
    return '/';
  }

  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'crazy-loading';
  return `/${repoName}/`;
}

export default defineConfig({
  base: resolveBasePath(),
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(appPackage.version),
  },
  server: {
    port: 5173,
    open: true,
  },
});
