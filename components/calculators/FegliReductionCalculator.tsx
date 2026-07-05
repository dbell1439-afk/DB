"use client";

import { useMemo, useState } from "react";

function currency(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

type Election = "75" | "50" | "none";

/**
 * Educational FEGLI Basic reduction comparison. This does NOT compute official
 * premiums (those come from OPM tables). It lays out the coverage trade-offs and
 * lets you enter a placeholder premium to see relative cost over time.
 */
export default function FegliReductionCalculator() {
  const [basic, setBasic] = useState<string>("");
  const [premium, setPremium] = useState<string>("");
  const [election, setElection] = useState<Election>("75");

  const rows = useMemo(() => {
    const amount = parseFloat(basic) || 0;
    return [
      {
        key: "75" as Election,
        label: "75% reduction",
        retained: amount * 0.25,
        summary:
          "Coverage reduces 2% per month after 65 until 25% remains. Typically the lowest long-term cost.",
      },
      {
        key: "50" as Election,
        label: "50% reduction",
        retained: amount * 0.5,
        summary:
          "Coverage reduces 1% per month after 65 until 50% remains. Middle ground on cost and coverage.",
      },
      {
        key: "none" as Election,
        label: "No reduction",
        retained: amount,
        summary:
          "Full coverage retained after 65. Typically the highest long-term cost.",
      },
    ];
  }, [basic]);

  const monthlyPremium = parseFloat(premium) || 0;

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-navy-900">
            FEGLI Basic insurance amount
          </span>
          <div className="mt-1 flex items-center rounded-lg border border-navy-100 bg-ivory-warm px-3">
            <span className="text-slate-400">$</span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              value={basic}
              onChange={(e) => setBasic(e.target.value)}
              placeholder="90000"
              className="focus-ring w-full bg-transparent px-2 py-2.5 text-sm outline-none"
            />
          </div>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-navy-900">
            Monthly premium (placeholder, from OPM tables)
          </span>
          <div className="mt-1 flex items-center rounded-lg border border-navy-100 bg-ivory-warm px-3">
            <span className="text-slate-400">$</span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              value={premium}
              onChange={(e) => setPremium(e.target.value)}
              placeholder="0"
              className="focus-ring w-full bg-transparent px-2 py-2.5 text-sm outline-none"
            />
          </div>
        </label>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-navy-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-navy-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Election</th>
              <th className="px-4 py-3">Coverage retained (approx.)</th>
              <th className="px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-100">
            {rows.map((r) => (
              <tr
                key={r.key}
                className={election === r.key ? "bg-ivory-warm" : "bg-white"}
              >
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => setElection(r.key)}
                    className="focus-ring font-semibold text-navy-900 underline-offset-2 hover:underline"
                  >
                    {r.label}
                  </button>
                </td>
                <td className="px-4 py-3 font-semibold text-federal">
                  {currency(r.retained)}
                </td>
                <td className="px-4 py-3 text-slate-600">{r.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {monthlyPremium > 0 && (
        <p className="mt-3 text-sm text-slate-600">
          At {currency(monthlyPremium)}/month placeholder premium, that is about{" "}
          <span className="font-semibold text-navy-900">
            {currency(monthlyPremium * 12)}/year
          </span>
          . Enter real OPM table values to compare cost over time.
        </p>
      )}

      <div className="mt-5 rounded-xl border-l-4 border-gold bg-ivory-warm p-4 text-xs text-slate-700">
        <p className="font-semibold text-navy-900">Educational comparison only</p>
        <p className="mt-1">
          This layout illustrates trade-offs and does not calculate official
          premiums or recommend an option. FEGLI rules, ages, and rates come from
          OPM. This is not insurance, financial, or tax advice — compare options
          with a licensed agent. No data is stored.
        </p>
      </div>
    </div>
  );
}
