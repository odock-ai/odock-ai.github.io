import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LocalizedContentProvider } from '@/components/localized-content-provider';
import { MCPGatewayPageContent } from '@/components/mcp-gateway-page-content';
import { buildSubpageMetadata } from '@/lib/seo';
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
    '/mcp-gateway',
    content.mcpGatewayPage.metadata.title,
    content.mcpGatewayPage.metadata.description
  );
}

export default async function LocaleMCPGatewayPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getSiteContent(locale);

  return (
    <LocalizedContentProvider locale={locale as Locale}>
      <MCPGatewayPageContent locale={locale as Locale} content={content} />
    </LocalizedContentProvider>
  );
}
