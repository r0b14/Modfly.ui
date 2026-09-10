import type { MetadataRoute } from 'next';
import catalog from '@/generated/catalog.json';
import { guideSlugs } from '@/content/guides';
import { locales, siteUrl } from '@/lib/i18n';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/docs/components',
    ...catalog.map((item) => `/docs/components/${item.slug}`),
    ...guideSlugs.map((slug) => `/docs/getting-started/${slug}`),
  ];
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${siteUrl}/${lang}${path}`,
      alternates: { languages: { 'pt-BR': `${siteUrl}/pt${path}`, en: `${siteUrl}/en${path}` } },
    })),
  );
}
