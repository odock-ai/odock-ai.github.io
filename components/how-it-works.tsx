'use client';

import landingContent from '@/data/landing-content.json';
import { getIconByName } from '@/lib/icon-map';
import { Card } from '@/components/ui/card';
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

const { howItWorks } = landingContent;


export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 35%", "end 80%"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="relative py-24 px-4 overflow-hidden" id={howItWorks.id}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl md:text-5xl font-bold text-foreground tracking-tight"
          >
            {howItWorks.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {howItWorks.description}
          </motion.p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Center Line Background */}
          <div
            className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          {/* Animated Center Line */}
          <motion.div
            style={{ 
              height: lineHeight,
              background: "linear-gradient(to bottom, rgba(72,255,255,0.9), rgba(0,150,255,0.9))",
              boxShadow:  "0 0 12px rgba(72,255,255,1),0 0 24px rgba(0,150,255,1),0 0 32px rgba(0,150,255,0.8)"

            }}
            className="absolute left-[27px] top-0 w-1 lg:left-1/2 lg:-translate-x-1/2 origin-top rounded-full"
            aria-hidden="true"
          />


          <div className="space-y-12 lg:space-y-24">
            {howItWorks.steps.map((step, index) => {
              const Icon = getIconByName(step.icon);
              const isLeft = index % 2 === 0
              
              
              const start = index / howItWorks.steps.length
              const end = (index + 1) / howItWorks.steps.length

              const glowStrength = useTransform(scrollYProgress, [start, end], [0, 1])

              const glowColor = useTransform(glowStrength, [0, 1], [
                "rgba(0,150,255,0.4)",
                "rgba(72,255,255,0.9)"
              ])

              const textColor = useTransform(glowStrength, [0, 1], [
                "rgba(160,160,160,1)",
                "rgba(72,255,255,1)"
              ])

              const glowShadow = useTransform(glowStrength, (v) => `
                0 0 ${v * 12}px rgba(72,255,255,${0.9 * v}),
                0 0 ${v * 24}px rgba(0,150,255,${0.9 * v}),
                inset 0 0 ${v * 8}px rgba(72,255,255,${0.6 * v})
              `)


              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative grid grid-cols-[auto_1fr] items-start gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-12",
                  )}
                >
                  {/* Center Marker */}
                  <div className="relative z-10 flex items-center justify-center lg:col-start-2 lg:row-start-1">
                  <motion.div
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-background border-4"
                      style={{
                        borderColor: glowColor,
                        boxShadow: glowShadow
                      }}
                    >
                      <motion.span
                        className="text-lg font-bold"
                        style={{ color: textColor }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>
                    </motion.div>

                  </div>

                  {/* Content Card */}
                  <div
                    className={cn(
                      "col-start-2 lg:row-start-1 lg:max-w-xl group",
                      isLeft
                        ? "lg:col-start-1 lg:justify-self-end lg:text-right"
                        : "lg:col-start-3 lg:justify-self-start",
                    )}
                  >
                    <div
                      className={cn(
                        "relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:bg-card/80",
                        "flex flex-col gap-4",
                        isLeft ? "lg:items-end" : "lg:items-start",
                      )}
                    >
                      <motion.div
                          className="p-3 rounded-xl bg-background/10 w-fit border"
                          style={{
                            borderColor: glowColor,
                            boxShadow: glowShadow
                          }}
                        >
                         {Icon && (
                          <motion.div
                            style={{ color: textColor }}
                          >
                            <Icon className="h-6 w-6" />
                          </motion.div>
                        )}
                        </motion.div>


                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

