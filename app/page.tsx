import LocaleAutoRedirect from '@/components/locale-auto-redirect';
import type { Metadata } from 'next';
import { getLandingContent } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata('en', getLandingContent('en'));

export default function RootRedirectPage() {
  return <LocaleAutoRedirect />;
}
