import { Fragment } from 'react';

import type { Highlight } from '@/content/types';
import { cn } from '@/lib/utils';

export function HighlightedText({
  text,
  highlights,
  className,
}: {
  text: string;
  highlights: Highlight[];
  className?: string;
}) {
  const sorted = [...highlights].sort(
    (a, b) => text.indexOf(a.text) - text.indexOf(b.text)
  );

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  sorted.forEach((h, idx) => {
    const index = text.indexOf(h.text, lastIndex);
    if (index === -1) return;

    if (index > lastIndex) {
      elements.push(
        <Fragment key={`t-${idx}`}>
          {text.substring(lastIndex, index)}
        </Fragment>
      );
    }

    const cls = cn(
      'text-brand',
      h.style === 'strong' ? 'font-bold' : 'font-normal'
    );

    if (h.url) {
      elements.push(
        <a
          key={`h-${idx}`}
          href={h.url}
          target="_blank"
          rel="noreferrer"
          className={cn(cls, 'hover:underline')}
        >
          {h.text}
        </a>
      );
    } else {
      elements.push(
        <span key={`h-${idx}`} className={cls}>
          {h.text}
        </span>
      );
    }

    lastIndex = index + h.text.length;
  });

  if (lastIndex < text.length) {
    elements.push(<Fragment key="t-final">{text.substring(lastIndex)}</Fragment>);
  }

  return <p className={className}>{elements}</p>;
}
