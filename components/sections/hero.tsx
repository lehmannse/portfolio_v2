'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { Highlight } from '@/components/effects/hero-highlight';
import { Particles } from '@/components/effects/particles';
import { LinkIconBar } from '@/components/layout/link-icon-bar';
import type { PortfolioContent } from '@/content/types';
import { footerLinks } from '@/lib/links';

export function Hero({ landing }: { landing: PortfolioContent['landing'] }) {
  return (
    <section
      id="landing"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      <Particles className="absolute inset-0 -z-10" direction="down" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[100px]"
      />
      <motion.h1
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
      >
        {landing.intro} <span className="text-brand">{landing.name}</span>,{' '}
        {landing.job === 'Software Engineer' ? 'a' : 'um'}{' '}
        <Highlight className="font-bold">{landing.job}</Highlight>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 flex w-full flex-col items-center gap-4"
      >
        <LinkIconBar links={footerLinks} />
        <a
          href="#about"
          className="flex flex-col items-center gap-1 font-semibold transition-colors hover:text-brand"
        >
          {landing.more}
          <ChevronDown className="size-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
