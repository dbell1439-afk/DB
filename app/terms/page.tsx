import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description:
    "The terms governing your use of the FedBenefits Navigator website, tools, digital products, and educational content.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use">
      <h2>Acceptance of terms</h2>
      <p>
        By accessing or using {siteConfig.name} (the “Site”), you agree to these
        Terms of Use. If you do not agree, please do not use the Site.
      </p>

      <h2>Educational purpose only</h2>
      <p>
        The Site provides general educational information and tools. It does{" "}
        <strong>not</strong> provide legal, financial, medical, tax, or government
        benefit advice, and use of the Site does not create any attorney-client,
        advisor-client, or other professional relationship. For advice about your
        specific situation, consult a licensed professional.
      </p>

      <h2>No government affiliation</h2>
      <p>
        {siteConfig.name} is independent and is not affiliated with, endorsed by,
        or connected to OPM, SSA, the VA, or any government agency. See our{" "}
        <a href="/not-affiliated" className="link-underline">
          Not Affiliated With Government
        </a>{" "}
        page.
      </p>

      <h2>Digital products</h2>
      <p>
        Digital products are educational templates sold and delivered through
        third-party processors (such as Gumroad, Payhip, or Stripe). They do not
        guarantee any benefit, approval, or outcome. Because they are digital and
        delivered immediately, refunds are handled per the policy stated at
        checkout. (Add your refund policy and confirm before publication.)
      </p>

      <h2>Tools & calculators</h2>
      <p>
        Calculators and trackers provide simplified, educational estimates only.
        They may not reflect your actual benefits, and we make no guarantee of
        accuracy. Always verify figures with official sources and licensed
        professionals.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not misuse the Site or attempt to disrupt it</li>
        <li>Do not submit sensitive personal information through our forms</li>
        <li>Do not reproduce or resell our content or products without permission</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        Content on the Site is owned by {siteConfig.name} or its licensors and is
        protected by applicable law. You may not copy or redistribute it without
        permission, except as permitted by these terms.
      </p>

      <h2>Disclaimer of warranties & limitation of liability</h2>
      <p>
        The Site is provided “as is” without warranties of any kind. To the
        fullest extent permitted by law, {siteConfig.name} is not liable for any
        damages arising from your use of the Site, its tools, or its products.
        (Have counsel tailor these clauses to your jurisdiction before
        publication.)
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms. Continued use after changes constitutes
        acceptance.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href={`mailto:${siteConfig.email}`} className="link-underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
