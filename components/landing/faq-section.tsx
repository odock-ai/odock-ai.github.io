"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLandingContent } from "@/components/providers/landing-content-provider"

export function FAQSection() {
  const { content } = useLandingContent()
  const faqContent = content.faq

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px max-w-12 flex-1 bg-primary" />
            <span className="text-[10px] uppercase tracking-widest text-primary">
              {faqContent.eyebrow}
            </span>
            <div className="h-px max-w-12 flex-1 bg-primary" />
          </div>
          <h2 className="mx-auto mb-4 max-w-3xl text-balance text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
            {faqContent.title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {faqContent.description}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqContent.items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="overflow-hidden rounded-sm border border-border bg-card/80 px-4 backdrop-blur hover:border-primary/30 sm:px-6"
              >
                <AccordionTrigger className="py-5 text-base font-medium text-foreground hover:no-underline sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
