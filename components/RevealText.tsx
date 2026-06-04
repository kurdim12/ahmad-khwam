"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType } from "react";

/**
 * Skiper-style staggered reveal: words rise + fade in, lightly skewed, on view.
 * Arabic-safe — uses opacity/translate/skew only (no overflow-clip that would
 * crop Arabic diacritics). Honors prefers-reduced-motion with a static render.
 */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const word: Variants = {
  hidden: { opacity: 0, y: "0.5em", skewY: 3 },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function RevealText({
  text,
  as = "span",
  className = "",
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const Tag = as as ElementType;
  const words = text.split(" ");

  if (reduced) {
    return (
      <Tag dir="auto" className={className}>
        {text}
      </Tag>
    );
  }

  const MotionTag = motion(Tag);
  return (
    <MotionTag
      dir="auto"
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block whitespace-pre">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </MotionTag>
  );
}
