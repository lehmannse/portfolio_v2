'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';

import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

export function LocaleToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const next: Locale = locale === 'pt' ? 'en' : 'pt';

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Switch language"
      title={next === 'pt' ? 'Mudar para Português' : 'Switch to English'}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.replace(pathname, { locale: next });
        });
      }}
    >
      <span className="text-base leading-none" aria-hidden>
        {locale === 'pt' ? '🇧🇷' : '🇺🇸'}
      </span>
    </Button>
  );
}
