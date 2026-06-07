import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LocalizedContentProvider } from '@/components/localized-content-provider';
import { EuPageContent } from '@/components/eu-page-content';
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
    '/eu',
    content.euPage.metadata.title,
    content.euPage.metadata.description
  );
}

export default async function LocaleEUPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getSiteContent(locale);
  const title = content.euPage.metadata.title;
  const description = content.euPage.metadata.description;
  const pageUrl = canonicalBase ? `${canonicalBase}/${locale}/eu/` : `/${locale}/eu/`;

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
      '@type': 'FAQPage',
      mainEntity: content.euPage.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      ...landingSeo.schema.organization,
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
        <EuPageContent locale={locale as Locale} content={content.euPage} />
      </LocalizedContentProvider>
    </>
  );
}
