import enContent from '@/data/landing-content-en.json';
import frContent from '@/data/landing-content-fr.json';
import itContent from '@/data/landing-content-it.json';

export const SUPPORTED_LOCALES = ['en', 'fr', 'it'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  it: 'IT',
};

export type LandingContent = typeof enContent;
type Primitive = string | number | boolean | null;
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Primitive
    ? T[K]
    : T[K] extends Array<infer U>
      ? Array<DeepPartial<U>>
      : DeepPartial<T[K]>;
};

const TRANSLATIONS: Record<Locale, DeepPartial<LandingContent>> = {
  en: enContent,
  fr: frContent,
  it: itContent,
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

export function getLandingContent(locale: string): LandingContent {
  const normalized = normalizeLocale(locale);
  const overrides = TRANSLATIONS[normalized];
  return deepMerge(enContent, overrides);
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (!segments.length) return '/';
  if (!isLocale(segments[0])) return pathname;
  const rest = segments.slice(1).join('/');
  return rest ? `/${rest}` : '/';
}

export function localizePath(path: string, locale: Locale): string {
  if (!path) return `/${locale}`;
  if (path.startsWith('http')) return path;

  if (path.startsWith('#')) {
    return `/${locale}/${path}`;
  }

  if (!path.startsWith('/')) {
    return path;
  }

  if (path === '/') {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}
