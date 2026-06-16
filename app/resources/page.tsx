import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ResourceCard from "@/components/ResourceCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import DisclaimerBox from "@/components/DisclaimerBox";
import { affiliateCategories, affiliateLinks } from "@/data/affiliateLinks";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Recommended Tools & Resources",
  description:
    "Independent tools that may help federal employees organize and prepare benefits decisions — retirement planning, tax software, document scanning, and more. Compare with a licensed professional.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recommended Tools"
        title="Tools & resources we think are worth a look"
        intro="Independent tools that may help you organize, understand, or prepare your federal benefits decisions. We frame these as educational comparison resources — not as the “best” option for you. Compare options with a licensed professional."
        crumbs={[{ label: "Resources", href: "/resources" }]}
      />

      <Section>
        <AffiliateDisclosure className="mb-8" />
        <div className="space-y-12">
          {affiliateCategories.map((category) => {
            const links = affiliateLinks.filter((l) => l.category === category);
            if (links.length === 0) return null;
            return (
              <div key={category}>
                <h2 className="mb-4 text-xl font-semibold text-navy-900">
                  {category}
                </h2>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {links.map((l) => (
                    <ResourceCard key={l.slug} link={l} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section muted className="pt-0">
        <DisclaimerBox title="A note on recommendations">
          We do not sell insurance, investments, legal, or tax services, and we do
          not recommend any specific product as “best.” Links are educational
          comparison resources only. Always compare options and confirm details
          with a licensed professional before making a financial, legal,
          insurance, or tax decision.
        </DisclaimerBox>
      </Section>
    </>
  );
}
