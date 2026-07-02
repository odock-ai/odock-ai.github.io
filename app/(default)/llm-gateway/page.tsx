import type { Metadata } from 'next';
import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { MCPGatewayPageContent } from '@/components/mcp-gateway-page-content';
import { buildLlmGatewayStructuredData, buildSubpageMetadata } from '@/lib/seo';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';

const content = getSiteContent(DEFAULT_LOCALE);

export const dynamic = 'force-static';

export const metadata: Metadata = buildSubpageMetadata(
  DEFAULT_LOCALE,
  '/llm-gateway',
  content.llmGatewayPage.metadata.title,
  content.llmGatewayPage.metadata.description
);
const structuredData = buildLlmGatewayStructuredData(DEFAULT_LOCALE, content);

export default function LLMGatewayPage() {
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
        <MCPGatewayPageContent
          locale={DEFAULT_LOCALE}
          content={content}
          pageContent={content.llmGatewayPage}
          gatewayFlow="llm"
        />
      </DefaultLocaleContentProvider>
    </>
  );
}
