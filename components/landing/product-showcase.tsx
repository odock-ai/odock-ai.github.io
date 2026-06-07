"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { cn } from "@/lib/utils"
import {
  Activity,
  ArrowRight,
  FileText,
  KeyRound,
  Network,
  Settings,
} from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

type RoutingAttempt = {
  provider: string
  model: string
  outcome: string
  error?: string
}

type RoutingTrace = {
  strategy: string
  rerouted: boolean
  attempts: RoutingAttempt[]
}

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("analytics")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { content } = useLandingContent()
  const tabs = content.platform.tabs
  const activeTabData = tabs.find((t) => t.id === activeTab)
  const iconMap = {
    keyRound: KeyRound,
    network: Network,
    activity: Activity,
    fileText: FileText,
    settings: Settings,
  } as const

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mb-12 max-w-2xl transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px max-w-12 flex-1 bg-primary" />
            <span className="text-[10px] uppercase tracking-widest text-primary">
              {content.platform.eyebrow}
            </span>
          </div>
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-foreground lg:text-3xl">
            {content.platform.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {content.platform.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}`}>
            <div className="border border-border bg-card/50">
              <div className="border-b border-border bg-secondary/30 px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[10px] uppercase tracking-widest text-primary">
                    {content.platform.viewsLabel}
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-chart-3 pulse-glow" />
                </div>
              </div>
              <div className="flex flex-col gap-1 p-2">
                {tabs.map((tab) => {
                  const Icon = iconMap[tab.icon as keyof typeof iconMap]
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
                  )
                })}
              </div>
            </div>

            <div className="mt-4 border border-border bg-secondary/20 p-4">
              <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary">
                <ArrowRight className="h-3 w-3" />
                {content.platform.activeViewLabel}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {activeTabData?.caption}
              </p>
            </div>
          </div>

          <div className={`overflow-hidden border border-border bg-card transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-destructive/60" />
                  <div className="h-2 w-2 rounded-full bg-chart-3/60" />
                  <div className="h-2 w-2 rounded-full bg-primary/60" />
                </div>
                <span className="ml-3 text-[10px] text-muted-foreground">
                  {activeTabData?.label.toLowerCase().replaceAll(" ", "-")}.{content.platform.viewFileSuffix}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="pulse-glow h-1.5 w-1.5 bg-primary" />
                <span className="text-[10px] text-primary">{content.platform.liveLabel}</span>
              </div>
            </div>

            {activeTab === "keys" && <VirtualKeysView />}
            {activeTab === "mcp" && <MCPGovernanceView />}
            {activeTab === "analytics" && <TrafficAnalyticsView />}
            {activeTab === "usage" && <UsageRecordsView />}
            {activeTab === "policies" && <PoliciesView />}
          </div>
        </div>
      </div>
    </section>
  )
}

function getPlatformStatusLabel(content: ReturnType<typeof useLandingContent>["content"], status: string) {
  return content.platform.statusLabels?.[status as keyof typeof content.platform.statusLabels] ?? status
}

function getPlatformOutcomeLabel(content: ReturnType<typeof useLandingContent>["content"], outcome: string) {
  return content.platform.outcomeLabels?.[outcome as keyof typeof content.platform.outcomeLabels] ?? outcome
}

function getPlatformStrategyLabel(content: ReturnType<typeof useLandingContent>["content"], strategy: string) {
  return content.platform.strategyLabels?.[strategy as keyof typeof content.platform.strategyLabels] ?? strategy
}

