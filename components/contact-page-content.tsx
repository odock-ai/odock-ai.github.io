'use client';

import { Header } from '@/components/landing/header';
import { ContactSection } from '@/components/landing/contact-section';
import { Footer } from '@/components/landing/footer';

export function ContactPageContent() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-40" />
      <div className="fixed inset-0 grid-pattern-large pointer-events-none opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="fixed inset-0 scanline pointer-events-none" />

      <div className="relative">
        <Header />
        <div className="pt-14">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
