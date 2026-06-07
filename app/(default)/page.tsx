import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { LandingPageContent } from '@/components/landing-page-content';
import { organizationSchema, softwareApplicationSchema } from '@/lib/schema';
import { buildRootMetadata } from '@/lib/seo';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';

export const metadata = buildRootMetadata(getSiteContent(DEFAULT_LOCALE));

export default function LandingPage() {
  const content = getSiteContent(DEFAULT_LOCALE);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema()) }}
      />
      <DefaultLocaleContentProvider content={content}>
        <LandingPageContent />
      </DefaultLocaleContentProvider>
    </>
  );
}
