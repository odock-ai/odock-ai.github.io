"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Shield, Gauge, Lock, Eye } from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { localizePath } from "@/lib/i18n"

export function Hero() {
  const { content, locale } = useLandingContent()
  const featureIcons = {
    shield: Shield,
    gauge: Gauge,
    lock: Lock,
    eye: Eye,
  } as const

  return (
    <section id="hero" className="relative overflow-hidden sm:min-h-screen">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 grid-pattern-large opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-20 sm:pb-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="mb-6 flex items-center gap-3 overflow-hidden sm:mb-8 sm:gap-4 animate-fade-in-up">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
          </div>
          <div className="h-px flex-1 bg-border" />
          <span className="shrink-0 text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px]">
            {content.hero.terminalLabel}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-8">
          <div className="flex min-w-0 flex-col justify-center stagger-children">
            <div className="mb-5 inline-flex w-fit max-w-full items-center gap-2 border border-border bg-card px-3 py-1.5 sm:mb-6">
              <span className="h-1.5 w-1.5 bg-primary pulse-glow" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
                {content.hero.eyebrow}
              </span>
            </div>

            <h1 className="mb-5 max-w-[12ch] text-3xl font-medium leading-[1.05] tracking-tight text-foreground sm:mb-6 sm:max-w-[13ch] sm:text-4xl lg:max-w-none lg:text-5xl">
              <span className="block">{content.hero.headlinePrefix}</span>
              <span className="mt-2 block text-primary">
                {content.hero.headlineAccent}
              </span>
            </h1>

            <p className="mb-7 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mb-8 lg:text-base">
              {content.hero.subheadline}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button size="lg" className="group w-full sm:w-auto" asChild>
                <Link
                  href={localizePath(content.hero.primaryCtaHref, locale)}
                  prefetch={false}
                >
                  <span>{content.hero.primaryCtaLabel}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href={content.hero.secondaryCtaHref}>
                  <Terminal className="mr-2 h-4 w-4" />
                  {content.hero.secondaryCtaLabel}
                </Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6 sm:mt-10 sm:gap-4">
              {content.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-medium text-foreground sm:text-2xl">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 items-center justify-center lg:justify-end">
            <CodeEditorVisual />
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8 sm:mt-16">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 stagger-children">
            {content.hero.featureStrip.map((item) => {
              const Icon = featureIcons[item.icon as keyof typeof featureIcons]
              return (
              <div key={item.label} className="flex items-center gap-3 text-muted-foreground">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-xs">{item.label}</span>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function CodeEditorVisual() {
  const [activeStep, setActiveStep] = useState(0)
  const { content } = useLandingContent()

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % content.hero.codeVisual.steps.length)
    }, 1800)

    return () => window.clearInterval(interval)
  }, [content.hero.codeVisual.steps.length])

  const steps = content.hero.codeVisual.steps.map((step) => ({
    ...step,
    color:
      step.color === "primary"
        ? "text-primary"
        : step.color === "warning"
          ? "text-chart-3"
          : "text-muted-foreground",
  }))

  return (
    <div className="w-full min-w-0 max-w-xl">
      <div className="overflow-hidden border border-border bg-card">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-secondary/50 px-3 py-2 sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
            </div>
            <span className="ml-2 truncate text-[10px] text-muted-foreground sm:ml-3">{content.hero.codeVisual.fileLabel}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 bg-primary pulse-glow" />
            <span className="text-[10px] text-primary">{content.hero.codeVisual.liveLabel}</span>
          </div>
        </div>

        <div className="p-3 font-mono text-[11px] sm:p-4 sm:text-xs">
          <div className="mb-4 break-words text-muted-foreground">
            <span className="text-primary">{">"}</span> {content.hero.codeVisual.requestLabel}
            <span className="ml-2 break-all text-[10px] opacity-50">{content.hero.codeVisual.requestPath}</span>
          </div>

          <div className="ml-1 space-y-2 border-l border-border pl-3 sm:pl-4">
            {steps.map((step, index) => (
              <div 
                key={step.label}
                className={`flex flex-wrap items-center gap-x-3 gap-y-1 transition-all duration-300 ${
                  index <= activeStep ? "opacity-100" : "opacity-30"
                }`}
              >
                <span className="w-10 shrink-0 text-muted-foreground sm:w-16">{String(index + 1).padStart(2, "0")}</span>
                <span className={`min-w-0 break-all ${index === activeStep ? step.color : index < activeStep ? "text-primary" : "text-muted-foreground"}`}>
                  {step.label}()
                </span>
                <span className="hidden flex-1 border-t border-dashed border-border/50 sm:block" />
                <span className={`text-[10px] uppercase sm:ml-auto ${
                  index < activeStep ? "text-primary" : 
                  index === activeStep ? step.color : 
                  "text-muted-foreground"
                }`}>
                  {index < activeStep ? content.hero.codeVisual.completedStatusLabel : index === activeStep ? step.status : "..."}
                </span>
                {index === activeStep && (
                  <span className="h-1.5 w-1.5 bg-chart-3 pulse-glow" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground">
              <span className="text-primary">{">"}</span>
              <span>{content.hero.codeVisual.output.routedLabel}</span>
              <span className="text-foreground">{content.hero.codeVisual.output.modelValue}</span>
              <span className="text-[10px] opacity-50">{content.hero.codeVisual.output.providerLabel}</span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground">
              <span className="text-primary">{">"}</span>
              <span>{content.hero.codeVisual.output.tokensLabel}</span>
              <span className="text-foreground">{content.hero.codeVisual.output.tokensValue}</span>
              <span className="mx-2">|</span>
              <span>{content.hero.codeVisual.output.costLabel}</span>
              <span className="text-foreground">{content.hero.codeVisual.output.costValue}</span>
              <span className="mx-2">|</span>
              <span>{content.hero.codeVisual.output.latencyLabel}</span>
              <span className="text-foreground">{content.hero.codeVisual.output.latencyValue}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 border-t border-border bg-secondary/30 px-3 py-2 sm:flex-row sm:items-center sm:px-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-muted-foreground">
            <span>{content.hero.codeVisual.output.userLabel}</span>
            <span>{content.hero.codeVisual.output.budgetLabel}</span>
          </div>
          <div className="text-[10px] text-muted-foreground">
            {content.hero.codeVisual.output.requestId}
          </div>
        </div>
      </div>

      {/* Connection lines visual */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="flex items-center gap-1">
          <div className="h-px w-6 bg-border sm:w-8" />
          <div className="h-2 w-2 border border-border bg-background" />
          <span className="ml-1 text-[10px] text-muted-foreground">{content.hero.codeVisual.connectionLabels.app}</span>
        </div>
        <div className="h-px w-16 bg-gradient-to-r from-border via-primary/50 to-border sm:w-full sm:max-w-[220px] sm:flex-1" />
        <div className="flex items-center gap-1">
          <span className="mr-1 text-[10px] text-muted-foreground">{content.hero.codeVisual.connectionLabels.models}</span>
          <div className="h-2 w-2 border border-primary bg-primary/20" />
          <div className="h-px w-6 bg-border sm:w-8" />
        </div>
      </div>
    </div>
  )
}
