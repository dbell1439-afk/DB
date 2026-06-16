/**
 * Faceless YouTube / TikTok content library.
 *
 * These are ready-to-record short-form scripts on federal-benefits topics, each
 * mapped to a guide on the site (so the video description can link back and
 * convert viewers into email subscribers). Production workflow assumed:
 *   ElevenLabs Speech-to-Speech voiceover → Canva visuals → outsourced edit →
 *   Repurpose.io cross-posts to YouTube Shorts, TikTok, and Pinterest.
 *
 * Set `youtubeId` once a video is live to render an embed on /watch/[slug]
 * (optional — the hub works without it).
 */

export type VideoPlatform = "YouTube Shorts" | "TikTok" | "Long-form";

export type Video = {
  slug: string;
  title: string;
  hook: string; // the first 3 seconds — the scroll-stopper
  platform: VideoPlatform;
  durationLabel: string;
  topic: string;
  /** Beat-by-beat script outline for recording. */
  script: string[];
  /** On-screen CTA / where to send viewers. */
  ctaHref: string;
  ctaLabel: string;
  /** Optional YouTube video id once published. */
  youtubeId?: string;
};

export const videos: Video[] = [
  {
    slug: "forgotten-form-disability-retirement",
    title: "The one form federal employees forget before disability retirement",
    hook: "If you’re applying for federal disability retirement, this one missing form can stall everything.",
    platform: "YouTube Shorts",
    durationLabel: "≈ 45s",
    topic: "FERS Disability Retirement",
    script: [
      "HOOK: ‘This one missing form can stall your entire disability retirement.’",
      "PROBLEM: FERS disability applicants are generally required to also apply for SSDI.",
      "WHY: skip it and your package can be considered incomplete.",
      "FIX: file for SSDI, keep the confirmation, and add it to your package.",
      "CTA: ‘Grab the free document checklist — link below.’",
    ],
    ctaHref: "/free/fers-disability-document-checklist",
    ctaLabel: "Free document checklist",
  },
  {
    slug: "ssdi-offset-explained-60-seconds",
    title: "Why your first disability check is lower than you think",
    hook: "Approved for both FERS disability and SSDI? Your check just got smaller. Here’s why.",
    platform: "YouTube Shorts",
    durationLabel: "≈ 60s",
    topic: "SSDI Offset",
    script: [
      "HOOK: ‘Your FERS disability check is lower than the formula you saw online.’",
      "MATH: first 12 months — 60% of high-3 minus 100% of SSDI.",
      "MATH: after that — 40% of high-3 minus 60% of SSDI.",
      "REALITY: that’s gross — taxes, FEHB, and FEGLI still come out.",
      "CTA: ‘Free SSDI offset worksheet — link below.’",
    ],
    ctaHref: "/free/ssdi-offset-quick-calculator-worksheet",
    ctaLabel: "Free offset worksheet",
  },
  {
    slug: "waiting-on-opm-track-these-dates",
    title: "Waiting on OPM? Track these 5 dates",
    hook: "If OPM has your claim, write down these 5 dates today.",
    platform: "TikTok",
    durationLabel: "≈ 40s",
    topic: "OPM Processing Delays",
    script: [
      "HOOK: ‘OPM has your claim? Track these 5 dates.’",
      "LIST: submitted, agency forwarded, CSA number, interim pay started, last contact.",
      "WHY: a dated record is what lets you escalate later.",
      "CTA: ‘Free call log + escalation tracker — link below.’",
    ],
    ctaHref: "/free/opm-delay-call-log-escalation-tracker",
    ctaLabel: "Free call log",
  },
  {
    slug: "fehb-five-year-rule",
    title: "Don’t drop FEHB before you retire (the 5-year rule)",
    hook: "Drop FEHB at the wrong time and you can lose it in retirement — forever.",
    platform: "YouTube Shorts",
    durationLabel: "≈ 45s",
    topic: "FEHB",
    script: [
      "HOOK: ‘Cancel FEHB at the wrong time and you can’t get it back in retirement.’",
      "RULE: generally you need 5 years of FEHB enrollment right before you retire.",
      "ACTION: confirm your eligibility in writing before you change plans.",
      "CTA: ‘Free FEHB comparison sheet — link below.’",
    ],
    ctaHref: "/free/fehb-open-season-comparison-sheet",
    ctaLabel: "Free comparison sheet",
  },
  {
    slug: "fegli-75-50-no-reduction",
    title: "FEGLI 75 / 50 / no reduction in 60 seconds",
    hook: "Picking your FEGLI option at retirement? Don’t choose by monthly cost alone.",
    platform: "YouTube Shorts",
    durationLabel: "≈ 60s",
    topic: "FEGLI",
    script: [
      "HOOK: ‘Your FEGLI election lasts the rest of your life — choose carefully.’",
      "OPTIONS: 75% reduction (cheapest later), 50% reduction (middle), no reduction (most coverage).",
      "TRAP: ‘no reduction’ keeps coverage but costs the most over time.",
      "ACTION: model later years, not just the premium.",
      "CTA: ‘Free FEGLI decision worksheet — link below.’",
    ],
    ctaHref: "/free/fegli-retirement-decision-worksheet",
    ctaLabel: "Free decision worksheet",
  },
  {
    slug: "interim-pay-why-lower",
    title: "OPM interim pay isn’t your final annuity",
    hook: "Got interim pay from OPM? Don’t budget around it. Here’s why.",
    platform: "TikTok",
    durationLabel: "≈ 40s",
    topic: "OPM Processing Delays",
    script: [
      "HOOK: ‘That OPM interim payment is not your real annuity.’",
      "WHY: it’s partial and often excludes elements reconciled later.",
      "ACTION: budget conservatively and keep every statement.",
      "CTA: ‘Free OPM delay tracker — link below.’",
    ],
    ctaHref: "/calculators/opm-delay-tracker",
    ctaLabel: "Free OPM delay tracker",
  },
  {
    slug: "rif-first-three-questions",
    title: "Got a RIF notice? Ask these 3 questions first",
    hook: "RIF notice in hand? These 3 questions protect your benefits.",
    platform: "YouTube Shorts",
    durationLabel: "≈ 45s",
    topic: "Federal Employee Separation",
    script: [
      "HOOK: ‘A RIF compresses your timeline — move fast.’",
      "Q1: am I eligible for any immediate or deferred retirement?",
      "Q2: can I continue FEHB and FEGLI, and for how long?",
      "Q3: what are my TSP options and deadlines?",
      "CTA: ‘Free separation survival checklist — link below.’",
    ],
    ctaHref: "/free/federal-medical-separation-survival-checklist",
    ctaLabel: "Free survival checklist",
  },
  {
    slug: "federal-benefits-binder",
    title: "Build a federal benefits binder in 6 sections",
    hook: "Everything you need for retirement, organized in 6 folders.",
    platform: "YouTube Shorts",
    durationLabel: "≈ 50s",
    topic: "Documentation Strategy",
    script: [
      "HOOK: ‘One binder, six sections, and you’re ready.’",
      "SECTIONS: personnel, retirement estimates, FEHB/FEGLI, TSP/beneficiaries, medical, wills/POAs.",
      "TIP: review beneficiaries every year.",
      "CTA: ‘Free readiness checklist — link below.’",
    ],
    ctaHref: "/free/opm-retirement-readiness-checklist",
    ctaLabel: "Free readiness checklist",
  },
  {
    slug: "veteran-federal-employee-overlap",
    title: "Veteran + federal employee? Watch these overlaps",
    hook: "If you’re a veteran in federal service, VA and federal benefits can collide.",
    platform: "TikTok",
    durationLabel: "≈ 45s",
    topic: "Veteran Federal Employees",
    script: [
      "HOOK: ‘Veteran in federal service? Two benefit systems can overlap.’",
      "AREAS: military service deposit, VA disability alongside pay/annuity, health coverage coordination.",
      "GUARDRAIL: education only — we don’t prepare VA claims; see an accredited rep/VSO.",
      "CTA: ‘Veteran benefits guide — link below.’",
    ],
    ctaHref: "/veteran-benefits",
    ctaLabel: "Veteran benefits guide",
  },
  {
    slug: "disability-vs-regular-retirement",
    title: "Disability vs. regular federal retirement: the key difference",
    hook: "Two federal retirement paths, very different math. Which fits you?",
    platform: "Long-form",
    durationLabel: "≈ 3–5 min",
    topic: "FERS Disability Retirement",
    script: [
      "HOOK: ‘Disability retirement and regular retirement aren’t the same — and the gap is big.’",
      "DIFF 1: eligibility — medical inability vs. age/service.",
      "DIFF 2: computation — disability formulas + SSDI offset vs. service-based.",
      "ADVICE: run both scenarios before deciding; confirm with OPM.",
      "CTA: ‘Free readiness checklist + estimator — links below.’",
    ],
    ctaHref: "/calculators/fers-disability-estimate",
    ctaLabel: "Open the estimator",
  },
];

export function getVideo(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug);
}
