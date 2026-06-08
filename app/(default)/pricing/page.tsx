import type { Metadata } from 'next';
import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { PricingPageContent } from '@/components/pricing-page-content';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';
import { buildSubpageMetadata } from '@/lib/seo';

export const dynamic = 'force-static';

const content = getSiteContent(DEFAULT_LOCALE);

export const metadata: Metadata = buildSubpageMetadata(
  DEFAULT_LOCALE,
  '/pricing',
  content.pricing.metadata.title,
  content.pricing.metadata.description
);

export default function PricingPage() {
  return (
    <DefaultLocaleContentProvider content={content}>
      <PricingPageContent locale={DEFAULT_LOCALE} content={content.pricing} />
    </DefaultLocaleContentProvider>
  );
}
