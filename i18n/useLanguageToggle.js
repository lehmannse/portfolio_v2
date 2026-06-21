import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function useLanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = useCallback(() => {
    if (typeof window === 'undefined') return;

    const { scrollY } = window;
    const current = i18n.resolvedLanguage || 'en';
    const next = current === 'pt' ? 'en' : 'pt';

    i18n.changeLanguage(next).then(() => {
      document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en';
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, left: 0, behavior: 'instant' });
      });
    });
  }, [i18n]);

  const setLanguage = useCallback(
    (lng) => {
      if (typeof window === 'undefined') return;

      const { scrollY } = window;
      const next = lng === 'pt' ? 'pt' : 'en';

      i18n.changeLanguage(next).then(() => {
        document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en';
        requestAnimationFrame(() => {
          window.scrollTo({ top: scrollY, left: 0, behavior: 'instant' });
        });
      });
    },
    [i18n]
  );

  return {
    currentLanguage: i18n.resolvedLanguage || 'en',
    toggleLanguage,
    setLanguage,
  };
}