function VirtualKeysView() {
  const { content } = useLandingContent()
  const virtualKeys = content.platform.virtualKeys

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs">
        <thead className="border-b border-border bg-secondary/30">
          <tr>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{virtualKeys.headers.key}</th>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{virtualKeys.headers.models}</th>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{virtualKeys.headers.budget}</th>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{virtualKeys.headers.routing}</th>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{virtualKeys.headers.requests}</th>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{virtualKeys.headers.status}</th>
          </tr>
        </thead>
        <tbody>
          {virtualKeys.records.map((key) => {
            const usagePercent = (key.budget.used / key.budget.limit) * 100
            return (
              <tr key={key.name} className="border-b border-border/50 transition-colors hover:bg-secondary/20">
                <td className="px-4 py-3 align-top">
                  <div className="font-mono text-foreground">{key.name}</div>
                  <div className="text-[10px] text-muted-foreground">{key.owner}</div>
                </td>
                <td className="px-4 py-3 align-top">
                  <div className="flex max-w-[220px] flex-wrap gap-1">
                    {key.models.map((model) => (
                      <span
                        key={model}
                        className="border border-border bg-secondary/50 px-1.5 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 align-top">
                  <div className="min-w-[160px]">
                    <div className="mb-2 flex items-center justify-between text-[10px] text-muted-foreground">
                      <span>{virtualKeys.usedLabel}</span>
                      <span>${key.budget.used}/${key.budget.limit}</span>
                    </div>
                    <div className="h-1.5 bg-secondary">
                      <div
                        className={cn("h-full", usagePercent > 85 ? "bg-chart-3" : "bg-primary")}
                        style={{ width: `${Math.min(100, usagePercent)}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 align-top">
                  <div className="text-[10px] uppercase tracking-wider text-primary">{getPlatformStrategyLabel(content, key.routing.strategy)}</div>
                  <div className="mt-1 space-y-1">
                    {key.routing.candidates.map((candidate, index) => (
                      <div key={candidate} className="font-mono text-[10px] text-muted-foreground">
                        #{index + 1} {candidate}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{key.requests}</td>
                <td className="px-4 py-3">
                  <StatusPill status={key.status} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function MCPGovernanceView() {
  const { content } = useLandingContent()
  const mcpGovernance = content.platform.mcpGovernance

  return (
    <div className="p-4">
      <div className="grid gap-2">
        {mcpGovernance.servers.map((server) => (
          <div
            key={server.name}
            className="border border-border p-4 transition-colors hover:border-primary/30"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Network className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-mono text-sm text-foreground">{server.name}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {server.transport} · {server.access}
                  </div>
                </div>
              </div>
              <StatusPill status={server.status} />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div>
                <div className="mb-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {mcpGovernance.allowedLabel}
                </div>
                <div className="flex flex-wrap gap-1">
                  {server.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {mcpGovernance.blockedLabel}
                </div>
                <div className="flex flex-wrap gap-1">
                  {server.blocked.map((tool) => (
                    <span
                      key={tool}
                      className="bg-destructive/10 px-1.5 py-0.5 text-[10px] text-destructive"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TrafficAnalyticsView() {
  const { content } = useLandingContent()
  const analytics = content.platform.trafficAnalytics
  const [analyticsTab, setAnalyticsTab] = useState<"traffic" | "latency" | "cost">("traffic")
  const panel = analytics.panels[analyticsTab]

  const chartBars =
    analyticsTab === "traffic"
      ? analytics.series.map((row) => ({ label: row.label, primary: row.ai, secondary: row.mcp }))
      : analyticsTab === "latency"
        ? analytics.series.map((row) => ({ label: row.label, primary: row.p95, secondary: row.errors * 8 }))
        : analytics.series.map((row) => ({ label: row.label, primary: row.cost, secondary: Math.round(row.cost * 0.3) }))

  const chartMeta =
    analyticsTab === "traffic"
      ? {
          primaryLabel: panel.primaryLabel,
          secondaryLabel: panel.secondaryLabel,
          primaryColor: "oklch(0.74 0.16 190)",
          secondaryColor: "oklch(0.68 0.12 150)",
        }
      : analyticsTab === "latency"
        ? {
            primaryLabel: panel.primaryLabel,
            secondaryLabel: panel.secondaryLabel,
            primaryColor: "oklch(0.72 0.14 220)",
            secondaryColor: "oklch(0.72 0.18 65)",
          }
        : {
            primaryLabel: panel.primaryLabel,
            secondaryLabel: panel.secondaryLabel,
            primaryColor: "oklch(0.72 0.14 220)",
            secondaryColor: "oklch(0.68 0.12 150)",
          }

  return (
    <div className="p-4">
      <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {analytics.metrics.map((metric) => (
          <div key={metric.label} className="border border-border bg-secondary/30 p-3">
            <div className="mb-1 text-[10px] uppercase tracking-widest text-muted-foreground">
              {metric.label}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-medium text-foreground">{metric.value}</span>
              <span className="text-[10px] text-primary">{metric.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <MiniTabButton active={analyticsTab === "traffic"} onClick={() => setAnalyticsTab("traffic")}>
          {analytics.tabs.find((tab) => tab.id === "traffic")?.label}
        </MiniTabButton>
        <MiniTabButton active={analyticsTab === "latency"} onClick={() => setAnalyticsTab("latency")}>
          {analytics.tabs.find((tab) => tab.id === "latency")?.label}
        </MiniTabButton>
        <MiniTabButton active={analyticsTab === "cost"} onClick={() => setAnalyticsTab("cost")}>
          {analytics.tabs.find((tab) => tab.id === "cost")?.label}
        </MiniTabButton>
      </div>

      <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="min-w-0 border border-border bg-secondary/20 p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {panel.title}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {panel.description}
              </div>
            </div>
            <div className="flex gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2" style={{ backgroundColor: chartMeta.primaryColor }} />
                {chartMeta.primaryLabel}
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2" style={{ backgroundColor: chartMeta.secondaryColor }} />
                {chartMeta.secondaryLabel}
              </span>
            </div>
          </div>
          <AreaTrendChart data={chartBars} {...chartMeta} />
        </div>

        <div className="min-w-0 border border-border bg-secondary/20 p-4">
          <div className="mb-4 text-[10px] uppercase tracking-widest text-muted-foreground">
            {analytics.providerBreakdownLabel}
          </div>
          <div className="space-y-3">
            {analytics.providerBreakdown.map((provider) => {
              const maxRequests = analytics.providerBreakdown[0]?.requests ?? 1
              return (
                <div key={provider.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider">
                    <span className="text-foreground">{provider.name}</span>
                    <span className="text-muted-foreground">{provider.errorRate} {analytics.providerErrorsLabel} · {provider.cost}</span>
                  </div>
                  <div className="h-2 bg-secondary">
                    <div
                      className="h-full bg-primary/80"
                      style={{ width: `${(provider.requests / maxRequests) * 100}%` }}
                    />
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    {provider.requests.toLocaleString()} {analytics.providerRequestsLabel}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 hidden min-w-0 border border-border bg-secondary/20 p-4 md:block">
        <div className="mb-4">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {analytics.heatmapTitle}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            {analytics.heatmapDescription}
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[760px]">
            <div className="mb-2 grid grid-cols-[72px_repeat(24,minmax(0,1fr))] gap-1 text-[9px] uppercase tracking-wider text-muted-foreground">
              <span />
              {analytics.heatmapHours.map((hour) => (
                <span key={hour} className="text-center">
                  {Number(hour) % 2 === 0 ? hour : ""}
                </span>
              ))}
            </div>
            <div className="space-y-1">
              {analytics.heatmapDays.map((day, rowIndex) => (
                <div key={day} className="grid grid-cols-[72px_repeat(24,minmax(0,1fr))] gap-1">
                  <div className="flex items-center text-[10px] uppercase tracking-wider text-muted-foreground">
                    {day}
                  </div>
                  {analytics.heatmapValues[rowIndex].map((value, colIndex) => (
                    <div
                      key={`${day}-${analytics.heatmapHours[colIndex]}`}
                      className="aspect-square min-h-5 border border-border/50"
                      style={{ backgroundColor: getHeatmapColor(value / 100) }}
                      title={`${day} ${analytics.heatmapHours[colIndex]}:00 · ${value} ${analytics.heatmapTooltipSuffix}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function UsageRecordsView() {
  const { content } = useLandingContent()
  const usageRecords = content.platform.usageRecords

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs">
        <thead className="border-b border-border bg-secondary/30">
          <tr>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{usageRecords.headers.id}</th>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{usageRecords.headers.time}</th>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{usageRecords.headers.key}</th>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{usageRecords.headers.model}</th>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{usageRecords.headers.routing}</th>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{usageRecords.headers.cost}</th>
            <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{usageRecords.headers.status}</th>
          </tr>
        </thead>
        <tbody>
          {usageRecords.records.map((record) => (
            <tr
              key={record.id}
              className="border-b border-border/50 transition-colors hover:bg-secondary/20"
            >
              <td className="px-4 py-3 font-mono text-primary">{record.id}</td>
              <td className="px-4 py-3 text-muted-foreground">{record.timestamp}</td>
              <td className="px-4 py-3 font-mono text-foreground">{record.key}</td>
              <td className="px-4 py-3">
                <ModelBadge kind={record.kind} model={record.model} />
              </td>
              <td className="px-4 py-3 align-top">
                <RoutingCell routing={record.routing} />
              </td>
              <td className="px-4 py-3 text-muted-foreground">{record.cost}</td>
              <td className="px-4 py-3 align-top">
                <StatusPill status={record.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PoliciesView() {
  const { content } = useLandingContent()
  const policies = content.platform.policies

  return (
    <div className="p-4">
      <div className="grid gap-2.5">
        {policies.cards.map((policy) => (
          <div
            key={policy.name}
            className="border border-border bg-gradient-to-b from-secondary/20 to-transparent p-4 transition-colors hover:border-primary/30"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-medium tracking-tight text-foreground">{policy.name}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {policies.appliesToLabel}: <span className="font-mono text-foreground">{policy.scope}</span>
                </div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center border border-border bg-secondary/30">
                <Settings className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
            </div>

            <div className="grid gap-2.5 lg:grid-cols-3">
              {policy.blocks.map((block) => (
                <PolicyBlock key={`${policy.name}-${block.title}`} title={block.title} rows={block.rows} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MiniTabButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border px-3 py-2 text-[10px] uppercase tracking-widest transition-colors",
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-border bg-secondary/20 text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </button>
  )
}

function AreaTrendChart({
  data,
  primaryLabel,
  secondaryLabel,
  primaryColor,
  secondaryColor,
}: {
  data: Array<{ label: string; primary: number; secondary: number }>
  primaryLabel: string
  secondaryLabel: string
  primaryColor: string
  secondaryColor: string
}) {
  const chartConfig = {
    primary: {
      label: primaryLabel,
      color: primaryColor,
    },
    secondary: {
      label: secondaryLabel,
      color: secondaryColor,
    },
  } satisfies ChartConfig

  return (
    <div className="min-w-0 space-y-3">
      <div className="h-[220px] w-full min-w-0">
        <ChartContainer config={chartConfig} className="h-full w-full min-w-0">
          <AreaChart data={data} margin={{ left: 0, right: 8, top: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="landingAreaPrimary" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.38} />
                <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="landingAreaSecondary" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="var(--color-secondary)" stopOpacity={0.22} />
                <stop offset="95%" stopColor="var(--color-secondary)" stopOpacity={0.03} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="label" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} width={32} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  indicator="line"
                  formatter={(value, name) => (
                    <div className="flex min-w-[7rem] items-center justify-between gap-3">
                      <span className="capitalize text-muted-foreground">{String(name)}</span>
                      <span className="font-mono text-foreground">{String(value)}</span>
                    </div>
                  )}
                />
              }
            />
            <Area
              type="monotone"
              dataKey="secondary"
              stroke="var(--color-secondary)"
              fill="url(#landingAreaSecondary)"
              strokeWidth={2}
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="primary"
              stroke="var(--color-primary)"
              fill="url(#landingAreaPrimary)"
              strokeWidth={2.5}
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  )
}

function RoutingCell({ routing }: { routing?: RoutingTrace }) {
  const { content } = useLandingContent()

  if (!routing) {
    return null
  }

  return (
    <div className="min-w-[190px] space-y-1">
      <div className="flex flex-wrap items-center gap-1.5">
        <span
          className={cn(
            "px-1.5 py-0.5 text-[10px] uppercase tracking-wider",
            routing.rerouted
              ? "bg-chart-3/10 text-chart-3"
              : "bg-primary/10 text-primary"
          )}
        >
          {routing.rerouted ? content.platform.usageRecords.reroutedLabel : content.platform.usageRecords.directLabel}
        </span>
      </div>
      {routing.rerouted ? (
        <div className="space-y-1">
          {routing.attempts.map((attempt, index) => (
            <div key={`${attempt.provider}-${attempt.model}-${index}`} className="text-[10px] text-muted-foreground">
              <span className="font-mono text-foreground">
                #{index + 1} {attempt.provider}/{attempt.model}
              </span>
              <span className="mx-1">·</span>
              <span>{getPlatformOutcomeLabel(content, attempt.outcome)}</span>
              {attempt.error ? <span className="mx-1">· {attempt.error}</span> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function PolicyBlock({
  title,
  rows,
}: {
  title: string
  rows: Array<{ label: string; value: string }>
}) {
  return (
    <div className="border border-border/80 bg-secondary/15 p-3">
      <div className="mb-2.5 flex items-center justify-between gap-3">
        <div className="text-[10px] uppercase tracking-widest text-primary">{title}</div>
        <div className="h-px flex-1 bg-border/70" />
      </div>
      <div className="space-y-1.5">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[92px_minmax(0,1fr)] gap-3 text-[11px]">
            <span className="text-muted-foreground">{row.label}</span>
            <span className="font-mono text-foreground">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatusPill({ status }: { status: string }) {
  const { content } = useLandingContent()

  return (
    <span
      className={cn(
        "px-2 py-0.5 text-[10px] uppercase tracking-wider",
        status === "active" || status === "success"
          ? "bg-primary/10 text-primary"
          : status === "warning" || status === "restricted"
            ? "bg-chart-3/10 text-chart-3"
          : "bg-destructive/10 text-destructive"
      )}
    >
      {getPlatformStatusLabel(content, status)}
    </span>
  )
}

function ModelBadge({ kind, model }: { kind?: string; model: string }) {
  const { content } = useLandingContent()
  const isMcpTool = kind === "mcpTool"

  if (isMcpTool) {
    return (
      <span className="border border-border bg-secondary/50 px-1.5 py-0.5 text-[10px] text-muted-foreground">
        {content.platform.usageRecords.mcpToolPrefix} · {model}
      </span>
    )
  }

  return (
    <span className="border border-border bg-secondary/50 px-1.5 py-0.5 text-[10px] text-muted-foreground">
      {model}
    </span>
  )
}


function getHeatmapColor(ratio: number) {
  const clamped = Math.max(0, Math.min(1, ratio))
  const mix = 12 + clamped * 76
  return `color-mix(in oklab, var(--primary) ${mix.toFixed(1)}%, transparent)`
}
