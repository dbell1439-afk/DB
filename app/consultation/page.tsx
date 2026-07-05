import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ConsultationForm from "@/components/ConsultationForm";
import DisclaimerBox from "@/components/DisclaimerBox";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Consultation / Intake",
  description:
    "Request an educational strategy session about your federal benefits situation. Educational only — not legal, financial, tax, or medical advice. No outcome guarantees.",
  path: "/consultation",
});

export default function ConsultationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Consultation"
        title="Request an educational strategy session"
        intro="A focused conversation to help you organize your situation, understand your options, and identify your next documented step. This is education — not legal, financial, tax, or medical advice."
        crumbs={[{ label: "Consultation", href: "/consultation" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <ConsultationForm />
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-navy-100 bg-white p-5">
              <h2 className="text-sm font-semibold text-navy-900">
                What this is — and isn’t
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-gold">✓</span> Educational strategy and
                  organization
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span> Plain-English explanation of
                  options
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">✓</span> Help building a documented
                  next step
                </li>
                <li className="flex gap-2 text-slate-500">
                  <span>✕</span> Legal, financial, tax, or medical advice
                </li>
                <li className="flex gap-2 text-slate-500">
                  <span>✕</span> Any guarantee of OPM, SSA, VA, MSPB, EEOC, agency,
                  or court outcomes
                </li>
                <li className="flex gap-2 text-slate-500">
                  <span>✕</span> Representation before any agency or court
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                For advice or representation, consult a licensed attorney,
                financial planner, or tax professional. We can point you to our{" "}
                <a href="/resources" className="link-underline">
                  resources page
                </a>{" "}
                of independent tools.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <DisclaimerBox />
      </Section>
    </>
  );
}
