import type { Metadata } from 'next';
import landingSeo from '@/data/landing-seo.json';
import type { LandingContent, Locale } from '@/lib/i18n';

type Breadcrumb = { name: string; url: string };

const canonicalBase = landingSeo.canonical?.replace(/\/$/, '') || '';

const normalizeUrl = (url: string) => {
  if (!url) return canonicalBase;
  if (url.startsWith('http')) return url;
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  return canonicalBase ? `${canonicalBase}/${cleanPath}` : `/${cleanPath}`;
};

const localeToOgLocale: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  it: 'it_IT',
};

export function buildMetadata(locale: Locale, landingContent: LandingContent): Metadata {
  const ogImages = landingSeo.openGraph?.images?.map((image) => ({
    ...image,
    url: normalizeUrl(image.url),
  }));

  const title =
    landingSeo.titleTemplate && landingSeo.title
      ? { default: landingSeo.title, template: landingSeo.titleTemplate }
      : landingSeo.title;

  const localePath = `/${locale}`;
  const canonical = `${canonicalBase}${localePath}`;

  return {
    title,
    description: landingContent.hero.subheadline || landingSeo.description,
    keywords: landingSeo.keywords,
    metadataBase: canonicalBase ? new URL(canonicalBase) : undefined,
    alternates: {
      canonical,
      languages: {
        en: `${canonicalBase}/en`,
        fr: `${canonicalBase}/fr`,
        it: `${canonicalBase}/it`,
      },
    },
    robots: {
      index: landingSeo.robots?.index ?? true,
      follow: landingSeo.robots?.follow ?? true,
    },
    openGraph: {
      ...landingSeo.openGraph,
      locale: localeToOgLocale[locale],
      url: canonical,
      images: ogImages,
    },
    twitter: landingSeo.twitter,
  };
}

export function buildStructuredData(locale: Locale, landingContent: LandingContent) {
  const faqItems =
    landingContent.faq?.items?.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })) || [];

  const breadcrumbItems =
    landingSeo.schema?.breadcrumbs?.map((crumb: Breadcrumb, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: normalizeUrl(`/${locale}${crumb.url}`),
    })) || [];

  const organization =
    landingSeo.schema?.organization && Object.keys(landingSeo.schema.organization).length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          ...landingSeo.schema.organization,
          url: normalizeUrl(landingSeo.schema.organization.url),
          logo: normalizeUrl((landingSeo.schema.organization as unknown as Record<string, string>).logo || ''),
        }
      : null;

  const website =
    landingSeo.schema?.website && Object.keys(landingSeo.schema.website).length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          ...landingSeo.schema.website,
          url: normalizeUrl(`/${locale}`),
        }
      : null;

  const breadcrumbList =
    breadcrumbItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems,
        }
      : null;

  const faq =
    faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems,
        }
      : null;

  return [organization, website, breadcrumbList, faq].filter(Boolean);
}
