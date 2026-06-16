import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How FedBenefits Navigator collects, uses, and protects information, including email signups, forms, analytics, and affiliate links.",
  path: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <h2>Overview</h2>
      <p>
        {siteConfig.name} (“we,” “us,” “our”) respects your privacy. This policy
        explains what we collect and how we use it when you visit our website or
        use our tools.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you provide:</strong> your email address when you
          sign up for a download or newsletter, and details you submit through our
          contact or consultation forms.
        </li>
        <li>
          <strong>Usage data:</strong> standard analytics such as pages visited,
          device type, and referring source, collected through privacy-aware
          analytics tools (see below).
        </li>
        <li>
          <strong>Cookies / pixels:</strong> if enabled, advertising and analytics
          pixels may set cookies. You can control cookies through your browser.
        </li>
      </ul>
      <p>
        <strong>We ask you not to submit sensitive information</strong> such as
        Social Security numbers, medical records, claim numbers, or confidential
        legal documents through our forms.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To deliver downloads and send educational emails you requested</li>
        <li>To respond to contact and consultation requests</li>
        <li>To improve our content and tools</li>
        <li>To measure marketing performance (if analytics/pixels are enabled)</li>
      </ul>

      <h2>Email marketing</h2>
      <p>
        We use a third-party email provider to send newsletters and downloads.
        You can unsubscribe at any time using the link in any email.
      </p>

      <h2>Analytics & advertising</h2>
      <p>
        We may use tools such as Google Analytics, Plausible, Microsoft Clarity,
        the Meta Pixel, and the Pinterest Tag. These tools have their own privacy
        practices. (Verify which tools are enabled and disclose them specifically
        before publication.)
      </p>

      <h2>Affiliate links</h2>
      <p>
        Some links are affiliate links. If you purchase through them, we may earn
        a commission at no additional cost to you. See our{" "}
        <a href="/affiliate-disclosure" className="link-underline">
          Affiliate Disclosure
        </a>
        .
      </p>

      <h2>Data sharing</h2>
      <p>
        We do not sell your personal information. We share information only with
        service providers who help us operate the site (such as our email and form
        providers) and as required by law.
      </p>

      <h2>Your choices & rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or
        delete your personal information, or to opt out of certain processing. To
        make a request, contact us at{" "}
        <a href={`mailto:${siteConfig.email}`} className="link-underline">
          {siteConfig.email}
        </a>
        . (Add jurisdiction-specific rights — e.g., GDPR/CCPA — before
        publication.)
      </p>

      <h2>Children’s privacy</h2>
      <p>This site is intended for adults and is not directed to children.</p>

      <h2>Changes</h2>
      <p>
        We may update this policy. Material changes will be reflected by the “last
        updated” date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email{" "}
        <a href={`mailto:${siteConfig.email}`} className="link-underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
