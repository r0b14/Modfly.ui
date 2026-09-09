'use client';
import { useLocale } from '@/components/LocaleProvider';
import { copy } from '@/lib/i18n';
export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  const lang = useLocale();
  return (
    <div className="page-intro">
      <h1 className="doc-title">
        {copy(lang, 'Não foi possível abrir esta página.', 'This page could not be opened.')}
      </h1>
      <p className="doc-p">
        {copy(
          lang,
          'Tente novamente ou use a navegação para abrir outra página.',
          'Try again or use navigation to open another page.',
        )}
      </p>
      <button type="button" className="primary-link" onClick={reset}>
        {copy(lang, 'Tentar novamente', 'Try again')}
      </button>
    </div>
  );
}
