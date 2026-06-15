import { cn } from '@/lib/utils';

/** Animated beam traveling around a relatively-positioned parent (Magic UI style). */
export function BorderBeam({
  className,
  size = 60,
  duration = 8,
  delay = 0,
}: {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
    >
      <div
        className={cn(
          'absolute aspect-square bg-gradient-to-l from-brand via-sky-300 to-transparent opacity-0 [offset-anchor:90%_50%] [offset-path:rect(0_auto_auto_0_round_var(--radius))] group-hover:opacity-100',
          className
        )}
        style={
          {
            width: size,
            offsetDistance: '0%',
            animation: `border-beam ${duration}s linear ${delay}s infinite`,
            opacity: 1,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
