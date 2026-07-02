'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  FileCheck,
  KeyRound,
  LockKeyhole,
  Network,
  Route,
  Shield,
} from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { MCPGatewayCodeSection } from '@/components/mcp/mcp-gateway-code-section';
import { MCPFAQSection } from '@/components/mcp/mcp-faq-section';
import { MCPLifecycleSection } from '@/components/mcp/mcp-lifecycle-section';
import { MCPProductShowcase } from '@/components/mcp/mcp-product-showcase';
import { Button } from '@/components/ui/button';
import { localizePath, type Locale, type SiteContent } from '@/lib/i18n';

// Shared shape for the MCP and LLM gateway pillar pages. blockedRequest is
// loosened so each page can display its own request fields.
type MCPGatewaySections = SiteContent['mcpGatewayPage']['sections'];
export type GatewayPageData = Omit<SiteContent['mcpGatewayPage'], 'sections'> & {
  sections: Omit<MCPGatewaySections, 'lifecycle'> & {
    lifecycle: Omit<MCPGatewaySections['lifecycle'], 'overview'> & {
      overview: Omit<MCPGatewaySections['lifecycle']['overview'], 'blockedRequest'> & {
        blockedRequest: Record<string, string | number>;
      };
    };
  };
};

const sectionIconMap = {
  network: Network,
  shield: Shield,
  fileCheck: FileCheck,
  keyRound: KeyRound,
  badgeDollarSign: BadgeDollarSign,
  route: Route,
  activity: Activity,
  lockKeyhole: LockKeyhole,
} as const;

function getSectionIcon(icon: string) {
  return sectionIconMap[icon as keyof typeof sectionIconMap] ?? Shield;
}

type MCPGatewayPageContentProps = {
  locale: Locale;
  content: SiteContent;
  pageContent?: GatewayPageData;
  gatewayFlow?: 'llm' | 'mcp';
};

