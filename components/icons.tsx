import type { SVGProps } from "react";

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M8.6 8.4c-.2 0-.5 0-.7.3s-.9.8-.9 2 .9 2.3 1 2.5c.1.2 1.8 2.9 4.5 3.9 2.2.8 2.7.7 3.1.6.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-1.6-.8c-.2-.1-.5-.2-.7.1l-.6.8c-.1.1-.2.1-.4 0-.2-.1-1-.4-1.8-1.1-.7-.6-1.1-1.3-1.2-1.5-.1-.2 0-.3.1-.4l.4-.5c.1-.2.1-.3 0-.5l-.7-1.7c-.1-.3-.3-.3-.5-.3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function VerifiedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props} aria-hidden="true">
      <path
        d="M12 2.5l2.2 1.7 2.8-.2 1 2.6 2.3 1.5-.7 2.7.7 2.7-2.3 1.5-1 2.6-2.8-.2L12 21.5l-2.2-1.7-2.8.2-1-2.6L3.7 16l.7-2.7-.7-2.7 2.3-1.5 1-2.6 2.8.2z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M8.8 12.2l2.1 2.1 4.3-4.4" stroke="var(--ink)" strokeWidth="1.8" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  // Visual only; callers flip it for RTL via CSS where needed.
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M7 17L17 7M17 7H9M17 7v8" />
    </svg>
  );
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={16} height={16} {...props} aria-hidden="true">
      <path d="M12 20s-7-4.6-9.2-8.3C1.3 9 2.2 6 5 5.3 6.8 4.8 8.7 5.6 12 8c3.3-2.4 5.2-3.2 7-2.7 2.8.7 3.7 3.7 2.2 6.4C19 15.4 12 20 12 20z" />
    </svg>
  );
}
