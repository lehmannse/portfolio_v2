import { cn } from '@/lib/utils';

export function Ripple({
  count = 5,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 flex items-center justify-center',
        className
      )}
    >
      {Array.from({ length: count }).map((_, i) => {
        const size = 280 + i * 70;
        const opacity = 0.24 - i * 0.04;
        return (
          <span
            key={i}
            className="absolute rounded-full border border-brand/30 bg-brand/5"
            style={{
              width: size,
              height: size,
              opacity,
              animation: `ripple 3s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
