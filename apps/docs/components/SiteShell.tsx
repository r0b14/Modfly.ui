'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from './LocaleProvider';
import { copy, localized, repository, release } from '@/lib/i18n';
import { navigation, normalizeSearch } from '@/lib/navigation';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const lang = useLocale();
  const t = (pt: string, en: string) => copy(lang, pt, en);
  const pathname = usePathname();
  const path = pathname.replace(/^\/(pt|en)/, '');
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const main = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const search = useRef<HTMLInputElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);
  const groups = navigation(lang);
  const current = groups.flatMap((group) => group.items).find((item) => item.path === path);
  const normalized = normalizeSearch(query);
  const visibleGroups = groups.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      normalizeSearch(`${item.title} ${item.description}`).includes(normalized),
    ),
  }));
  const count = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);

  useEffect(() => {
    function shortcut(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (window.matchMedia('(max-width: 1023px)').matches) {
          restoreFocus.current = document.activeElement as HTMLElement;
          setOpen(true);
        } else search.current?.focus();
      }
    }
    window.addEventListener('keydown', shortcut);
    return () => window.removeEventListener('keydown', shortcut);
  }, []);
  useEffect(() => {
    if (!open) return;
    if (main.current) main.current.inert = true;
    search.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const media = window.matchMedia('(min-width: 1024px)');
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    function keyboard(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key === 'Tab') {
        const nodes = Array.from(
          panel.current?.querySelectorAll<HTMLElement>('a[href], button, input, [tabindex="0"]') ??
            [],
        ).filter((el) => el.getClientRects().length && !el.hasAttribute('disabled'));
        const first = nodes[0];
        const last = nodes.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener('keydown', keyboard);
    media.addEventListener('change', resize);
    return () => {
      if (main.current) main.current.inert = false;
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', keyboard);
      media.removeEventListener('change', resize);
      (restoreFocus.current ?? trigger.current)?.focus();
    };
  }, [open]);
  function close() {
    setOpen(false);
  }
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {t('Pular para o conteúdo', 'Skip to content')}
      </a>
      {open && (
        <button
          type="button"
          className="site-overlay"
          onClick={close}
          tabIndex={-1}
          aria-label={t('Fechar navegação', 'Close navigation')}
        />
      )}
      <aside
        id="site-navigation"
        ref={panel}
        className={`site-sidebar ${open ? 'is-open' : ''}`}
        role={open ? 'dialog' : undefined}
        aria-modal={open || undefined}
        aria-label={t('Navegação da documentação', 'Documentation navigation')}
      >
        <div className="flex items-center justify-between gap-3 mb-2">
          <Link href={localized(lang)} onClick={close} className="site-brand">
            <span className="brand-mark" aria-hidden="true">
              M
            </span>
            Modfly<sup>UI</sup>
          </Link>
          <button
            type="button"
            className="site-icon-button lg:hidden"
            onClick={close}
            aria-label={t('Fechar menu', 'Close menu')}
          >
            ×
          </button>
        </div>
        <p className="serif text-[var(--muted)] italic mb-7">
          {t('Componentes feitos para aprender.', 'Components built for learning.')}
        </p>
        <label className="site-search">
          <span className="sr-only">{t('Buscar na documentação', 'Search documentation')}</span>
          <input
            ref={search}
            type="search"
            placeholder={t('Buscar componentes e guias…', 'Search components and guides…')}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <kbd aria-hidden="true">⌘K</kbd>
        </label>
        {query && (
          <p className="search-status" role="status">
            {count
              ? `${count} ${t('resultados', 'results')}`
              : t('Nenhum resultado. Tente outro termo.', 'No results. Try another term.')}
          </p>
        )}
        <nav aria-label={t('Guias e componentes', 'Guides and components')}>
          {visibleGroups
            .filter((group) => group.items.length)
            .map((group) => (
              <section className="nav-group" key={group.title}>
                <h2>{group.title}</h2>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.path}>
                      <Link
                        onClick={close}
                        href={localized(lang, item.path)}
                        aria-current={item.path === path ? 'page' : undefined}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
        </nav>
        <p className="text-xs text-[var(--muted)] border-t border-rule pt-4">
          v{release.version} · {t('em preparação', 'in preparation')}
        </p>
      </aside>
      <div ref={main} className="site-main">
        <header className="site-topbar">
          <button
            ref={trigger}
            type="button"
            className="site-icon-button lg:hidden"
            aria-label={t('Abrir menu', 'Open menu')}
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => {
              restoreFocus.current = trigger.current;
              setOpen(true);
            }}
          >
            ☰
          </button>
          <nav aria-label={t('Caminho da página', 'Breadcrumb')} className="site-breadcrumb">
            <Link href={localized(lang)}>Modfly UI</Link>
            {current && (
              <>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{current.title}</span>
              </>
            )}
          </nav>
          <div className="site-topbar-actions">
            <a
              className="language-link"
              href={localized(lang === 'pt' ? 'en' : 'pt', path)}
              hrefLang={lang === 'pt' ? 'en' : 'pt-BR'}
              lang={lang === 'pt' ? 'en' : 'pt-BR'}
              onClick={(event) => {
                if (window.location.hash) event.currentTarget.href += window.location.hash;
              }}
              aria-label={t('Read this page in English', 'Ler esta página em português')}
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </a>
            <a className="hidden sm:block" href={repository}>
              GitHub ↗
            </a>
          </div>
        </header>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <div>
            <Link className="serif text-3xl" href={localized(lang)}>
              Modfly UI
            </Link>
            <p>
              {t(
                'Feito para aprender. Compartilhado para criar.',
                'Built for learning. Shared for creating.',
              )}
            </p>
          </div>
          <nav aria-label={t('Links do rodapé', 'Footer links')}>
            <Link href={localized(lang, '/docs/components')}>{t('Componentes', 'Components')}</Link>
            <Link href={localized(lang, '/docs/getting-started/changelog')}>Changelog</Link>
            <Link href={localized(lang, '/docs/getting-started/contributing')}>
              {t('Contribuir', 'Contribute')}
            </Link>
            <a
              href={`https://storybook.modfly.design/?path=/docs/welcome-${lang === 'pt' ? 'portugues' : 'english'}--docs`}
            >
              Storybook ↗
            </a>
            <a href={`${repository}/issues`}>{t('Relatar problema', 'Report an issue')} ↗</a>
          </nav>
          <p className="text-xs">
            React · TypeScript · MIT · v{release.version} {t('em preparação', 'in preparation')}
          </p>
        </footer>
      </div>
    </div>
  );
}
