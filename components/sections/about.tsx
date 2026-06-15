import Image from 'next/image';

import { BlurFade } from '@/components/effects/blur-fade';
import { Ripple } from '@/components/effects/ripple';
import { Section } from '@/components/layout/section';
import { HighlightedText } from '@/components/sections/highlighted-text';
import type { PortfolioContent } from '@/content/types';

export function About({ about }: { about: PortfolioContent['about'] }) {
  return (
    <Section id="about" title={about.header}>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <BlurFade className="order-2 md:order-1">
          <div className="flex flex-col gap-3 text-justify leading-relaxed text-foreground/90">
            <p className="text-center text-lg font-bold italic">
              {about.headline}
            </p>
            <p>{about.intro}</p>
            <HighlightedText
              text={about.education.text}
              highlights={about.education.highlights}
            />
            <HighlightedText
              text={about.skills.text}
              highlights={about.skills.highlights}
            />
            <a
              href="#contact"
              className="mt-2 self-center text-sm font-bold transition-colors hover:text-brand"
            >
              {about.cta}
            </a>
          </div>
        </BlurFade>

        <BlurFade delay={0.15} className="order-1 flex justify-center md:order-2">
          <a
            href="https://www.linkedin.com/in/filipe-lehmann-pereira/"
            target="_blank"
            rel="noreferrer"
            aria-label="Filipe Lehmann on LinkedIn"
            className="relative flex size-[300px] items-center justify-center"
          >
            <Ripple />
            <Image
              src="/me.jpg"
              alt="Filipe Lehmann"
              width={300}
              height={300}
              priority
              className="relative z-10 size-[280px] rounded-full object-cover shadow-lg transition-transform hover:scale-105"
            />
          </a>
        </BlurFade>
      </div>
    </Section>
  );
}
