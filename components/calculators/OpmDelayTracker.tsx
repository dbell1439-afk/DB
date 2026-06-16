"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

function daysBetween(from: string, to: Date): number | null {
  if (!from) return null;
  const start = new Date(from);
  if (isNaN(start.getTime())) return null;
  const ms = to.getTime() - start.getTime();
  return Math.max(0, Math.floor(ms / 86400000));
}

/**
 * Educational OPM delay tracker. Computes elapsed days from key dates and
 * suggests documentation. No data is stored or transmitted.
 */
export default function OpmDelayTracker() {
  const [submitted, setSubmitted] = useState("");
  const [forwarded, setForwarded] = useState("");
  const [lastContact, setLastContact] = useState("");
  const [csaReceived, setCsaReceived] = useState(false);
  const [interimStarted, setInterimStarted] = useState(false);

  const now = useMemo(() => new Date(), []);
  const sinceSubmitted = daysBetween(submitted, now);
  const sinceForwarded = daysBetween(forwarded, now);
  const sinceContact = daysBetween(lastContact, now);

  const checklist = useMemo(() => {
    const items: { text: string; done: boolean }[] = [
      { text: "Confirmation your application was submitted", done: !!submitted },
      {
        text: "Proof your agency forwarded the package to OPM",
        done: !!forwarded,
      },
      { text: "CSA claim number received from OPM", done: csaReceived },
      { text: "Interim pay started (record date + amount)", done: interimStarted },
      {
        text: "Dated log of your most recent OPM contact",
        done: !!lastContact,
      },
    ];
    return items;
  }, [submitted, forwarded, csaReceived, interimStarted, lastContact]);

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
      <div className="grid gap-5 sm:grid-cols-3">
        <label className="block">
          <span className="text-sm font-medium text-navy-900">
            Application submitted
          </span>
          <input
            type="date"
            value={submitted}
            onChange={(e) => setSubmitted(e.target.value)}
            className="focus-ring mt-1 w-full rounded-lg border border-navy-100 bg-ivory-warm px-3 py-2.5 text-sm outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-navy-900">
            Agency forwarded to OPM
          </span>
          <input
            type="date"
            value={forwarded}
            onChange={(e) => setForwarded(e.target.value)}
            className="focus-ring mt-1 w-full rounded-lg border border-navy-100 bg-ivory-warm px-3 py-2.5 text-sm outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-navy-900">
            Last OPM contact
          </span>
          <input
            type="date"
            value={lastContact}
            onChange={(e) => setLastContact(e.target.value)}
            className="focus-ring mt-1 w-full rounded-lg border border-navy-100 bg-ivory-warm px-3 py-2.5 text-sm outline-none"
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <label className="inline-flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={csaReceived}
            onChange={(e) => setCsaReceived(e.target.checked)}
            className="h-4 w-4 rounded border-navy-100 text-federal focus-ring"
          />
          CSA claim number received
        </label>
        <label className="inline-flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={interimStarted}
            onChange={(e) => setInterimStarted(e.target.checked)}
            className="h-4 w-4 rounded border-navy-100 text-federal focus-ring"
          />
          Interim pay started
        </label>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Days since submitted" value={sinceSubmitted} />
        <Stat label="Days since forwarded to OPM" value={sinceForwarded} />
        <Stat label="Days since last contact" value={sinceContact} />
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-navy-900">
          Suggested documentation checklist
        </h3>
        <ul className="mt-2 space-y-1.5 text-sm">
          {checklist.map((c) => (
            <li key={c.text} className="flex items-center gap-2">
              <span aria-hidden className={c.done ? "text-green-600" : "text-slate-300"}>
                {c.done ? "✓" : "○"}
              </span>
              <span className={c.done ? "text-slate-700" : "text-slate-500"}>
                {c.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/start-here?lm=opm-delay-call-log-escalation-tracker#free-checklist"
          className="focus-ring inline-flex items-center rounded-full bg-federal px-5 py-2.5 text-sm font-semibold text-white hover:bg-federal-dark"
        >
          Download the free Call Log & Escalation Tracker
        </Link>
        <Link
          href="/toolkits/opm-delay-escalation-tracker"
          className="focus-ring inline-flex items-center rounded-full border border-federal/30 px-5 py-2.5 text-sm font-semibold text-federal hover:bg-navy-50"
        >
          See the paid tracker toolkit
        </Link>
      </div>

      <div className="mt-5 rounded-xl border-l-4 border-gold bg-ivory-warm p-4 text-xs text-slate-700">
        <p className="font-semibold text-navy-900">Educational only</p>
        <p className="mt-1">
          Elapsed-day counts are for your own record-keeping and do not reflect
          OPM processing standards or any guarantee. This is not legal or
          financial advice. No data is stored or transmitted — values reset when
          you leave the page.
        </p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | null }) {
  return (
    <div className="rounded-xl bg-navy-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-2xl font-bold text-federal">
        {value === null ? "—" : value}
      </p>
    </div>
  );
}
