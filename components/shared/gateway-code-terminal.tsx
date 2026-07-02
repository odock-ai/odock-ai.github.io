"use client"

import { useEffect, useMemo, useState } from "react"
import { Check, Copy } from "lucide-react"

export type GatewayCodeExample = {
  method: string
  methodLabel: string
  language: string
  languageLabel: string
  filename: string
  code: string
}

type GatewayCodeTerminalProps = {
  examples: readonly GatewayCodeExample[]
  methodOrder?: readonly string[]
  fallbackFilename?: string
  fallbackCode?: string
  methodTabsLabel: string
  languageTabsLabel: string
  copyCodeAriaLabel: string
  className?: string
}

export function GatewayCodeTerminal({
  examples,
  methodOrder = [],
  fallbackFilename,
  fallbackCode = "",
  methodTabsLabel,
  languageTabsLabel,
  copyCodeAriaLabel,
  className,
}: GatewayCodeTerminalProps) {
  const methods = useMemo(() => {
    const rank = (method: string) => {
      const index = methodOrder.indexOf(method)
      return index === -1 ? Number.MAX_SAFE_INTEGER : index
    }

    return [
      ...new Set(
        examples
          .slice()
          .sort((a, b) => rank(a.method) - rank(b.method))
          .map((example) => example.method)
      ),
    ]
  }, [examples, methodOrder])

  const [method, setMethod] = useState(() => methods[0])
  const [language, setLanguage] = useState(
    () => examples.find((example) => example.method === methods[0])?.language ?? ""
  )
  const [copied, setCopied] = useState(false)

  const languages = useMemo(
    () => [
      ...new Set(
        examples.filter((example) => example.method === method).map((example) => example.language)
      ),
    ],
    [examples, method]
  )

  // Keep the selected method and language valid if the examples change.
  useEffect(() => {
    if (!examples.length) {
      return
    }

    const methodExists = examples.some((example) => example.method === method)
    const nextMethod = methodExists ? method : methods[0]
    const languageExists = examples.some(
      (example) => example.method === nextMethod && example.language === language
    )
    const nextLanguage = languageExists
      ? language
      : examples.find((example) => example.method === nextMethod)?.language ?? ""

    if (nextMethod !== method) {
      setMethod(nextMethod)
    }

    if (nextLanguage !== language) {
      setLanguage(nextLanguage)
    }
  }, [examples, methods, method, language])

  const activeExample =
    examples.find((example) => example.method === method && example.language === language) ??
    examples.find((example) => example.method === method) ??
    examples[0]

  const activeCode = activeExample?.code ?? fallbackCode
  const activeLines = activeCode.split("\n")

  const selectMethod = (nextMethod: string) => {
    const fallbackLanguage =
      examples.find((example) => example.method === nextMethod)?.language ?? language

    setMethod(nextMethod)
    setLanguage(fallbackLanguage)
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
    <div className={`border border-border bg-card overflow-hidden ${className ?? ""}`}>
      <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-3 sm:px-4 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-destructive/60" />
            <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-chart-3/60" />
            <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary/60" />
          </div>
          <span className="ml-2 sm:ml-3 truncate text-[10px] sm:text-xs text-muted-foreground">
            {activeExample?.filename ?? fallbackFilename}
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
        <div className="border-b border-border">
          <div className="flex flex-wrap items-center gap-2 px-3 sm:px-4 py-2">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {methodTabsLabel}
            </span>
            <div className="flex flex-wrap items-center gap-1">
              {methods.map((methodValue) => {
                const selected = method === methodValue
                const label =
                  examples.find((example) => example.method === methodValue)?.methodLabel ?? methodValue

                return (
                  <button
                    key={methodValue}
                    type="button"
                    onClick={() => selectMethod(methodValue)}
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
              {languageTabsLabel}
            </span>
            <div className="flex flex-wrap items-center gap-1">
              {languages.map((languageValue) => {
                const selected = language === languageValue
                const label =
                  examples.find(
                    (example) => example.method === method && example.language === languageValue
                  )?.languageLabel ?? languageValue

                return (
                  <button
                    key={languageValue}
                    type="button"
                    onClick={() => setLanguage(languageValue)}
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
          aria-label={copyCodeAriaLabel}
        >
          {copied ? <Check className="h-3 w-3 text-primary" /> : <Copy className="h-3 w-3" />}
        </button>
        <div className="overflow-x-auto">
          <pre className="min-w-max pr-10 text-[10px] sm:text-xs text-foreground leading-relaxed">
            <code>
              {activeLines.map((line, index) => (
                <div key={`${index}`} className="grid grid-cols-[2rem_1fr] gap-4">
                  <span className="select-none text-right text-muted-foreground/70">{index + 1}</span>
                  <div className="whitespace-pre">{highlightGatewayCode(line)}</div>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

function highlightGatewayCode(line: string): React.ReactNode {
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
    } else if (
      /^https?:\/\//.test(token) ||
      /^-[A-Za-z]$/.test(token) ||
      (/"$/.test(token) && /:\s*$/.test(line.slice(start + token.length)))
    ) {
      className = "text-chart-2"
    } else if (
      /^"(?:[^"\\]|\\.)*"$/.test(token) ||
      /^'(?:[^'\\]|\\.)*'$/.test(token) ||
      /^`(?:[^`\\]|\\.)*`$/.test(token)
    ) {
      className = "text-chart-3"
    } else if (
      /^(?:curl|POST|fetch|await|const|from|import|async|new|client|create|true|false|null|package|func|return|resp|err)$/.test(
        token
      ) ||
      /^\d+(?:\.\d+)?$/.test(token)
    ) {
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
