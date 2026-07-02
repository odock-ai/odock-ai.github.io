"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, Server, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GatewayCodeTerminal } from "@/components/shared/gateway-code-terminal"
import { useLandingContent } from "@/components/providers/landing-content-provider"

export function GatewaySection() {
  const [activeFlow, setActiveFlow] = useState<"llm" | "mcp">("llm")
  const { content } = useLandingContent()
  const activeFlowContent = activeFlow === "llm" ? content.mcp.llm : content.mcp.mcp
  const examples = activeFlowContent.examples ?? []
  const methodOrder =
    activeFlow === "llm"
      ? ["unified", "native", "http"]
      : ["mcp", "framework", "http"]

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 sm:mb-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px max-w-12 flex-1 bg-primary" />
            <span className="text-[10px] uppercase tracking-widest text-primary">
              {content.mcp.eyebrow}
            </span>
          </div>
          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-foreground text-balance">
            {content.mcp.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {content.mcp.description}
          </p>
          <div className="mt-5">
            <Button variant="outline" size="sm" asChild>
              <Link href="/mcp-gateway" prefetch={false}>
                Explore MCP gateway
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <button
            type="button"
            onClick={() => setActiveFlow("llm")}
            className={`p-4 sm:p-6 border transition-all text-left bg-card ${
              activeFlow === "llm"
                ? "border-primary "
                : "border-border "
            }`}
          >
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <div className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center border transition-colors ${
                activeFlow === "llm"
                  ? "border-primary bg-primary/10"
                  : "border-border bg-secondary"
              }`}>
                <Cpu className={`h-4 w-4 sm:h-5 sm:w-5 ${
                  activeFlow === "llm" ? "text-primary" : "text-muted-foreground"
                }`} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground">{content.mcp.llm.title}</h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground">{content.mcp.llm.subtitle}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {content.mcp.llm.features.map((feature, i) => (
                <li 
                  key={feature} 
                  className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CheckCircle2 className={`h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 transition-colors ${
                    activeFlow === "llm" ? "text-primary" : "text-muted-foreground"
                  }`} />
                  {feature}
                </li>
              ))}
            </ul>
          </button>

          <button
            type="button"
            onClick={() => setActiveFlow("mcp")}
            className={`p-4 sm:p-6 border transition-all text-left bg-card ${
              activeFlow === "mcp"
                ? "border-chart-2"
                : "border-border "
            }`}
          >
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <div className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center border transition-colors ${
                activeFlow === "mcp"
                  ? "border-chart-2 bg-chart-2/10"
                  : "border-border bg-secondary"
              }`}>
                <Server className={`h-4 w-4 sm:h-5 sm:w-5 ${
                  activeFlow === "mcp" ? "text-chart-2" : "text-muted-foreground"
                }`} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground">{content.mcp.mcp.title}</h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground">{content.mcp.mcp.subtitle}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {content.mcp.mcp.features.map((feature, i) => (
                <li 
                  key={feature} 
                  className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CheckCircle2 className={`h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 transition-colors ${
                    activeFlow === "mcp" ? "text-chart-2" : "text-muted-foreground"
                  }`} />
                  {feature}
                </li>
              ))}
            </ul>
          </button>
        </div>

        <GatewayCodeTerminal
          key={activeFlow}
          className="mt-6 sm:mt-8"
          examples={examples}
          methodOrder={methodOrder}
          fallbackFilename={activeFlowContent.filename}
          fallbackCode={activeFlowContent.code}
          methodTabsLabel={content.mcp.methodTabsLabel}
          languageTabsLabel={content.mcp.languageTabsLabel}
          copyCodeAriaLabel={content.mcp.copyCodeAriaLabel}
        />
      </div>
    </section>
  )
}
