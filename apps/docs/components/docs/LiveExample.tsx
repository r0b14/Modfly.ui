'use client';
import { useLocale } from '@/components/LocaleProvider';
import { copy } from '@/lib/i18n';
import React, { useState } from 'react';
import { stories } from '@/generated/stories';
import { DocCodeBlock } from './DocCodeBlock';
export function LiveExample({
  name,
  example,
  initialVariant,
}: {
  name: string;
  example: string;
  initialVariant: string;
}) {
  const lang = useLocale();
  const t = (pt: string, en: string) => copy(lang, pt, en);
  const module = (stories as Record<string, any>)[name];
  const variants = Object.entries(module).filter(([key]) => key !== 'default');
  const [selected, setSelected] = useState(initialVariant || variants[0]?.[0] || '');
  const [currentPage, setCurrentPage] = useState(2);
  const story = module[selected];
  const Component = module.default.component;
  const args = { ...module.default.args, ...story?.args };
  if (name === 'Pagination') {
    args.currentPage = currentPage;
    args.onPageChange = setCurrentPage;
  }
  return (
    <>
      <label className="doc-p">
        {t('Variante de', 'Variant of')} {name}{' '}
        <select
          className="border rounded p-2 ml-2 max-w-full"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {variants.map(([key, value]) => (
            <option key={key} value={key}>
              {(value as any).name ?? key}
            </option>
          ))}
        </select>
      </label>
      <div
        lang="pt-BR"
        className="modfly-demo border rounded-xl bg-white text-[#333] my-6 p-4 sm:p-6 overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label={`${t('Demonstração de', 'Demonstration of')} ${name}`}
        data-testid={`preview-${name}`}
      >
        <Component {...args} />
      </div>
      <details className="my-4">
        <summary className="cursor-pointer">
          {t('Código do exemplo inicial de', 'Initial example code for')} {name}
        </summary>
        <DocCodeBlock filename={`${name}.tsx`} raw={example}>
          <pre>{example}</pre>
        </DocCodeBlock>
      </details>
    </>
  );
}
