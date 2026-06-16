import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import StoreGrid from "@/components/StoreGrid";
import DisclaimerBox from "@/components/DisclaimerBox";
import EmailSignup from "@/components/EmailSignup";
import { products } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Templates & Toolkits Store",
  description:
    "Low-cost, document-driven toolkits for federal benefits decisions: FERS disability prep, OPM delay tracking, SSDI offset, FEHB, FEGLI, and more. Educational templates only.",
  path: "/toolkits",
});

export default function ToolkitsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Store"
        title="Templates & toolkits"
        intro="Practical, document-driven templates to organize and prepare your federal benefits decisions. Instant digital downloads — educational templates only, not legal, financial, medical, or tax advice."
        crumbs={[{ label: "Toolkits", href: "/toolkits" }]}
      />
      <Section>
        <StoreGrid products={products} />
      </Section>
      <Section muted>
        <EmailSignup
          tag="newsletter"
          heading="Not ready to buy? Start free."
          subheading="Get a free checklist and plain-English benefits guidance by email first."
        />
      </Section>
      <Section className="pt-0">
        <DisclaimerBox />
      </Section>
    </>
  );
}
