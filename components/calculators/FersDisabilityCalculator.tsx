"use client";

import { useMemo, useState } from "react";

function currency(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

/**
 * Educational FERS disability annuity estimator.
 * Simplified formulas (verify with OPM):
 *   First year:  60% of high-3  − 100% of SSDI
 *   After year 1: 40% of high-3 −  60% of SSDI
 * Output is an annual GROSS figure, before deductions. No data is stored.
 */
export default function FersDisabilityCalculator() {
  const [high3, setHigh3] = useState<string>("");
  const [ssdiMonthly, setSsdiMonthly] = useState<string>("");
  const [phase, setPhase] = useState<"first" | "second">("first");

  const result = useMemo(() => {
    const h3 = parseFloat(high3) || 0;
    const ssdiAnnual = (parseFloat(ssdiMonthly) || 0) * 12;
    if (h3 <= 0) return null;

    let gross: number;
    let formula: string;
    if (phase === "first") {
      gross = 0.6 * h3 - 1.0 * ssdiAnnual;
      formula = "60% of high-3 − 100% of SSDI";
    } else {
      gross = 0.4 * h3 - 0.6 * ssdiAnnual;
      formula = "40% of high-3 − 60% of SSDI";
    }
    const annual = Math.max(0, gross);
    return { annual, monthly: annual / 12, formula };
  }, [high3, ssdiMonthly, phase]);

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-navy-900">
            High-3 average salary (annual)
          </span>
          <div className="mt-1 flex items-center rounded-lg border border-navy-100 bg-ivory-warm px-3">
            <span className="text-slate-400">$</span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              value={high3}
              onChange={(e) => setHigh3(e.target.value)}
              placeholder="85000"
              className="focus-ring w-full bg-transparent px-2 py-2.5 text-sm outline-none"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-navy-900">
            SSDI benefit (monthly, if approved)
          </span>
          <div className="mt-1 flex items-center rounded-lg border border-navy-100 bg-ivory-warm px-3">
            <span className="text-slate-400">$</span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              value={ssdiMonthly}
              onChange={(e) => setSsdiMonthly(e.target.value)}
              placeholder="1500"
              className="focus-ring w-full bg-transparent px-2 py-2.5 text-sm outline-none"
            />
          </div>
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium text-navy-900">
          Which period?
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setPhase("first")}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold ${
              phase === "first"
                ? "bg-federal text-white"
                : "border border-navy-100 text-slate-700 hover:bg-navy-50"
            }`}
          >
            First 12 months
          </button>
          <button
            type="button"
            onClick={() => setPhase("second")}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold ${
              phase === "second"
                ? "bg-federal text-white"
                : "border border-navy-100 text-slate-700 hover:bg-navy-50"
            }`}
          >
            Second year onward
          </button>
        </div>
      </fieldset>

      {result && (
        <div className="mt-6 rounded-xl bg-navy-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Estimated gross annuity ({result.formula})
          </p>
          <p className="mt-1 text-3xl font-bold text-federal">
            {currency(result.annual)}
            <span className="text-base font-medium text-slate-500"> / year</span>
          </p>
          <p className="mt-1 text-sm text-slate-600">
            ≈ {currency(result.monthly)} / month, before deductions
          </p>
        </div>
      )}

      <div className="mt-5 rounded-xl border-l-4 border-gold bg-ivory-warm p-4 text-xs text-slate-700">
        <p className="font-semibold text-navy-900">Important</p>
        <p className="mt-1">
          This is a simplified educational estimator. OPM calculations may vary
          based on individual facts, deductions, survivor elections, FEHB/FEGLI
          premiums, taxes, deposits/redeposits, service history, and applicable
          law. This is not financial, legal, or tax advice and no data is stored.
        </p>
      </div>
    </div>
  );
}
