/**
 * "Choose your situation" entry points used on the homepage and Start Here page.
 */

export type Situation = {
  id: string;
  title: string;
  blurb: string;
  href: string;
  icon: string;
};

export const situations: Situation[] = [
  {
    id: "applying-fers-disability",
    title: "I’m applying for FERS disability retirement",
    blurb: "Eligibility, the SSDI requirement, evidence, and a document checklist.",
    href: "/fers-disability-retirement",
    icon: "🩺",
  },
  {
    id: "waiting-on-opm",
    title: "I’m waiting on OPM",
    blurb: "Track milestones, document contacts, and escalate a stalled claim.",
    href: "/opm-delay-survival",
    icon: "⏳",
  },
  {
    id: "ssdi-offset-confusion",
    title: "I’m confused about SSDI offsets",
    blurb: "See the simplified first- and second-year offset math, with a calculator.",
    href: "/ssdi-offset",
    icon: "🧮",
  },
  {
    id: "rif-separation",
    title: "I’m facing RIF / separation",
    blurb: "The benefits questions to ask immediately to protect your options.",
    href: "/rif-separation",
    icon: "📋",
  },
  {
    id: "fehb-fegli-help",
    title: "I need FEHB / FEGLI help",
    blurb: "Compare plans and weigh FEGLI reduction options before you decide.",
    href: "/fehb",
    icon: "🏥",
  },
  {
    id: "veteran-federal-employee",
    title: "I’m a veteran federal employee",
    blurb: "Where VA and federal civilian benefits can overlap — and what to track.",
    href: "/veteran-benefits",
    icon: "🎖️",
  },
];
