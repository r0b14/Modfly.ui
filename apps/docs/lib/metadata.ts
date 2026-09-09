import type { Metadata } from 'next';
import { siteUrl, type Locale } from './i18n';
export function pageMetadata(
  lang: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = `${siteUrl}/${lang}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'pt-BR': `${siteUrl}/pt${path}`,
        en: `${siteUrl}/en${path}`,
        'x-default': `${siteUrl}/pt${path}`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Modfly UI',
      title,
      description,
      url,
      locale: lang === 'pt' ? 'pt_BR' : 'en_US',
      images: [{ url: `${siteUrl}/share.png`, width: 1200, height: 630, alt: 'Modfly UI' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${siteUrl}/share.png`] },
  };
}
