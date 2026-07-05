import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import FegliReductionCalculator from "@/components/calculators/FegliReductionCalculator";
import SourceLinkBox from "@/components/SourceLinkBox";
import EmailSignup from "@/components/EmailSignup";
import ProductCard from "@/components/ProductCard";
import { getProduct } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "FEGLI Reduction Comparison",
  description:
    "Compare the FEGLI Basic 75% reduction, 50% reduction, and no-reduction options. Educational comparison only — not financial advice. No data stored.",
  path: "/calculators/fegli-reduction",
});

export default function FegliCalcPage() {
  const product = getProduct("fegli-retirement-election-worksheet");
  return (
    <>
      <PageHeader
        eyebrow="Calculator"
        title="FEGLI Reduction Comparison"
        intro="A side-by-side, educational comparison of the FEGLI Basic reduction options at retirement. Enter a placeholder premium to see relative cost over time."
        crumbs={[
          { label: "Calculators", href: "/calculators" },
          { label: "FEGLI Reduction", href: "/calculators/fegli-reduction" },
        ]}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <FegliReductionCalculator />
          <aside className="space-y-6">
            <SourceLinkBox sourceIds={["opm-fegli"]} />
            {product && <ProductCard product={product} />}
          </aside>
        </div>
      </Section>
      <Section muted>
        <EmailSignup tag="lm-fegli" />
      </Section>
    </>
  );
}
