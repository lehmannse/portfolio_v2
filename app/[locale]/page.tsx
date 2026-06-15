import { setRequestLocale } from 'next-intl/server';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { PageBackground } from '@/components/layout/page-background';
import { getContent } from '@/lib/content';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <>
      <PageBackground />
      <Navbar
        navItems={content.navbar}
        cvLabel={content.cvLabel}
        locale={locale}
      />
      <main className="flex flex-col">
        <section
          id="landing"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-bold md:text-6xl">
            {content.landing.intro}{' '}
            <span className="text-brand">{content.landing.name}</span>
          </h1>
        </section>
      </main>
      <Footer label={content.footer} />
    </>
  );
}
