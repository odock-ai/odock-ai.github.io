import type { Metadata } from 'next';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, getSiteContent, type Locale, type SiteContent } from '@/lib/i18n';

type Breadcrumb = { name: string; url: string };

const defaultSiteContent = getSiteContent(DEFAULT_LOCALE);
const siteName = defaultSiteContent.seo.schema?.website?.name || defaultSiteContent.header.brand.name;
export const canonicalBase = defaultSiteContent.seo.canonical?.replace(/\/$/, '') || '';
export const defaultRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  } as const,
} satisfies Metadata['robots'];

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

function getSeoConfig(content: SiteContent) {
  return content.seo;
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

function buildOgImages(content: SiteContent) {
  return getSeoConfig(content).openGraph?.images?.map((image) => ({
    ...image,
    url: normalizeUrl(image.url),
  }));
}

function buildPreviewImages(locale: Locale, content: SiteContent) {
  const localizedImage = localePreviewImage[locale];
  const images = [
    {
      ...localizedImage,
      url: normalizeAssetUrl(localizedImage.url),
    },
    ...(buildOgImages(content) ?? []),
  ];

  return images.filter(
    (image, index) => images.findIndex((candidate) => candidate.url === image.url) === index
  );
}

export function buildRootMetadata(content: SiteContent): Metadata {
  const canonical = getCanonicalUrl(DEFAULT_LOCALE);
  const seo = getSeoConfig(content);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    applicationName: siteName,
    metadataBase: canonicalBase ? new URL(canonicalBase) : undefined,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(),
    },
    robots: (seo.robots as Metadata['robots'] | undefined) ?? defaultRobots,
    category: 'technology',
    creator: siteName,
    publisher: siteName,
    referrer: 'origin-when-cross-origin',
    openGraph: {
      ...seo.openGraph,
      title: seo.title,
      description: seo.description,
      locale: localeToOgLocale.en,
      url: canonical,
      siteName,
      images: buildPreviewImages(DEFAULT_LOCALE, content),
    },
    twitter: {
      ...seo.twitter,
      title: seo.title,
      description: seo.description,
      images: buildPreviewImages(DEFAULT_LOCALE, content).map(({ url, alt }) => ({ url, alt })),
    },
  };
}

export function buildMetadata(locale: Locale, content: SiteContent): Metadata {
  const canonical = getCanonicalUrl(locale);
  const seo = getSeoConfig(content);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    applicationName: siteName,
    metadataBase: canonicalBase ? new URL(canonicalBase) : undefined,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(),
    },
    robots: (seo.robots as Metadata['robots'] | undefined) ?? defaultRobots,
    category: 'technology',
    creator: siteName,
    publisher: siteName,
    referrer: 'origin-when-cross-origin',
    openGraph: {
      ...seo.openGraph,
      title: seo.title,
      description: seo.description,
      locale: localeToOgLocale[locale],
      url: canonical,
      siteName,
      images: buildPreviewImages(locale, content),
    },
    twitter: {
      ...seo.twitter,
      title: seo.title,
      description: seo.description,
      images: buildPreviewImages(locale, content).map(({ url, alt }) => ({ url, alt })),
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
  const seo = getSeoConfig(getSiteContent(locale));

  return {
    title,
    description,
    keywords: seo.keywords,
    applicationName: siteName,
    metadataBase: canonicalBase ? new URL(canonicalBase) : undefined,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(pathSuffix),
    },
    robots: (seo.robots as Metadata['robots'] | undefined) ?? defaultRobots,
    category: 'technology',
    creator: siteName,
    publisher: siteName,
    referrer: 'origin-when-cross-origin',
    openGraph: {
      ...seo.openGraph,
      title,
      description,
      locale: localeToOgLocale[locale],
      url: canonical,
      siteName,
      images: buildPreviewImages(locale, getSiteContent(locale)),
    },
    twitter: {
      ...seo.twitter,
      title,
      description,
      images: buildPreviewImages(locale, getSiteContent(locale)).map(({ url, alt }) => ({ url, alt })),
    },
  };
}

