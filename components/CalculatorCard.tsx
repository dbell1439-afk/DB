import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  href: string;
  icon?: string;
  children?: ReactNode;
};

export default function CalculatorCard({
  title,
  description,
  href,
  icon = "🧮",
}: Props) {
  return (
    <Link
      href={href}
      className="focus-ring group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
    >
      <span className="text-3xl" aria-hidden>
        {icon}
      </span>
      <h3 className="mt-3 text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-600">{description}</p>
      <span className="mt-4 text-sm font-semibold text-federal group-hover:underline">
        Open calculator →
      </span>
    </Link>
  );
}
