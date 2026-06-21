'use client';

import { ChevronDown, ChevronUp, Code2, Grid2x2, List } from 'lucide-react';
import { useState } from 'react';

import { LinkIconBar } from '@/components/layout/link-icon-bar';
import { Section } from '@/components/layout/section';
import { Tech } from '@/components/sections/tech';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { ExtraProject, PortfolioContent } from '@/content/types';

export function MoreProjects({
  extraProjects,
  title,
  table,
  btn,
}: {
  extraProjects: ExtraProject[];
  title: string;
  table: PortfolioContent['moreProjectsTable'];
  btn: PortfolioContent['extraProjectsBtn'];
}) {
  const [expanded, setExpanded] = useState(false);
  const [gridView, setGridView] = useState(true);

  const projects = expanded ? extraProjects : extraProjects.slice(0, 3);

  return (
    <Section id="more-projects" title={title} containerClassName="max-w-6xl">
      <div className="mb-6 flex justify-end gap-2">
        <Button
          variant={gridView ? 'default' : 'outline'}
          size="icon"
          aria-label="Grid view"
          aria-pressed={gridView}
          onClick={() => setGridView(true)}
        >
          <Grid2x2 className="size-4" />
        </Button>
        <Button
          variant={!gridView ? 'default' : 'outline'}
          size="icon"
          aria-label="List view"
          aria-pressed={!gridView}
          onClick={() => setGridView(false)}
        >
          <List className="size-4" />
        </Button>
      </div>

      {gridView ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card
              key={p.name}
              className="gap-4 p-5 text-start transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <Code2 className="size-9 text-brand" />
                <LinkIconBar links={p.links} />
              </div>
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-foreground/90">{p.description}</p>
              <Tech tech={p.tech} className="mt-auto justify-start" />
            </Card>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="p-3">{table.name}</th>
                <th className="p-3">{table.type}</th>
                <th className="p-3">{table.description}</th>
                <th className="p-3">{table.technologies}</th>
                <th className="p-3">{table.links}</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.name} className="border-b border-border align-top">
                  <td className="p-3 font-medium">{p.name}</td>
                  <td className="p-3 text-muted-foreground">{p.type}</td>
                  <td className="p-3">{p.description}</td>
                  <td className="p-3">
                    <Tech tech={p.tech} className="justify-start" />
                  </td>
                  <td className="p-3">
                    <LinkIconBar links={p.links} className="justify-start" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <Button variant="outline" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
          {`${btn.show} ${expanded ? btn.less : btn.more}`}
        </Button>
      </div>
    </Section>
  );
}
