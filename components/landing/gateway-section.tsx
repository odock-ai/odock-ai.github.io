"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle2, Server, Cpu, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLandingContent } from "@/components/providers/landing-content-provider"

export function GatewaySection() {
  const [activeFlow, setActiveFlow] = useState<"llm" | "mcp">("llm")
  const [copied, setCopied] = useState(false)
  const [selectedMethods, setSelectedMethods] = useState<Record<"llm" | "mcp", string>>({
    llm: "unified",
    mcp: "mcp",
  })
  const [selectedLanguages, setSelectedLanguages] = useState<Record<"llm" | "mcp", string>>({
    llm: "openai-sdk",
    mcp: "python-sdk",
  })
  const { content } = useLandingContent()
  const activeFlowContent = activeFlow === "llm" ? content.mcp.llm : content.mcp.mcp
  const examples = activeFlowContent.examples ?? []
  const methodOrder =
    activeFlow === "llm"
      ? ["unified", "native", "http"]
      : ["mcp", "framework", "http"]
  const methods = [
    ...new Set(
      examples
        .slice()
        .sort(
          (a, b) =>
            methodOrder.indexOf(a.method) - methodOrder.indexOf(b.method)
        )
        .map((example) => example.method)
    ),
  ]
  const languages = [...new Set(
    examples
      .filter((example) => example.method === selectedMethods[activeFlow])
      .map((example) => example.language)
  )]
  const activeExample =
    examples.find(
      (example) =>
        example.method === selectedMethods[activeFlow] &&
        example.language === selectedLanguages[activeFlow]
    ) ??
    examples.find((example) => example.method === selectedMethods[activeFlow]) ??
    examples[0]
  const activeCode = activeExample?.code ?? activeFlowContent.code
  const activeLines = activeCode.split("\n")

  useEffect(() => {
    if (!examples.length) {
      return
    }

    const defaultMethod = examples[0].method
    const currentMethod = selectedMethods[activeFlow]
    const currentLanguage = selectedLanguages[activeFlow]
    const methodExists = examples.some((example) => example.method === currentMethod)
    const nextMethod = methodExists ? currentMethod : defaultMethod
    const languageExists = examples.some(
      (example) =>
        example.method === nextMethod && example.language === currentLanguage
    )
    const nextLanguage =
      languageExists
        ? currentLanguage
        : examples.find((example) => example.method === nextMethod)?.language ?? examples[0].language

    if (nextMethod !== currentMethod) {
      setSelectedMethods((prev) => ({ ...prev, [activeFlow]: nextMethod }))
    }

    if (nextLanguage !== currentLanguage) {
      setSelectedLanguages((prev) => ({ ...prev, [activeFlow]: nextLanguage }))
    }
  }, [activeFlow, examples, selectedLanguages, selectedMethods])

  const selectMethod = (method: string) => {
    const fallbackLanguage =
      examples.find((example) => example.method === method)?.language ?? selectedLanguages[activeFlow]

    setSelectedMethods((prev) => ({ ...prev, [activeFlow]: method }))
    setSelectedLanguages((prev) => ({ ...prev, [activeFlow]: fallbackLanguage }))
  }

  const fallbackCopyCode = () => {
    const textArea = document.createElement("textarea")
    textArea.value = activeCode
    textArea.setAttribute("readonly", "")
    textArea.style.position = "fixed"
    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.opacity = "0"
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      return document.execCommand("copy")
    } finally {
      document.body.removeChild(textArea)
    }
  }

  const copyCode = async () => {
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(activeCode)
      } else if (!fallbackCopyCode()) {
        throw new Error("Copy fallback failed")
      }

      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

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

        <div className="mt-6 sm:mt-8 border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-3 sm:px-4 py-2">
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-destructive/60" />
                <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-chart-3/60" />
                <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary/60" />
              </div>
              <span className="ml-2 sm:ml-3 truncate text-[10px] sm:text-xs text-muted-foreground">
                {activeExample?.filename ?? activeFlowContent.filename}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {activeExample ? (
                <>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {activeExample.methodLabel}
                </span>
                <span className="hidden sm:inline text-[10px] text-foreground">
                  {activeExample.languageLabel}
                </span>
                </>
              ) : null}
            </div>
          </div>
          {activeExample ? (
            <div className="border-b border-border ">
              <div className="flex flex-wrap items-center gap-2 px-3 sm:px-4 py-2">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {content.mcp.methodTabsLabel}
                </span>
                <div className="flex flex-wrap items-center gap-1">
                  {methods.map((method) => {
                    const selected = selectedMethods[activeFlow] === method
                    const label =
                      examples.find((example) => example.method === method)?.methodLabel ?? method

                    return (
                      <button
                        key={method}
                        type="button"
                        onClick={() => selectMethod(method)}
                        className={`border px-2 py-1 text-[10px] uppercase tracking-wider transition-colors ${
                          selected
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 px-3 sm:px-4 py-2 border-t border-border/60">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {content.mcp.languageTabsLabel}
                </span>
                <div className="flex flex-wrap items-center gap-1">
                  {languages.map((language) => {
                    const selected = selectedLanguages[activeFlow] === language
                    const label =
                      examples.find(
                        (example) =>
                          example.method === selectedMethods[activeFlow] &&
                          example.language === language
                      )?.languageLabel ?? language

                    return (
                      <button
                        key={language}
                        type="button"
                        onClick={() =>
                          setSelectedLanguages((prev) => ({ ...prev, [activeFlow]: language }))
                        }
                        className={`border px-2 py-1 text-[10px] transition-colors ${
                          selected
                            ? "border-chart-2 bg-chart-2/10 text-chart-2"
                            : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          ) : null}
          <div className="relative p-3 sm:p-4">
            <button
              type="button"
              onClick={copyCode}
              className="absolute top-3 right-3 z-10 flex h-9 w-9 touch-manipulation items-center justify-center rounded-md border border-border bg-secondary/80 text-muted-foreground transition-colors hover:text-foreground active:scale-95"
              aria-label={content.mcp.copyCodeAriaLabel}
            >
              {copied ? (
                <Check className="h-3 w-3 text-primary" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </button>
            <div className="overflow-x-auto">
              <pre className="min-w-max pr-10 text-[10px] sm:text-xs text-foreground leading-relaxed">
                <code>
                  {activeLines.map((line, index) => (
                    <div key={`${activeFlow}-${index}`} className="grid grid-cols-[2rem_1fr] gap-4">
                      <span className="select-none text-right text-muted-foreground/70">
                        {index + 1}
                      </span>
                      <div className="whitespace-pre">
                        {highlightMCPCode(line)}
                      </div>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function highlightMCPCode(line: string): React.ReactNode {
  if (!line) {
    return <span>&nbsp;</span>
  }

  if (line.trim().startsWith("#") || line.trim().startsWith("//") || line.trim().startsWith("--")) {
    return <span className="text-muted-foreground">{line}</span>
  }

  const tokens = line.match(
    /https?:\/\/[^\s\\]+|"(?:[^"\\]|\\.)*"(?=\s*:)|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\bODOCK_[A-Z_]+\b|\bvk_[A-Za-z0-9_*.-]+\b|\b(?:curl|POST|fetch|await|const|from|import|async|new|client|create|true|false|null|package|func|return|resp|err)\b|-[A-Za-z]|\b\d+(?:\.\d+)?\b/g
  )

  if (!tokens) {
    return <span>{line}</span>
  }

  const parts: React.ReactNode[] = []
  let cursor = 0

  tokens.forEach((token, index) => {
    const start = line.indexOf(token, cursor)

    if (start > cursor) {
      parts.push(line.slice(cursor, start))
    }

    let className = "text-foreground"

    if (
      /api\.odock\.ai|ODOCK_API_KEY|ODOCK_BASE_URL|ODOCK_GATEWAY_URL|ODOCK_MCP_URL|vk_[A-Za-z0-9_*.-]+/.test(
        token
      )
    ) {
      className = "text-emerald-500"
    } else if (/^https?:\/\//.test(token) || /^-[A-Za-z]$/.test(token) || /"$/.test(token) && /:\s*$/.test(line.slice(start + token.length))) {
      className = "text-chart-2"
    } else if (/^"(?:[^"\\]|\\.)*"$/.test(token) || /^'(?:[^'\\]|\\.)*'$/.test(token) || /^`(?:[^`\\]|\\.)*`$/.test(token)) {
      className = "text-chart-3"
    } else if (/^(?:curl|POST|fetch|await|const|from|import|async|new|client|create|true|false|null|package|func|return|resp|err)$/.test(token) || /^\d+(?:\.\d+)?$/.test(token)) {
      className = "text-primary"
    }

    parts.push(
      <span key={`${token}-${index}`} className={className}>
        {token}
      </span>
    )
    cursor = start + token.length
  })

  if (cursor < line.length) {
    parts.push(line.slice(cursor))
  }

  return <>{parts}</>
}
