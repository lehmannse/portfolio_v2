import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function Tech({
  tech,
  className,
}: {
  tech: string[];
  className?: string;
}) {
  return (
    <div className={cn('flex flex-wrap justify-center gap-2', className)}>
      {tech.map((t) => (
        <Badge key={t} variant="secondary" className="font-mono text-xs">
          {t}
        </Badge>
      ))}
    </div>
  );
}
