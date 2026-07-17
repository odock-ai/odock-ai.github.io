import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { localizePath } from "@/lib/i18n"

export function PricingSection() {
  const { content, locale } = useLandingContent()
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px max-w-12 flex-1 bg-primary" />
            <span className="text-[10px] uppercase tracking-widest text-primary">
              {content.pricing.eyebrow}
            </span>
            <div className="h-px max-w-12 flex-1 bg-primary" />
          </div>
          <h2 className="mb-4 text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
            {content.pricing.title}
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            {content.pricing.description}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {content.pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-sm border p-6 ${
                tier.highlight
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <div className="mb-6">
                {tier.badge && (
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-sm bg-primary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-foreground">
                      {tier.badge}
                    </span>
                    {tier.badgeDetail && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                        {tier.badgeDetail}
                      </span>
                    )}
                  </div>
                )}
                <h3 className="mb-2 text-lg font-medium text-foreground">{tier.name}</h3>
                <div className="mb-2 flex items-baseline gap-1">
                  <span className="text-3xl font-medium text-foreground">{tier.price}</span>
                  {tier.period && (
                    <span className="text-sm text-muted-foreground">{tier.period}</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="mb-6 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={tier.highlight ? "default" : "outline"}
                asChild
              >
                <Link href={localizePath(tier.href, locale)} prefetch={false}>
                  {tier.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
