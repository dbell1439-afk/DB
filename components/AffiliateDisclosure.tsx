type Props = {
  className?: string;
};

export const AFFILIATE_DISCLOSURE_TEXT =
  "Some links may be affiliate links. If you purchase through them, we may earn a commission at no additional cost to you. We only recommend tools that may help federal employees organize, understand, or prepare their benefits decisions. We do not provide legal, financial, tax, or insurance advice — compare options with a licensed professional.";

export default function AffiliateDisclosure({ className = "" }: Props) {
  return (
    <p
      className={`rounded-lg border border-navy-100 bg-white px-4 py-3 text-xs text-slate-600 ${className}`}
    >
      <span className="font-semibold text-navy-900">Affiliate disclosure:</span>{" "}
      {AFFILIATE_DISCLOSURE_TEXT}
    </p>
  );
}
