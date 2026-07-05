import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = pageMeta({
  title: "Educational Disclaimer",
  description:
    "FedBenefits Navigator provides educational information only — not legal, financial, medical, tax, or government benefit advice.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Educational Disclaimer">
      <h2>Education, not advice</h2>
      <p>
        {siteConfig.name} provides general educational information, tools, and
        templates about federal employee benefits. Nothing on this site is legal,
        financial, medical, tax, or government benefit advice, and nothing here is
        a substitute for advice from a licensed professional who knows your
        specific facts.
      </p>

      <h2>No professional relationship</h2>
      <p>
        Reading this site, using our tools, buying a digital product, or
        requesting an educational strategy session does not create an
        attorney-client, financial advisor, tax advisor, or other professional
        relationship.
      </p>

      <h2>VA claims: education only, never claims preparation</h2>
      <p>
        We provide general education about how VA benefits can intersect with
        federal civilian benefits. We do <strong>not</strong> prepare, file,
        complete, or assist with VA disability claims or appeals, and we{" "}
        <strong>never charge any fee for VA claims preparation</strong>. For help
        with a VA claim, work with a VA-accredited representative, an accredited
        attorney or agent, or a Veterans Service Organization (VSO) — many help
        at no cost. Nothing here is legal advice or representation.
      </p>

      <h2>No outcome guarantees</h2>
      <p>
        We do not guarantee any result, approval, or outcome with OPM, SSA, the
        VA, MSPB, EEOC, any agency, or any court. Benefits rules change and apply
        differently to different people.
      </p>

      <h2>Verify with official sources</h2>
      <p>
        Benefit rules, formulas, deadlines, and figures should always be confirmed
        with official sources such as OPM, SSA, TSP, and the IRS, and with a
        qualified professional. Where our content involves legal precision, we mark
        it for verification and link to the primary source.
      </p>

      <h2>Calculators and estimates</h2>
      <p>
        Our calculators provide simplified, educational estimates only. Actual
        amounts depend on individual facts, deductions, elections, service history,
        and applicable law. They are not financial or tax advice.
      </p>

      <h2>Your responsibility</h2>
      <p>
        You are responsible for your own decisions. Please consult appropriate
        licensed professionals before acting on anything you read here.
      </p>
    </LegalLayout>
  );
}
