import type { Metadata } from 'next';
import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { EuPageContent } from '@/components/eu-page-content';
import landingSeo from '@/data/landing-seo.json';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';
import { buildSubpageMetadata, canonicalBase } from '@/lib/seo';

const content = getSiteContent(DEFAULT_LOCALE);
const title = content.euPage.metadata.title;
const description = content.euPage.metadata.description;

export const dynamic = 'force-static';

export const metadata: Metadata = buildSubpageMetadata(DEFAULT_LOCALE, '/eu', title, description);

const pageUrl = canonicalBase ? `${canonicalBase}/eu/` : '/eu/';

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    inLanguage: 'en',
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

export default function EUPage() {
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
        <EuPageContent locale={DEFAULT_LOCALE} content={content.euPage} />
      </DefaultLocaleContentProvider>
    </>
  );
}
