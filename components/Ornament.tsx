/** A small manuscript ornament: a rubric rhombus flanked by hairlines. Decorative. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-4 text-gold ${className}`}
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--gold-soft)]" />
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 1l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="currentColor" opacity="0.85" />
        <circle cx="11" cy="11" r="1.4" fill="var(--ink)" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--gold-soft)]" />
    </div>
  );
}
