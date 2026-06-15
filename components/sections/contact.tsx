import { BlurFade } from '@/components/effects/blur-fade';
import { Particles } from '@/components/effects/particles';
import { LinkIconBar } from '@/components/layout/link-icon-bar';
import { Section } from '@/components/layout/section';
import { contactLinks } from '@/lib/links';

export function Contact({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="relative">
      <Particles
        className="absolute inset-0 -z-10"
        direction="up"
        quantity={36}
      />
      <Section id="contact" title={title} className="min-h-[70vh]">
        <BlurFade>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-center">
            <p className="text-xl text-foreground/90">{message}</p>
            <LinkIconBar links={contactLinks} className="scale-110" />
          </div>
        </BlurFade>
      </Section>
    </div>
  );
}
