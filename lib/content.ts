import cvEn from '@/content/cv/en';
import cvPt from '@/content/cv/pt';
import { CvContent } from '@/content/cv/types';
import en from '@/content/en';
import pt from '@/content/pt';
import { PortfolioContent } from '@/content/types';

const portfolio: Record<string, PortfolioContent> = { en, pt };
const cv: Record<string, CvContent> = { en: cvEn, pt: cvPt };

export function getContent(locale: string): PortfolioContent {
  return portfolio[locale] ?? portfolio.en;
}

export function getCvContent(locale: string): CvContent {
  return cv[locale] ?? cv.en;
}
