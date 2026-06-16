import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Veteran Federal Employee Benefits Guide",
  description:
    "Veterans in federal service may navigate VA and federal civilian benefits at once. The overlap areas to watch — military service credit, VA disability, and records. Educational only.",
  path: "/veteran-benefits",
});

export default function VeteranBenefitsGuide() {
  return (
    <GuideLayout
      eyebrow="Guide"
      title="Veteran Federal Employee Benefits Guide"
      intro="Veterans in federal service often touch multiple benefit systems at once. Here are the overlap areas to watch and keep clearly documented — none of this is advice, just a map of where to look."
      crumbs={[{ label: "Veteran Federal Employees", href: "/veteran-benefits" }]}
      primaryCta={{ label: "See the veteran bundle", href: "/toolkits/veteran-federal-employee-bundle" }}
      secondaryCta={{ label: "Free readiness checklist", href: "/start-here?lm=opm-retirement-readiness-checklist#free-checklist" }}
      sourceIds={["opm-retirement", "opm-handbook", "ssa-disability"]}
      relatedProductSlugs={["veteran-federal-employee-bundle", "fers-disability-prep-toolkit"]}
      emailTag="newsletter"
      leadMagnetSlug="opm-retirement-readiness-checklist"
      leadMagnetLabel="The OPM Retirement Readiness Checklist."
    >
      <h2>Where overlap shows up</h2>
      <p>
        VA disability and federal civilian benefits are separate systems that can
        interact. Flag these areas to review with the right professional.
      </p>
      <ul>
        <li>Military service deposits and federal retirement credit</li>
        <li>VA disability compensation alongside federal pay or annuity</li>
        <li>Coordination of available health coverage options</li>
        <li>How a disability retirement application intersects with VA records</li>
      </ul>

      <h2>Keep records separated</h2>
      <p>
        Maintain distinct files for VA and federal benefits so you can answer
        questions quickly and accurately. Mixing them is a common source of
        confusion and delay.
      </p>

      <h2>Who this helps</h2>
      <ul>
        <li>Veterans currently employed by the federal government</li>
        <li>Anyone coordinating VA and federal benefits</li>
      </ul>

      <h2>Common mistakes</h2>
      <ul>
        <li>Mixing VA and federal records</li>
        <li>Overlooking a military service deposit decision</li>
        <li>Assuming one system’s rules apply to the other</li>
      </ul>

      <h2>Documents to gather</h2>
      <ul>
        <li>DD-214 and service records</li>
        <li>VA decision letters</li>
        <li>Federal personnel and benefits records</li>
      </ul>
    </GuideLayout>
  );
}
