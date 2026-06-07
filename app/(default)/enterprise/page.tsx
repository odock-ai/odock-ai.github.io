import type { Metadata } from 'next';
import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { EnterprisePageContent } from '@/components/enterprise-page-content';
import landingSeo from '@/data/landing-seo.json';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';
import { faqSchema } from '@/lib/schema';
import { buildSubpageMetadata, canonicalBase } from '@/lib/seo';

const content = getSiteContent(DEFAULT_LOCALE);
const title = content.enterprisePage.metadata.title;
const description = content.enterprisePage.metadata.description;

export const dynamic = 'force-static';

export const metadata: Metadata = buildSubpageMetadata(DEFAULT_LOCALE, '/enterprise', title, description);

const pageUrl = canonicalBase ? `${canonicalBase}/enterprise/` : '/enterprise/';

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
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      category: 'Enterprise software',
    },
    featureList: [
      ...content.enterprisePage.capabilities.leftItems.map((item) => item.title),
      ...content.enterprisePage.capabilities.rightItems.map((item) => item.title),
    ],
  },
  faqSchema(content.enterprisePage.faq.items),
];

export default function EnterprisePage() {
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
        <EnterprisePageContent locale={DEFAULT_LOCALE} content={content.enterprisePage} />
      </DefaultLocaleContentProvider>
    </>
  );
}
