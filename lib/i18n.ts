import enContent from '@/data/site-content-en.json';
import frContent from '@/data/site-content-fr.json';

export const SUPPORTED_LOCALES = ['en', 'fr'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';
export const NON_DEFAULT_LOCALES = SUPPORTED_LOCALES.filter(
  (locale): locale is Exclude<Locale, typeof DEFAULT_LOCALE> => locale !== DEFAULT_LOCALE
);

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
};

export type SiteContent = typeof enContent;

type Primitive = string | number | boolean | null;
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Primitive
    ? T[K]
    : T[K] extends Array<infer U>
      ? Array<DeepPartial<U>>
      : DeepPartial<T[K]>;
};

const TRANSLATIONS: Record<Locale, DeepPartial<SiteContent>> = {
  en: enContent,
  fr: frContent,
};

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function normalizeLocale(value?: string): Locale {
  if (value && isLocale(value)) return value;
  return DEFAULT_LOCALE;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function deepMerge<T>(base: T, override: DeepPartial<T>): T {
  if (Array.isArray(base) && Array.isArray(override)) {
    return override.length ? (override as T) : base;
  }

  if (isObject(base) && isObject(override)) {
    const merged: Record<string, unknown> = { ...base };
    const overrideRecord = override as Record<string, unknown>;

    for (const key of Object.keys(overrideRecord)) {
      const overrideValue = overrideRecord[key];
      if (overrideValue === undefined) continue;

      const baseValue = (base as Record<string, unknown>)[key];
      if (Array.isArray(baseValue) && Array.isArray(overrideValue)) {
        merged[key] = overrideValue.length ? overrideValue : baseValue;
      } else if (isObject(baseValue) && isObject(overrideValue)) {
        merged[key] = deepMerge(
          baseValue,
          overrideValue as DeepPartial<Record<string, unknown>>
        );
      } else {
        merged[key] = overrideValue;
      }
    }

    return merged as T;
  }

  return (override as T) ?? base;
}

export function getSiteContent(locale: string): SiteContent {
  const normalized = normalizeLocale(locale);
  return deepMerge(enContent, TRANSLATIONS[normalized]);
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (!segments.length) return '/';
  if (!isLocale(segments[0])) return pathname;
  const rest = segments.slice(1).join('/');
  return rest ? `/${rest}` : '/';
}

export function localizePath(path: string, locale: Locale): string {
  const localePrefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;

  if (!path) return localePrefix || '/';
  if (path.startsWith('http')) return path;

  if (path.startsWith('#')) {
    return localePrefix ? `${localePrefix}/${path}` : `/${path}`;
  }

  if (!path.startsWith('/')) return path;
  if (path === '/') return localePrefix || '/';

  return `${localePrefix}${path}`;
}
