import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '@/lib/i18n';
import { getCanonicalUrl } from '@/lib/seo';

export const dynamic = 'force-static';

function pathForLocale(locale: Locale, path: string) {
  if (path === '/') {
    return getCanonicalUrl(locale);
  }

  return getCanonicalUrl(locale, path);
}

function languageAlternates(path: string, locales: readonly Locale[] = SUPPORTED_LOCALES) {
  return Object.fromEntries(
    locales.map((locale) => [locale, pathForLocale(locale, path)])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/enterprise', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/eu', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/mcp-gateway', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.4, changeFrequency: 'yearly' },
  ];

  const localizedStaticPages = SUPPORTED_LOCALES.flatMap((locale) =>
    staticPages
      .map((page) => ({
        url: pathForLocale(locale, page.path),
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: languageAlternates(page.path),
        },
      }))
  );

  const localizedBlogPages = SUPPORTED_LOCALES.flatMap((locale) =>
    getAllBlogPosts(locale).map((post) => ({
      url: pathForLocale(locale, `/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: languageAlternates(`/blog/${post.slug}`),
      },
    }))
  );

  return [...localizedStaticPages, ...localizedBlogPages];
}
