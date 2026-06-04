/**
 * Feature flags. The cursor-trace flourish is a phase-5 signature interaction and
 * lives behind this flag per the spec; it additionally self-guards on pointer type
 * and prefers-reduced-motion at runtime.
 */
export const flags = {
  cursorTrace: true,
  scrollTrace: true,
} as const;
