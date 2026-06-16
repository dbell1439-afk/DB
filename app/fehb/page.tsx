import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import { getFAQGroup } from "@/data/faqs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "FEHB Open Season Decision Hub",
  description:
    "Compare FEHB plans and protect your coverage into retirement. The five-year rule, questions to ask, and a comparison sheet. Educational only.",
  path: "/fehb",
});

export default function FehbHub() {
  const faqs = getFAQGroup("fehb-fegli")?.faqs ?? [];
  return (
    <GuideLayout
      eyebrow="Decision Hub"
      title="FEHB Open Season Decision Hub"
      intro="Open Season is the time to compare plans on what actually affects you — and to protect your ability to keep FEHB into retirement. Here’s how to decide."
      crumbs={[{ label: "FEHB", href: "/fehb" }]}
      primaryCta={{ label: "Free comparison sheet", href: "/start-here?lm=fehb-open-season-comparison-sheet#free-checklist" }}
      secondaryCta={{ label: "FEHB decision workbook", href: "/toolkits/fehb-open-season-decision-workbook" }}
      faqs={faqs}
      sourceIds={["opm-fehb", "opm-handbook"]}
      relatedProductSlugs={["fehb-open-season-decision-workbook", "federal-retirement-document-organizer"]}
      emailTag="lm-fehb"
      leadMagnetSlug="fehb-open-season-comparison-sheet"
      leadMagnetLabel="The FEHB Open Season Comparison Sheet."
    >
      <h2>Compare on what matters</h2>
      <p>
        Premiums are only part of the picture. Compare plans on total expected
        cost and the coverage details that affect your household.
      </p>
      <ul>
        <li>Premium and out-of-pocket maximum</li>
        <li>Prescription coverage and specialist access</li>
        <li>Network and provider availability</li>
        <li>How the plan coordinates with Medicare if you’re near 65</li>
      </ul>

      <h2>The five-year rule (keeping FEHB in retirement)</h2>
      <p>
        Generally, you must be enrolled in FEHB for the five years immediately
        before retirement — or since your first opportunity to enroll — to keep it
        as a retiree. Confirm your specific eligibility with OPM and your agency
        before you change anything. <em>(Verify before publication.)</em>
      </p>

      <h2>Who this helps</h2>
      <ul>
        <li>Employees comparing plans during Open Season</li>
        <li>Anyone approaching retirement or separation</li>
        <li>Households coordinating with Medicare</li>
      </ul>

      <h2>Common mistakes</h2>
      <ul>
        <li>Dropping FEHB right before retirement</li>
        <li>Assuming any plan automatically continues</li>
        <li>Ignoring Medicare coordination timing</li>
      </ul>

      <h2>Documents to gather</h2>
      <ul>
        <li>Your FEHB enrollment history</li>
        <li>Current and prospective plan brochures</li>
        <li>Agency confirmation of continuation eligibility</li>
      </ul>
    </GuideLayout>
  );
}
