import Link from "next/link";
import type { AffiliateLink } from "@/data/affiliateLinks";

type Props = {
  link: AffiliateLink;
};

export default function ResourceCard({ link }: Props) {
  return (
    <div className="card flex flex-col">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {link.category}
        </span>
        {link.isAffiliate && (
          <span className="rounded-full bg-navy-50 px-2 py-0.5 text-[10px] font-semibold uppercase text-slate-500">
            Affiliate
          </span>
        )}
      </div>
      <h3 className="mt-2 text-base font-semibold text-navy-900">{link.name}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-600">{link.blurb}</p>
      <Link
        href={`/go/${link.slug}`}
        className="focus-ring mt-4 inline-flex items-center justify-center rounded-full border border-federal/30 px-5 py-2.5 text-sm font-semibold text-federal hover:border-federal hover:bg-navy-50"
        rel="nofollow sponsored"
      >
        View resource →
      </Link>
    </div>
  );
}
