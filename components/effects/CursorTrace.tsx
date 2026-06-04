"use client";

import { useEffect, useRef } from "react";

/**
 * The signature flourish: a soft gold trace that follows the cursor and fades —
 * «أكون الأثر» made literal. Strictly opt-in by capability: only on fine pointers
 * (desktop) and only when motion is allowed. Renders nothing otherwise, and never
 * intercepts pointer events.
 */
export function CursorTrace({ enabled = true }: { enabled?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduced || !fine) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const points: { x: number; y: number }[] = [];
    const MAX = 26;
    let last = { x: -1, y: -1 };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      last = { x: e.clientX, y: e.clientY };
      points.push({ x: e.clientX, y: e.clientY });
      if (points.length > MAX) points.shift();
    };

    const draw = () => {
      // Fade the existing trace by erasing a little alpha each frame.
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.10)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw the current trace as a tapering gold stroke.
      ctx.globalCompositeOperation = "source-over";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];
        const t = i / points.length;
        ctx.strokeStyle = `rgba(201,162,75,${0.06 + t * 0.4})`;
        ctx.lineWidth = 0.5 + t * 5;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      }
      // A faint head where the pen rests.
      if (last.x >= 0 && points.length) {
        ctx.fillStyle = "rgba(201,162,75,0.55)";
        ctx.beginPath();
        ctx.arc(last.x, last.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
      // Let old points drift out so a resting cursor doesn't pin a blob.
      if (points.length) points.shift();
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [enabled]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[45] hidden lg:block"
    />
  );
}
