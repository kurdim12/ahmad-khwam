/** Nucleo-style faint engraving pattern (plus-grid) for paper texture. Decorative. */
export function PaperPattern({ className = "" }: { className?: string }) {
  const svg =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath d='M15 11v8 M11 15h8' stroke='rgba(36,26,15,0.10)' stroke-width='1'/%3E%3C/svg%3E";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ backgroundImage: `url("${svg}")`, backgroundSize: "30px 30px" }}
    />
  );
}
