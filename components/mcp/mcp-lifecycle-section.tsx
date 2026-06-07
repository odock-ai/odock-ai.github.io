"use client";

import { useEffect, useState } from "react";
import {
  BadgeDollarSign,
  CheckCircle2,
  FileText,
  KeyRound,
  Route,
  ServerCog,
  Shield,
} from "lucide-react";
import type { SiteContent } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LifecycleOverview = SiteContent["mcpGatewayPage"]["sections"]["lifecycle"]["overview"];

type MCPLifecycleSectionProps = {
  content: LifecycleOverview;
};

const iconMap = {
  keyRound: KeyRound,
  shield: Shield,
  serverCog: ServerCog,
  checkCircle: CheckCircle2,
  badgeDollarSign: BadgeDollarSign,
  route: Route,
  fileText: FileText,
} as const;

export function MCPLifecycleSection({ content }: MCPLifecycleSectionProps) {
  const [activeStep, setActiveStep] = useState(-1);
  const gridColsClass =
    content.steps.length === 6
      ? "xl:grid-cols-6"
      : content.steps.length === 5
        ? "xl:grid-cols-5"
        : content.steps.length === 4
          ? "xl:grid-cols-4"
          : "xl:grid-cols-7";

  useEffect(() => {
    const warmupTimeout = window.setTimeout(() => {
      setActiveStep(0);
    }, 180);

    const interval = window.setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= content.steps.length - 1) return 0;
        return prev + 1;
      });
    }, 1100);

    return () => {
      window.clearTimeout(warmupTimeout);
      window.clearInterval(interval);
    };
  }, [content.steps.length]);

  return (
    <section className="relative overflow-hidden bg-card/30 py-24" id="mcp-lifecycle">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px max-w-12 flex-1 bg-primary" />
            <span className="text-[10px] uppercase tracking-widest text-primary">
              {content.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-border lg:block" />
          <div
            className="absolute left-0 top-1/2 hidden h-px -translate-y-1/2 bg-primary transition-all duration-500 lg:block"
            style={{ width: `${((activeStep + 1) / content.steps.length) * 100}%` }}
          />

          <div className={cn("grid gap-3 sm:grid-cols-2 md:grid-cols-3", gridColsClass)}>
            {content.steps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] ?? Shield;

              return (
                <article
                  key={step.label}
                  className={`relative border bg-card p-4 transition-all duration-300 ${
                    index <= activeStep ? "border-primary/50" : "border-border"
                  }`}
                >
                  <div
                    className={`absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center border text-[10px] transition-all duration-300 ${
                      index < activeStep
                        ? "border-primary/70 bg-primary text-primary-foreground shadow-[0_0_18px_rgba(34,197,94,0.35)]"
                        : index === activeStep
                          ? "border-primary bg-primary text-primary-foreground shadow-[0_0_24px_rgba(34,197,94,0.5)]"
                          : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="mb-3 flex items-center gap-2">
                    <div
                      className={`flex h-9 w-9 items-center justify-center border transition-colors ${
                        index <= activeStep ? "border-primary bg-primary/10" : "border-border bg-secondary"
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 transition-colors ${
                          index <= activeStep ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    {index <= activeStep ? <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> : null}
                  </div>
                  <h3 className="mb-2 text-sm font-medium text-foreground">{step.label}</h3>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 overflow-hidden border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {content.blockedRequestLabel}
            </span>
            <span className="rounded-full border border-destructive/30 bg-destructive/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-destructive">
              {content.blockedStatusLabel}
            </span>
          </div>
          <div className="overflow-x-auto p-4">
            <pre className="font-mono text-xs leading-6 text-foreground">
              <code>{renderJsonObject(content.blockedRequest)}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderJsonObject(data: Record<string, string | number>) {
  return (
    <>
      <span className="text-muted-foreground">{"{"}</span>
      {"\n"}
      {Object.entries(data).map(([key, value], index, entries) => (
        <span key={key}>
          <span className="text-muted-foreground">  </span>
          <span className="text-chart-2">"{key}"</span>
          <span className="text-muted-foreground">: </span>
          {typeof value === "number" ? (
            <span className="text-primary">{value}</span>
          ) : (
            <span className="text-chart-3">"{value}"</span>
          )}
          {index < entries.length - 1 ? <span className="text-muted-foreground">,</span> : null}
          {"\n"}
        </span>
      ))}
      <span className="text-muted-foreground">{"}"}</span>
    </>
  );
}
