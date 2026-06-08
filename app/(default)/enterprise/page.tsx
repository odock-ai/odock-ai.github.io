import type { Metadata } from 'next';
import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { EnterprisePageContent } from '@/components/enterprise-page-content';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';
import { buildEnterpriseStructuredData, buildSubpageMetadata } from '@/lib/seo';

const content = getSiteContent(DEFAULT_LOCALE);
const title = content.enterprisePage.metadata.title;
const description = content.enterprisePage.metadata.description;

export const dynamic = 'force-static';

export const metadata: Metadata = buildSubpageMetadata(DEFAULT_LOCALE, '/enterprise', title, description);
const structuredData = buildEnterpriseStructuredData(DEFAULT_LOCALE, content);

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
