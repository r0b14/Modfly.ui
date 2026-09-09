'use client';
import Link from 'next/link';
import { useLocale } from '@/components/LocaleProvider';
import { copy, localized } from '@/lib/i18n';
export default function NotFound() {
  const lang = useLocale();
  return (
    <div className="page-intro">
      <p className="eyebrow">404</p>
      <h1 className="doc-title">{copy(lang, 'Página não encontrada.', 'Page not found.')}</h1>
      <p className="doc-lead">
        {copy(
          lang,
          'Use a busca ou volte ao catálogo para continuar.',
          'Use search or return to the catalog to continue.',
        )}
      </p>
      <Link className="primary-link" href={localized(lang, '/docs/components')}>
        {copy(lang, 'Explorar componentes', 'Explore components')}
      </Link>
    </div>
  );
}
