import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LocalizedContentProvider } from '@/components/localized-content-provider';
import { EnterprisePageContent } from '@/components/enterprise-page-content';
import landingSeo from '@/data/landing-seo.json';
import { buildSubpageMetadata, canonicalBase } from '@/lib/seo';
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
    '/enterprise',
    content.enterprisePage.metadata.title,
    content.enterprisePage.metadata.description
  );
}

export default async function LocaleEnterprisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getSiteContent(locale);
  const title = content.enterprisePage.metadata.title;
  const description = content.enterprisePage.metadata.description;
  const pageUrl = canonicalBase ? `${canonicalBase}/${locale}/enterprise/` : `/${locale}/enterprise/`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: locale,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Odock.ai',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: pageUrl,
      description,
      publisher: {
        '@type': 'Organization',
        ...landingSeo.schema.organization,
      },
      featureList: [
        ...content.enterprisePage.capabilities.leftItems.map((item) => item.title),
        ...content.enterprisePage.capabilities.rightItems.map((item) => item.title),
      ],
    },
  ];

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
        <EnterprisePageContent locale={locale as Locale} content={content.enterprisePage} />
      </LocalizedContentProvider>
    </>
  );
}
