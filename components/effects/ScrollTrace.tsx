"use client";

import { useEffect, useState } from "react";

type Node = { id: string; frac: number };

/**
 * The pen-trace spine: a hairline rail on the inline-start edge with a glowing head
 * that descends as you read. The trace above the head is "drawn" (gold); section
 * nodes light as the head passes them — the trace you leave by moving through the page.
 * Decorative and inert; hidden on small screens and under reduced motion the head simply
 * tracks position without easing.
 */
export function ScrollTrace() {
  const [progress, setProgress] = useState(0);
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      const docH = document.documentElement.scrollHeight || 1;
      const found = Array.from(
        document.querySelectorAll<HTMLElement>("[data-trace-node]")
      ).map((el) => ({
        id: el.getAttribute("data-trace-node") || el.id,
        frac: Math.min(1, Math.max(0, el.offsetTop / docH)),
      }));
      setNodes(found);
    };

    const update = () => {
      const docH = document.documentElement.scrollHeight || 1;
      setProgress(Math.min(1, Math.max(0, window.scrollY / docH)));
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    // Re-measure once fonts/images settle the layout.
    const t = window.setTimeout(measure, 800);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 z-40 hidden w-px lg:block"
      style={{ insetInlineStart: "26px" }}
    >
      {/* faint full-height track */}
      <div className="absolute inset-0 bg-[var(--line)]" />

      {/* drawn gold trace, from top to the head */}
      <div
        className="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-gold/0 via-gold/60 to-gold"
        style={{ height: `${progress * 100}%` }}
      />

      {/* the pen head */}
      <div
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_12px_3px_var(--gold-soft)] transition-[top] duration-150 ease-editorial start-1/2"
        style={{ top: `${progress * 100}%` }}
      />

      {/* section nodes */}
      {nodes.map((n) => {
        const lit = progress + 0.002 >= n.frac;
        return (
          <span
            key={n.id}
            className={`absolute h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-500 start-1/2 ${
              lit ? "border-gold bg-gold" : "border-[var(--line)] bg-ink"
            }`}
            style={{ top: `${n.frac * 100}%` }}
          />
        );
      })}
    </div>
  );
}
