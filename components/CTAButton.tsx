import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold focus-ring disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-federal text-white hover:bg-federal-dark shadow-card",
  secondary:
    "bg-white text-federal border border-federal/30 hover:border-federal hover:bg-navy-50",
  ghost: "bg-transparent text-white border border-white/40 hover:bg-white/10",
  gold: "bg-gold text-navy-900 hover:bg-gold-light shadow-card",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  ariaLabel,
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        rel="noopener noreferrer sponsored"
        target="_blank"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
