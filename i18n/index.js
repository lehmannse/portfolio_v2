import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enUsTranslation from './locales/en-us';
import ptBrTranslations from './locales/pt-br';

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng',
};

// Fix for hydration issues - determine if we're on the client side
const isClient = typeof window !== 'undefined';

// Configure i18n with conditional language detection
let i18nInstance = i18n;

// Only use language detector on client side
if (isClient) {
  i18nInstance = i18nInstance.use(LanguageDetector);
}

i18nInstance
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false, // Set to false to reduce console noise
    fallbackLng: 'en',
    useSuspense: false,
    lng: 'en', // Default to English for server-side rendering
    detection: isClient ? options : null, // Only use detection on client
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          ...enUsTranslation,
        },
      },
      pt: {
        translation: {
          ...ptBrTranslations,
        },
      },
    },
  });

export default i18n;
