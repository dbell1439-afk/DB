import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SituationCard from "@/components/SituationCard";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import EmailSignup from "@/components/EmailSignup";
import DisclaimerBox from "@/components/DisclaimerBox";
import { situations } from "@/data/situations";
import { leadMagnets } from "@/data/leadMagnets";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Start Here",
  description:
    "New here? Pick your situation, grab a free checklist, and get a clear next step for your federal benefits decision. Educational information only.",
  path: "/start-here",
});

export default function StartHerePage() {
  return (
    <>
      <PageHeader
        eyebrow="Start Here"
        title="Get a clear next step in the next five minutes"
        intro="Federal benefits are complicated, but your next move doesn’t have to be. Pick the situation that fits you, grab the matching free checklist, and we’ll point you to the right tools."
        crumbs={[{ label: "Start Here", href: "/start-here" }]}
      />

      <Section title="1. Pick your situation">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {situations.map((s) => (
            <SituationCard key={s.id} situation={s} />
          ))}
        </div>
      </Section>

      <Section
        muted
        id="free-checklist"
        title="2. Grab the free OPM Retirement Readiness Checklist"
        subtitle="Enter your email and we’ll send the checklist that matches your situation, plus plain-English benefits guidance. Unsubscribe anytime."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <EmailSignup
            tag="lm-readiness"
            heading="Send me the free checklist"
            subheading="The OPM Retirement Readiness Checklist covers the documents, decisions, and dates to line up before you separate or apply."
          />
          <div className="rounded-2xl border border-navy-100 bg-white p-6">
            <h3 className="text-lg font-semibold text-navy-900">
              What you’ll get
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="text-gold">✓</span> A printable readiness
                checklist
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span> A short, useful email series
                (no spam)
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span> Links to the right tools for
                your situation
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              We never ask for SSNs, claim numbers, or medical records by email.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="3. Choose any free checklist"
        subtitle="Each download maps to a specific federal benefits decision."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadMagnets.map((m) => (
            <LeadMagnetCard key={m.slug} magnet={m} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <DisclaimerBox />
      </Section>
    </>
  );
}
