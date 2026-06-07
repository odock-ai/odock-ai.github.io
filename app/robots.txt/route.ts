import { NextResponse } from 'next/server';
import landingSeo from '@/data/landing-seo.json';

const canonicalBase = landingSeo.canonical?.replace(/\/$/, '') || '';

export const dynamic = 'force-static';

export function GET() {
  const sitemapUrl = canonicalBase ? `${canonicalBase}/sitemap.xml` : '/sitemap.xml';
  const llmsUrl = canonicalBase ? `${canonicalBase}/llms.txt` : '/llms.txt';
  const rules = [
    'User-agent: *',
    'Allow: /',
    '',
    'User-agent: GPTBot',
    'Allow: /',
    '',
    'User-agent: OAI-SearchBot',
    'Allow: /',
    '',
    'User-agent: ChatGPT-User',
    'Allow: /',
    '',
    'User-agent: ClaudeBot',
    'Allow: /',
    '',
    'User-agent: Claude-Web',
    'Allow: /',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    'User-agent: Google-Extended',
    'Allow: /',
    '',
    'User-agent: CCBot',
    'Allow: /',
    '',
    `Host: ${canonicalBase}`,
    `Sitemap: ${sitemapUrl}`,
    `# llms.txt: ${llmsUrl}`,
  ];

  return new NextResponse(rules.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
