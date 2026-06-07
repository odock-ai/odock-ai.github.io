"use client"

import { useEffect, useState } from "react"
import {
  CheckCircle2,
  Shield,
  KeyRound,
  Lock,
  DollarSign,
  Route,
  FileText,
} from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"

export function LifecycleSection() {
  const { content } = useLandingContent()
  const lifecycleSteps = content.lifecycle.steps
  const [activeStep, setActiveStep] = useState(-1)
  const blockedRequest = (() => {
    try {
      return JSON.parse(content.lifecycle.blockedRequestJson) as Record<string, string | number>
    } catch {
      return null
    }
  })()
  const iconMap = {
    keyRound: KeyRound,
    lock: Lock,
    shield: Shield,
    dollarSign: DollarSign,
    route: Route,
    fileText: FileText,
  } as const

  useEffect(() => {
    const warmupTimeout = window.setTimeout(() => {
      setActiveStep(0)
    }, 180)

    const interval = window.setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= lifecycleSteps.length - 1) return 0
        return prev + 1
      })
    }, 950)

    return () => {
      window.clearTimeout(warmupTimeout)
      window.clearInterval(interval)
    }
  }, [lifecycleSteps.length])

  return (
    <section className="relative overflow-hidden bg-card/30 py-24" id="lifecycle">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="animate-fade-in-up mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 max-w-12 bg-primary" />
            <span className="text-[10px] uppercase tracking-widest text-primary">
              {content.lifecycle.eyebrow}
            </span>
          </div>
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-foreground lg:text-3xl">
            {content.lifecycle.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {content.lifecycle.description}
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 hidden lg:block" />
          <div 
            className="absolute top-1/2 left-0 h-px bg-primary -translate-y-1/2 transition-all duration-500 hidden lg:block"
            style={{ width: `${((activeStep + 1) / lifecycleSteps.length) * 100}%` }}
          />

          <div className="stagger-children grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {lifecycleSteps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap]
              return (
              <div 
                key={step.label} 
                className={`relative border bg-card p-4 transition-all duration-300 ${
                  index <= activeStep 
                    ? "border-primary/50" 
                    : "border-border"
                }`}
              >
                <div
                  className={`absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center border text-[10px] transition-all duration-300 ${
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
                  <div className={`flex h-8 w-8 items-center justify-center border transition-colors ${
                    index <= activeStep ? "border-primary bg-primary/10" : "border-border bg-secondary"
                  }`}>
                    <Icon className={`h-4 w-4 transition-colors ${
                      index <= activeStep ? "text-primary" : "text-muted-foreground"
                    }`} />
                  </div>
                  {index <= activeStep && (
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  )}
                </div>
                <h3 className="mb-1 text-xs font-medium text-foreground">{step.label}</h3>
                <p className="text-[10px] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            )})}
          </div>
        </div>

        <div className="animate-fade-in-up mt-12 overflow-hidden border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {content.lifecycle.blockedRequestLabel}
            </span>
            <span className="rounded-full border border-destructive/30 bg-destructive/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-destructive">
              {content.lifecycle.blockedStatusLabel}
            </span>
          </div>
          <div className="p-4 overflow-x-auto">
            <pre className="font-mono text-xs text-foreground">
              <code>
                {blockedRequest ? (
                  <>
                    <span className="text-muted-foreground">{"{"}</span>
                    {"\n"}
                    {Object.entries(blockedRequest).map(([key, value], index, entries) => (
                      <span key={key}>
                        <span className="text-muted-foreground">  </span>
                        <span className="text-chart-2">"{key}"</span>
                        <span className="text-muted-foreground">: </span>
                        {typeof value === "number" ? (
                          <span className="text-chart-3">{value}</span>
                        ) : (
                          <span className="text-primary">"{value}"</span>
                        )}
                        {index < entries.length - 1 ? (
                          <span className="text-muted-foreground">,</span>
                        ) : null}
                        {"\n"}
                      </span>
                    ))}
                    <span className="text-muted-foreground">{"}"}</span>
                  </>
                ) : (
                  content.lifecycle.blockedRequestJson
                )}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
