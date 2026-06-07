import Link from 'next/link';
import {
  Activity,
  BarChart3,
  CheckCheck,
  FileCheck2,
  KeyRound,
  Landmark,
  LockKeyhole,
  Network,
  Shield,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { CodeSnippet } from '@/components/shared/code-snippet';
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
import { ChevronDown } from "lucide-react";


type EnterprisePageContentProps = {
  locale: Locale;
  content: SiteContent['enterprisePage'];
};

const iconMap = {
  network: Network,
  shield: Shield,
  barChart3: BarChart3,
  keyRound: KeyRound,
  landmark: Landmark,
  lockKeyhole: LockKeyhole,
  wallet: Wallet,
  fileCheck2: FileCheck2,
  shieldCheck: ShieldCheck,
  activity: Activity,
  checkCheck: CheckCheck,
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

export function EnterprisePageContent({ locale, content }: EnterprisePageContentProps) {
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
              <h1 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-tight text-foreground sm:text-5xl">
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
                  <Link href={content.hero.secondaryCtaHref}>{content.hero.secondaryCtaLabel}</Link>
                </Button>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {content.hero.trustLine}
              </p>
            </div>
          </div>
        </section>

        <SectionShell tinted>
            <div className="rounded-sm border border-border bg-card/50 p-6 sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-px max-w-12 flex-1 bg-primary" />
                    <span className="text-[10px] uppercase tracking-widest text-primary">
                      {content.urgency.eyebrow}
                    </span>
                  </div>
                  <h2 className="text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl">
                    {content.urgency.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {content.urgency.description}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {content.urgency.statItems.map((item) => (
                    <div
                      key={item.stat}
                      className="border border-border bg-background/70 p-5"
                    >
                      <div className="text-2xl font-medium tracking-tight text-primary sm:text-3xl">
                        {item.stat}
                      </div>
                      <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </SectionShell>

        

        <SectionShell>
            <div className="mb-8 max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">
                  {content.featureStrip.eyebrow}
                </span>
              </div>
              <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                {content.featureStrip.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {content.featureStrip.description}
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {content.featureStrip.items.map(({ icon, title, description }) => {
                const Icon = iconMap[icon as keyof typeof iconMap];
                return (
                <Card key={title} className="rounded-sm border-border bg-card/70 py-0">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex h-11 w-11 items-center justify-center border border-primary/20 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
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

        <SectionShell tinted>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left column */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">
                  {content.capabilities.leftColumnTitle}
                </span>
              </div>

              <div className="space-y-4">
                {content.capabilities.leftItems.map(({ icon, title, description }) => {
                  const Icon = iconMap[icon as keyof typeof iconMap];

                  return (
                    <Collapsible key={title} className="group">
                      <Card className="rounded-sm border-border bg-card/70 py-0">
                        <CollapsibleTrigger asChild>
                          <CardContent className="flex h-20 cursor-pointer items-center gap-4 p-6">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-primary/10">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>

                            <h3 className="flex-1 text-base font-medium text-foreground">
                              {title}
                            </h3>

                            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </CardContent>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <div className="px-6 pb-6 pl-20">
                            <p className="text-sm leading-7 text-muted-foreground">
                              {description}
                            </p>
                          </div>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  );
                })}
              </div>
            </div>

            {/* Right column */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">
                  {content.capabilities.rightColumnTitle}
                </span>
              </div>

              <div className="space-y-4">
                {content.capabilities.rightItems.map(({ icon, title, description }) => {
                  const Icon = iconMap[icon as keyof typeof iconMap];

                  return (
                    <Collapsible key={title} className="group">
                      <Card className="rounded-sm border-border bg-card/70 py-0">
                        <CollapsibleTrigger asChild>
                          <CardContent className="flex h-20 cursor-pointer items-center gap-4 p-6">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-primary/10">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>

                            <h3 className="flex-1 text-base font-medium text-foreground">
                              {title}
                            </h3>

                            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                          </CardContent>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <div className="px-6 pb-6 pl-20">
                            <p className="text-sm leading-7 text-muted-foreground">
                              {description}
                            </p>
                          </div>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionShell>


        <SectionShell>
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">{content.deployment.eyebrow}</span>
              </div>
              <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                {content.deployment.title}
              </h2>
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
            <p className="mt-6 text-sm text-muted-foreground">
              {content.deployment.supportLine}
            </p>
        </SectionShell>

        

        <SectionShell>
            <div className="rounded-sm border border-primary/25 bg-primary/5 p-6 sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-px max-w-12 flex-1 bg-primary" />
                    <span className="text-[10px] uppercase tracking-widest text-primary">{content.compliance.eyebrow}</span>
                  </div>
                  <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                    {content.compliance.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {content.compliance.description}
                  </p>
                </div>
                <div className="space-y-3">
                  {content.compliance.checklist.map((item) => (
                    <div key={item} className="flex items-start gap-3 border border-border bg-background/70 px-4 py-3">
                      <CheckCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-7 text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </SectionShell>

        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center sm:mb-14">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">
                  {content.faq.eyebrow}
                </span>
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

        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="rounded-sm border border-primary/50 bg-primary/5 p-6 sm:p-8 lg:p-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
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
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
