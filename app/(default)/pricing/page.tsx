import type { Metadata } from 'next';
import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { PricingPageContent } from '@/components/pricing-page-content';
import { DEFAULT_LOCALE, getSiteContent } from '@/lib/i18n';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Pricing | Odock.ai — AI Governance Gateway',
  description:
    'Odock.ai pricing: open-source self-hosted tier, cloud-hosted managed gateway, and enterprise plans with SLA, SSO, and dedicated support. Contact us for enterprise pricing.',
  alternates: {
    canonical: 'https://www.odock.ai/pricing/',
  },
  openGraph: {
    title: 'Pricing | Odock.ai — AI Governance Gateway',
    description:
      'Open-source, cloud-hosted, and enterprise tiers. One controlled gateway for all LLM and MCP traffic.',
    url: 'https://www.odock.ai/pricing/',
  },
  twitter: {
    title: 'Pricing | Odock.ai — AI Governance Gateway',
    description:
      'Open-source, cloud-hosted, and enterprise tiers. One controlled gateway for all LLM and MCP traffic.',
  },
};

export default function PricingPage() {
  const content = getSiteContent(DEFAULT_LOCALE);

  return (
    <DefaultLocaleContentProvider content={content}>
      <PricingPageContent locale={DEFAULT_LOCALE} content={content.pricing} />
    </DefaultLocaleContentProvider>
  );
}
