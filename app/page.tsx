import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import HowItWorks from '@/components/how-it-works';
import Features from '@/components/features';
import WhyDifferent from '@/components/why-different';
import UseCases from '@/components/use-cases';
import Offers from '@/components/offers';
import FAQ from '@/components/faq';
import WaitlistForm from '@/components/waitlist-form';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import { buildStructuredData } from '@/lib/seo';

export const dynamic = 'force-static';

export default function Home() {
  const structuredData = buildStructuredData();

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
