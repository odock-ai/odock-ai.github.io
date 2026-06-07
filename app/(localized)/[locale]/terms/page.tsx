import { notFound } from 'next/navigation';
import { LegalPageContent } from '@/components/legal-page-content';
import { LocalizedContentProvider } from '@/components/localized-content-provider';
import { buildSubpageMetadata } from '@/lib/seo';
import { getSiteContent, isLocale, NON_DEFAULT_LOCALES, type Locale } from '@/lib/i18n';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getSiteContent(locale);
  return buildSubpageMetadata(
    locale as Locale,
    '/terms',
    content.termsPage.metadata.title,
    content.termsPage.metadata.description
  );
}

export default async function LocaleTermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <LocalizedContentProvider locale={locale as Locale}>
      <LegalPageContent locale={locale as Locale} content={getSiteContent(locale)} page="termsPage" />
    </LocalizedContentProvider>
  );
}
