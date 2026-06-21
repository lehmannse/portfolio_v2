'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { HexagonPattern } from '@/components/effects/hexagon-pattern';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Job } from '@/content/types';

export function Experience({
  jobs,
  title,
}: {
  jobs: Job[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const job = jobs[index];

  return (
    <Section id="experience" title={title}>
      <Card className="relative mx-auto min-h-[480px] w-full max-w-3xl overflow-hidden p-5 md:p-8">
        <HexagonPattern />
        <div className="relative z-10 flex flex-col gap-6">
          {/* Desktop: tabs */}
          <div className="hidden justify-center md:flex">
            <Tabs
              value={String(index)}
              onValueChange={(v) => setIndex(Number(v))}
            >
              <TabsList className="flex-wrap">
                {jobs.map((j, i) => (
                  <TabsTrigger key={j.workplaceBtn} value={String(i)}>
                    {j.workplaceBtn}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Mobile: select */}
          <div className="md:hidden">
            <Select
              value={String(index)}
              onValueChange={(v) => setIndex(Number(v))}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {jobs.map((j, i) => (
                  <SelectItem key={j.workplace} value={String(i)}>
                    {j.workplace}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-l-2 border-brand/40 pl-5"
            >
              <h3 className="text-lg font-bold">
                {job.position}{' '}
                <span className="font-normal text-muted-foreground">@ </span>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand hover:underline"
                >
                  {job.workplace}
                </a>
              </h3>
              {job.duration.map((d) => (
                <p key={d} className="mt-1 text-sm text-muted-foreground">
                  {d}
                </p>
              ))}
              <ul className="mt-3 list-disc space-y-2 pl-5 text-justify text-foreground/90">
                {job.description.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Card>
    </Section>
  );
}
