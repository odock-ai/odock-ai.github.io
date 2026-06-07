import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Scale,
  Server,
  ShieldCheck,
  ChevronDown,
  XCircle,
} from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { localizePath, type Locale, type SiteContent } from '@/lib/i18n';
import type { ReactNode } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type EuPageContentProps = {
  locale: Locale;
  content: SiteContent['euPage'];
};

const pillarIconMap = {
  mapPin: MapPin,
  server: Server,
  scale: Scale,
} as const;

function SectionShell({
  children,
  className = 'py-16 sm:py-20',
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

export function EuPageContent({ locale, content }: EuPageContentProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden="true" className="absolute inset-0 z-0 grid-pattern pointer-events-none opacity-40" />
      <div aria-hidden="true" className="absolute inset-0 z-0 grid-pattern-large pointer-events-none opacity-50" />
      <div aria-hidden="true" className="fixed inset-0 z-[5] scanline pointer-events-none" />

      <div className="relative z-10">
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/6 blur-3xl" />
          <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-chart-2/8 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-24 lg:px-8 lg:pb-24 lg:pt-32">
            <div className="mb-6 flex items-center gap-3 overflow-hidden sm:mb-8 sm:gap-4">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
              </div>
              <div className="h-px flex-1 bg-border" />
              <span className="shrink-0 text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px]">
                {content.hero.eyebrow}
              </span>
            </div>

            <div className="max-w-4xl">
              <Badge variant="outline" className="mb-6 border-primary/30 bg-card px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                {content.hero.eyebrow}
              </Badge>
              <h1 className="max-w-4xl text-balance text-4xl font-medium leading-[1.02] tracking-tight text-foreground sm:text-5xl">
                {content.hero.title}
              </h1>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {content.hero.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href={localizePath(content.hero.primaryCtaHref, locale)} prefetch={false}>
                    {content.hero.primaryCtaLabel}
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href={localizePath(content.hero.secondaryCtaHref, locale)} prefetch={false}>
                    {content.hero.secondaryCtaLabel}
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex items-start gap-3 border border-destructive/30 bg-destructive/5 px-4 py-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                <span className="text-xs leading-6 text-muted-foreground sm:text-sm">
                  {content.hero.urgencyLine}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* EU-first pillars */}
        <SectionShell>
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">{content.euFirst.eyebrow}</span>
              </div>
              <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                {content.euFirst.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {content.euFirst.description}
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {content.euFirst.pillars.map(({ icon, title, description }) => {
                const Icon = pillarIconMap[icon as keyof typeof pillarIconMap];
                return (
                  <Card key={title} className="rounded-sm border-border bg-card/70 py-0">
                    <CardContent className="flex h-full flex-col gap-4 p-6">
                      <div className="flex h-11 w-11 items-center justify-center border border-primary/20 bg-primary/10">
                        {Icon ? <Icon className="h-5 w-5 text-primary" /> : null}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-foreground">{title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
        </SectionShell>

        {/* Deadline + penalties */}
        <SectionShell tinted>
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">{content.deadline.eyebrow}</span>
              </div>
              <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                {content.deadline.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {content.deadline.description}
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {content.deadline.penalties.map((penalty) => (
                <Card key={penalty.tier} className="rounded-sm border-border bg-card/70 py-0">
                  <CardContent className="flex h-full flex-col gap-3 p-6">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{penalty.article}</span>
                    <h3 className="text-base font-medium text-foreground">{penalty.tier}</h3>
                    <p className="text-2xl font-medium tracking-tight text-destructive">{penalty.amount}</p>
                    <p className="mt-auto text-xs leading-6 text-muted-foreground">{penalty.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">{content.deadline.penaltyNote}</p>
        </SectionShell>

       {/* Article map */}
        <SectionShell>
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px max-w-12 flex-1 bg-primary" />
              <span className="text-[10px] uppercase tracking-widest text-primary">
                {content.articleMap.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
              {content.articleMap.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {content.articleMap.description}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
            {[0, 1].map((columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4">
                {content.articleMap.items
                  .filter((_, index) => index % 2 === columnIndex)
                  .map((item) => (
                    <Collapsible key={item.article} className="group">
                      <Card className="rounded-sm border-border bg-card/70 py-0">
                        <CollapsibleTrigger asChild>
                          <button
                            type="button"
                            className="flex min-h-24 w-full cursor-pointer items-center gap-4 p-6 text-left"
                          >
                            <div className="flex flex-1 flex-wrap items-center gap-3">
                              <Badge
                                variant="outline"
                                className="border-primary/30 bg-primary/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-primary"
                              >
                                {item.article}
                              </Badge>

                              <h3 className="text-base font-medium text-foreground">
                                {item.label}
                              </h3>
                            </div>

                            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </button>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <CardContent className="flex flex-col gap-4 px-6 pb-6 pt-0">
                            <p className="text-sm leading-7 text-muted-foreground">
                              {item.requirement}
                            </p>

                            <div className="border-t border-border pt-4">
                              <div className="mb-2 flex items-center gap-2">
                                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                                <span className="text-[10px] uppercase tracking-widest text-primary">
                                  {content.articleMap.responseLabel}
                                </span>
                              </div>

                              <p className="text-sm leading-7 text-foreground/90">
                                {item.odockResponse}
                              </p>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  ))}
              </div>
            ))}
          </div>
        </SectionShell>

        {/* Compliance checklist comparison */}
        <SectionShell tinted>
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">{content.complianceChecklist.eyebrow}</span>
              </div>
              <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                {content.complianceChecklist.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {content.complianceChecklist.description}
              </p>
            </div>
            <div className="space-y-4">
              {content.complianceChecklist.items.map((item) => (
                <Card key={item.question} className="rounded-sm border-border bg-card/70 py-0">
                  <CardContent className="grid gap-4 p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
                    <h3 className="text-sm font-medium leading-6 text-foreground">{item.question}</h3>
                    <div className="flex items-start gap-2 border border-primary/20 bg-primary/5 p-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-primary">
                          {content.complianceChecklist.withOdockLabel}
                        </span>
                        <p className="mt-1 text-xs leading-6 text-muted-foreground">{item.withOdock}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 border border-destructive/20 bg-destructive/5 p-3">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-destructive">
                          {content.complianceChecklist.withoutOdockLabel}
                        </span>
                        <p className="mt-1 text-xs leading-6 text-muted-foreground">{item.withoutOdock}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
        </SectionShell>

        {/* Deployment / data residency */}
        <SectionShell>
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">{content.deployment.eyebrow}</span>
              </div>
              <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                {content.deployment.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {content.deployment.description}
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {content.deployment.items.map((option) => (
                <Card key={option.title} className="rounded-sm border-border bg-card/70 py-0">
                  <CardContent className="flex h-full flex-col gap-5 p-6">
                    <Badge variant="outline" className="w-fit border-primary/30 bg-primary/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-primary">
                      {option.badge}
                    </Badge>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{option.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{option.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{content.deployment.residencyNote}</p>
        </SectionShell>

        {/* FAQ */}
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center sm:mb-14">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">{content.faq.eyebrow}</span>
                <div className="h-px max-w-12 flex-1 bg-primary" />
              </div>
              <h2 className="mx-auto max-w-3xl text-balance text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                {content.faq.title}
              </h2>
            </div>
            <div className="mx-auto max-w-4xl">
              <Accordion type="single" collapsible className="space-y-3">
                {content.faq.items.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`item-${index}`}
                    className="overflow-hidden rounded-sm border border-border bg-card/80 px-4 backdrop-blur hover:border-primary/30 sm:px-6"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline sm:text-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground sm:text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="rounded-sm border border-primary/50 bg-primary/5 p-6 sm:p-8 lg:p-12">
              <div className="max-w-3xl">
                <h2 className="text-balance text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                  {content.cta.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {content.cta.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <Link href={localizePath(content.cta.primaryCtaHref, locale)} prefetch={false}>
                      {content.cta.primaryCtaLabel}
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                    <Link href={localizePath(content.cta.secondaryCtaHref, locale)} prefetch={false}>
                      {content.cta.secondaryCtaLabel}
                    </Link>
                  </Button>
                </div>
                <p className="mt-6 border-t border-border pt-4 text-xs leading-6 text-muted-foreground">
                  {content.cta.legalNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
