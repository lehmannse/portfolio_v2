import { BlurFade } from '@/components/effects/blur-fade';
import { cn } from '@/lib/utils';

export function Section({
  id,
  title,
  children,
  className,
  containerClassName,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 w-full px-4 py-16 sm:px-6 md:py-24',
        className
      )}
    >
      <div className={cn('mx-auto w-full max-w-5xl', containerClassName)}>
        {title && (
          <BlurFade>
            <h2 className="mb-10 text-center text-3xl font-bold text-brand md:text-4xl">
              {title}
            </h2>
          </BlurFade>
        )}
        {children}
      </div>
    </section>
  );
}
