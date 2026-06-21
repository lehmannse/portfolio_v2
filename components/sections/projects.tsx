import Image from 'next/image';
import { MoreHorizontal } from 'lucide-react';

import { BlurFade } from '@/components/effects/blur-fade';
import { BorderBeam } from '@/components/effects/border-beam';
import { LinkIconBar } from '@/components/layout/link-icon-bar';
import { Section } from '@/components/layout/section';
import { Tech } from '@/components/sections/tech';
import { Card } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import type { Project } from '@/content/types';
import { cn } from '@/lib/utils';

function ProjectImage({ project }: { project: Project }) {
  if (!project.pic) return null;
  const hasDark = !!project.picDark;
  const img = (cls: string, src: string) => (
    <Image
      src={src}
      alt={`${project.name} preview`}
      width={640}
      height={400}
      className={cn(
        'mx-auto max-h-[320px] w-full rounded-lg object-contain',
        cls
      )}
    />
  );
  const target = project.links?.[0]?.url;
  const content = (
    <>
      {img(hasDark ? 'dark:hidden' : '', project.pic)}
      {hasDark && img('hidden dark:block', project.picDark!)}
    </>
  );
  if (target && !project.subProjects) {
    return (
      <a href={target} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div>
      <Card className="relative gap-4 overflow-hidden p-6 text-start transition-transform hover:-translate-y-1.5">
        <BorderBeam />
        <h3 className="text-2xl font-bold">{project.name}</h3>
        {project.subtitle && (
          <p className="text-sm font-semibold text-muted-foreground">
            {project.subtitle}
          </p>
        )}
        <p className="text-justify text-foreground/90">{project.description}</p>
        <div className="flex w-full justify-end">
          {project.subProjects && project.subProjects.length > 0 ? (
            <Popover>
              <PopoverTrigger
                aria-label="Show sub-projects"
                className="text-muted-foreground transition-colors hover:text-brand"
              >
                <MoreHorizontal className="size-6" />
              </PopoverTrigger>
              <PopoverContent align="end" className="w-64">
                <div className="flex flex-col gap-4">
                  {project.subProjects.map((sp) => (
                    <div key={sp.projectName} className="text-center">
                      <p className="font-semibold">{sp.projectName}</p>
                      <LinkIconBar links={sp.links} className="mt-2" />
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            project.links && <LinkIconBar links={project.links} />
          )}
        </div>
      </Card>
      <Tech tech={project.tech} className="mt-3" />
    </div>
  );
}

export function Projects({
  projects,
  title,
}: {
  projects: Project[];
  title: string;
}) {
  return (
    <Section id="projects" title={title} containerClassName="max-w-6xl">
      <div className="flex flex-col gap-16">
        {projects.map((project, i) => {
          const cardFirst = i % 2 === 0;
          return (
            <BlurFade key={project.name}>
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div className={cn(cardFirst ? 'lg:order-1' : 'lg:order-2')}>
                  <ProjectCard project={project} />
                </div>
                <div
                  className={cn(
                    'flex items-center justify-center',
                    cardFirst ? 'lg:order-2' : 'lg:order-1'
                  )}
                >
                  <ProjectImage project={project} />
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </Section>
  );
}
