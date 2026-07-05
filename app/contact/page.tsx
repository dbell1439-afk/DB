import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import DisclaimerBox from "@/components/DisclaimerBox";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Contact FedBenefits Navigator with questions about our educational tools, toolkits, or partnerships. We do not provide legal, financial, tax, or medical advice.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Questions about a toolkit, a partnership, or how something works? Send us a note. For advice about your specific situation, please consult a licensed professional."
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <ContactForm />
          <aside className="space-y-4 text-sm text-slate-600">
            <div className="rounded-2xl border border-navy-100 bg-white p-5">
              <p className="font-semibold text-navy-900">Email</p>
              <p className="mt-1">
                <a href={`mailto:${siteConfig.email}`} className="link-underline">
                  {siteConfig.email}
                </a>
              </p>
              <p className="mt-4 font-semibold text-navy-900">Partnerships</p>
              <p className="mt-1">
                Licensed professionals interested in referral relationships can
                reach us at the same address. We only work with vetted,
                appropriately licensed partners where permitted.
              </p>
            </div>
            <div className="rounded-2xl border border-gold/40 bg-ivory-warm p-5">
              <p className="font-semibold text-navy-900">Privacy reminder</p>
              <p className="mt-1">
                Do not send Social Security numbers, medical records, claim
                numbers, or confidential legal documents by email or form.
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