export function buildStructuredData(locale: Locale, content: SiteContent) {
  const pageUrl = getCanonicalUrl(locale);
  const seo = getSeoConfig(content);
  const siteSchema = seo.schema;
  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: seo.title,
    description: seo.description,
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
    siteSchema?.breadcrumbs?.map((crumb: Breadcrumb, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: normalizeUrl(getCanonicalPath(locale, crumb.url)),
    })) || [];

  const organization =
    siteSchema?.organization && Object.keys(siteSchema.organization).length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          ...siteSchema.organization,
          url: normalizeUrl(siteSchema.organization.url),
          logo: normalizeUrl((siteSchema.organization as unknown as Record<string, string>).logo || ''),
        }
      : null;

  const website =
    siteSchema?.website && Object.keys(siteSchema.website).length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          ...siteSchema.website,
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
    name: content.header.brand.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: pageUrl,
    description: seo.description,
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

export function buildEnterpriseStructuredData(locale: Locale, content: SiteContent) {
  const pageUrl = getCanonicalUrl(locale, '/enterprise');
  const seo = getSeoConfig(content);
  const organization =
    seo.schema?.organization && Object.keys(seo.schema.organization).length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          ...seo.schema.organization,
          url: normalizeUrl(seo.schema.organization.url),
          logo: normalizeUrl((seo.schema.organization as unknown as Record<string, string>).logo || ''),
        }
      : null;

  const softwareApplication = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: content.header.brand.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: pageUrl,
    description: content.enterprisePage.metadata.description,
    publisher: {
      '@id': `${canonicalBase}/#organization`,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      category: 'Enterprise software',
    },
    featureList: [
      ...content.enterprisePage.capabilities.leftItems.map((item) => item.title),
      ...content.enterprisePage.capabilities.rightItems.map((item) => item.title),
    ],
  };

  const faq =
    content.enterprisePage.faq.items.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: content.enterprisePage.faq.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: content.enterprisePage.metadata.title,
    description: content.enterprisePage.metadata.description,
    inLanguage: locale,
    publisher: {
      '@id': `${canonicalBase}/#organization`,
    },
  };

  return [organization, webpage, softwareApplication, faq].filter(Boolean);
}

export function buildEuStructuredData(locale: Locale, content: SiteContent) {
  const pageUrl = getCanonicalUrl(locale, '/eu');
  const seo = getSeoConfig(content);
  const organization =
    seo.schema?.organization && Object.keys(seo.schema.organization).length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          ...seo.schema.organization,
          url: normalizeUrl(seo.schema.organization.url),
          logo: normalizeUrl((seo.schema.organization as unknown as Record<string, string>).logo || ''),
        }
      : null;

  const faq =
    content.euPage.faq.items.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: content.euPage.faq.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: content.euPage.metadata.title,
    description: content.euPage.metadata.description,
    inLanguage: locale,
  };

  return [organization, webpage, faq].filter(Boolean);
}

export function buildMcpGatewayStructuredData(locale: Locale, content: SiteContent) {
  const pageUrl = getCanonicalUrl(locale, '/mcp-gateway');
  const seo = getSeoConfig(content);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: content.mcpGatewayPage.metadata.title,
      description: content.mcpGatewayPage.metadata.description,
      isPartOf: canonicalBase || undefined,
      inLanguage: locale,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: content.mcpGatewayPage.title,
      description: content.mcpGatewayPage.metadata.description,
      author: {
        '@type': 'Organization',
        name: seo.schema?.organization?.name || content.header.brand.name,
      },
      publisher: {
        '@type': 'Organization',
        name: seo.schema?.organization?.name || content.header.brand.name,
      },
      mainEntityOfPage: pageUrl,
    },
  ];
}
