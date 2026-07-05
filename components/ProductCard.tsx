import type { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="card flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-navy-900">{product.title}</h3>
        {product.badge && <span className="badge shrink-0">{product.badge}</span>}
      </div>
      <p className="mt-1 text-2xl font-bold text-federal">{product.priceLabel}</p>

      <div className="mt-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Who it’s for
        </p>
        <p className="mt-1 text-sm text-slate-600">{product.forWho}</p>
      </div>

      <div className="mt-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          What’s included
        </p>
        <ul className="mt-1 space-y-1 text-sm text-slate-600">
          {product.includes.map((i) => (
            <li key={i} className="flex gap-2">
              <span className="text-gold" aria-hidden>
                ✓
              </span>
              {i}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {product.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs text-slate-600"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={product.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring mt-5 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-gold-light"
      >
        Get the {product.priceLabel} toolkit →
      </a>
      <p className="mt-3 text-[11px] leading-snug text-slate-500">
        Educational template only — not legal, financial, medical, or tax advice.
        Checkout is processed by a third-party (Gumroad/Payhip/Stripe).
      </p>
    </article>
  );
}
