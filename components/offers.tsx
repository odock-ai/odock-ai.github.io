'use client';

import { buildGridClasses } from '@/lib/layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useLandingContent } from '@/components/providers/landing-content-provider';

export default function Offers() {
  const { content } = useLandingContent();
  const { offers, contact } = content;
  const gridClasses = buildGridClasses(offers.layout?.grid);

  return (
    <section id={offers.id} className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-foreground">
            {offers.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {offers.description}
          </p>
        </div>

        <div className={`${gridClasses} mb-12`}>
          {offers.plans.map((offering, index) => (
            <Card
              key={index}
              className={`border transition-all relative overflow-hidden flex flex-col ${
                offering.highlight
                  ? 'border-accent bg-card/50 md:scale-105 shadow-xl'
                  : 'border-border bg-card/30'
              }`}
            >
              {offering.highlight && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold rounded-bl">
                  {offers.highlightLabel}
                </div>
              )}
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-accent font-semibold">
                    {offering.subtitle}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mb-8">
                  {offering.description}
                </p>

                <div className="space-y-4 mb-8 flex-1">
                  {offering.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => {
                    document.getElementById(contact.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {offers.cta.cardButtonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            {offers.cta.secondaryText}
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => {
              document.getElementById(contact.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {offers.cta.secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
