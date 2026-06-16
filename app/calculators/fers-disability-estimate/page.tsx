import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import FersDisabilityCalculator from "@/components/calculators/FersDisabilityCalculator";
import SourceLinkBox from "@/components/SourceLinkBox";
import EmailSignup from "@/components/EmailSignup";
import ProductCard from "@/components/ProductCard";
import { getProduct } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "FERS Disability Retirement Estimator",
  description:
    "A simplified, educational estimator for a FERS disability annuity using the first-year and second-year SSDI offset formulas. No data stored.",
  path: "/calculators/fers-disability-estimate",
});

export default function FersEstimatorPage() {
  const product = getProduct("ssdi-offset-worksheet-pack");
  return (
    <>
      <PageHeader
        eyebrow="Calculator"
        title="FERS Disability Retirement Estimator"
        intro="Enter your high-3 and SSDI amount to see a simplified, educational gross annuity estimate for the first year and the years after."
        crumbs={[
          { label: "Calculators", href: "/calculators" },
          { label: "FERS Disability Estimate", href: "/calculators/fers-disability-estimate" },
        ]}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <FersDisabilityCalculator />
          <aside className="space-y-6">
            <SourceLinkBox sourceIds={["opm-disability", "ssa-disability"]} />
            {product && <ProductCard product={product} />}
          </aside>
        </div>
      </Section>
      <Section muted>
        <EmailSignup tag="lm-ssdi-offset" />
      </Section>
    </>
  );
}
