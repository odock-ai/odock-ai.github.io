import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { localizePath } from "@/lib/i18n"

export function CTASection() {
  const { content, locale } = useLandingContent()
  const migrationLines = content.cta.migrationCode.split("\n")

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-sm border border-primary/50 bg-primary/5 p-5 sm:p-8 lg:p-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <h2 className="mb-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {content.cta.title}
              </h2>
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {content.cta.description}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link
                    href={localizePath(content.cta.primaryHref, locale)}
                    prefetch={false}
                  >
                    {content.cta.primaryLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href={content.cta.secondaryHref}>{content.cta.secondaryLabel}</Link>
                </Button>
              </div>
            </div>

            <div className="min-w-0 rounded-sm border border-border bg-background p-3 sm:p-4">
              <div className="mb-3 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                {content.cta.migrationLabel}
              </div>
              <pre className="overflow-x-auto text-[11px] leading-relaxed text-foreground sm:text-xs">
                <code>
                  {migrationLines.map((line, index) => (
                    <span
                      key={`${index}-${line}`}
                      className={`block ${
                        line.startsWith("- ")
                          ? "text-destructive"
                          : line.startsWith("+ ")
                            ? "text-chart-2"
                            : ""
                      }`}
                    >
                      {line || "\u00A0"}
                    </span>
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
