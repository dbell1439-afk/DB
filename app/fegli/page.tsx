import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import { getFAQGroup } from "@/data/faqs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "FEGLI Decision Hub",
  description:
    "FEGLI at retirement: compare the 75% reduction, 50% reduction, and no-reduction options and the trade-offs. Educational only — compare with a licensed agent.",
  path: "/fegli",
});

export default function FegliHub() {
  const faqs = getFAQGroup("fehb-fegli")?.faqs ?? [];
  return (
    <GuideLayout
      eyebrow="Decision Hub"
      title="FEGLI Decision Hub"
      intro="At retirement, FEGLI Basic asks you to choose a reduction option. The right answer depends on your coverage needs and budget over time. Here’s how to weigh it."
      crumbs={[{ label: "FEGLI", href: "/fegli" }]}
      primaryCta={{ label: "Open the FEGLI comparison tool", href: "/calculators/fegli-reduction" }}
      secondaryCta={{ label: "Free decision worksheet", href: "/start-here?lm=fegli-retirement-decision-worksheet#free-checklist" }}
      faqs={faqs}
      sourceIds={["opm-fegli"]}
      relatedProductSlugs={["fegli-retirement-election-worksheet", "federal-retirement-document-organizer"]}
      emailTag="lm-fegli"
      leadMagnetSlug="fegli-retirement-decision-worksheet"
      leadMagnetLabel="The FEGLI Retirement Decision Worksheet."
    >
      <h2>The three Basic options</h2>
      <ul>
        <li>
          <strong>75% reduction:</strong> lowest long-term cost; coverage reduces
          significantly after age 65
        </li>
        <li>
          <strong>50% reduction:</strong> a middle ground on cost and retained
          coverage
        </li>
        <li>
          <strong>No reduction:</strong> highest long-term cost; retains the most
          coverage
        </li>
      </ul>

      <h2>How to decide</h2>
      <p>
        Map your actual coverage needs — debts, dependents, final expenses —
        against the cost of each option over time. Use the{" "}
        <a className="link-underline" href="/calculators/fegli-reduction">
          comparison tool
        </a>
        , then compare quotes with a licensed agent. FEGLI rules and rates come
        from OPM. <em>(Verify before publication.)</em>
      </p>

      <h2>Who this helps</h2>
      <ul>
        <li>Employees making FEGLI elections at retirement</li>
        <li>Anyone comparing FEGLI to private life insurance</li>
      </ul>

      <h2>Common mistakes</h2>
      <ul>
        <li>Choosing by monthly cost alone without modeling later years</li>
        <li>Overlooking that “no reduction” costs more over time</li>
        <li>Not comparing to private coverage</li>
      </ul>

      <h2>Documents to gather</h2>
      <ul>
        <li>Your current FEGLI coverage amounts</li>
        <li>Premium estimates by option (from OPM tables)</li>
        <li>A list of your coverage needs and dependents</li>
      </ul>
    </GuideLayout>
  );
}
