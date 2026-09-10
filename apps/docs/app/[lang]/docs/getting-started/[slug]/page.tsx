import { notFound } from 'next/navigation';
import { guides, guideSlugs } from '@/content/guides';
import { copy, isLocale, localized } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
import { DocCodeBlock } from '@/components/docs/DocCodeBlock';
import { RightToc } from '@/components/docs/RightToc';
import { Pager } from '@/components/docs/Pager';
import { AvamecDemo } from '@/components/docs/AvamecDemo';
type Props = { params: Promise<{ lang: string; slug: string }> };
export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !Object.hasOwn(guides, slug)) return {};
  const guide = guides[slug][lang];
  return pageMetadata(lang, `/docs/getting-started/${slug}`, guide.title, guide.description);
}
export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !Object.hasOwn(guides, slug)) notFound();
  const guide = guides[slug][lang];
  const index = guideSlugs.indexOf(slug);
  const pagerItem = (i: number, label: string) =>
    guideSlugs[i]
      ? {
          href: localized(lang, `/docs/getting-started/${guideSlugs[i]}`),
          label,
          title: guides[guideSlugs[i]][lang].title,
        }
      : undefined;
  return (
    <div className="reading-layout">
      <article className="reading-article">
        <header className="doc-head">
          <p className="eyebrow">{copy(lang, 'Guias', 'Guides')} · Modfly UI</p>
          <h1 className="doc-title">
            {guide.title}
            <i>.</i>
          </h1>
          <p className="doc-lead">{guide.description}</p>
        </header>
        {guide.sections.map((section) => (
          <section id={section.id} key={section.id}>
            <h2 className="doc-h2">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p className="doc-p" key={p}>
                {p}
              </p>
            ))}
            {section.code && (
              <DocCodeBlock
                filename={section.code.includes('import ') ? 'Example.tsx' : 'Terminal'}
                raw={section.code}
              >
                <pre>{section.code}</pre>
              </DocCodeBlock>
            )}
            {slug === 'avamec' && section.id === 'demo' && (
              <div lang="pt-BR">
                <AvamecDemo />
              </div>
            )}
          </section>
        ))}
        <Pager
          prev={pagerItem(index - 1, copy(lang, 'Anterior', 'Previous'))}
          next={pagerItem(index + 1, copy(lang, 'Próximo', 'Next'))}
        />
      </article>
      <RightToc
        entries={guide.sections.map((section) => ({ id: section.id, label: section.title }))}
      />
    </div>
  );
}
