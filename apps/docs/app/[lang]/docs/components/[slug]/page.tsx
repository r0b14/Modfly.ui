import { notFound } from 'next/navigation';
import catalog from '@/generated/catalog.json';
import { ComponentDoc } from '@/components/docs/ComponentDoc';
import { editorial } from '@/content/components';
import { isLocale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
type Props = { params: Promise<{ lang: string; slug: string }> };
export function generateStaticParams() {
  return catalog.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  const item = catalog.find((item) => item.slug === slug);
  if (!isLocale(lang) || !item) return {};
  return pageMetadata(
    lang,
    `/docs/components/${slug}`,
    item.name,
    editorial(slug, lang).description,
  );
}
export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !catalog.some((item) => item.slug === slug)) notFound();
  return <ComponentDoc slug={slug} lang={lang} />;
}
