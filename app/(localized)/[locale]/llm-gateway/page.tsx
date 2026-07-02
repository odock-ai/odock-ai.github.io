import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LocalizedContentProvider } from '@/components/localized-content-provider';
import { MCPGatewayPageContent } from '@/components/mcp-gateway-page-content';
import { buildLlmGatewayStructuredData, buildSubpageMetadata } from '@/lib/seo';
import { getSiteContent, isLocale, NON_DEFAULT_LOCALES, type Locale } from '@/lib/i18n';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getSiteContent(locale);
  return buildSubpageMetadata(
    locale as Locale,
    '/llm-gateway',
    content.llmGatewayPage.metadata.title,
    content.llmGatewayPage.metadata.description
  );
}

export default async function LocaleLLMGatewayPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getSiteContent(locale);
  const structuredData = buildLlmGatewayStructuredData(locale as Locale, content);

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <LocalizedContentProvider locale={locale as Locale}>
        <MCPGatewayPageContent
          locale={locale as Locale}
          content={content}
          pageContent={content.llmGatewayPage}
          gatewayFlow="llm"
        />
      </LocalizedContentProvider>
    </>
  );
}
