import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import { getFAQGroup } from "@/data/faqs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "FERS Disability Retirement Guide",
  description:
    "A plain-English FERS disability retirement guide: eligibility ideas, the SSDI requirement, evidence to gather, timelines, and common mistakes. Educational only.",
  path: "/fers-disability-retirement",
});

export default function FersDisabilityGuide() {
  const faqs = getFAQGroup("fers-disability")?.faqs ?? [];
  return (
    <GuideLayout
      eyebrow="Guide"
      title="FERS Disability Retirement Guide"
      intro="What federal employees should understand before applying — eligibility, the SSDI requirement, the evidence that matters, and how to stay organized through a long process."
      crumbs={[{ label: "FERS Disability Retirement", href: "/fers-disability-retirement" }]}
      primaryCta={{ label: "Open the disability estimator", href: "/calculators/fers-disability-estimate" }}
      secondaryCta={{ label: "Free document checklist", href: "/start-here?lm=fers-disability-document-checklist#free-checklist" }}
      faqs={faqs}
      sourceIds={["opm-disability", "ssa-disability", "opm-handbook"]}
      relatedProductSlugs={["fers-disability-prep-toolkit", "ssdi-offset-worksheet-pack"]}
      emailTag="lm-fers-disability"
      leadMagnetSlug="fers-disability-document-checklist"
      leadMagnetLabel="The FERS Disability Retirement Document Checklist."
    >
      <h2>What FERS disability retirement is</h2>
      <p>
        FERS disability retirement is a benefit for federal employees who can no
        longer perform the essential duties of their position because of a medical
        condition. It is separate from regular age/service retirement and from
        SSDI, although the three can interact. The goal of an application is to
        document — clearly and with evidence — that your condition prevents useful
        and efficient service and that your agency could not accommodate or
        reassign you.
      </p>

      <h2>General eligibility ideas</h2>
      <p>
        Eligibility usually turns on a few core ideas. Exact thresholds matter, so
        confirm them with OPM. <em>(Verify before publication.)</em>
      </p>
      <ul>
        <li>A minimum amount of creditable federal service</li>
        <li>A medical condition expected to last at least a year</li>
        <li>
          The condition prevents useful and efficient service in your current
          position
        </li>
        <li>
          Your agency cannot accommodate the condition or reassign you to a
          suitable position at the same grade or pay level
        </li>
      </ul>

      <h2>Why you generally must also apply for SSDI</h2>
      <p>
        FERS disability retirement applicants are generally required to also file
        for Social Security disability (SSDI). Keep proof that you filed. If SSDI
        is approved, it offsets part of your FERS benefit — see our{" "}
        <a className="link-underline" href="/ssdi-offset">
          SSDI offset explainer
        </a>{" "}
        and{" "}
        <a className="link-underline" href="/calculators/fers-disability-estimate">
          estimator
        </a>{" "}
        for the simplified math.
      </p>

      <h2>Who this helps</h2>
      <ul>
        <li>Employees considering a FERS disability retirement application</li>
        <li>Spouses and caregivers helping organize a package</li>
        <li>Anyone who wants to understand the process before committing</li>
      </ul>

      <h2>Common mistakes</h2>
      <ul>
        <li>Submitting thin or disorganized medical evidence</li>
        <li>Missing internal agency accommodation steps or deadlines</li>
        <li>Not applying for SSDI when required</li>
        <li>Underestimating how long OPM may take to decide</li>
      </ul>

      <h2>Documents to gather</h2>
      <ul>
        <li>Position description and a list of essential duties</li>
        <li>Medical records and detailed physician statements</li>
        <li>Records of accommodation requests and the agency’s responses</li>
        <li>Your own statement describing how the condition affects your work</li>
      </ul>
    </GuideLayout>
  );
}
