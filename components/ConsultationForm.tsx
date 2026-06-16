"use client";

import { useState, type FormEvent } from "react";

/**
 * Educational strategy-session intake form.
 *
 * Posts to Formspree when NEXT_PUBLIC_FORMSPREE_CONSULT_ID is set; otherwise it
 * runs in demo mode (logs payload, shows success). Swap the action for Tally or
 * any form endpoint as needed. No file upload is built — see the note below.
 */
export default function ConsultationForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_CONSULT_ID;
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    try {
      if (formId) {
        const res = await fetch(`https://formspree.io/f/${formId}`, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Form error");
      } else {
        // demo mode
        await new Promise((r) => setTimeout(r, 400));
      }
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-federal/20 bg-navy-50 p-6" role="status">
        <p className="text-lg font-semibold text-navy-900">Request received ✅</p>
        <p className="mt-1 text-sm text-slate-600">
          Thanks — we’ll follow up by email about scheduling an educational
          strategy session. This is not legal, financial, tax, or medical advice
          and creates no professional relationship.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="rounded-xl border border-gold/50 bg-ivory-warm p-4 text-sm text-slate-700">
        <p className="font-semibold text-navy-900">Before you submit — privacy</p>
        <p className="mt-1">
          Do not submit Social Security numbers, medical records, claim numbers,
          or confidential legal documents through this form. Share only what’s
          needed to schedule an educational conversation.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <Select
        label="Current status"
        name="current_status"
        options={[
          "Currently employed (federal)",
          "Separated, waiting on OPM",
          "Retired",
          "Considering disability retirement",
          "Facing RIF / separation",
          "Other",
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Agency (optional)" name="agency" />
        <Select
          label="Retirement type"
          name="retirement_type"
          options={["Not sure", "Regular (age/service)", "Disability", "Deferred", "Early/RIF"]}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Select
          label="Disability retirement status"
          name="disability_status"
          options={["N/A", "Considering", "Preparing application", "Filed", "Decision pending", "Approved", "Denied"]}
        />
        <Select
          label="SSDI status"
          name="ssdi_status"
          options={["N/A", "Not yet applied", "Applied", "Pending", "Approved", "Denied"]}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Select
          label="OPM claim status"
          name="opm_status"
          options={["N/A", "Not submitted", "At agency", "Forwarded to OPM", "CSA number received", "Interim pay", "Finalized"]}
        />
        <Select
          label="FEHB / FEGLI concerns"
          name="fehb_fegli"
          options={["None right now", "FEHB continuation", "FEGLI election", "Both", "Other"]}
        />
      </div>

      <Select
        label="Urgency"
        name="urgency"
        options={["Just researching", "Within a few months", "This month", "Time-sensitive deadline"]}
      />

      <label className="block">
        <span className="text-sm font-medium text-navy-900">
          What would you like help thinking through? (optional)
        </span>
        <textarea
          name="message"
          rows={4}
          className="focus-ring mt-1 w-full rounded-lg border border-navy-100 bg-ivory-warm px-3 py-2.5 text-sm outline-none"
          placeholder="A few sentences about your situation — no sensitive details."
        />
      </label>

      <p className="text-xs text-slate-500">
        Document uploads are intentionally not enabled. If document review becomes
        part of a session, we’ll arrange a separate secure method.
      </p>

      <label className="flex items-start gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          required
          name="acknowledge"
          className="mt-1 h-4 w-4 rounded border-navy-100 text-federal focus-ring"
        />
        <span>
          I understand this is an educational strategy session only — not legal,
          financial, tax, or medical advice — with no guarantee of any OPM, SSA,
          VA, MSPB, EEOC, agency, or court outcome.
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please email us instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring inline-flex items-center justify-center rounded-full bg-federal px-6 py-3 text-sm font-semibold text-white hover:bg-federal-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Request a session"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-900">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={type === "email" ? "email" : "off"}
        className="focus-ring mt-1 w-full rounded-lg border border-navy-100 bg-ivory-warm px-3 py-2.5 text-sm outline-none"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-900">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="focus-ring mt-1 w-full rounded-lg border border-navy-100 bg-ivory-warm px-3 py-2.5 text-sm outline-none"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
