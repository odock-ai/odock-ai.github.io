"use client"

import { KeyRound, DollarSign, Cog, ShieldAlert } from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"

export function PainSection() {
  const { content } = useLandingContent()
  const iconMap = {
    keyRound: KeyRound,
    dollarSign: DollarSign,
    cog: Cog,
    shieldAlert: ShieldAlert,
  } as const

  return (
    <section className="relative overflow-hidden py-24" id="product">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 max-w-12 bg-primary" />
            <span className="text-[10px] uppercase tracking-widest text-primary">
              {content.pain.eyebrow}
            </span>
          </div>
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-foreground lg:text-3xl">
            {content.pain.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {content.pain.description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.pain.items.map((pain, index) => {
            const Icon = iconMap[pain.icon as keyof typeof iconMap]
            return (
              <div
                key={pain.title}
                className="group border border-border bg-card/50 p-5 transition-colors hover:border-primary/50 hover:bg-card"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center border border-border bg-secondary">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-[10px] text-muted-foreground/70">0{index + 1}</span>
                </div>
                <h3 className="mb-2 text-sm font-medium text-foreground">{pain.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{pain.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-px bg-gradient-to-b from-border to-primary" />
            <span className="text-[10px] uppercase tracking-widest text-primary">
              {content.pain.solutionLabel}
            </span>
            <svg
              className="h-4 w-4 text-primary animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="square"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
