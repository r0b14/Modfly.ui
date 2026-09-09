import catalog from '@/generated/navigation.json';
import { editorial } from '@/content/components';
import { guides, guideSlugs } from '@/content/guides';
import { copy, type Locale } from './i18n';
export function navigation(lang: Locale) {
  return [
    {
      title: copy(lang, 'Primeiros passos', 'Getting started'),
      items: guideSlugs.map((slug) => ({
        title: guides[slug][lang].title,
        description: guides[slug][lang].description,
        path: `/docs/getting-started/${slug}`,
      })),
    },
    ...['Átomos', 'Moléculas', 'Organismos', 'Templates'].map((category, i) => ({
      title: lang === 'pt' ? category : ['Atoms', 'Molecules', 'Organisms', 'Templates'][i],
      items: catalog
        .filter((item) => item.category === category)
        .map((item) => ({
          title: item.name,
          description: editorial(item.slug, lang).description,
          path: `/docs/components/${item.slug}`,
        })),
    })),
  ];
}
export function normalizeSearch(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}
