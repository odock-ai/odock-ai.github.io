"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  Bell,
  ChevronRight,
  Database,
  FileText,
  Filter,
  GitBranch,
  Pause,
  Play,
  Shield,
  Zap,
} from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { localizePath, type SiteContent } from "@/lib/i18n"

type PluginExample = SiteContent["plugins"]["examples"][number]

const pluginIconMap = {
  shield: Shield,
  filter: Filter,
  bell: Bell,
  database: Database,
  gitBranch: GitBranch,
  fileText: FileText,
} as const

export function PluginsSection() {
  const { content, locale } = useLandingContent()
  const pluginsContent = content.plugins
  const pipelineStages = pluginsContent.pipelineStages
  const stageLabels = Object.fromEntries(
    pipelineStages.map((stage) => [stage.id, stage.label])
  ) as Record<string, string>
  const [activePlugin, setActivePlugin] = useState<PluginExample>(pluginsContent.examples[0])
  const [activeStage, setActiveStage] = useState(pipelineStages[0]?.id ?? "authenticate")
  const [isPlaying, setIsPlaying] = useState(true)
  const [requestPosition, setRequestPosition] = useState(-1)

  useEffect(() => {
    setActivePlugin(pluginsContent.examples[0])
    setActiveStage(pipelineStages[0]?.id ?? "authenticate")
    setRequestPosition(-1)
  }, [pipelineStages, pluginsContent.examples])

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setRequestPosition((prev) => {
        const next = prev + 1

        if (next > pipelineStages.length) return -1
        if (next >= 0 && next < pipelineStages.length) {
          setActiveStage(pipelineStages[next].id)
        }

        return next
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, pipelineStages])

  useEffect(() => {
    const plugin = pluginsContent.examples.find((item) => item.stage === activeStage)
    if (plugin) setActivePlugin(plugin)
  }, [activeStage, pluginsContent.examples])

  const ActivePluginIcon =
    pluginIconMap[activePlugin.icon as keyof typeof pluginIconMap] ?? FileText

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 max-w-2xl sm:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px max-w-12 flex-1 bg-primary" />
            <span className="text-[10px] uppercase tracking-widest text-primary">
              {pluginsContent.eyebrow}
            </span>
          </div>
          <h2 className="text-balance mb-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {pluginsContent.title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {pluginsContent.description}
          </p>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              {pluginsContent.requestPipelineLabel}
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              {isPlaying ? pluginsContent.pauseLabel : pluginsContent.playLabel}
            </button>
          </div>

          <div className="relative hidden overflow-hidden border border-border bg-card p-4 sm:block sm:p-6">
            <div className="relative flex min-w-[600px] items-center justify-between">
              <div
                className="absolute top-1/2 z-10 h-3 w-3 -translate-y-1/2 rounded-full bg-primary transition-all duration-500"
                style={{
                  left:
                    requestPosition === -1
                      ? "-20px"
                      : `calc(${requestPosition * 16.66}% + ${requestPosition * 8}px)`,
                  opacity: requestPosition === -1 || requestPosition > pipelineStages.length - 1 ? 0 : 1,
                  boxShadow: "0 0 12px var(--primary), 0 0 24px var(--primary)",
                }}
              />

              {pipelineStages.map((stage, index) => (
                <div key={stage.id} className="flex flex-1 items-center">
                  <button
                    onClick={() => {
                      setActiveStage(stage.id)
                      setIsPlaying(false)
                    }}
                    className={`flex w-full flex-col items-center gap-2 border px-2 py-3 transition-all duration-300 sm:px-4 ${
                      activeStage === stage.id
                        ? "scale-105 border-primary bg-primary/10"
                        : requestPosition > index
                          ? "border-primary/50 bg-primary/5"
                          : "border-border bg-secondary/30 hover:border-primary/30"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-medium transition-colors sm:text-xs ${
                        activeStage === stage.id ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {stage.label}
                    </span>
                    <div
                      className={`h-1 w-full max-w-[40px] transition-all duration-300 sm:max-w-[60px] ${
                        requestPosition > index
                          ? "bg-primary"
                          : requestPosition === index
                            ? "animate-pulse bg-primary"
                            : "bg-border"
                      }`}
                    />
                  </button>
                  {index < pipelineStages.length - 1 ? (
                    <ChevronRight
                      className={`mx-1 h-4 w-4 shrink-0 transition-colors sm:mx-2 ${
                        requestPosition > index ? "text-primary" : "text-border"
                      }`}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-card p-4 sm:hidden">
            <div className="flex flex-col gap-2">
              {pipelineStages.map((stage, index) => (
                <button
                  key={stage.id}
                  onClick={() => {
                    setActiveStage(stage.id)
                    setIsPlaying(false)
                  }}
                  className={`flex items-center justify-between border px-3 py-2 transition-all ${
                    activeStage === stage.id
                      ? "border-primary bg-primary/10"
                      : requestPosition > index
                        ? "border-primary/50 bg-primary/5"
                        : "border-border bg-secondary/30"
                  }`}
                >
                  <span
                    className={`text-xs font-medium ${
                      activeStage === stage.id ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {index + 1}. {stage.label}
                  </span>
                  {requestPosition === index ? (
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          <div className="min-w-0 space-y-2 lg:col-span-1">
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              {pluginsContent.examplePluginsLabel}
            </div>
            {pluginsContent.examples.map((plugin) => {
              const Icon = pluginIconMap[plugin.icon as keyof typeof pluginIconMap] ?? FileText

              return (
                <button
                  key={plugin.id}
                  onClick={() => {
                    setActivePlugin(plugin)
                    setActiveStage(plugin.stage)
                    setIsPlaying(false)
                  }}
                  className={`flex w-full min-w-0 items-center gap-3 border p-3 text-left transition-all ${
                    activePlugin.id === plugin.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border ${
                      activePlugin.id === plugin.id
                        ? "border-primary bg-primary/10"
                        : "border-border bg-secondary"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        activePlugin.id === plugin.id ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-foreground sm:text-sm">
                      {plugin.name}
                    </div>
                    <div className="truncate text-[10px] text-muted-foreground sm:text-xs">
                      {plugin.description}
                    </div>
                  </div>
                  <div className="ml-auto shrink-0">
                    <span
                      className={`hidden border px-1.5 py-0.5 text-[10px] uppercase tracking-wider sm:inline-block ${
                        activePlugin.id === plugin.id
                          ? "border-primary/50 bg-primary/10 text-primary"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {stageLabels[plugin.stage] ?? plugin.stage}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="min-w-0 lg:col-span-2">
            <div className="flex h-full min-w-0 flex-col border border-border bg-card">
              <div className="shrink-0 border-b border-border bg-secondary/50 px-4 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                    </div>
                    <span className="ml-3 truncate text-[10px] text-muted-foreground sm:text-xs">
                      {pluginsContent.codeFileLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ActivePluginIcon className="h-3.5 w-3.5 text-primary" />
                    <span className="hidden text-[10px] uppercase tracking-wider text-primary sm:inline">
                      {stageLabels[activePlugin.stage] ?? activePlugin.stage}
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-[320px] overflow-x-auto overflow-y-auto p-4 sm:h-[380px]">
                <pre className="min-w-max text-[10px] leading-relaxed text-foreground sm:text-xs">
                  <code className="inline-block min-w-full">
                    {activePlugin.code.split("\n").map((line, index) => (
                      <div
                        key={`${activePlugin.id}-${index}`}
                        className="transition-all duration-300"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {highlightCode(line)}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border border-border bg-card p-4 sm:mt-12 sm:flex-row sm:items-center sm:p-6">
          <div>
            <div className="mb-1 text-sm font-medium text-foreground">
              {pluginsContent.cta.title}
            </div>
            <div className="text-xs text-muted-foreground">
              {pluginsContent.cta.description}
            </div>
          </div>
          <div className="flex w-full items-center gap-3 sm:w-auto">
            <a
              href={pluginsContent.cta.docsHref}
              className="flex-1 border border-border bg-secondary px-4 py-2 text-center text-xs transition-colors hover:bg-secondary/80 sm:flex-none"
            >
              {pluginsContent.cta.docsLabel}
            </a>
            <Link
              href={localizePath(pluginsContent.cta.primaryHref, locale)}
              prefetch={false}
              className="flex-1 bg-primary px-4 py-2 text-center text-xs text-primary-foreground transition-colors hover:bg-primary/90 sm:flex-none"
            >
              <span className="flex items-center justify-center gap-2">
                <Zap className="h-3 w-3" />
                {pluginsContent.cta.primaryLabel}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

type HighlightTokenType =
  | "builtin"
  | "comment"
  | "identifier"
  | "keyword"
  | "number"
  | "operator"
  | "plain"
  | "string"
  | "type"
  | "whitespace"

type HighlightToken = {
  type: HighlightTokenType
  value: string
}

const GO_KEYWORDS = new Set([
  "break",
  "case",
  "chan",
  "const",
  "continue",
  "default",
  "defer",
  "else",
  "fallthrough",
  "false",
  "for",
  "func",
  "go",
  "if",
  "import",
  "interface",
  "map",
  "nil",
  "package",
  "range",
  "return",
  "select",
  "struct",
  "switch",
  "true",
  "type",
  "var",
])

const GO_BUILTINS = new Set([
  "any",
  "bool",
  "byte",
  "error",
  "float32",
  "float64",
  "int",
  "int32",
  "int64",
  "rune",
  "string",
  "uint",
  "uint32",
  "uint64",
])

function highlightCode(line: string): React.ReactNode {
  return tokenizeGoLine(line).map((token, index, tokens) => {
    const nextSignificantToken = getNextSignificantToken(tokens, index)
    const className = getGoTokenClassName(token, nextSignificantToken)

    return (
      <span key={`${token.type}-${index}`} className={className}>
        {token.value}
      </span>
    )
  })
}

function tokenizeGoLine(line: string): HighlightToken[] {
  const tokens: HighlightToken[] = []
  let index = 0

  while (index < line.length) {
    const current = line[index]
    const next = line[index + 1]

    if (current === "/" && next === "/") {
      tokens.push({ type: "comment", value: line.slice(index) })
      break
    }

    if (/\s/.test(current)) {
      const start = index
      index += 1
      while (index < line.length && /\s/.test(line[index])) {
        index += 1
      }
      tokens.push({ type: "whitespace", value: line.slice(start, index) })
      continue
    }

    if (current === '"' || current === "'" || current === "`") {
      const quote = current
      const start = index
      index += 1

      while (index < line.length) {
        if (quote !== "`" && line[index] === "\\") {
          index += 2
          continue
        }

        if (line[index] === quote) {
          index += 1
          break
        }

        index += 1
      }

      tokens.push({ type: "string", value: line.slice(start, index) })
      continue
    }

    if (/[0-9]/.test(current)) {
      const start = index
      index += 1
      while (index < line.length && /[0-9a-fA-F_x.]/.test(line[index])) {
        index += 1
      }
      tokens.push({ type: "number", value: line.slice(start, index) })
      continue
    }

    if (/[A-Za-z_]/.test(current)) {
      const start = index
      index += 1
      while (index < line.length && /[A-Za-z0-9_]/.test(line[index])) {
        index += 1
      }

      const value = line.slice(start, index)

      if (GO_KEYWORDS.has(value)) {
        tokens.push({ type: "keyword", value })
      } else if (GO_BUILTINS.has(value)) {
        tokens.push({ type: "builtin", value })
      } else if (/^[A-Z]/.test(value)) {
        tokens.push({ type: "type", value })
      } else {
        tokens.push({ type: "identifier", value })
      }

      continue
    }

    tokens.push({
      type: /[()[\]{}*.,:=+-]/.test(current) ? "operator" : "plain",
      value: current,
    })
    index += 1
  }

  return tokens
}

function getNextSignificantToken(
  tokens: HighlightToken[],
  index: number
): HighlightToken | undefined {
  for (let cursor = index + 1; cursor < tokens.length; cursor += 1) {
    if (tokens[cursor].type !== "whitespace") {
      return tokens[cursor]
    }
  }

  return undefined
}

function getGoTokenClassName(
  token: HighlightToken,
  nextSignificantToken?: HighlightToken
): string | undefined {
  switch (token.type) {
    case "comment":
      return "text-muted-foreground"
    case "string":
      return "text-chart-3"
    case "number":
      return "text-chart-3"
    case "keyword":
      return "text-primary"
    case "builtin":
      return "text-chart-2"
    case "type":
      return "text-chart-2"
    case "identifier":
      return nextSignificantToken?.value === "(" ? "text-chart-2" : undefined
    default:
      return undefined
  }
}
