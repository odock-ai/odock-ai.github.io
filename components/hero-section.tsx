'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import HeroBackround from './HeroFigure/hero-backround';
import { useLandingContent } from '@/components/providers/landing-content-provider';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.PAGES_BASE_PATH || '';

export default function HeroSection() {
  const { content } = useLandingContent();
  const { hero, contact } = content;
  const [email, setEmail] = useState('');

  const scrollToWaitlist = () => {
    const element = document.getElementById(contact.id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const redirectToContactWithEmail = () => {
    const trimmedEmail = email.trim();
    if (trimmedEmail && typeof window !== 'undefined') {
      window.sessionStorage.setItem('contact_prefill_email', trimmedEmail);
      window.dispatchEvent(new CustomEvent('contact-prefill-email', { detail: trimmedEmail }));
    }
    scrollToWaitlist();
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % hero.rotatingWords.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden  md:overflow-visible px-4 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-visible">
        <div className="absolute top-20 right-10 h-72 w-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 h-72 w-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

       {/* Figure background */}
       <div className="absolute inset-0 z-0">
        <HeroBackround dotCount={40} shape="square" glowIntensity={0.5} />
      </div>

      {/* 2-column layout */}
      <div className="relative z-10 mx-auto min-h-screen flex max-w-6xl flex-col  lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start">
        {/* LEFT: CTA / content */}
        <div className="flex  flex-col items-center justify-center text-center pt-10 md:pt-20 lg:items-start lg:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              {hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {hero.headline}
            <br />
            <span className="inline-flex h-16 items-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.45 }}
                  className={
                    index === hero.rotatingWords.length - 1
                      ? 'inline-block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent'
                      : 'inline-block font-bold text-white'
                  }
                >
                  {hero.rotatingWords[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 max-w-2xl text-balance text-md text-muted-foreground md:text-lg">
            {hero.subheadline}
          </p>

          {/* CTA input + button */}
          <div className="flex w-full justify-center lg:justify-start">
            <form
              className="flex w-full max-w-md items-center overflow-hidden rounded-lg border border-border bg-card"
              onSubmit={(e) => {
                e.preventDefault();
                redirectToContactWithEmail();
              }}
            >
              <input
                type="email"
                placeholder={hero.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-4 text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <Button
                type="submit"
                className="h-full rounded-none bg-accent px-5 text-accent-foreground font-semibold"
              >
                {hero.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* RIGHT: Figure (top-aligned) */}
        <div className="relative w-full lg:self-start">
          <section
            id="FlowFugure"
            className="relative mx-auto w-full max-w-xl sm:max-w-2xl"
          >
           

            {/* Illustration */}
            <div className="relative  h-full w-full">
              <Image
                src={`${basePath}/hero-animation.svg`}
                alt={hero.imageAlt}
                width={800}
                height={600}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
