import { usePreferences } from '../preferences/PreferencesProvider';
import { useMediaQuery } from '../hooks/useMediaQuery';

const GITHUB_REPO_URL = 'https://github.com/OXOYO/crazy-loading';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5 1.09 3.26L16.35 4l-1.09 3.26L18.52 8.35 15.26 9.44 16.35 12.7 12 10.44 7.65 12.7l1.09-3.26L5.48 8.35l3.26-1.09L9.65 4l3.26 1.09L12 2z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.1 3.05a7.5 7.5 0 1 0 7.85 11.02A8.5 8.5 0 0 1 12.1 3.05z"
      />
    </svg>
  );
}

export function AppSettings() {
  const { locale, theme, setLocale, setTheme, t } = usePreferences();
  const isMobile = useMediaQuery('(max-width: 900px)');

  if (isMobile) {
    return (
      <div className="app-settings app-settings-mobile">
        <a
          className="app-settings-icon-btn"
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('app.github')}
          title={t('app.github')}
        >
          <GitHubIcon />
        </a>
        <button
          type="button"
          className="app-settings-icon-btn"
          aria-label={t('settings.theme')}
          title={theme === 'light' ? t('settings.theme.dark') : t('settings.theme.light')}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
        <button
          type="button"
          className="app-settings-icon-btn app-settings-lang-btn"
          aria-label={t('settings.language')}
          title={locale === 'zh' ? t('settings.language.en') : t('settings.language.zh')}
          onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
        >
          {locale === 'zh' ? 'EN' : '中'}
        </button>
      </div>
    );
  }

  return (
    <div className="app-settings">
      <a
        className="hero-github-link"
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('app.github')}
        title={t('app.github')}
      >
        <GitHubIcon />
      </a>

      <span className="app-settings-divider" aria-hidden="true" />

      <div className="app-settings-toggle" role="group" aria-label={t('settings.theme')}>
        <button
          type="button"
          className={theme === 'light' ? 'active' : ''}
          aria-pressed={theme === 'light'}
          onClick={() => setTheme('light')}
        >
          {t('settings.theme.light')}
        </button>
        <button
          type="button"
          className={theme === 'dark' ? 'active' : ''}
          aria-pressed={theme === 'dark'}
          onClick={() => setTheme('dark')}
        >
          {t('settings.theme.dark')}
        </button>
      </div>

      <span className="app-settings-divider" aria-hidden="true" />

      <div className="app-settings-toggle" role="group" aria-label={t('settings.language')}>
        <button
          type="button"
          className={locale === 'zh' ? 'active' : ''}
          aria-pressed={locale === 'zh'}
          onClick={() => setLocale('zh')}
        >
          {t('settings.language.zh')}
        </button>
        <button
          type="button"
          className={locale === 'en' ? 'active' : ''}
          aria-pressed={locale === 'en'}
          onClick={() => setLocale('en')}
        >
          {t('settings.language.en')}
        </button>
      </div>
    </div>
  );
}
