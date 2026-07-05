import type { FAQ } from "@/data/faqs";

type Props = {
  faqs: FAQ[];
  title?: string;
};

/**
 * Accessible, no-JS accordion using native <details>/<summary>.
 * Pair with faqJsonLd() in lib/seo for FAQPage structured data.
 */
export default function FAQAccordion({ faqs, title }: Props) {
  if (faqs.length === 0) return null;
  return (
    <section aria-label={title || "Frequently asked questions"}>
      {title && <h2 className="mb-4 text-2xl font-semibold">{title}</h2>}
      <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white">
        {faqs.map((faq, i) => (
          <details key={i} className="group px-5 py-4 [&_summary]:list-none">
            <summary className="focus-ring flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-navy-900">
              {faq.question}
              <span
                aria-hidden
                className="text-gold transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
