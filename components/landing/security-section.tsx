"use client"

import { useEffect, useState } from "react"
import {
  AlertTriangle,
  Ban,
  CheckCircle2,
  Eye,
  Fingerprint,
  Shield,
  XCircle,
  Zap,
} from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { type SiteContent } from "@/lib/i18n"

type ThreatSimulation = SiteContent["security"]["threats"][number]

const securityIconMap = {
  alertTriangle: AlertTriangle,
  ban: Ban,
  eye: Eye,
  fingerprint: Fingerprint,
  shield: Shield,
  xCircle: XCircle,
} as const

export function SecuritySection() {
  const { content } = useLandingContent()
  const securityContent = content.security
  const [activeThreat, setActiveThreat] = useState<ThreatSimulation>(securityContent.threats[0])
  const [activeModules, setActiveModules] = useState<string[]>([])
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [threatIndex, setThreatIndex] = useState(0)

  useEffect(() => {
    setActiveThreat(securityContent.threats[0])
    setThreatIndex(0)
    setActiveModules([])
    setIsScanning(false)
    setScanProgress(0)
  }, [securityContent.threats])

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatIndex((prev) => (prev + 1) % securityContent.threats.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [securityContent.threats.length])

  useEffect(() => {
    const threat = securityContent.threats[threatIndex]

    setActiveThreat(threat)
    setIsScanning(true)
    setScanProgress(0)
    setActiveModules([])

    const scanInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(scanInterval)
          setIsScanning(false)
          return 100
        }

        return prev + 20
      })
    }, 200)

    const activateTimeout = setTimeout(() => {
      setActiveModules([threat.type])
    }, 800)

    return () => {
      clearInterval(scanInterval)
      clearTimeout(activateTimeout)
    }
  }, [securityContent.threats, threatIndex])

  return (
    <section className="relative overflow-hidden bg-card/30 py-16 sm:py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 max-w-2xl sm:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px max-w-12 flex-1 bg-primary" />
            <span className="text-[10px] uppercase tracking-widest text-primary">
              {securityContent.eyebrow}
            </span>
          </div>
          <h2 className="text-balance mb-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {securityContent.title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {securityContent.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="order-2 lg:order-1">
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
              {securityContent.modulesLabel}
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {securityContent.modules.map((mod) => {
                const Icon = securityIconMap[mod.icon as keyof typeof securityIconMap] ?? Shield
                const isActive = activeModules.includes(mod.id)
                const isMatching = activeThreat.type === mod.id

                return (
                  <div
                    key={mod.id}
                    className={`relative overflow-hidden border p-3 transition-all duration-500 sm:p-4 ${
                      isMatching && isActive
                        ? "scale-[1.02] border-destructive bg-destructive/10"
                        : isActive
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:border-primary/30"
                    }`}
                  >
                    {isScanning ? (
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                        style={{
                          transform: `translateX(${scanProgress - 100}%)`,
                          transition: "transform 200ms linear",
                        }}
                      />
                    ) : null}

                    <div
                      className={`absolute right-2 top-2 transition-opacity duration-300 ${
                        isMatching && isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2 sm:mb-3">
                        <Icon
                          className={`h-4 w-4 transition-colors ${
                            isMatching && isActive ? "text-destructive" : "text-primary"
                          }`}
                        />
                        <span
                          className={`text-xs font-medium transition-colors sm:text-sm ${
                            isMatching && isActive ? "text-destructive" : "text-foreground"
                          }`}
                        >
                          {mod.name}
                        </span>
                      </div>
                      <p className="mb-2 text-[10px] text-muted-foreground sm:text-xs">
                        {mod.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[8px] uppercase tracking-widest sm:text-[10px] ${
                            isMatching && isActive ? "text-destructive" : "text-primary"
                          }`}
                        >
                          {mod.action}
                        </span>
                        {isMatching && isActive ? (
                          <span className="animate-pulse text-[10px] font-medium text-destructive">
                            {securityContent.triggeredLabel}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ThreatDetectionVisual
              currentIndex={threatIndex}
              isScanning={isScanning}
              onSelectThreat={setThreatIndex}
              scanProgress={scanProgress}
              securityContent={securityContent}
              threat={activeThreat}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-4">
          {securityContent.stats.map((stat) => (
            <div key={stat.label} className="border border-border bg-card p-3 sm:p-4">
              <div className="text-lg font-medium text-foreground sm:text-2xl">
                {stat.value}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground sm:text-xs">
                  {stat.label}
                </span>
                {stat.change ? (
                  <span className="text-[10px] text-primary">{stat.change}</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getSecurityActionLabel(securityContent: SiteContent["security"], action: string) {
  return securityContent.actionLabels?.[action as keyof typeof securityContent.actionLabels] ?? action
}

function getSecurityRiskLabel(securityContent: SiteContent["security"], riskLevel: string) {
  return securityContent.riskLevelLabels?.[riskLevel as keyof typeof securityContent.riskLevelLabels] ?? riskLevel
}

function ThreatDetectionVisual({
  currentIndex,
  isScanning,
  onSelectThreat,
  scanProgress,
  securityContent,
  threat,
}: {
  currentIndex: number
  isScanning: boolean
  onSelectThreat: (index: number) => void
  scanProgress: number
  securityContent: SiteContent["security"]
  threat: ThreatSimulation
}) {
  const [timestamp, setTimestamp] = useState<string | null>(null)

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    })

    const updateTimestamp = () => {
      setTimestamp(formatter.format(new Date()))
    }

    updateTimestamp()

    const intervalId = window.setInterval(updateTimestamp, 1000)
    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-3 py-2 sm:px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
          </div>
          <span className="ml-2 text-[10px] text-muted-foreground sm:ml-3 sm:text-xs">
            {securityContent.monitorFileLabel}
          </span>
        </div>
        <div className="relative flex min-w-[70px] items-center justify-end gap-1">
          <div
            className={`absolute right-0 flex items-center gap-1 transition-opacity duration-300 ${
              isScanning ? "opacity-100" : "opacity-0"
            }`}
          >
            <Zap className="h-3 w-3 animate-pulse text-amber-300" />
            <span className="text-[10px] text-amber-300">{securityContent.scanningLabel}</span>
          </div>
          <div
            className={`absolute right-0 flex items-center gap-1 transition-opacity duration-300 ${
              isScanning ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="pulse-glow h-1.5 w-1.5 bg-destructive" />
            <span className="text-[10px] text-destructive">{securityContent.threatLabel}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-border bg-secondary/30 p-2">
        {securityContent.threats.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onSelectThreat(index)}
            className={`whitespace-nowrap px-2 py-1 text-[10px] transition-all ${
              currentIndex === index
                ? "border border-destructive/50 bg-destructive/20 text-destructive"
                : "border border-transparent bg-secondary text-muted-foreground hover:border-border"
            }`}
          >
            {item.module.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="p-3 sm:p-4">
        <div className={`mb-4 transition-opacity duration-300 ${isScanning ? "opacity-100" : "opacity-0"}`}>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground">
              {securityContent.analyzingLabel}
            </span>
            <span className="text-[10px] text-primary">{scanProgress}%</span>
          </div>
          <div className="h-1 overflow-hidden bg-secondary">
            <div
              className="h-full bg-primary transition-all duration-200"
              style={{ width: `${scanProgress}%` }}
            />
          </div>
        </div>

        <div className="space-y-3 text-xs">
          <div className="flex items-start justify-between gap-2">
            <span className="shrink-0 text-muted-foreground">{securityContent.inputLabel}</span>
            <span className="line-clamp-2 text-right font-mono text-[10px] text-foreground sm:text-xs">
              {threat.prompt.slice(0, 50)}...
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">{securityContent.moduleLabel}</span>
            <span className="text-foreground">{threat.module}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">{securityContent.confidenceLabel}</span>
            <span className="text-amber-300">{(threat.confidence * 100).toFixed(0)}%</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">{securityContent.actionLabel}</span>
            <span
              className={`font-medium ${
                threat.action === "BLOCKED"
                  ? "text-destructive"
                  : threat.action === "REDACTED"
                    ? "text-amber-300"
                  : "text-primary"
              }`}
            >
              {getSecurityActionLabel(securityContent, threat.action)}
            </span>
          </div>

          <div className="mt-4 border border-destructive/30 bg-destructive/5 p-3">
            <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-widest text-destructive">
              <AlertTriangle className="h-3 w-3" />
              {securityContent.patternMatchLabel}
            </div>
            <code className="break-all text-[10px] text-muted-foreground sm:text-[11px]">
              {threat.prompt.slice(0, 60)}...
            </code>
          </div>

          <div className="mt-4 border border-border bg-secondary/50 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {securityContent.sessionRiskScoreLabel}
              </span>
              <span
              className={`text-xs font-medium ${
                threat.riskLevel === "high"
                  ? "text-destructive"
                  : threat.riskLevel === "medium"
                      ? "text-amber-300"
                    : "text-primary"
              }`}
            >
                {getSecurityRiskLabel(securityContent, threat.riskLevel).toUpperCase()}
              </span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <div
                  key={value}
                  className={`h-1.5 flex-1 transition-all duration-300 ${
                    threat.riskLevel === "high" && value <= 4
                      ? "bg-destructive"
                      : threat.riskLevel === "medium" && value <= 3
                        ? "bg-chart-3"
                        : threat.riskLevel === "low" && value <= 2
                          ? "bg-primary"
                          : "bg-secondary"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-border pt-2">
            {threat.action === "BLOCKED" ? (
              <XCircle className="h-4 w-4 text-destructive" />
            ) : threat.action === "REDACTED" ? (
              <Eye className="h-4 w-4 text-amber-300" />
            ) : (
              <CheckCircle2 className="h-4 w-4 text-primary" />
            )}
            <span className="text-[10px] text-muted-foreground sm:text-xs">
              {securityContent.actionTakenTemplate.replace(
                "{action}",
                getSecurityActionLabel(securityContent, threat.action).toLowerCase()
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border bg-secondary/30 px-3 py-2 sm:px-4">
        <div className="text-[10px] text-muted-foreground">{securityContent.requestId}</div>
        <div className="text-[10px] text-muted-foreground">{timestamp ?? "--:--:--"}</div>
      </div>
    </div>
  )
}
