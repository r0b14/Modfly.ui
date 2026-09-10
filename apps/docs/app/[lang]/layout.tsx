import type { Metadata } from 'next';
import { Geist, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import '@modfly/ui/styles.css';
import '@modfly/ui-avamec/styles.css';
import '../globals.css';
import { notFound } from 'next/navigation';
import { isLocale, locales } from '@/lib/i18n';
import { LocaleProvider } from '@/components/LocaleProvider';
import { SiteShell } from '@/components/SiteShell';

const geistSans = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument',
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://modfly.design'),
  title: { default: 'Modfly UI', template: '%s · Modfly UI' },
  robots:
    process.env.VERCEL_ENV === 'preview'
      ? { index: false, follow: false }
      : { index: true, follow: true },
};
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang === 'pt' ? 'pt-BR' : 'en'}>
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LocaleProvider lang={lang}>
          <SiteShell>{children}</SiteShell>
        </LocaleProvider>
      </body>
    </html>
  );
}
