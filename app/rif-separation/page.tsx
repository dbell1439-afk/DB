import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "RIF / Separation Benefits Guide",
  description:
    "Facing a RIF or involuntary separation? The benefits questions to ask immediately to protect FEHB, FEGLI, TSP, and retirement options. Educational only.",
  path: "/rif-separation",
});

export default function RifSeparationGuide() {
  return (
    <GuideLayout
      eyebrow="Guide"
      title="RIF / Separation Benefits Guide"
      intro="A Reduction in Force compresses your timelines. Move fast on the benefits questions below so you don’t lose options by default."
      crumbs={[{ label: "RIF / Separation", href: "/rif-separation" }]}
      primaryCta={{ label: "Free separation survival checklist", href: "/free/federal-medical-separation-survival-checklist" }}
      secondaryCta={{ label: "Document organizer toolkit", href: "/toolkits/federal-retirement-document-organizer" }}
      sourceIds={["opm-rif", "opm-retirement", "mspb"]}
      relatedProductSlugs={["federal-retirement-document-organizer", "medical-separation-timeline-builder"]}
      emailTag="lm-medical-separation"
      leadMagnetSlug="federal-medical-separation-survival-checklist"
      leadMagnetLabel="The Federal Employee Medical Separation Survival Checklist."
    >
      <h2>Move fast on benefits</h2>
      <p>
        The questions below help you preserve options early. Get answers in
        writing where you can.
      </p>
      <ul>
        <li>Am I eligible for any immediate or deferred retirement?</li>
        <li>Can I continue FEHB and FEGLI, and for how long?</li>
        <li>What severance or transition support applies?</li>
        <li>What are my TSP options and deadlines?</li>
        <li>Do I have appeal rights, and what are the deadlines?</li>
      </ul>

      <h2>Document everything</h2>
      <p>
        Keep every notice, date, and conversation. A clean record protects your
        appeal rights and benefits elections. The{" "}
        <a className="link-underline" href="/toolkits/federal-retirement-document-organizer">
          Federal Retirement Document Organizer
        </a>{" "}
        helps you assemble it quickly.
      </p>

      <h2>Who this helps</h2>
      <ul>
        <li>Employees notified of a RIF</li>
        <li>Anyone facing involuntary or medical separation</li>
      </ul>

      <h2>Common mistakes</h2>
      <ul>
        <li>Letting FEHB/FEGLI lapse without checking continuation</li>
        <li>Cashing out TSP without understanding the consequences</li>
        <li>Missing appeal or election deadlines</li>
      </ul>

      <h2>Documents to gather</h2>
      <ul>
        <li>RIF notice and effective dates</li>
        <li>SF-50 and personnel records</li>
        <li>Benefits enrollment confirmations</li>
      </ul>
    </GuideLayout>
  );
}
