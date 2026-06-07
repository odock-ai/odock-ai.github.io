import type { Metadata } from 'next';
import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { MCPGatewayPageContent } from '@/components/mcp-gateway-page-content';
import { buildSubpageMetadata, canonicalBase } from '@/lib/seo';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';

const content = getSiteContent(DEFAULT_LOCALE);

export const dynamic = 'force-static';

export const metadata: Metadata = buildSubpageMetadata(
  DEFAULT_LOCALE,
  '/mcp-gateway',
  content.mcpGatewayPage.metadata.title,
  content.mcpGatewayPage.metadata.description
);

const pageUrl = canonicalBase ? `${canonicalBase}/mcp-gateway/` : '/mcp-gateway/';

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: content.mcpGatewayPage.metadata.title,
    description: content.mcpGatewayPage.metadata.description,
    isPartOf: canonicalBase || undefined,
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: content.mcpGatewayPage.title,
    description: content.mcpGatewayPage.metadata.description,
    author: {
      '@type': 'Organization',
      name: 'Odock.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Odock.ai',
    },
    mainEntityOfPage: pageUrl,
  },
];

export default function MCPGatewayPage() {
  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <DefaultLocaleContentProvider content={content}>
        <MCPGatewayPageContent locale={DEFAULT_LOCALE} content={content} />
      </DefaultLocaleContentProvider>
    </>
  );
}
