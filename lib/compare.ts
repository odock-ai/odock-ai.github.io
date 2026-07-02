import path from 'node:path';
import type { Metadata } from 'next';
import {
  getBlogPost,
  getBlogPostPath,
  getBlogUi,
  loadLocalizedPostsFromDirectory,
  type BlogPost,
  type BlogUi,
} from '@/lib/blog';
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import {
  buildLanguageAlternates,
  canonicalBase,
  defaultRobots,
  getCanonicalUrl,
  getOpenGraphLocale,
} from '@/lib/seo';

const COMPARE_DIRECTORY = path.join(process.cwd(), 'data', 'compare');

const COMPARE_POSTS_BY_LOCALE = loadLocalizedPostsFromDirectory(COMPARE_DIRECTORY);

const COMPARE_INDEX_COPY: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'AI Gateway Comparisons: LiteLLM vs Kong vs Cloudflare vs Portkey vs Envoy',
    description:
      'Head-to-head AI gateway and LLM gateway comparisons: LiteLLM, Kong AI Gateway, Cloudflare AI Gateway, Portkey, Envoy AI Gateway, and Odock, compared on routing, guardrails, budgets, MCP support, and governance.',
  },
  fr: {
    title: 'Comparatifs AI Gateway : LiteLLM vs Kong vs Cloudflare vs Portkey vs Envoy',
    description:
      "Comparatifs directs d'AI gateways et de gateways LLM : LiteLLM, Kong AI Gateway, Cloudflare AI Gateway, Portkey, Envoy AI Gateway et Odock, comparés sur le routing, les guardrails, les budgets, le support MCP et la gouvernance.",
  },
};

const COMPARE_UI_OVERRIDES: Record<Locale, Partial<BlogUi>> = {
  en: {
    badge: 'Compare',
    title: 'AI Gateway Comparisons',
    featuredLabel: 'Featured comparison',
    allPostsLabel: 'All comparisons',
    readArticleLabel: 'Read comparison',
    backToBlogLabel: 'All comparisons',
    relatedPostsLabel: 'Related comparisons and guides',
    archiveHeadline: 'Head-to-head AI gateway breakdowns',
    archiveSummary:
      'Direct comparisons of LiteLLM, Kong AI Gateway, Cloudflare AI Gateway, Portkey, Envoy AI Gateway, and Odock.',
  },
  fr: {
    badge: 'Comparer',
    title: 'Comparatifs AI Gateway',
    featuredLabel: 'Comparatif à la une',
    allPostsLabel: 'Tous les comparatifs',
    readArticleLabel: 'Lire le comparatif',
    backToBlogLabel: 'Tous les comparatifs',
    relatedPostsLabel: 'Comparatifs et guides liés',
    archiveHeadline: 'Des comparatifs directs entre AI gateways',
    archiveSummary:
      'Des comparaisons directes de LiteLLM, Kong AI Gateway, Cloudflare AI Gateway, Portkey, Envoy AI Gateway et Odock.',
  },
};

export function getCompareIndexCopy(locale: Locale = DEFAULT_LOCALE) {
  return COMPARE_INDEX_COPY[locale];
}

export function getCompareUi(locale: Locale = DEFAULT_LOCALE): BlogUi {
  return { ...getBlogUi(locale), ...COMPARE_UI_OVERRIDES[locale] };
}

export function getAllComparePosts(locale: Locale = DEFAULT_LOCALE) {
  return COMPARE_POSTS_BY_LOCALE.map((post) => post[locale]);
}

export function getComparePost(slug: string, locale: Locale = DEFAULT_LOCALE) {
  return getAllComparePosts(locale).find((post) => post.slug === slug);
}

function getLocalizedPath(locale: Locale, pathSuffix: string) {
  return locale === DEFAULT_LOCALE ? pathSuffix : `/${locale}${pathSuffix}`;
}

export function getCompareIndexPath(locale: Locale = DEFAULT_LOCALE) {
  return getLocalizedPath(locale, '/compare');
}

export function getComparePostPath(slug: string, locale: Locale = DEFAULT_LOCALE) {
  return getLocalizedPath(locale, `/compare/${slug}`);
}

function getCompareOpenGraphImage(locale: Locale) {
  const image = locale === 'fr' ? '/odock-ai-fr.png' : '/odock-ai.png';
  return `${canonicalBase || ''}${image}`;
}

