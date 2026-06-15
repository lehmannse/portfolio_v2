import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';

import { ThemeProvider } from '@/components/theme-provider';
import { type Locale, routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F8FA' },
    { media: '(prefers-color-scheme: dark)', color: '#252934' },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const description =
    locale === 'pt'
      ? 'Portfólio pessoal de Filipe Lehmann — Engenheiro de Software'
      : "Filipe Lehmann's personal portfolio — Software Engineer";

  return {
    metadataBase: new URL('https://filipelehmann.vercel.app'),
    title: 'Filipe Lehmann — Software Engineer',
    description,
    icons: {
      icon: '/favicon.ico',
      apple: '/logo192.png',
    },
    manifest: '/manifest.json',
    openGraph: {
      type: 'website',
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      url: `https://filipelehmann.vercel.app/${locale}`,
      title: 'Filipe Lehmann — Software Engineer',
      description,
      images: ['/logo512.png'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
