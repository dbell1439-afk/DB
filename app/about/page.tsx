import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import DisclaimerBox from "@/components/DisclaimerBox";
import CTAButton from "@/components/CTAButton";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Why FedBenefits Navigator exists: practical, document-driven, plain-English education for federal employees navigating OPM retirement and benefits decisions.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`About ${siteConfig.name}`}
        intro="We make federal benefits usable — practical, document-driven, and written in plain English for the people who actually have to make these decisions."
        crumbs={[{ label: "About", href: "/about" }]}
      />

      <Section>
        <div className="prose-site max-w-3xl">
          <h2>Why this exists</h2>
          <p>
            Federal benefits guidance is everywhere, but most of it is either too
            generic to use or written like a regulation. Meanwhile, real people
            are facing OPM delays, SSDI offsets, medical separations, and FEHB and
            FEGLI decisions with deadlines attached. We built {siteConfig.name} to
            close that gap with checklists, calculators, and decision tools you can
            actually act on.
          </p>

          <h2>What we believe</h2>
          <ul>
            <li>
              <strong>Document-driven beats vague.</strong> A dated record and a
              clear checklist protect you better than a wall of text.
            </li>
            <li>
              <strong>Plain English is a feature.</strong> If you can’t use it
              under stress, it isn’t helping.
            </li>
            <li>
              <strong>Official sources matter.</strong> We link to OPM, SSA, TSP,
              and the IRS rather than paraphrasing the law as fact.
            </li>
            <li>
              <strong>We stay in our lane.</strong> We’re an education brand — not a
              law firm, financial advisory firm, or government agency.
            </li>
          </ul>

          <h2>What we are not</h2>
          <p>
            {siteConfig.name} is an independent educational brand. We are not a law
            firm, financial advisory firm, insurance agency, or tax practice, and
            we are not affiliated with OPM, SSA, the VA, or any government agency.
            We don’t provide legal, financial, medical, tax, or government benefit
            advice. For advice about your situation, talk to a licensed
            professional.
          </p>

          <h2>How we keep the lights on</h2>
          <p>
            We fund this work through low-cost digital toolkits, optional
            educational strategy sessions, and affiliate links to independent
            tools that may help you. Some links are affiliate links; if you buy
            through them we may earn a commission at no extra cost to you. We only
            share tools we think may genuinely help.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/start-here">Get the free checklist</CTAButton>
          <CTAButton href="/contact" variant="secondary">
            Contact us
          </CTAButton>
        </div>
      </Section>

      <Section muted className="pt-0">
        <DisclaimerBox />
      </Section>
    </>
  );
}
