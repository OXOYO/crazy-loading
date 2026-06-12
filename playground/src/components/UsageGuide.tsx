import { useMemo, useState } from 'react';
import { CodeBlock } from './CodeBlock';
import { LOCAL_ICONS_JSON_PATH } from '../lib/generator';
import { usePreferences } from '../preferences/PreferencesProvider';
import { TabSwitch, type TabItem } from './TabSwitch';

const STORAGE_KEY = 'crazy-loading-guide-open';

function readInitialOpen(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === '0') {
      return false;
    }
    if (stored === '1') {
      return true;
    }
  } catch {
    /* ignore */
  }
  return false;
}

interface UsageGuideProps {
  embedded?: boolean;
  onNotify?: (message: string) => void;
}

export function UsageGuide({ embedded = false, onNotify }: UsageGuideProps) {
  const { t } = usePreferences();
  const [open, setOpen] = useState(readInitialOpen);

  const reactSnippet = `npm install @iconify/react

import { Icon, addCollection } from '@iconify/react';
import icons from '${LOCAL_ICONS_JSON_PATH}';

addCollection(icons);

export function Loading() {
  return (
    <Icon
      icon="crazy-loading:dna-helix"
      width={48}
      style={{ color: '#60a5fa' }}
    />
  );
}`;

  const vueSnippet = `npm install @iconify/vue

<script setup>
import { Icon, addCollection } from '@iconify/vue';
import icons from '${LOCAL_ICONS_JSON_PATH}';

addCollection(icons);
</script>

<template>
  <Icon
    icon="crazy-loading:dna-helix"
    :width="48"
    :style="{ color: '#60a5fa' }"
  />
</template>`;

  const htmlSnippet = `<script src="https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js"></script>
<script>
  fetch('${LOCAL_ICONS_JSON_PATH}')
    .then((res) => res.json())
    .then((data) => Iconify.addCollection(data));
</script>
<iconify-icon
  icon="crazy-loading:dna-helix"
  width="48"
  style="color: #60a5fa"
></iconify-icon>`;

  const integrationTabs = useMemo<TabItem[]>(
    () => [
      {
        id: 'json',
        label: 'JSON',
        content: (
          <div className="guide-section">
            <p>{t('guide.json', { path: LOCAL_ICONS_JSON_PATH })}</p>
          </div>
        ),
      },
      {
        id: 'svg',
        label: 'SVG',
        content: (
          <div className="guide-section">
            <p>{t('guide.svg')}</p>
          </div>
        ),
      },
      {
        id: 'react',
        label: 'React',
        content: (
          <div className="guide-section">
            <CodeBlock
              code={reactSnippet}
              language="javascript"
              languageLabel="React"
              format={false}
              onNotify={onNotify}
            />
          </div>
        ),
      },
      {
        id: 'vue',
        label: 'Vue',
        content: (
          <div className="guide-section">
            <CodeBlock
              code={vueSnippet}
              language="vue"
              onNotify={onNotify}
              format={false}
            />
          </div>
        ),
      },
      {
        id: 'html',
        label: 'HTML',
        content: (
          <div className="guide-section">
            <CodeBlock code={htmlSnippet} language="html" onNotify={onNotify} />
          </div>
        ),
      },
    ],
    [t, onNotify, reactSnippet, vueSnippet, htmlSnippet],
  );

  const guideBody = (
    <div className="guide-body">
      <p className="guide-intro">{t('guide.intro')}</p>

      <ol className="guide-steps guide-steps-compact">
        <li>{t('guide.step1')}</li>
        <li>{t('guide.step2')}</li>
        <li>{t('guide.step3')}</li>
      </ol>

      <TabSwitch tabs={integrationTabs} defaultTab="json" ariaLabel={t('guide.integrationAria')} />

      <p className="guide-note">{t('guide.note')}</p>
    </div>
  );

  function toggle() {
    setOpen((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  if (embedded) {
    return <section className="workspace-section guide-section-wrap">{guideBody}</section>;
  }

  return (
    <div className="panel guide-panel">
      <button
        type="button"
        className="guide-toggle"
        onClick={toggle}
        aria-expanded={open}
      >
        <h2>{t('guide.title')}</h2>
        <span className="guide-toggle-label">{open ? t('guide.collapse') : t('guide.expand')}</span>
      </button>
      {open ? guideBody : null}
    </div>
  );
}
