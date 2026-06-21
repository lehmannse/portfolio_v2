import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

import { CvDocument } from '@/components/cv/cv-document';
import { PrintButton } from '@/components/cv/print-button';
import { getCvContent } from '@/lib/content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const cv = getCvContent(locale);
  return {
    title: `${cv.name} — ${cv.headline}`,
    description: cv.summary.slice(0, 160),
  };
}

export default async function CvPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const cv = getCvContent(locale);

  return (
    <main className="min-h-screen bg-background px-4 py-8 print:p-0">
      <div className="mx-auto mb-4 flex w-full max-w-[210mm] items-center justify-between print:hidden">
        <Link
          href={`/${locale}`}
          className="text-sm text-muted-foreground hover:text-brand"
        >
          ← {locale === 'pt' ? 'Voltar ao portfólio' : 'Back to portfolio'}
        </Link>
        <PrintButton label={cv.labels.print} />
      </div>
      <CvDocument cv={cv} />
    </main>
  );
}
