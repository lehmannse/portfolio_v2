'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { LocaleToggle } from '@/components/layout/locale-toggle';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import type { NavItem } from '@/content/types';
import { cn } from '@/lib/utils';

export function Navbar({
  navItems,
  cvLabel,
  locale,
}: {
  navItems: NavItem[];
  cvLabel: string;
  locale: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = (
    <>
      {navItems.map((item) => (
        <a
          key={item.section}
          href={`#${item.section}`}
          className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
        >
          {item.label}
        </a>
      ))}
      <Link
        href={`/${locale}/cv`}
        className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
      >
        {cvLabel}
      </Link>
    </>
  );

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/70 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#landing" aria-label="Back to top" className="font-bold">
          <span className="text-brand">F</span>ilipe
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links}
          <div className="flex items-center gap-1">
            <LocaleToggle />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LocaleToggle />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="mt-10 flex flex-col gap-6 px-6">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.section}>
                    <a
                      href={`#${item.section}`}
                      className="text-lg font-medium transition-colors hover:text-brand"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href={`/${locale}/cv`}
                    className="text-lg font-medium transition-colors hover:text-brand"
                  >
                    {cvLabel}
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
