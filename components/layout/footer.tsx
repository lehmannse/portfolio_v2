'use client';

import { ChevronUp } from 'lucide-react';

import { LinkIconBar } from '@/components/layout/link-icon-bar';
import { footerLinks } from '@/lib/links';

export function Footer({ label }: { label: string }) {
  return (
    <footer className="w-full px-4 pb-10 pt-6 text-center">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="group mx-auto flex flex-col items-center gap-1 transition-colors hover:text-brand"
      >
        <ChevronUp className="size-5 animate-bounce" />
        <span className="text-sm font-semibold">{label}</span>
      </button>
      <LinkIconBar links={footerLinks} className="mt-4" />
    </footer>
  );
}
