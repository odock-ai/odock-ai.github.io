'use client';
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


export default function Home() {
  return (
    <main className="min-h-screen bg-background gradient-ocean md:px-16">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Features />
      <WhyDifferent />
      <UseCases />
      <Offers />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
