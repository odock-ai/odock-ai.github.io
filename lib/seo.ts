import type { Metadata } from 'next';
import landingSeo from '@/data/landing-seo.json';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale, type SiteContent } from '@/lib/i18n';

type Breadcrumb = { name: string; url: string };

export const canonicalBase = landingSeo.canonical?.replace(/\/$/, '') || '';
const siteName = landingSeo.schema?.website?.name || 'Odock.ai';
export const defaultRobots: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

const localeToOgLocale: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
};

const localePreviewImage: Record<Locale, { url: string; width: number; height: number; alt: string }> = {
  en: {
    url: '/odock-ai.png',
    width: 1280,
    height: 720,
    alt: 'Odock.ai AI governance gateway landing page',
  },
  fr: {
    url: '/odock-ai-fr.png',
    width: 1280,
    height: 720,
    alt: "Odock.ai page d'accueil de la passerelle de gouvernance IA",
  },
};

function withTrailingSlash(path: string) {
  if (!path || path === '/') return '/';
  const [pathname, fragment] = path.split('#');
  const normalizedPathname = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return fragment ? `${normalizedPathname}#${fragment}` : normalizedPathname;
}

function withCanonicalBase(path: string) {
  const normalizedPath = withTrailingSlash(path);
  return canonicalBase ? `${canonicalBase}${normalizedPath}` : normalizedPath;
}

function normalizeUrl(url: string) {
  if (!url) return canonicalBase;
  if (url.startsWith('http')) return url;
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  return canonicalBase ? `${canonicalBase}${withTrailingSlash(`/${cleanPath}`)}` : withTrailingSlash(`/${cleanPath}`);
}

function normalizeAssetUrl(url: string) {
  if (!url) return canonicalBase;
  if (url.startsWith('http')) return url;
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  return canonicalBase ? `${canonicalBase}${cleanPath}` : cleanPath;
}

function getCanonicalPath(locale: Locale, pathSuffix = '') {
  return locale === DEFAULT_LOCALE ? pathSuffix || '/' : `/${locale}${pathSuffix}`;
}

export function getCanonicalUrl(locale: Locale, pathSuffix = '') {
  return withCanonicalBase(getCanonicalPath(locale, pathSuffix));
}

export function buildLanguageAlternates(pathSuffix = '') {
  return {
    ...Object.fromEntries(
      SUPPORTED_LOCALES.map((locale) => [
        locale,
        getCanonicalUrl(locale, pathSuffix),
      ])
    ),
    'x-default': withCanonicalBase(pathSuffix || '/'),
  };
}

export function getOpenGraphLocale(locale: Locale) {
  return localeToOgLocale[locale];
}

function buildOgImages() {
  return landingSeo.openGraph?.images?.map((image) => ({
    ...image,
    url: normalizeUrl(image.url),
  }));
}

function buildPreviewImages(locale: Locale) {
  const localizedImage = localePreviewImage[locale];
  const images = [
    {
      ...localizedImage,
      url: normalizeAssetUrl(localizedImage.url),
    },
    ...(buildOgImages() ?? []),
  ];

  return images.filter(
    (image, index) => images.findIndex((candidate) => candidate.url === image.url) === index
  );
}

export function buildRootMetadata(content: SiteContent): Metadata {
  const canonical = getCanonicalUrl(DEFAULT_LOCALE);

  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: landingSeo.keywords,
    applicationName: siteName,
    metadataBase: canonicalBase ? new URL(canonicalBase) : undefined,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(),
    },
    robots: defaultRobots,
    category: 'technology',
    creator: siteName,
    publisher: siteName,
    referrer: 'origin-when-cross-origin',
    openGraph: {
      ...landingSeo.openGraph,
      title: content.seo.title,
      description: content.seo.description,
      locale: localeToOgLocale.en,
      url: canonical,
      siteName,
      images: buildPreviewImages(DEFAULT_LOCALE),
    },
    twitter: {
      ...landingSeo.twitter,
      title: content.seo.title,
      description: content.seo.description,
      images: buildPreviewImages(DEFAULT_LOCALE).map(({ url, alt }) => ({ url, alt })),
    },
  };
}

