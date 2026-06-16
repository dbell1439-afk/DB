import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import OpmDelayTracker from "@/components/calculators/OpmDelayTracker";
import SourceLinkBox from "@/components/SourceLinkBox";
import EmailSignup from "@/components/EmailSignup";
import ProductCard from "@/components/ProductCard";
import { getProduct } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "OPM Delay Tracker",
  description:
    "Track days elapsed since each milestone of your OPM claim and build a documentation checklist. Educational only — no data stored.",
  path: "/calculators/opm-delay-tracker",
});

export default function OpmTrackerPage() {
  const product = getProduct("opm-delay-escalation-tracker");
  return (
    <>
      <PageHeader
        eyebrow="Tracker"
        title="OPM Delay Tracker"
        intro="Enter your key dates to see how long your claim has been pending at each step, and generate a documentation checklist you can act on."
        crumbs={[
          { label: "Calculators", href: "/calculators" },
          { label: "OPM Delay Tracker", href: "/calculators/opm-delay-tracker" },
        ]}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <OpmDelayTracker />
          <aside className="space-y-6">
            <SourceLinkBox sourceIds={["opm-retirement", "opm-disability"]} />
            {product && <ProductCard product={product} />}
          </aside>
        </div>
      </Section>
      <Section muted>
        <EmailSignup tag="lm-opm-delay" />
      </Section>
    </>
  );
}
