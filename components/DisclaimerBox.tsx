import type { ReactNode } from "react";

type Props = {
  title?: string;
  children?: ReactNode;
  variant?: "default" | "compact";
};

const DEFAULT_TEXT =
  "Educational information only. This is not legal, financial, medical, tax, or government benefit advice, and we are not affiliated with OPM, SSA, the VA, or any government agency. For advice about your situation, consult a licensed professional.";

export default function DisclaimerBox({
  title = "Educational information only",
  children,
  variant = "default",
}: Props) {
  if (variant === "compact") {
    return (
      <p className="rounded-lg border border-navy-100 bg-ivory-warm px-4 py-3 text-xs text-slate-600">
        <span className="font-semibold text-navy-900">Disclaimer:</span>{" "}
        {children || DEFAULT_TEXT}
      </p>
    );
  }
  return (
    <aside
      role="note"
      className="rounded-2xl border-l-4 border-gold bg-ivory-warm p-5 text-sm text-slate-700"
    >
      <p className="mb-1 font-semibold text-navy-900">{title}</p>
      <p>{children || DEFAULT_TEXT}</p>
    </aside>
  );
}
