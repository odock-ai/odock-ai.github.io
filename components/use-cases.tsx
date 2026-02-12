"use client";

import { getIconByName } from "@/lib/icon-map";
import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { useLandingContent } from "@/components/providers/landing-content-provider";


export default function UseCases() {
  const { content } = useLandingContent();
  const { useCases } = content;
  const containerRef = useRef(null);

  return (
    <section id={useCases.id} className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div>
            <h2 className="mb-4 text-4xl md:text-5xl font-bold text-foreground">
              {useCases.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {useCases.description}
            </p>
          </div>
        </div>

        {/* Same auto-fit dynamic grid as before */}
        <div
          ref={containerRef}
          className="
            grid 
            gap-6
            [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]
          "
        >
          {useCases.items.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({
  useCase,
}: {
  useCase: any;
}) {
  const Icon = getIconByName(useCase.icon);
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onFocus={() => setOpacity(1)}
      onBlur={() => setOpacity(0)}
      className={`
        relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm 
        p-8 flex flex-col group transition-all duration-300 hover:border-primary/50
      `}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col h-full">

        {/* FIXED ICON BOX */}
        <div
          className="
            mb-6 flex items-center justify-center 
            h-14 w-14          /* FIXED SIZE */
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
                h-7 w-7        /* FIXED ICON SIZE */
                text-[rgba(160,160,160,1)]
                transition-colors duration-300
                group-hover:text-[rgba(72,255,255,1)]
              "
            />
          )}
        </div>

        {/* FIXED TITLE AREA */}
        <div className="mb-3 min-h-[40px] flex items-end">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {useCase.title}
          </h3>
        </div>

        {/* DESCRIPTION (flex pushes it to bottom consistently) */}
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-auto">
          {useCase.description}
        </p>
      </div>

      {/* Decorative blob */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
    </motion.div>
  );
}
