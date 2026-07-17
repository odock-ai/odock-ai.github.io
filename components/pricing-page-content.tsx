import Link from 'next/link';
import { Check, ArrowRight, Shield, Zap, Building2 } from 'lucide-react';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { localizePath, type Locale, type SiteContent } from '@/lib/i18n';
import type { ReactNode } from 'react';

const tierIcons = [Zap, Shield, Building2];

function SectionShell({
  children,
  className = 'py-24',
  contentClassName = 'mx-auto max-w-7xl px-4 lg:px-8',
  tinted = false,
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  tinted?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden ${tinted ? 'bg-card/30 ' : ''}${className}`}>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-14 flex items-center justify-center gap-3 text-center">
      <div className="h-px max-w-12 flex-1 bg-primary" />
      <span className="text-[10px] uppercase tracking-widest text-primary">{children}</span>
      <div className="h-px max-w-12 flex-1 bg-primary" />
    </div>
  );
}

type PricingPageContentProps = {
  locale: Locale;
  content: SiteContent['pricing'];
};

export function PricingPageContent({ locale, content }: PricingPageContentProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden="true" className="absolute inset-0 z-0 grid-pattern pointer-events-none opacity-40" />
      <div aria-hidden="true" className="absolute inset-0 z-0 grid-pattern-large pointer-events-none opacity-50" />
      <div aria-hidden="true" className="fixed inset-0 z-[5] scanline pointer-events-none" />

      <div className="relative z-10">
        <Header />

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          <div className="absolute left-1/3 top-16 h-96 w-96 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
            <Badge variant="outline" className="mb-8 border-primary/30 bg-card px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
              {content.eyebrow}
            </Badge>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
              <div>
                <h1 className="text-5xl font-medium leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  {content.hero.titleStart}<br />
                  <span className="text-primary">{content.hero.titleAccent}</span><br />
                  {content.hero.titleEnd}
                </h1>
              </div>
              <div className="max-w-md lg:pb-2">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {content.hero.body}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border/50" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                    {content.hero.compareLabel}
                  </span>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionShell className="py-4 pb-24">
          <SectionEyebrow>{content.sections.tiersEyebrow}</SectionEyebrow>

          <div className="grid gap-px overflow-hidden rounded-sm border border-border/40 bg-border/30 lg:grid-cols-3">
            {content.tiers.map((tier, i) => {
              const Icon = tierIcons[i];
              const isHighlight = tier.highlight;

              return (
                <div
                  key={tier.name}
                  className={`relative flex flex-col p-8 ${isHighlight ? 'bg-primary/10' : 'bg-card'}`}
                >
                  {isHighlight && (
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  )}

                  <div className="mb-8">
                    <div className="mb-4 flex items-center justify-between">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-sm border ${
                        isHighlight ? 'border-primary/40 bg-primary/10 text-primary' : 'border-border/60 bg-card text-muted-foreground'
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      {isHighlight && (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                          {content.popularLabel}
                        </span>
                      )}
                    </div>

                    {tier.badge && (
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-sm bg-primary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-foreground">
                          {tier.badge}
                        </span>
                        {tier.badgeDetail && (
                          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                            {tier.badgeDetail}
                          </span>
                        )}
                      </div>
                    )}

                    <h2 className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {tier.name}
                    </h2>

                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="text-4xl font-medium tracking-tight text-foreground">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-sm text-muted-foreground">{tier.period}</span>
                      )}
                    </div>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-6 h-px bg-border/30" />

                  <ul className="mb-8 flex-1 space-y-3.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm ${
                          isHighlight ? 'bg-primary/15 text-primary' : 'bg-muted/60 text-muted-foreground'
                        }`}>
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="group w-full justify-between"
                    variant={isHighlight ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href={localizePath(tier.href, locale)} prefetch={false}>
                      <span>{tier.cta}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>

          <p className="mt-5 text-center font-mono text-[11px] text-muted-foreground/50">
            {content.footnote}
          </p>
        </SectionShell>

        <SectionShell tinted>
          <SectionEyebrow>{content.sections.decisionGuideEyebrow}</SectionEyebrow>

          <div className="grid gap-6 lg:grid-cols-3">
            {content.decisionGuide.map((item) => (
              <div key={item.tier} className="group rounded-sm border border-border/40 bg-card p-6 transition-colors hover:border-primary/30">
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                      {item.mono}
                    </p>
                    <h3 className="mt-1 text-base font-medium text-foreground">{item.tier}</h3>
                  </div>
                </div>
                <p className="mb-4 text-xs font-medium text-muted-foreground">{item.signal}</p>
                <ul className="space-y-2.5">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="py-24">
          <SectionEyebrow>{content.sections.enterpriseEyebrow}</SectionEyebrow>
          <div className="grid gap-0 overflow-hidden rounded-sm border border-border/40 lg:grid-cols-2">
            <div className="border-b border-border/40 bg-card p-10 lg:border-b-0 lg:border-r">
              <h2 className="mb-6 text-2xl font-medium leading-snug tracking-tight text-foreground">
                {content.enterpriseRollout.title}
              </h2>
              {content.enterpriseRollout.description.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`${index === 0 ? '' : 'mt-4'} text-sm leading-7 text-muted-foreground`}
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-border/30 bg-border/30">
                {content.enterpriseRollout.stats.map((stat) => (
                  <div key={stat.label} className="bg-card px-4 py-3 text-center">
                    <p className="text-lg font-medium text-foreground">{stat.value}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col justify-between bg-primary/[0.04] p-10">
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" aria-hidden="true" />

              <div>
                <p className="mb-3 text-center text-[10px] uppercase tracking-widest text-primary lg:text-left">
                  {content.enterpriseRollout.contactNeedsLabel}
                </p>
                <ul className="space-y-3">
                  {content.enterpriseRollout.contactNeeds.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <ArrowRight className="h-3 w-3 shrink-0 text-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <Button size="lg" className="group w-full justify-between" asChild>
                  <Link href={localizePath('/contact', locale)} prefetch={false}>
                    <span>{content.enterpriseRollout.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground/60">
                  {content.enterpriseRollout.responseNote}
                </p>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell tinted>
          <SectionEyebrow>{content.sections.faqEyebrow}</SectionEyebrow>

          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-3">
              {content.faq.items.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="overflow-hidden rounded-sm border border-border bg-card px-4 hover:border-primary/30 sm:px-6"
                >
                  <AccordionTrigger className="py-5 text-base font-medium text-foreground hover:no-underline sm:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SectionShell>

        <Footer />
      </div>
    </main>
  );
}
