import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { AFFILIATE_DISCLOSURE_TEXT } from "@/components/AffiliateDisclosure";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Affiliate Disclosure",
  description:
    "Our FTC-compliant affiliate disclosure: some links are affiliate links and we may earn a commission at no additional cost to you.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <LegalLayout title="Affiliate Disclosure">
      <h2>The short version</h2>
      <p>{AFFILIATE_DISCLOSURE_TEXT}</p>

      <h2>How affiliate links work here</h2>
      <p>
        Some outbound links on this site go through a redirect (for example,{" "}
        <code>/go/example-tool</code>) before reaching the destination. This lets
        us manage links from one place. If we have an affiliate relationship with a
        company, we may earn a commission when you make a qualifying purchase
        through these links — at no extra cost to you.
      </p>

      <h2>How we choose what to share</h2>
      <ul>
        <li>
          We share tools that may help federal employees organize, understand, or
          prepare their benefits decisions.
        </li>
        <li>
          We present them as educational comparison resources, not as the “best”
          option for your situation.
        </li>
        <li>
          We are not insurance agents, financial advisors, attorneys, or tax
          preparers. Always compare options and confirm details with a licensed
          professional before making a financial, legal, insurance, or tax
          decision.
        </li>
      </ul>

      <h2>Our commitment</h2>
      <p>
        Earning a commission never changes our educational stance. We aim to be
        transparent: where a link may be an affiliate link, we say so near the
        link and here.
      </p>

      <h2>Questions</h2>
      <p>
        If you’re unsure whether a particular link is an affiliate link, assume it
        may be, and reach out to us if you’d like clarification.
      </p>
    </LegalLayout>
  );
}
