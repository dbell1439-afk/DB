import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "OPM Delay Survival Center",
  description:
    "Stuck waiting on OPM? Track milestones, document every contact, and build an escalation record. Free call log and a delay tracker tool. Educational only.",
  path: "/opm-delay-survival",
});

export default function OpmDelaySurvival() {
  return (
    <GuideLayout
      eyebrow="Survival Center"
      title="OPM Delay Survival Center"
      intro="A stalled OPM claim is easier to escalate when you can show a clean, dated record. Here’s the system: track the milestones, log every contact, and keep your documentation tight."
      crumbs={[{ label: "OPM Delay Survival Center", href: "/opm-delay-survival" }]}
      primaryCta={{ label: "Open the OPM Delay Tracker", href: "/calculators/opm-delay-tracker" }}
      secondaryCta={{ label: "Free call log & escalation tracker", href: "/start-here?lm=opm-delay-call-log-escalation-tracker#free-checklist" }}
      sourceIds={["opm-retirement", "opm-disability"]}
      relatedProductSlugs={["opm-delay-escalation-tracker", "federal-retirement-document-organizer"]}
      emailTag="lm-opm-delay"
      leadMagnetSlug="opm-delay-call-log-escalation-tracker"
      leadMagnetLabel="The OPM Delay Call Log & Escalation Tracker."
    >
      <h2>Track the milestones</h2>
      <p>
        Record each milestone with a date and a source. The{" "}
        <a className="link-underline" href="/calculators/opm-delay-tracker">
          OPM Delay Tracker
        </a>{" "}
        does the date math for you.
      </p>
      <ul>
        <li>Application submitted to your agency</li>
        <li>Agency forwarded the package to OPM</li>
        <li>CSA claim number received</li>
        <li>Interim pay started (date + amount)</li>
        <li>Last OPM contact (date + who you spoke with)</li>
      </ul>

      <h2>Keep a call log</h2>
      <p>
        Every time you call, record the date, the representative, and exactly what
        you were told. A dated log is your strongest asset if you need to
        escalate. Our free call log gives you a ready-made format.
      </p>

      <h2>Build an escalation record</h2>
      <p>
        If your case is well past typical timelines, a documented history of
        contacts and status changes supports an escalation. Keep copies of
        everything and note who you contacted and when.
      </p>

      <h2>Who this helps</h2>
      <ul>
        <li>Anyone with a pending OPM claim</li>
        <li>Employees who feel stuck with no visibility</li>
      </ul>

      <h2>Common mistakes</h2>
      <ul>
        <li>Calling without recording what you were told</li>
        <li>Not confirming the agency actually forwarded the package</li>
        <li>Assuming interim pay equals your final annuity</li>
      </ul>

      <h2>Documents to gather</h2>
      <ul>
        <li>Submission and forwarding confirmations</li>
        <li>CSA claim number</li>
        <li>Interim pay statements</li>
        <li>Your dated call log entries</li>
      </ul>
    </GuideLayout>
  );
}
