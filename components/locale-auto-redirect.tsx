'use client';

import { useEffect } from 'react';
import { getPreferredLocale, localizedRedirectPath, persistPreferredLocale } from '@/lib/i18n-client';

export default function LocaleAutoRedirect({ suffix = '' }: { suffix?: string }) {
  useEffect(() => {
    const locale = getPreferredLocale();
    persistPreferredLocale(locale);
    window.location.replace(localizedRedirectPath(locale, suffix));
  }, [suffix]);

  return null;
}
