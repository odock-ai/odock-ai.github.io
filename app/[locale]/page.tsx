import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import HowItWorks from '@/components/how-it-works';
import Features from '@/components/features';
import WhyDifferent from '@/components/why-different';
import UseCases from '@/components/use-cases';
import Offers from '@/components/offers';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import { buildMetadata, buildStructuredData } from '@/lib/seo';
import { getLandingContent, isLocale, SUPPORTED_LOCALES, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getLandingContent(locale);
  return buildMetadata(locale as Locale, content);
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getLandingContent(locale);
  const structuredData = buildStructuredData(locale as Locale, content);

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="min-h-screen bg-background gradient-ocean md:px-16">
        <Header />
        <HeroSection />
        <HowItWorks />
        <WhyDifferent />
        <Features />
        <UseCases />
        <Offers />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
