'use client';
import { createContext, useContext } from 'react';
import type { Locale } from '@/lib/i18n';
const LocaleContext = createContext<Locale>('pt');
export function LocaleProvider({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={lang}>{children}</LocaleContext.Provider>;
}
export const useLocale = () => useContext(LocaleContext);
