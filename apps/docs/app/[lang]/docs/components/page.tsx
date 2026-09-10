import { notFound } from 'next/navigation';
import { Catalog } from '@/components/Catalog';
import { copy, isLocale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return pageMetadata(
    lang,
    '/docs/components',
    copy(lang, 'Catálogo de componentes', 'Component catalog'),
    copy(
      lang,
      'Encontre as peças para compor sua próxima aula.',
      'Find the building blocks for your next lesson.',
    ),
  );
}
export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <div className="page-intro">
      <p className="eyebrow">@modfly/ui</p>
      <h1 className="doc-title">
        {copy(lang, 'Cada peça, uma possibilidade.', 'Every piece, a possibility.')}
      </h1>
      <p className="doc-lead">
        {copy(
          lang,
          '42 componentes públicos em 39 grupos. Busque pelo nome ou pelo que você quer ensinar.',
          '42 public components in 39 groups. Search by name or by what you want to teach.',
        )}
      </p>
      <Catalog />
    </div>
  );
}
