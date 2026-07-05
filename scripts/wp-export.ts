/**
 * One-off exporter: turns selected articles into WordPress Gutenberg draft
 * payloads for fedupannuitant.com. Run with:
 *   node --experimental-strip-types scripts/wp-export.ts > /tmp/wp-posts.json
 */
import { articles } from "../data/articles.ts";
import { getSources } from "../data/sources.ts";

// Full mapping of every exported article -> WordPress category IDs.
// Batch 1 (already published): the 7 OPM-disability-core articles.
// Batch 2 (this run): the 5 broader benefits articles.
const TARGETS: Record<string, number[]> = {
  // --- Batch 1 ---
  "fers-disability-retirement-what-to-know-before-applying": [22631], // Start Here
  "why-opm-disability-retirement-requires-an-ssdi-application": [22631],
  "opm-retirement-delays-what-to-track-while-you-wait": [789977082], // Delays
  "what-documents-to-keep-during-a-federal-medical-separation": [789977081], // Filing & Documentation
  "how-to-build-a-federal-benefits-binder": [789977081],
  "opm-interim-pay-what-it-is-and-why-it-may-be-lower": [789977082], // Delays
  "federal-disability-retirement-vs-regular-retirement": [22631], // Start Here
  // --- Batch 2 ---
  "how-the-fers-disability-retirement-ssdi-offset-works": [789977084], // Offsets & Pay Calculations
  "fehb-in-retirement-questions-before-you-separate": [22631], // Start Here (no FEHB category yet)
  "fegli-at-retirement-75-50-or-no-reduction": [22631],
  "federal-employee-rif-benefits-questions-to-ask-immediately": [22631],
  "veteran-federal-employees-overlapping-benefits-issues": [22631],
};

// Only emit this batch (the 5 not yet pushed).
const ONLY = new Set([
  "how-the-fers-disability-retirement-ssdi-offset-works",
  "fehb-in-retirement-questions-before-you-separate",
  "fegli-at-retirement-75-50-or-no-reduction",
  "federal-employee-rif-benefits-questions-to-ask-immediately",
  "veteran-federal-employees-overlapping-benefits-issues",
]);

const DISCLAIMER =
  "Educational information only. Fed Up Annuitant provides general education and is not legal, financial, medical, tax, or government benefit advice, and is not affiliated with OPM, SSA, the VA, or any government agency. We do not prepare or charge any fee for VA claims. For advice about your situation, consult a licensed professional.";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function p(text: string): string {
  return `<!-- wp:paragraph -->\n<p>${esc(text)}</p>\n<!-- /wp:paragraph -->`;
}

function h2(text: string): string {
  return `<!-- wp:heading -->\n<h2 class="wp-block-heading">${esc(text)}</h2>\n<!-- /wp:heading -->`;
}

function list(items: string[]): string {
  const li = items
    .map(
      (i) => `<!-- wp:list-item -->\n<li>${esc(i)}</li>\n<!-- /wp:list-item -->`,
    )
    .join("\n");
  return `<!-- wp:list -->\n<ul class="wp-block-list">\n${li}\n</ul>\n<!-- /wp:list -->`;
}

function quote(text: string): string {
  return `<!-- wp:quote -->\n<blockquote class="wp-block-quote"><p>${esc(text)}</p></blockquote>\n<!-- /wp:quote -->`;
}

function sourceList(ids: string[]): string {
  const sources = getSources(ids);
  if (!sources.length) return "";
  const li = sources
    .map(
      (s) =>
        `<!-- wp:list-item -->\n<li><a href="${s.url}" target="_blank" rel="noopener">${esc(
          s.label,
        )}</a> — ${esc(s.agency)}</li>\n<!-- /wp:list-item -->`,
    )
    .join("\n");
  return `<!-- wp:list -->\n<ul class="wp-block-list">\n${li}\n</ul>\n<!-- /wp:list -->`;
}

const out = Object.keys(TARGETS).filter((slug) => ONLY.has(slug)).map((slug) => {
  const a = articles.find((x) => x.slug === slug);
  if (!a) throw new Error(`Article not found: ${slug}`);

  const blocks: string[] = [];

  // TL;DR
  blocks.push(h2("TL;DR"));
  blocks.push(list(a.tldr));

  // Who this helps
  blocks.push(h2("Who this helps"));
  blocks.push(list(a.whoThisHelps));

  // Body sections
  for (const s of a.sections) {
    blocks.push(h2(s.heading));
    for (const para of s.paragraphs) blocks.push(p(para));
    if (s.bullets && s.bullets.length) blocks.push(list(s.bullets));
  }

  // Common mistakes
  blocks.push(h2("Common mistakes"));
  blocks.push(list(a.commonMistakes));

  // Documents to gather
  blocks.push(h2("Documents to gather"));
  blocks.push(list(a.documentsToGather));

  // Official sources
  const sources = sourceList(a.sourceIds);
  if (sources) {
    blocks.push(h2("Official sources"));
    blocks.push(p("Always confirm rules and figures with the primary government source:"));
    blocks.push(sources);
  }

  // Disclaimer
  blocks.push(quote(DISCLAIMER));

  return {
    slug,
    title: a.title,
    excerpt: a.metaDescription,
    seoDesc: a.metaDescription,
    categories: TARGETS[slug],
    content: blocks.join("\n\n"),
  };
});

process.stdout.write(JSON.stringify(out, null, 2));
