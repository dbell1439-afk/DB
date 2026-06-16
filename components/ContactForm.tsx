"use client";

import { useState, type FormEvent } from "react";

/**
 * General contact form. Posts to Formspree when
 * NEXT_PUBLIC_FORMSPREE_CONTACT_ID is set; otherwise demo mode.
 */
export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID;
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
        <p className="text-lg font-semibold text-navy-900">Thanks for reaching out ✅</p>
        <p className="mt-1 text-sm text-slate-600">
          We’ll get back to you by email. Please don’t send sensitive personal,
          medical, or claim information.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-navy-900">Name</span>
          <input
            name="name"
            required
            className="focus-ring mt-1 w-full rounded-lg border border-navy-100 bg-ivory-warm px-3 py-2.5 text-sm outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-navy-900">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="focus-ring mt-1 w-full rounded-lg border border-navy-100 bg-ivory-warm px-3 py-2.5 text-sm outline-none"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-navy-900">Subject</span>
        <input
          name="subject"
          className="focus-ring mt-1 w-full rounded-lg border border-navy-100 bg-ivory-warm px-3 py-2.5 text-sm outline-none"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-navy-900">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className="focus-ring mt-1 w-full rounded-lg border border-navy-100 bg-ivory-warm px-3 py-2.5 text-sm outline-none"
          placeholder="How can we help? Please don’t include SSNs, claim numbers, or medical details."
        />
      </label>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring inline-flex items-center justify-center rounded-full bg-federal px-6 py-3 text-sm font-semibold text-white hover:bg-federal-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
