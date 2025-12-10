'use client';

import landingContent from '@/lib/landing-content.json';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const { faq } = landingContent;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-foreground">
            {faq.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {faq.description}
          </p>
        </div>

        <div className="space-y-3">
          {faq.items.map((faqItem, index) => (
            <Card
              key={index}
              className="border-border bg-card/50 backdrop-blur cursor-pointer hover:bg-card/70 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="px-6 flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-foreground text-balance">
                  {faqItem.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openIndex === index && (
                <div className="px-6 pb-6 text-sm text-muted-foreground">
                  {faqItem.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
