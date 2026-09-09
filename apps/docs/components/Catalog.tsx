'use client';
import { useState } from 'react';
import Link from 'next/link';
import catalog from '@/generated/navigation.json';
import { editorial } from '@/content/components';
import { copy, localized } from '@/lib/i18n';
import { normalizeSearch } from '@/lib/navigation';
import { useLocale } from './LocaleProvider';
export function Catalog() {
  const lang = useLocale();
  const [query, setQuery] = useState('');
  const items = catalog.filter((item) =>
    normalizeSearch(`${item.name} ${editorial(item.slug, lang).description}`).includes(
      normalizeSearch(query),
    ),
  );
  return (
    <>
      <label className="catalog-search">
        {copy(lang, 'Encontrar uma peça', 'Find a building block')}
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={copy(lang, 'Nome ou finalidade…', 'Name or purpose…')}
        />
      </label>
      <p role="status" className="doc-p">
        {items.length
          ? `${items.length} ${copy(lang, 'grupos de componentes', 'component groups')}`
          : copy(
              lang,
              'Nenhum componente encontrado. Tente outro termo.',
              'No components found. Try another term.',
            )}
      </p>
      <div className="catalog-grid">
        {items.map((item) => (
          <Link
            className="catalog-card"
            key={item.slug}
            href={localized(lang, `/docs/components/${item.slug}`)}
          >
            <h2>
              {item.name}
              <span aria-hidden="true">↗</span>
            </h2>
            <p>{editorial(item.slug, lang).description}</p>
            <span className="card-meta">
              {item.exports} {copy(lang, 'exportação(ões)', 'export(s)')}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
