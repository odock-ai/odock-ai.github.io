"use client"

import { getIconByName } from "@/lib/icon-map"
import { useRef, useState, type MouseEvent } from "react"
import { motion } from "framer-motion"
import { TerminalSection } from "./terminal-section"

import { useLandingContent } from '@/components/providers/landing-content-provider';

export default function Features() {
  const { content } = useLandingContent()
  const { features } = content
  const containerRef = useRef(null)

  return (
    <section className="relative py-24 px-4 " id={features.id}>
      <div className="relative mx-auto max-w-7xl z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              {features.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{features.description}</p>
          </div>
        </div>

        <div className="mb-20 text-start">

          <TerminalSection />
        </div>


        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {features.items.map((feature, index) => (
            <BentoCard key={index} feature={feature} className={getBentoSpan(index)} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper to determine grid spans for a "Bento" look
function getBentoSpan(index: number) {
  // Layout pattern:
  // [Large] [Small]
  // [Small] [Large]
  // [Small] [Small] [Small]
  // [Large] [Small]

  if (index === 0) return "md:col-span-2"
  if (index === 3) return "md:col-span-2"
  if (index === 7) return "md:col-span-2"
  return "md:col-span-1"
}

function BentoCard({ feature, className = "" }: { feature: any; className?: string }) {
  const Icon = getIconByName(feature.icon)
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm 
        p-8 flex flex-col justify-between group transition-all duration-300 hover:border-primary/50
        ${className}
      `}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div
          className="
            mb-6 flex h-12 w-12 items-center justify-center 
            rounded-xl bg-primary/5 
            border transition-all duration-300
            group-hover:scale-110
            [--glow-start:rgba(0,150,255,0.4)]
            [--glow-end:rgba(72,255,255,0.9)]
            border-[color:var(--glow-start)]
            group-hover:border-[color:var(--glow-end)]
            group-hover:shadow-[0_0_12px_var(--glow-end),0_0_24px_var(--glow-start),inset_0_0_8px_var(--glow-end)]
          "
        >
          {Icon && (
            <Icon
              className="
                h-6 w-6 text-[rgba(160,160,160,1)]
                transition-colors duration-300
                group-hover:text-[rgba(72,255,255,1)]
              "
            />
          )}
        </div>



        <div className="mt-auto">
          <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.description}</p>
        </div>
      </div>

      {/* Decorative gradient blob for larger cards */}
      {className.includes("col-span-2") && (
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
      )}
    </motion.div>
  )
}
