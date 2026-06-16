import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import VideoCard from "@/components/VideoCard";
import EmailSignup from "@/components/EmailSignup";
import DisclaimerBox from "@/components/DisclaimerBox";
import CTAButton from "@/components/CTAButton";
import { videos } from "@/data/videos";
import { siteConfig } from "@/data/siteConfig";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Watch — Federal Benefits Explained",
  description:
    "Short, plain-English videos on FERS disability retirement, OPM delays, SSDI offsets, FEHB, FEGLI, and federal separation. Educational only.",
  path: "/watch",
});

export default function WatchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Watch"
        title="Federal benefits, explained in plain English"
        intro="Short videos that turn confusing federal benefits topics into clear next steps. New shorts on YouTube and TikTok — each one links to a free checklist or tool."
        crumbs={[{ label: "Watch", href: "/watch" }]}
      />

      <div className="border-b border-navy-100 bg-white">
        <div className="container-page flex flex-col gap-3 py-5 sm:flex-row">
          <CTAButton href={siteConfig.social.youtube} external variant="primary">
            Subscribe on YouTube
          </CTAButton>
          <CTAButton href={siteConfig.social.tiktok} external variant="secondary">
            Follow on TikTok
          </CTAButton>
        </div>
      </div>

      <Section
        title="Latest episodes & scripts"
        subtitle="Faceless, fast, and useful. Expand any card to see the script outline behind it."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.slug} video={v} />
          ))}
        </div>
      </Section>

      <Section muted>
        <EmailSignup
          tag="lm-readiness"
          heading="Prefer it in writing?"
          subheading="Get the free OPM Retirement Readiness Checklist and follow along by email."
        />
      </Section>

      <Section className="pt-0">
        <DisclaimerBox />
      </Section>
    </>
  );
}
