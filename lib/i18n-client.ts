'use client';

import { DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/i18n';

const STORAGE_KEY = 'NEXT_LOCALE';

function detectFromNavigator(): Locale {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const language of languages) {
    const base = language.toLowerCase().split('-')[0];
    if (isLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}

export function getPreferredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)?.toLowerCase();
    if (stored && isLocale(stored)) return stored;
  } catch {
    // Ignore storage failures and fallback to browser detection.
  }

  if (typeof document !== 'undefined') {
    const cookie = document.cookie
      .split(';')
      .map((part) => part.trim())
      .find((part) => part.startsWith(`${STORAGE_KEY}=`));
    const cookieValue = cookie?.split('=')[1]?.toLowerCase();
    if (cookieValue && isLocale(cookieValue)) return cookieValue;
  }

  return detectFromNavigator();
}

export function persistPreferredLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore persistence failures.
  }

  document.cookie = `${STORAGE_KEY}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}

export function localizedRedirectPath(locale: Locale, suffix = ''): string {
  const cleanSuffix = suffix.startsWith('/') ? suffix : `/${suffix}`;
  const finalSuffix = cleanSuffix === '/' ? '' : cleanSuffix;
  return `/${locale}${finalSuffix}/`;
}
