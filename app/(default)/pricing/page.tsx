import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { DefaultLocaleContentProvider } from '@/components/default-locale-content-provider';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DEFAULT_LOCALE, getSiteContent, localizePath } from '@/lib/i18n';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Pricing | Odock.ai — AI Governance Gateway',
  description:
    'Odock.ai pricing: open-source self-hosted tier, cloud-hosted managed gateway, and enterprise plans with SLA, SSO, and dedicated support. Contact us for enterprise pricing.',
  alternates: {
    canonical: 'https://www.odock.ai/pricing/',
  },
  openGraph: {
    title: 'Pricing | Odock.ai — AI Governance Gateway',
    description:
      'Open-source, cloud-hosted, and enterprise tiers. One controlled gateway for all LLM and MCP traffic.',
    url: 'https://www.odock.ai/pricing/',
  },
  twitter: {
    title: 'Pricing | Odock.ai — AI Governance Gateway',
    description:
      'Open-source, cloud-hosted, and enterprise tiers. One controlled gateway for all LLM and MCP traffic.',
  },
};

export default function PricingPage() {
  const content = getSiteContent(DEFAULT_LOCALE);
  const pricing = content.pricing;

  return (
    <DefaultLocaleContentProvider content={content}>
      <main className="relative min-h-screen overflow-hidden bg-background">
        <div aria-hidden="true" className="absolute inset-0 z-0 grid-pattern pointer-events-none opacity-40" />
        <div aria-hidden="true" className="absolute inset-0 z-0 grid-pattern-large pointer-events-none opacity-50" />
        <div aria-hidden="true" className="fixed inset-0 z-[5] scanline pointer-events-none" />

        <div className="relative z-10">
          <Header />

          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
            <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/6 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-chart-2/8 blur-3xl" />
            <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-24 lg:px-8 lg:pb-24 lg:pt-32">
              <Badge variant="outline" className="mb-6 border-primary/30 bg-card px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                {pricing.eyebrow}
              </Badge>
              <h1 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-tight text-foreground sm:text-5xl">
                Odock.ai Pricing
              </h1>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Odock is priced to match how AI infrastructure actually matures. Teams usually start by self-hosting the
                open-source gateway to centralize virtual API keys, budgets, quotas, routing, observability, and MCP tool
                governance without changing their application code. From there, some teams move to a managed deployment so
                platform engineers can stop operating the control plane themselves, while others need a private cloud or
                fully self-hosted enterprise posture for residency, procurement, or internal security review.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                The important distinction is that pricing maps to deployment and support expectations, not to a stripped
                feature matrix that forces teams to choose between governance and affordability. The same core gateway
                model stays intact across tiers: authenticate, authorize, inspect, reserve budget, route, and record.
                That makes it practical to start with open source, prove the governance model in production, and then
                upgrade only when you need managed operations, stronger support commitments, or enterprise procurement
                paths.
              </p>
            </div>
          </section>

          <section className="relative overflow-hidden py-8 pb-20">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
              <div className="grid gap-4 lg:grid-cols-3">
                {pricing.tiers.map((tier) => (
                  <Card
                    key={tier.name}
                    className={`rounded-sm border py-0 ${
                      tier.highlight ? 'border-primary bg-primary/5' : 'border-border bg-card/80'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <h2 className="mb-2 text-lg font-medium text-foreground">{tier.name}</h2>
                        <div className="mb-2 flex items-baseline gap-1">
                          <span className="text-3xl font-medium text-foreground">{tier.price}</span>
                          {tier.period ? <span className="text-sm text-muted-foreground">{tier.period}</span> : null}
                        </div>
                        <p className="text-sm leading-6 text-muted-foreground">{tier.description}</p>
                      </div>

                      <ul className="mb-6 space-y-3">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button className="w-full" variant={tier.highlight ? 'default' : 'outline'} asChild>
                        <Link href={localizePath(tier.href, DEFAULT_LOCALE)} prefetch={false}>
                          {tier.cta}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <div className="rounded-sm border border-border bg-card/60 p-6">
                  <h2 className="text-2xl font-medium tracking-tight text-foreground">How teams choose a plan</h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Open Source is the right starting point when your team wants direct control of infrastructure and a
                    fast proof of value. Cloud is the operational shortcut for teams that want Odock running quickly with
                    managed uptime and less platform overhead. Enterprise is designed for procurement-heavy environments
                    that need private deployment, security review support, architecture guidance, and support that maps to
                    internal production requirements.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    If your rollout includes multiple business units, regulated workloads, or agent systems that can call
                    MCP tools, the right plan is usually determined by support model and deployment boundary rather than
                    raw request volume alone. That is why enterprise pricing is handled directly with the team instead of
                    forcing a generic self-serve matrix onto infrastructure decisions.
                  </p>
                </div>

                <div className="rounded-sm border border-border bg-card/60 p-6">
                  <h2 className="text-2xl font-medium tracking-tight text-foreground">Enterprise pricing and rollout</h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Enterprise engagements usually cover production architecture, SSO or identity integration, deployment
                    model selection, support expectations, and any requirements around audit evidence, data residency, or
                    private connectivity. If you already run OpenAI-compatible traffic, migration is generally measured in
                    minutes rather than weeks because Odock sits at the gateway boundary instead of forcing an application
                    rewrite.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Contact the team if you need private cloud deployment, a custom SLA, procurement support, or a
                    walkthrough of how Odock maps budgets, policies, and observability to your current LLM and MCP stack.
                  </p>
                  <div className="mt-6">
                    <Button size="lg" asChild>
                      <Link href="/contact/" prefetch={false}>
                        Contact us for enterprise pricing
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
    </DefaultLocaleContentProvider>
  );
}
