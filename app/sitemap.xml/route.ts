import { NextResponse } from 'next/server';
import landingSeo from '@/data/landing-seo.json';
import { SUPPORTED_LOCALES } from '@/lib/i18n';

const canonicalBase = landingSeo.canonical?.replace(/\/$/, '') || '';
const withBase = (path: string) => (canonicalBase ? `${canonicalBase}${path}` : path);

export const dynamic = 'force-static';

export function GET() {
  const lastModified = new Date().toISOString();

  const rootUrls = [
    { loc: withBase('/'), changefreq: 'daily', priority: '1.0' },
  ];
  const localizedUrls = SUPPORTED_LOCALES.flatMap((locale) => [
    { loc: withBase(`/${locale}/`), changefreq: 'daily', priority: '0.9' },
    { loc: withBase(`/${locale}/privacy/`), changefreq: 'yearly', priority: '0.4' },
    { loc: withBase(`/${locale}/terms/`), changefreq: 'yearly', priority: '0.4' },
  ]);
  const urls = [...rootUrls, ...localizedUrls];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      (url) => `
        <url>
          <loc>${url.loc}</loc>
          <changefreq>${url.changefreq}</changefreq>
          <priority>${url.priority}</priority>
          <lastmod>${lastModified}</lastmod>
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
