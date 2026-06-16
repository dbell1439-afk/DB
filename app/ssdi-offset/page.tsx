import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import { getFAQGroup } from "@/data/faqs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "SSDI Offset Explainer",
  description:
    "How SSDI reduces a FERS disability annuity: the simplified first-year (60% − 100% SSDI) and second-year (40% − 60% SSDI) offset math. Educational only.",
  path: "/ssdi-offset",
});

export default function SsdiOffsetGuide() {
  const faqs = getFAQGroup("ssdi-offset")?.faqs ?? [];
  return (
    <GuideLayout
      eyebrow="Explainer"
      title="SSDI Offset Explainer"
      intro="If you’re approved for both FERS disability retirement and SSDI, your FERS check is reduced. Here’s the simplified first-year and second-year math — and why your net is lower than the gross."
      crumbs={[{ label: "SSDI Offset", href: "/ssdi-offset" }]}
      primaryCta={{ label: "Open the estimator", href: "/calculators/fers-disability-estimate" }}
      secondaryCta={{ label: "Free offset worksheet", href: "/start-here?lm=ssdi-offset-quick-calculator-worksheet#free-checklist" }}
      faqs={faqs}
      sourceIds={["opm-disability", "ssa-disability"]}
      relatedProductSlugs={["ssdi-offset-worksheet-pack", "fers-disability-prep-toolkit"]}
      emailTag="lm-ssdi-offset"
      leadMagnetSlug="ssdi-offset-quick-calculator-worksheet"
      leadMagnetLabel="The SSDI Offset Quick Calculator Worksheet."
    >
      <h2>The simplified formulas</h2>
      <p>
        Many resources describe the FERS disability offset in two phases. Treat
        these as educational shorthand, not a guarantee — OPM’s actual
        calculation depends on your facts. <em>(Verify before publication.)</em>
      </p>
      <ul>
        <li>
          <strong>First 12 months:</strong> 60% of your high-3, reduced by 100% of
          any SSDI benefit
        </li>
        <li>
          <strong>Second year onward:</strong> 40% of your high-3, reduced by 60%
          of any SSDI benefit
        </li>
      </ul>

      <h2>Why gross is not net</h2>
      <p>
        The formulas above produce a <strong>gross</strong> figure. Your net check
        is further reduced by taxes, FEHB and FEGLI premiums, survivor elections,
        and other deductions. Use the{" "}
        <a className="link-underline" href="/calculators/fers-disability-estimate">
          estimator
        </a>{" "}
        for an educational gross figure, then plan conservatively.
      </p>

      <h2>Who this helps</h2>
      <ul>
        <li>Employees estimating income during disability retirement</li>
        <li>Anyone surprised by a lower-than-expected check</li>
      </ul>

      <h2>Common mistakes</h2>
      <ul>
        <li>Treating the gross estimate as take-home pay</li>
        <li>Forgetting the first-year vs. later-year difference</li>
        <li>Not accounting for SSDI changes over time</li>
      </ul>

      <h2>Documents to gather</h2>
      <ul>
        <li>Your high-3 average salary figures</li>
        <li>Your SSDI award amount (if approved)</li>
        <li>Deduction details (FEHB, FEGLI, taxes, survivor election)</li>
      </ul>
    </GuideLayout>
  );
}
