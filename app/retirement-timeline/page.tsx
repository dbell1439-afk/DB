import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import Timeline from "@/components/Timeline";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Federal Retirement Timeline",
  description:
    "A plain-English federal retirement timeline: what happens and when, from application through interim pay to your finalized annuity. Educational only.",
  path: "/retirement-timeline",
});

const steps = [
  {
    title: "Decide and gather documents",
    description:
      "Confirm eligibility, gather your SF-50s, service history, and benefit elections, and build a benefits binder before you file.",
    detail: "Months before separation",
  },
  {
    title: "Submit your application to your agency",
    description:
      "Your agency’s HR/retirement office reviews and certifies your package before sending it to OPM.",
    detail: "At separation",
  },
  {
    title: "Agency forwards the package to OPM",
    description:
      "Confirm the date your agency actually forwarded your case. This is a common point where files stall.",
  },
  {
    title: "OPM assigns a CSA claim number",
    description:
      "You receive a CSA claim number you’ll use for all follow-up. Record it and keep it handy.",
  },
  {
    title: "Interim pay begins",
    description:
      "OPM may issue partial interim pay while finalizing your claim. It is often lower than your final annuity.",
  },
  {
    title: "Claim is finalized",
    description:
      "OPM completes the computation, reconciles interim pay, and your regular annuity begins.",
  },
];

export default function RetirementTimeline() {
  return (
    <GuideLayout
      eyebrow="Guide"
      title="Federal Retirement Timeline"
      intro="From application to your first finalized check, here’s the sequence to expect — and the milestones worth documenting along the way."
      crumbs={[{ label: "Federal Retirement Timeline", href: "/retirement-timeline" }]}
      primaryCta={{ label: "Free readiness checklist", href: "/free/opm-retirement-readiness-checklist" }}
      secondaryCta={{ label: "Track an OPM delay", href: "/opm-delay-survival" }}
      sourceIds={["opm-retirement", "opm-handbook"]}
      relatedProductSlugs={["federal-retirement-document-organizer", "opm-delay-escalation-tracker"]}
      emailTag="lm-readiness"
      leadMagnetSlug="opm-retirement-readiness-checklist"
      leadMagnetLabel="The OPM Retirement Readiness Checklist."
    >
      <h2>What happens, and when</h2>
      <p>
        Timelines vary by case and change over time. Use this as a map, not a
        guarantee, and document each milestone with a date and a source.
      </p>
      <div className="not-prose my-6">
        <Timeline steps={steps} />
      </div>

      <h2>Common mistakes</h2>
      <ul>
        <li>Assuming your agency forwarded the package when it hasn’t</li>
        <li>Not recording your CSA claim number</li>
        <li>Treating interim pay as your final annuity</li>
      </ul>

      <h2>Documents to gather</h2>
      <ul>
        <li>SF-50s and service computation date</li>
        <li>Benefit election forms</li>
        <li>Submission and forwarding confirmations</li>
      </ul>
    </GuideLayout>
  );
}