export function buildMetadata(locale: Locale, content: SiteContent): Metadata {
  const canonical = getCanonicalUrl(locale);

  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: landingSeo.keywords,
    applicationName: siteName,
    metadataBase: canonicalBase ? new URL(canonicalBase) : undefined,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(),
    },
    robots: defaultRobots,
    category: 'technology',
    creator: siteName,
    publisher: siteName,
    referrer: 'origin-when-cross-origin',
    openGraph: {
      ...landingSeo.openGraph,
      title: content.seo.title,
      description: content.seo.description,
      locale: localeToOgLocale[locale],
      url: canonical,
      siteName,
      images: buildPreviewImages(locale),
    },
    twitter: {
      ...landingSeo.twitter,
      title: content.seo.title,
      description: content.seo.description,
      images: buildPreviewImages(locale).map(({ url, alt }) => ({ url, alt })),
    },
  };
}

export function buildSubpageMetadata(
  locale: Locale,
  pathSuffix: string,
  title: string,
  description: string
): Metadata {
  const canonical = getCanonicalUrl(locale, pathSuffix);

  return {
    title,
    description,
    keywords: landingSeo.keywords,
    applicationName: siteName,
    metadataBase: canonicalBase ? new URL(canonicalBase) : undefined,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(pathSuffix),
    },
    robots: defaultRobots,
    category: 'technology',
    creator: siteName,
    publisher: siteName,
    referrer: 'origin-when-cross-origin',
    openGraph: {
      ...landingSeo.openGraph,
      title,
      description,
      locale: localeToOgLocale[locale],
      url: canonical,
      siteName,
      images: buildPreviewImages(locale),
    },
    twitter: {
      ...landingSeo.twitter,
      title,
      description,
      images: buildPreviewImages(locale).map(({ url, alt }) => ({ url, alt })),
    },
  };
}

export function buildStructuredData(locale: Locale, content: SiteContent) {
  const pageUrl = getCanonicalUrl(locale);
  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: content.seo.title,
    description: content.seo.description,
    inLanguage: locale,
    isPartOf: `${canonicalBase}/#website`,
    about: [
      'AI governance platform',
      'AI gateway',
      'MCP gateway',
      'AI agents',
      'EU AI Act readiness',
    ],
  };

  const breadcrumbItems =
    landingSeo.schema?.breadcrumbs?.map((crumb: Breadcrumb, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: normalizeUrl(getCanonicalPath(locale, crumb.url)),
    })) || [];

  const organization =
    landingSeo.schema?.organization && Object.keys(landingSeo.schema.organization).length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          ...landingSeo.schema.organization,
          url: normalizeUrl(landingSeo.schema.organization.url),
          logo: normalizeUrl(
            (landingSeo.schema.organization as unknown as Record<string, string>).logo || ''
          ),
        }
      : null;

  const website =
    landingSeo.schema?.website && Object.keys(landingSeo.schema.website).length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          ...landingSeo.schema.website,
          url: canonicalBase,
          name: content.header.brand.name,
          inLanguage: locale,
          publisher: {
            '@id': `${canonicalBase}/#organization`,
          },
        }
      : null;

  const softwareApplication = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Odock.ai',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: pageUrl,
    description: content.seo.description,
    inLanguage: locale,
    publisher: {
      '@id': `${canonicalBase}/#organization`,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      category: 'Open Source',
    },
    featureList: [
      'LLM and MCP gateway',
      'Virtual API keys and access grants',
      'Budget reservation and quota enforcement',
      'Prompt and tool security guardrails',
      'Routing across approved providers',
      'Audit-ready usage records',
      'EU AI Act governance workflows',
    ],
  };

  const breadcrumbList =
    breadcrumbItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems,
        }
      : null;

  const faq =
    content.faq.items.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: content.faq.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return [organization, website, webpage, softwareApplication, breadcrumbList, faq].filter(Boolean);
}
