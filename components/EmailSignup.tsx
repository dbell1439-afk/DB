"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/data/siteConfig";

type Props = {
  /** Lead-magnet tag passed to your email provider for segmentation. */
  tag?: string;
  heading?: string;
  subheading?: string;
  cta?: string;
  /** UTM source override; defaults to the current page path at submit time. */
  utmSource?: string;
  compact?: boolean;
};

/**
 * Provider-agnostic email capture.
 *
 * Swap in a real integration by setting siteConfig.emailProvider and filling the
 * matching env var (see .env.example). Until then this posts nowhere and just
 * shows a success state, so the UI is launch-ready and easy to wire up.
 *
 * To wire ConvertKit/Beehiiv/MailerLite: replace handleSubmit's body with a
 * fetch() to your provider's form endpoint, or render their embedded form here.
 */
export default function EmailSignup({
  tag = "newsletter",
  heading = "Get the free OPM Retirement Readiness Checklist",
  subheading = "Plus plain-English tips for navigating OPM retirement, FERS disability, FEHB, FEGLI, and benefit delays. Unsubscribe anytime.",
  utmSource,
  compact = false,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const source =
        utmSource ||
        (typeof window !== "undefined" ? window.location.pathname : "site");

      const ckFormId = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
      if (siteConfig.emailProvider === "convertkit" && ckFormId) {
        // Kit (ConvertKit) public form submission. Configure the tag/segment on
        // the form in Kit; we still pass utm + tag fields as custom fields.
        const body = new FormData();
        body.append("email_address", email);
        body.append("fields[tag]", tag);
        body.append("fields[utm_source]", source);
        const res = await fetch(
          `https://app.kit.com/forms/${ckFormId}/subscriptions`,
          { method: "POST", body, headers: { Accept: "application/json" } },
        );
        if (!res.ok) throw new Error("Subscribe failed");
      } else {
        // Demo mode (no provider configured yet). Payload is ready to forward.
        const payload = { email, tag, utm_source: source, provider: siteConfig.emailProvider };
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.log("EmailSignup payload (wire to provider):", payload);
        }
        await new Promise((r) => setTimeout(r, 400));
      }

      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        className={`rounded-2xl border border-federal/20 bg-navy-50 p-6 text-center ${
          compact ? "" : "sm:p-8"
        }`}
        role="status"
      >
        <p className="text-lg font-semibold text-navy-900">Check your inbox ✉️</p>
        <p className="mt-1 text-sm text-slate-600">
          Confirm your email to receive your download. (Demo mode: connect a
          provider to deliver the file automatically.)
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-federal/20 bg-gradient-to-br from-navy-50 to-ivory-warm p-6 ${
        compact ? "" : "sm:p-8"
      }`}
    >
      {!compact && (
        <>
          <h2 className="text-xl font-semibold text-navy-900 sm:text-2xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{subheading}</p>
        </>
      )}
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-3 sm:flex-row"
        noValidate
      >
        <label htmlFor={`email-${tag}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${tag}`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="focus-ring w-full rounded-full border border-navy-100 bg-white px-5 py-3 text-sm text-navy-900 placeholder:text-slate-400"
        />
        <input type="hidden" name="tag" value={tag} />
        <button
          type="submit"
          disabled={status === "loading"}
          className="focus-ring inline-flex shrink-0 items-center justify-center rounded-full bg-federal px-6 py-3 text-sm font-semibold text-white hover:bg-federal-dark disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send it to me"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="mt-3 text-xs text-slate-500">
        We respect your privacy. No spam. Educational information only — not
        legal, financial, tax, or medical advice.
      </p>
    </div>
  );
}
