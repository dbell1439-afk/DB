import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  muted?: boolean;
};

/** Vertical rhythm wrapper for homepage + landing sections. */
export default function Section({
  children,
  title,
  subtitle,
  id,
  className = "",
  muted = false,
}: Props) {
  return (
    <section
      id={id}
      className={`${muted ? "bg-ivory-warm" : ""} ${className}`}
    >
      <div className="container-page py-12 sm:py-16">
        {(title || subtitle) && (
          <div className="mb-8 max-w-2xl">
            {title && (
              <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base text-slate-600">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
