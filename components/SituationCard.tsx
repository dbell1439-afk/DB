import Link from "next/link";
import type { Situation } from "@/data/situations";

type Props = {
  situation: Situation;
};

export default function SituationCard({ situation }: Props) {
  return (
    <Link
      href={situation.href}
      className="focus-ring group flex flex-col rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
    >
      <span className="text-3xl" aria-hidden>
        {situation.icon}
      </span>
      <h3 className="mt-3 text-base font-semibold text-navy-900">
        {situation.title}
      </h3>
      <p className="mt-1 text-sm text-slate-600">{situation.blurb}</p>
      <span className="mt-3 text-sm font-semibold text-federal group-hover:underline">
        Start here →
      </span>
    </Link>
  );
}
