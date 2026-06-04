"use client";

import { useEffect, useRef, useState } from "react";

type Dot = { x: number; y: number; s: number; o: number; d: number; red: boolean };

/**
 * A field of marks — the audience made visible. Each dot is a fleck of his أثر.
 * Dots fade + scale in, staggered, when scrolled into view. Decorative and inert;
 * reduced-motion renders them resolved and still.
 */
export function TraceField({ count = 540 }: { count?: number }) {
  const [dots, setDots] = useState<Dot[]>([]);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const arr: Dot[] = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 1.5 + Math.random() * 3,
      o: 0.25 + Math.random() * 0.6,
      d: Math.random() * 0.9,
      red: Math.random() < 0.5,
    }));
    setDots(arr);
    if (reduced) {
      setStarted(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStarted(true)),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [count]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative h-[240px] w-full sm:h-[300px]"
    >
      {dots.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full will-change-[transform,opacity]"
          style={{
            insetInlineStart: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s}px`,
            height: `${p.s}px`,
            backgroundColor: p.red ? "var(--gold)" : "var(--bone-faint)",
            opacity: started ? p.o : 0,
            transform: started ? "scale(1)" : "scale(0)",
            transition: `opacity 0.7s ease ${p.d}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${p.d}s`,
          }}
        />
      ))}
    </div>
  );
}
