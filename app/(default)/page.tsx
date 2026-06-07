import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { LandingPageContent } from '@/components/landing-page-content';
import { buildRootMetadata, buildStructuredData } from '@/lib/seo';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';

export const metadata = buildRootMetadata(getSiteContent(DEFAULT_LOCALE));

export default function LandingPage() {
  const content = getSiteContent(DEFAULT_LOCALE);
  const structuredData = buildStructuredData(DEFAULT_LOCALE, content);
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
        <LandingPageContent structuredData={structuredData} />
      </DefaultLocaleContentProvider>
    </>
  );
}
