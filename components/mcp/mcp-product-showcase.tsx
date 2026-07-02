"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  BadgeDollarSign,
  LineChart,
  LockKeyhole,
  Network,
  Shield,
} from "lucide-react";
import type { SiteContent } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type MCPProductShowcaseProps = {
  content: SiteContent["mcpGatewayPage"]["sections"]["productShowcase"];
};

const iconMap = {
  network: Network,
  shield: Shield,
  badgeDollarSign: BadgeDollarSign,
  activity: Activity,
  lineChart: LineChart,
  lockKeyhole: LockKeyhole,
} as const;

export function MCPProductShowcase({ content }: MCPProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState<(typeof content.tabs)[number]["id"]>("catalog");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const activeTabData = content.tabs.find((tab) => tab.id === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24" id="mcp-overview">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div
          className={`mb-12 max-w-3xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
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

        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
            }`}
          >
            <div className="border border-border bg-card/50">
              <div className="border-b border-border bg-secondary/30 px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[10px] uppercase tracking-widest text-primary">
                    {content.viewsLabel}
                  </div>
                  <span className="pulse-glow h-1.5 w-1.5 rounded-full bg-chart-2" />
                </div>
              </div>
              <div className="flex flex-col gap-1 p-2">
                {content.tabs.map((tab) => {
                  const Icon = iconMap[tab.icon as keyof typeof iconMap] ?? Network;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "flex items-center justify-between gap-3 border px-3 py-3 text-left text-[10px] uppercase tracking-wider transition-all",
                        activeTab === tab.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                      )}
                      type="button"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="h-3 w-3 shrink-0" />
                        <span>{tab.label}</span>
                      </span>
                      <ArrowRight
                        className={cn(
                          "h-3 w-3 transition-transform",
                          activeTab === tab.id ? "translate-x-0 text-primary" : "-translate-x-1"
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 border border-border bg-secondary/20 p-4">
              <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary">
                <ArrowRight className="h-3 w-3" />
                {content.activeViewLabel}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">{activeTabData?.caption}</p>
            </div>
          </div>

          <div
            className={`overflow-hidden border border-border bg-card transition-all duration-700 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-destructive/60" />
                  <div className="h-2 w-2 rounded-full bg-chart-3/60" />
                  <div className="h-2 w-2 rounded-full bg-primary/60" />
                </div>
                <span className="ml-3 text-[10px] text-muted-foreground">
                  {activeTabData?.label.toLowerCase().replaceAll(" ", "-")}.{content.viewFileSuffix}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="pulse-glow h-1.5 w-1.5 bg-primary" />
                <span className="text-[10px] text-primary">{content.liveLabel}</span>
              </div>
            </div>

            {activeTab === "catalog" ? (
              <div className="grid gap-3 p-4 md:grid-cols-3">
                {content.serverRows.map((server) => (
                  <article key={server.name} className="border border-border bg-secondary/20 p-4">
                    <div className="text-xs font-medium text-foreground">{server.name}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-wider text-primary">{server.source}</div>
                    <div className="mt-4 space-y-2 text-[11px] text-muted-foreground">
                      <Row label={content.transportLabel} value={server.transport} />
                      <Row label="Auth" value={server.auth} />
                      <Row label={content.scopeLabel} value={server.scope} />
                      <Row label={content.grantsLabel} value={server.grants} />
                    </div>
                  </article>
                ))}
              </div>
            ) : null}

            {activeTab === "security" ? (
              <div className="space-y-4 p-4">
                <div className="grid gap-3 md:grid-cols-2">
                  {content.securityLayers.map((layer, index) => (
                    <article key={layer.name} className="border border-border bg-secondary/20 p-4">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center border border-primary/30 bg-primary/10 text-[10px] text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-sm font-medium text-foreground">{layer.name}</h3>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">{layer.detail}</p>
                    </article>
                  ))}
                </div>

                <div className="border border-border bg-secondary/20 p-4">
                  <div className="mb-4 text-[10px] uppercase tracking-widest text-primary">
                    {content.policyTitle}
                  </div>
                  <div className="grid gap-3 lg:grid-cols-4">
                    {content.policyItems.map((item) => (
                      <article key={item.name} className="border border-border bg-background/70 p-3">
                        <h3 className="text-xs font-medium text-foreground">{item.name}</h3>
                        <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{item.detail}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {activeTab === "pricing" ? (
              <DataTable headers={content.tables.pricing.headers} rows={content.tables.pricing.rows} />
            ) : null}
            {activeTab === "usage" ? (
              <DataTable headers={content.tables.usage.headers} rows={content.tables.usage.rows} />
            ) : null}
            {activeTab === "observability" ? (
              <DataTable
                headers={content.tables.observability.headers}
                rows={content.tables.observability.rows}
              />
            ) : null}
            {activeTab === "auth" ? (
              <DataTable headers={content.tables.auth.headers} rows={content.tables.auth.rows} />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span>{label}</span>
      <span className="font-mono text-foreground">{value}</span>
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs">
        <thead className="border-b border-border bg-secondary/30">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="border-b border-border/50 transition-colors hover:bg-secondary/20">
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${headers[index]}`}
                  className={cn(
                    "px-4 py-3 align-top text-muted-foreground",
                    index === 0 ? "font-mono text-foreground" : undefined
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
