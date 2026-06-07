import { NextResponse } from 'next/server';
import landingSeo from '@/data/landing-seo.json';
import { getAllBlogPosts } from '@/lib/blog';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '@/lib/i18n';
import { buildLanguageAlternates } from '@/lib/seo';

const canonicalBase = landingSeo.canonical?.replace(/\/$/, '') || '';
const withBase = (path: string) => (canonicalBase ? `${canonicalBase}${path}` : path);

type SitemapUrl = {
  path: string;
  locale: Locale;
  changefreq: string;
  priority: string;
  lastmod?: string;
};

export const dynamic = 'force-static';

function getPath(locale: Locale, path: string) {
  if (locale === DEFAULT_LOCALE) {
    return path === '/' ? '/' : `${path}/`;
  }

  return path === '/' ? `/${locale}/` : `/${locale}${path}/`;
}

function buildAlternates(path: string) {
  return Object.entries(buildLanguageAlternates(path))
    .map(([hreflang, href]) => `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`)
    .join('');
}

export function GET() {
  const lastModified = new Date().toISOString();
  const defaultUrls: SitemapUrl[] = [
    { path: '/', locale: DEFAULT_LOCALE, changefreq: 'daily', priority: '1.0' },
    { path: '/enterprise', locale: DEFAULT_LOCALE, changefreq: 'weekly', priority: '0.8' },
    { path: '/eu', locale: DEFAULT_LOCALE, changefreq: 'weekly', priority: '0.8' },
    { path: '/mcp-gateway', locale: DEFAULT_LOCALE, changefreq: 'weekly', priority: '0.9' },
    { path: '/blog', locale: DEFAULT_LOCALE, changefreq: 'weekly', priority: '0.8' },
    { path: '/contact', locale: DEFAULT_LOCALE, changefreq: 'monthly', priority: '0.7' },
    { path: '/privacy', locale: DEFAULT_LOCALE, changefreq: 'yearly', priority: '0.4' },
    { path: '/terms', locale: DEFAULT_LOCALE, changefreq: 'yearly', priority: '0.4' },
    ...getAllBlogPosts(DEFAULT_LOCALE).map((post) => ({
      path: `/blog/${post.slug}`,
      locale: DEFAULT_LOCALE,
      changefreq: 'monthly',
      priority: '0.75',
      lastmod: post.updatedAt || post.publishedAt,
    })),
  ];

  const localizedUrls: SitemapUrl[] = SUPPORTED_LOCALES
    .filter((locale) => locale !== DEFAULT_LOCALE)
    .flatMap((locale) => [
      { path: '/', locale, changefreq: 'daily', priority: '0.9' },
      { path: '/enterprise', locale, changefreq: 'weekly', priority: '0.8' },
      { path: '/eu', locale, changefreq: 'weekly', priority: '0.8' },
      { path: '/mcp-gateway', locale, changefreq: 'weekly', priority: '0.85' },
      { path: '/blog', locale, changefreq: 'weekly', priority: '0.8' },
      { path: '/contact', locale, changefreq: 'monthly', priority: '0.7' },
      { path: '/privacy', locale, changefreq: 'yearly', priority: '0.4' },
      { path: '/terms', locale, changefreq: 'yearly', priority: '0.4' },
      ...getAllBlogPosts(locale).map((post) => ({
        path: `/blog/${post.slug}`,
        locale,
        changefreq: 'monthly',
        priority: '0.75',
        lastmod: post.updatedAt || post.publishedAt,
      })),
    ]);

  const urls = [...defaultUrls, ...localizedUrls];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls.map(
      (url) => `
        <url>
          <loc>${withBase(getPath(url.locale, url.path))}</loc>
          ${buildAlternates(url.path)}
          <changefreq>${url.changefreq}</changefreq>
          <priority>${url.priority}</priority>
          <lastmod>${url.lastmod ?? lastModified}</lastmod>
        </url>`
    ),
    '</urlset>',
  ]
    .join('')
    .replace(/\s{2,}/g, '');

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
