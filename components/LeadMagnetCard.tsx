import Link from "next/link";
import type { LeadMagnet } from "@/data/leadMagnets";

type Props = {
  magnet: LeadMagnet;
};

export default function LeadMagnetCard({ magnet }: Props) {
  return (
    <div className="card flex flex-col">
      <div className="flex items-start justify-between">
        <span className="text-3xl" aria-hidden>
          {magnet.icon}
        </span>
        <span className="badge">Free</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy-900">
        {magnet.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-federal">{magnet.hook}</p>
      <p className="mt-2 text-sm text-slate-600">{magnet.description}</p>
      <ul className="mt-3 space-y-1 text-sm text-slate-600">
        {magnet.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-gold" aria-hidden>
              ✓
            </span>
            {b}
          </li>
        ))}
      </ul>
      <Link
        href={`/start-here?lm=${magnet.slug}#free-checklist`}
        className="focus-ring mt-5 inline-flex items-center justify-center rounded-full bg-federal px-5 py-2.5 text-sm font-semibold text-white hover:bg-federal-dark"
      >
        Get this free download
      </Link>
    </div>
  );
}
