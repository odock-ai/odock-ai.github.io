"use client";

import { useMemo } from "react";
import seedrandom from "seedrandom";

export default function HeroBackround({
  dotCount = 50,
  shape = "circle",
  glowIntensity = 0.7,
}) {
  // helper to stabilize numeric formatting
  const fixed = (n: number, digits = 4) => Number(n.toFixed(digits));

  const dots = useMemo(() => {
    const rng = seedrandom(`${dotCount}-${shape}`);

    const arr = [];
    for (let i = 0; i < dotCount; i++) {
      const baseColor = rng() > 0.5
        ? "rgba(72,255,255,0.9)"
        : "rgba(0,150,255,0.9)";

      let x = 0;
      let y = 0;

      // --- SHAPE GENERATION (deterministic!) ---
      switch (shape) {
        case "circle": {
          const angle = rng() * Math.PI * 2;
          const r = rng() * 45 + 25;
          x = 50 + Math.cos(angle) * r;
          y = 50 + Math.sin(angle) * r;
          break;
        }
        case "square":
          x = rng() * 100;
          y = rng() * 100;
          break;

        case "diamond": {
          const t = rng();
          x = 50 + (rng() < 0.5 ? -1 : 1) * t * 45;
          y = 50 + (rng() < 0.5 ? 1 - t : t) * 45;
          break;
        }

        case "horizontal":
          x = rng() * 100;
          y = 40 + rng() * 20;
          break;

        case "vertical":
          x = 40 + rng() * 20;
          y = rng() * 100;
          break;

        default:
          x = rng() * 100;
          y = rng() * 100;
      }

      arr.push({
        id: i,
        x: fixed(x),
        y: fixed(y),
        size: fixed(2 + rng() * 10),
        color: baseColor,
        blur: fixed(1 + rng() * 14),
        driftTime: fixed(8 + rng() * 10, 3),
      });
    }

    return arr;
  }, [dotCount, shape]);

  return (
    <div className="flex items-center justify-center md:justify-end">
      <div
        className="relative w-full h-full min-h-screen overflow-visible"
        style={{ background: "transparent" }}
      >
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute animate-float"
            style={{
              top: `${dot.y}%`,
              left: `${dot.x}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              background: dot.color,
              borderRadius: "50%",
              filter: `
                blur(${dot.blur}px)
                drop-shadow(0 0 ${glowIntensity * 25}px ${dot.color})
              `,
              animationDuration: `${dot.driftTime}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
