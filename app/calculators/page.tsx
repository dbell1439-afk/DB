import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CalculatorCard from "@/components/CalculatorCard";
import DisclaimerBox from "@/components/DisclaimerBox";
import EmailSignup from "@/components/EmailSignup";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Calculators & Decision Tools",
  description:
    "Free, educational federal benefits calculators: FERS disability annuity estimate, FEGLI reduction comparison, and an OPM delay tracker. No data stored.",
  path: "/calculators",
});

export default function CalculatorsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Decision Tools"
        title="Calculators & decision tools"
        intro="Simple, interactive tools to estimate and organize your federal benefits decisions. Everything runs in your browser — no data is stored or transmitted."
        crumbs={[{ label: "Calculators", href: "/calculators" }]}
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <CalculatorCard
            title="FERS Disability Retirement Estimate"
            description="Estimate a gross annuity using the simplified first-year (60% − 100% SSDI) and second-year (40% − 60% SSDI) formulas."
            href="/calculators/fers-disability-estimate"
            icon="🧮"
          />
          <CalculatorCard
            title="FEGLI Reduction Comparison"
            description="Compare the 75% reduction, 50% reduction, and no-reduction options side by side."
            href="/calculators/fegli-reduction"
            icon="🛡️"
          />
          <CalculatorCard
            title="OPM Delay Tracker"
            description="Enter your key dates to see days elapsed and build a documentation checklist."
            href="/calculators/opm-delay-tracker"
            icon="⏳"
          />
        </div>
      </Section>
      <Section muted>
        <EmailSignup tag="newsletter" />
      </Section>
      <Section className="pt-0">
        <DisclaimerBox />
      </Section>
    </>
  );
}