export function MCPGatewayPageContent({
  locale,
  content,
  pageContent: pageContentProp,
  gatewayFlow = 'mcp',
}: MCPGatewayPageContentProps) {
  const pageContent = pageContentProp ?? content.mcpGatewayPage;
  const { lifecycle, cta, gateway, definition, controlPoints, compliance } = pageContent.sections;
  const heroPanel = pageContent.heroPanel;
  const heroHighlights = lifecycle.heroHighlights;
  const gatewayExamples = content.mcp[gatewayFlow].examples ?? [];
  const gatewayMethodOrder =
    gatewayFlow === 'llm' ? ['unified', 'native', 'http'] : ['mcp', 'framework', 'http'];
  const ctaExample =
    gatewayExamples.find((example) => example.method === gatewayMethodOrder[0]) ?? gatewayExamples[0];
  const ctaCodeLines = ctaExample?.code.split('\n') ?? [];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % heroPanel.steps.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, [heroPanel.steps.length]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden="true" className="absolute inset-0 z-0 grid-pattern pointer-events-none opacity-40" />
      <div aria-hidden="true" className="absolute inset-0 z-0 grid-pattern-large pointer-events-none opacity-50" />
      <div aria-hidden="true" className="fixed inset-0 z-[5] scanline-vertical pointer-events-none" />
      <div aria-hidden="true" className="fixed inset-0 z-[5] scanline-vertical-reverse pointer-events-none" />

      <div className="relative z-10">
        <Header />

        <section id="overview" className="relative overflow-hidden">
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
                {pageContent.requestCardTitle}
              </span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-8">
              <div className="flex min-w-0 flex-col justify-center">
                <div className="mb-5 inline-flex w-fit max-w-full items-center gap-2 border border-border bg-card px-3 py-1.5 sm:mb-6">
                  <span className="h-1.5 w-1.5 bg-primary pulse-glow" />
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
                    {pageContent.badge}
                  </span>
                </div>

                <h1 className="max-w-[12ch] text-4xl font-medium leading-[1.02] tracking-tight text-foreground sm:max-w-[13ch] sm:text-5xl lg:max-w-none">
                  {pageContent.title}
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {pageContent.intro}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button size="lg" className="group w-full sm:w-auto" asChild>
                    <Link href={localizePath(cta.primaryHref, locale)} prefetch={false}>
                      {cta.primaryLabel}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                    <Link href={localizePath(cta.secondaryHref, locale)} prefetch={false}>
                      {cta.secondaryLabel}
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 border-t border-border pt-6 sm:mt-10">
                  <p className="max-w-md text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {pageContent.summary}
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-center justify-center lg:justify-end">
                <div className="w-full min-w-0 max-w-xl">
                  <div className="overflow-hidden border border-border bg-card">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-secondary/50 px-3 py-2 sm:px-4">
                      <div className="flex min-w-0 items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                          <div className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
                          <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                        </div>
                        <span className="ml-2 truncate text-[10px] text-muted-foreground sm:ml-3">
                          {heroPanel.fileLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 bg-primary pulse-glow" />
                        <span className="text-[10px] text-primary">{pageContent.badge}</span>
                      </div>
                    </div>

                    <div className="p-4 font-mono text-[11px] sm:p-5 sm:text-xs">
                      <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground">
                        <span className="text-primary">{'>'}</span>
                        <span>{heroPanel.requestPath}</span>
                        <span className="text-[10px] opacity-50">{heroPanel.runtimeLabel}</span>
                      </div>

                      <div className="space-y-2 border-b border-border pb-4">
                        {heroPanel.steps.map((step, index) => (
                          <div
                            key={step.label}
                            className={`flex flex-wrap items-center gap-x-3 gap-y-1 transition-all duration-300 ${
                              index <= activeStep ? 'opacity-100' : 'opacity-30'
                            }`}
                          >
                            <span className="w-8 shrink-0 text-muted-foreground/70">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span
                              className={`min-w-0 flex-1 ${
                                index === activeStep ? 'text-primary' : 'text-foreground'
                              }`}
                            >
                              {step.label}
                            </span>
                            <span
                              className={`text-[10px] uppercase ${
                                index === activeStep ? 'text-primary' : 'text-muted-foreground'
                              }`}
                            >
                              {index < activeStep ? step.status : index === activeStep ? step.status : '...'}
                            </span>
                            {index === activeStep && <span className="h-1.5 w-1.5 bg-chart-3 pulse-glow" />}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border bg-secondary/20 px-4 py-4 sm:px-5">
                      <div className="grid gap-3 text-xs text-muted-foreground sm:grid-cols-2">
                        {heroHighlights.map((item) => (
                          <div key={item.title} className="border border-border bg-background px-3 py-3">
                            <div className="mb-1 text-[10px] uppercase tracking-widest text-primary">{item.title}</div>
                            <div>{item.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="definition" className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">
                  {definition.eyebrow}
                </span>
              </div>
              <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                {definition.title}
              </h2>
              <div className="mt-4 space-y-4">
                {definition.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <div className="mb-6 text-[10px] uppercase tracking-widest text-muted-foreground">
                {definition.useCasesTitle}
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {definition.useCases.map((useCase) => {
                  const Icon = getSectionIcon(useCase.icon);
                  return (
                    <article key={useCase.title} className="border border-border bg-card p-5">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center border border-border bg-secondary">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="mb-2 text-sm font-medium text-foreground">{useCase.title}</h3>
                      <p className="text-[11px] leading-relaxed text-muted-foreground">{useCase.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="mb-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                {definition.relatedLinksTitle}
              </div>
              <div className="flex flex-wrap gap-3">
                {definition.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={localizePath(link.href, locale)}
                    prefetch={false}
                    className="group inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <MCPLifecycleSection content={lifecycle.overview} />

        <section id="control-points" className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px max-w-12 flex-1 bg-primary" />
                <span className="text-[10px] uppercase tracking-widest text-primary">
                  {controlPoints.eyebrow}
                </span>
              </div>
              <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                {controlPoints.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {controlPoints.description}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {controlPoints.items.map((item) => {
                const Icon = getSectionIcon(item.icon);
                return (
                  <article key={item.title} className="border border-border bg-card p-5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center border border-border bg-secondary">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="mb-2 text-sm font-medium text-foreground">{item.title}</h3>
                    <p className="text-[11px] leading-relaxed text-muted-foreground">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <MCPProductShowcase content={pageContent.sections.productShowcase} />
        <MCPGatewayCodeSection
          content={gateway}
          examples={gatewayExamples}
          methodOrder={gatewayMethodOrder}
          methodTabsLabel={content.mcp.methodTabsLabel}
          languageTabsLabel={content.mcp.languageTabsLabel}
          copyCodeAriaLabel={content.mcp.copyCodeAriaLabel}
        />

        <section id="compliance" className="relative overflow-hidden bg-card/30 py-16 sm:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="max-w-xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px max-w-12 flex-1 bg-primary" />
                  <span className="text-[10px] uppercase tracking-widest text-primary">
                    {compliance.eyebrow}
                  </span>
                </div>
                <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
                  {compliance.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {compliance.description}
                </p>
              </div>
              <ul className="space-y-3">
                {compliance.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 border border-border bg-card px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <MCPFAQSection content={pageContent.sections.faq} />

        <section id="cta" className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="rounded-sm border border-primary/50 bg-primary/5 p-5 sm:p-8 lg:p-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="min-w-0">
                  <h2 className="mb-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                    {cta.title}
                  </h2>
                  <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {cta.description}
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button size="lg" className="w-full sm:w-auto" asChild>
                      <Link href={localizePath(cta.primaryHref, locale)} prefetch={false}>
                        {cta.primaryLabel}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                      <Link href={localizePath(cta.secondaryHref, locale)} prefetch={false}>
                        {cta.secondaryLabel}
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="min-w-0 rounded-sm border border-border bg-background p-3 sm:p-4">
                  <div className="mb-3 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                    {ctaExample?.filename ?? 'gateway-request'}
                  </div>
                  <pre className="overflow-x-auto text-[11px] leading-relaxed text-foreground sm:text-xs">
                    <code>
                      {ctaCodeLines.map((line, index) => (
                        <span key={`${index}-${line}`} className="block">
                          {renderHighlightedLine(line)}
                        </span>
                      ))}
                    </code>
                  </pre>
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

function renderHighlightedLine(line: string): ReactNode {
  if (!line) {
    return <span>&nbsp;</span>;
  }

  if (line.trim().startsWith('#') || line.trim().startsWith('//')) {
    return <span className="text-muted-foreground">{line}</span>;
  }

  const tokens = line.match(
    /https?:\/\/[^\s\\]+|"(?:[^"\\]|\\.)*"(?=\s*:)|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\bODOCK_[A-Z_]+\b|\b(?:curl|import|from|const|new|await|return|print|requests|Client|StreamableHTTPClientTransport|Authorization|Content-Type|jsonrpc|method|params|headers|response|timeout|name|arguments)\b|-[A-Za-z]|\b\d+(?:\.\d+)?\b/g
  );

  if (!tokens) {
    return <span>{line}</span>;
  }

  const parts: ReactNode[] = [];
  let cursor = 0;

  tokens.forEach((token, index) => {
    const start = line.indexOf(token, cursor);

    if (start > cursor) {
      parts.push(line.slice(cursor, start));
    }

    let className = 'text-foreground';

    if (/ODOCK_[A-Z_]+|api\.odock\.ai|github-tools-http/.test(token)) {
      className = 'text-emerald-500';
    } else if (
      /^https?:\/\//.test(token) ||
      /^-[A-Za-z]$/.test(token) ||
      /^(Authorization|Content-Type|jsonrpc|method|params|headers|name|arguments)$/.test(token)
    ) {
      className = 'text-chart-2';
    } else if (
      /^"(?:[^"\\]|\\.)*"$/.test(token) ||
      /^'(?:[^'\\]|\\.)*'$/.test(token) ||
      /^`(?:[^`\\]|\\.)*`$/.test(token)
    ) {
      className = 'text-chart-3';
    } else if (
      /^(?:curl|import|from|const|new|await|return|print|requests|Client|StreamableHTTPClientTransport|response|timeout)$/.test(
        token
      ) ||
      /^\d+(?:\.\d+)?$/.test(token)
    ) {
      className = 'text-primary';
    }

    parts.push(
      <span key={`${token}-${index}`} className={className}>
        {token}
      </span>
    );
    cursor = start + token.length;
  });

  if (cursor < line.length) {
    parts.push(line.slice(cursor));
  }

  return <>{parts}</>;
}
