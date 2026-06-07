'use client';

import dynamic from 'next/dynamic';

import { LazySection } from '@/components/lazy-section';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { PainSection } from '@/components/landing/pain-section';
import { LifecycleSection } from '@/components/landing/lifecycle-section';

const ProductShowcase = dynamic(() =>
  import('@/components/landing/product-showcase').then((mod) => mod.ProductShowcase)
);
const GatewaySection = dynamic(() =>
  import('@/components/landing/gateway-section').then((mod) => mod.GatewaySection)
);
const PluginsSection = dynamic(() =>
  import('@/components/landing/plugins-section').then((mod) => mod.PluginsSection)
);
const SecuritySection = dynamic(() =>
  import('@/components/landing/security-section').then((mod) => mod.SecuritySection)
);
const PricingSection = dynamic(() =>
  import('@/components/landing/pricing-section').then((mod) => mod.PricingSection)
);
const FAQSection = dynamic(() =>
  import('@/components/landing/faq-section').then((mod) => mod.FAQSection)
);
const CTASection = dynamic(() =>
  import('@/components/landing/cta-section').then((mod) => mod.CTASection)
);
const Footer = dynamic(() =>
  import('@/components/landing/footer').then((mod) => mod.Footer)
);

function SectionPlaceholder({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      aria-hidden="true"
      className={`relative overflow-hidden py-16 sm:py-24 ${className ?? ''}`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="animate-pulse">
          <div className="mb-4 h-2.5 w-24 bg-border" />
          <div className="mb-4 h-10 max-w-2xl bg-secondary" />
          <div className="h-4 max-w-3xl bg-secondary/70" />
        </div>
      </div>
    </section>
  );
}

export function LandingPageContent({
  structuredData: _structuredData,
}: {
  structuredData?: unknown[];
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden="true" className="absolute inset-0 z-0 grid-pattern pointer-events-none opacity-40" />
      <div aria-hidden="true" className="absolute inset-0 z-0 grid-pattern-large pointer-events-none opacity-50" />
      <div aria-hidden="true" className="fixed inset-0 z-[5] scanline pointer-events-none" />

      <div className="relative z-10">
        <Header />
        <Hero />
        <PainSection />
        <LifecycleSection />
        <LazySection id="platform" fallback={<SectionPlaceholder />} minHeight={900}>
          <ProductShowcase />
        </LazySection>
        <LazySection id="ai-gateway" fallback={<SectionPlaceholder />} minHeight={800}>
          <GatewaySection />
        </LazySection>
        <LazySection id="plugins" fallback={<SectionPlaceholder />} minHeight={900}>
          <PluginsSection />
        </LazySection>
        <LazySection
          id="security"
          fallback={<SectionPlaceholder className="bg-card/30" />}
          rootMargin="400px 0px"
          minHeight={900}
        >
          <SecuritySection />
        </LazySection>
        <LazySection
          id="pricing"
          fallback={<SectionPlaceholder />}
          rootMargin="400px 0px"
          minHeight={700}
        >
          <PricingSection />
        </LazySection>
        <LazySection
          id="faq"
          fallback={<SectionPlaceholder />}
          rootMargin="400px 0px"
          minHeight={600}
        >
          <FAQSection />
        </LazySection>
        <LazySection
          id="demo"
          fallback={<SectionPlaceholder className="pb-10" />}
          rootMargin="480px 0px"
          minHeight={400}
        >
          <CTASection />
        </LazySection>
        <LazySection
          fallback={<SectionPlaceholder className="py-12" />}
          rootMargin="480px 0px"
          minHeight={300}
        >
          <Footer />
        </LazySection>
      </div>
    </main>
  );
}
