import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { LegalPageContent } from '@/components/legal-page-content';
import { buildSubpageMetadata } from '@/lib/seo';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';

export const dynamic = 'force-static';

export function generateMetadata() {
  const content = getSiteContent(DEFAULT_LOCALE);
  return buildSubpageMetadata(
    DEFAULT_LOCALE,
    '/terms',
    content.termsPage.metadata.title,
    content.termsPage.metadata.description
  );
}

export default function TermsPage() {
  const content = getSiteContent(DEFAULT_LOCALE);

  return (
    <DefaultLocaleContentProvider content={content}>
      <LegalPageContent locale={DEFAULT_LOCALE} content={content} page="termsPage" />
    </DefaultLocaleContentProvider>
  );
}
