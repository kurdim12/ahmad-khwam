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
    let painted = 0; // segments already committed to the canvas
    let last = { x: -1, y: -1 };
    // Slow fade => the trace LINGERS: you watch the mark you leave on the page.
    const FADE = 0.03;

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
    };

    const stroke = (a: { x: number; y: number }, b: { x: number; y: number }) => {
      // soft halo
      ctx.strokeStyle = "rgba(178,58,46,0.12)";
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
      // bright core (rubric red ink)
      ctx.strokeStyle = "rgba(178,58,46,0.6)";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    };

    const draw = () => {
      // 1) Gently erase a little alpha so the whole trace fades over time —
      //    paint persists for a couple of seconds, so the visitor's mark lingers.
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = `rgba(0,0,0,${FADE})`;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // 2) Commit only the NEW segments since last frame (so resting doesn't
      //    re-burn a blob, and motion lays down lasting gold).
      ctx.globalCompositeOperation = "source-over";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = Math.max(1, painted); i < points.length; i++) {
        stroke(points[i - 1], points[i]);
      }
      painted = points.length;

      // Keep the buffer bounded; what's painted already lives on the canvas.
      if (points.length > 64) {
        points.splice(0, points.length - 8);
        painted = points.length;
      }

      // A soft head where the pen currently rests.
      if (last.x >= 0) {
        ctx.fillStyle = "rgba(178,58,46,0.55)";
        ctx.beginPath();
        ctx.arc(last.x, last.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
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
