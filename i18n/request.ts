import { getRequestConfig } from 'next-intl/server';

import { type Locale, routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale =
    requested && routing.locales.includes(requested as Locale)
      ? requested
      : routing.defaultLocale;

  return {
    locale,
    // Copy is served through the typed content layer (`content/`),
    // so next-intl messages stay intentionally empty.
    messages: {},
  };
});
