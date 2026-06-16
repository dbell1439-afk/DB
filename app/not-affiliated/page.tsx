import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = pageMeta({
  title: "Not Affiliated With Government",
  description:
    "FedBenefits Navigator is an independent educational brand and is not affiliated with OPM, SSA, the VA, or any government agency.",
  path: "/not-affiliated",
});

export default function NotAffiliatedPage() {
  return (
    <LegalLayout title="Not Affiliated With the Government">
      <h2>Independent and unaffiliated</h2>
      <p>
        {siteConfig.name} is an independent, privately operated educational brand.
        We are <strong>not</strong> affiliated with, endorsed by, sponsored by, or
        connected to:
      </p>
      <ul>
        <li>The U.S. Office of Personnel Management (OPM / OPM.gov)</li>
        <li>The Social Security Administration (SSA)</li>
        <li>The U.S. Department of Veterans Affairs (VA)</li>
        <li>The Thrift Savings Plan (TSP) or the Federal Retirement Thrift Investment Board</li>
        <li>The Merit Systems Protection Board (MSPB) or the EEOC</li>
        <li>Any other federal, state, or local government agency</li>
      </ul>

      <h2>Use of agency names</h2>
      <p>
        We reference agency names (such as OPM, SSA, and the VA) only to identify
        and describe the programs we explain, and to link you to official sources.
        These references do not imply any partnership, endorsement, or official
        status. All agency names and marks belong to their respective owners.
      </p>

      <h2>Go to the official source</h2>
      <p>
        For official information, forms, and account access, always use the
        agencies’ own websites — for example,{" "}
        <a
          href="https://www.opm.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          OPM.gov
        </a>
        ,{" "}
        <a
          href="https://www.ssa.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          SSA.gov
        </a>
        , and{" "}
        <a
          href="https://www.tsp.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          TSP.gov
        </a>
        .
      </p>

      <h2>No official seals or logos</h2>
      <p>
        We do not use government seals, logos, or insignia, and we do not present
        ourselves as a government service. If anything on this site ever appears to
        suggest otherwise, it is unintentional — please let us know.
      </p>
    </LegalLayout>
  );
}
