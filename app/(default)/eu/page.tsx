import type { Metadata } from 'next';
import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { EuPageContent } from '@/components/eu-page-content';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';
import { buildEuStructuredData, buildSubpageMetadata } from '@/lib/seo';

const content = getSiteContent(DEFAULT_LOCALE);
const title = content.euPage.metadata.title;
const description = content.euPage.metadata.description;

export const dynamic = 'force-static';

export const metadata: Metadata = buildSubpageMetadata(DEFAULT_LOCALE, '/eu', title, description);
const structuredData = buildEuStructuredData(DEFAULT_LOCALE, content);

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
