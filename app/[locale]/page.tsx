import { setRequestLocale } from 'next-intl/server';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { PageBackground } from '@/components/layout/page-background';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero';
import { MoreProjects } from '@/components/sections/more-projects';
import { Projects } from '@/components/sections/projects';
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
        <Hero landing={content.landing} />
        <About about={content.about} />
        <Experience jobs={content.jobs} title={content.experienceHeader} />
        <Projects projects={content.projects} title={content.projectsHeader} />
        <MoreProjects
          extraProjects={content.extraProjects}
          title={content.moreProjectsHeader}
          table={content.moreProjectsTable}
          btn={content.extraProjectsBtn}
        />
        <Contact title={content.contactHeader} message={content.contact} />
      </main>
      <Footer label={content.footer} />
    </>
  );
}
