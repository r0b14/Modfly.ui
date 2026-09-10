export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
export const localized = (lang: Locale, path = '') => `/${lang}${path}`;
export const copy = (lang: Locale, pt: string, en: string) => (lang === 'pt' ? pt : en);
export const siteUrl = 'https://modfly.design';
export const repository = 'https://github.com/r0b14/Modfly.ui';
export const release = { version: '1.1.0', published: false };
