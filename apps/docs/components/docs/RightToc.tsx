'use client';
import { useEffect, useState } from 'react';
import { useLocale } from '@/components/LocaleProvider';
import { copy } from '@/lib/i18n';
interface TocEntry {
  id: string;
  label: string;
  level?: 2 | 3;
}
export function RightToc({
  entries,
}: {
  entries: TocEntry[];
  readTime?: string;
  editHref?: string;
}) {
  const lang = useLocale();
  const [active, setActive] = useState(entries[0]?.id ?? '');
  useEffect(() => {
    const update = () => {
      const passed = entries.filter(
        (entry) =>
          (document.getElementById(entry.id)?.getBoundingClientRect().top ?? Infinity) <= 160,
      );
      setActive(passed.at(-1)?.id ?? entries[0]?.id ?? '');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [entries]);
  return (
    <nav className="page-toc" aria-label={copy(lang, 'Nesta página', 'On this page')}>
      <p className="eyebrow">{copy(lang, 'Nesta página', 'On this page')}</p>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <a href={`#${entry.id}`} aria-current={active === entry.id ? 'location' : undefined}>
              {entry.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