// Related links can point at other compare pages or regular blog posts.
export function getRelatedComparePosts(post: BlogPost, locale: Locale = DEFAULT_LOCALE) {
  return post.relatedSlugs
    .map((slug) => getComparePost(slug, locale) ?? getBlogPost(slug, locale))
    .filter((candidate): candidate is BlogPost => Boolean(candidate));
}

export function getRelatedComparePostPath(slug: string, locale: Locale = DEFAULT_LOCALE) {
  return getComparePost(slug, locale)
    ? getComparePostPath(slug, locale)
    : getBlogPostPath(locale, slug);
}

export function buildCompareIndexMetadata(locale: Locale = DEFAULT_LOCALE): Metadata {
  const copy = getCompareIndexCopy(locale);
  const canonical = getCanonicalUrl(locale, '/compare');
  const keywords = Array.from(new Set(getAllComparePosts(locale).flatMap((post) => post.keywords)));

  return {
    title: `${copy.title} | Odock.ai`,
    description: copy.description,
    keywords,
    applicationName: 'Odock.ai',
    metadataBase: canonicalBase ? new URL(canonicalBase) : undefined,
    alternates: {
      canonical,
      languages: buildLanguageAlternates('/compare'),
    },
    robots: defaultRobots,
    category: 'technology',
    creator: 'Odock.ai',
    publisher: 'Odock.ai',
    openGraph: {
      title: `${copy.title} | Odock.ai`,
      description: copy.description,
      type: 'website',
      url: canonical,
      siteName: 'Odock.ai',
      locale: getOpenGraphLocale(locale),
      images: [
        {
          url: getCompareOpenGraphImage(locale),
          width: 1280,
          height: 720,
          alt: 'Odock AI gateway comparisons',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${copy.title} | Odock.ai`,
      description: copy.description,
      images: [getCompareOpenGraphImage(locale)],
    },
  };
}

export function buildComparePostMetadata(locale: Locale, post: BlogPost): Metadata {
  const pathSuffix = `/compare/${post.slug}`;
  const canonical = getCanonicalUrl(locale, pathSuffix);

  return {
    title: `${post.seoTitle} | Odock.ai`,
    description: post.description,
    keywords: post.keywords,
    applicationName: 'Odock.ai',
    metadataBase: canonicalBase ? new URL(canonicalBase) : undefined,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(pathSuffix),
    },
    robots: defaultRobots,
    category: 'technology',
    creator: post.author.name,
    publisher: 'Odock.ai',
    openGraph: {
      title: `${post.seoTitle} | Odock.ai`,
      description: post.description,
      type: 'article',
      url: canonical,
      siteName: 'Odock.ai',
      locale: getOpenGraphLocale(locale),
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [
        {
          url: getCompareOpenGraphImage(locale),
          width: 1280,
          height: 720,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.seoTitle} | Odock.ai`,
      description: post.description,
      images: [getCompareOpenGraphImage(locale)],
    },
  };
}

export function buildCompareIndexStructuredData(locale: Locale = DEFAULT_LOCALE) {
  const copy = getCompareIndexCopy(locale);
  const indexUrl = getCanonicalUrl(locale, '/compare');

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${indexUrl}#webpage`,
    url: indexUrl,
    name: copy.title,
    description: copy.description,
    inLanguage: locale,
    isPartOf: `${canonicalBase}/#website`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: getAllComparePosts(locale).map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: post.title,
        url: getCanonicalUrl(locale, `/compare/${post.slug}`),
      })),
    },
  };
}

export function buildComparePostStructuredData(locale: Locale, post: BlogPost) {
  const articleUrl = getCanonicalUrl(locale, `/compare/${post.slug}`);

  const article = {
    ...articleSchema({
      title: post.title,
      description: post.description,
      slug: post.slug,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authorName: post.author.name,
    }),
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    inLanguage: locale,
    author: {
      '@type': 'Person',
      name: post.author.name,
      description: post.author.role,
      url: getCanonicalUrl(locale, '/contact'),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Odock.ai',
      logo: { '@type': 'ImageObject', url: `${canonicalBase || ''}/logo-dark.svg` },
    },
    image: [getCompareOpenGraphImage(locale)],
  };

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: getCanonicalUrl(locale) },
    { name: getCompareUi(locale).badge, url: getCanonicalUrl(locale, '/compare') },
    { name: post.title, url: articleUrl },
  ]);

  const faq = post.faq.length > 0 ? faqSchema(post.faq) : null;

  return [article, breadcrumb, faq].filter(Boolean);
}
