import { notFound } from 'next/navigation';
import { CookieConsent } from '@/components/cookie-consent';
import { LandingContentProvider } from '@/components/providers/landing-content-provider';
import {
  getLandingContent,
  isLocale,
  SUPPORTED_LOCALES,
  type Locale,
} from '@/lib/i18n';

const googleAnalyticsId = process.env.NEXT_PUBLIC_G_ANALYTICS;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getLandingContent(locale);

  return (
    <LandingContentProvider locale={locale as Locale} content={content}>
      {children}
      <CookieConsent gaId={googleAnalyticsId} />
    </LandingContentProvider>
  );
}
