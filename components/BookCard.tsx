import Link from "next/link";
import type { Book } from "@/data/books";

const statusLabel: Record<Book["status"], string> = {
  available: "Available now",
  preorder: "Pre-order",
  "coming-soon": "Coming soon",
};

export default function BookCard({ book }: { book: Book }) {
  const external = book.buyUrl.startsWith("http");
  const cta =
    book.status === "available" ? "Buy on Amazon →" : "Join the launch list →";

  return (
    <article className="card flex flex-col">
      <div className="flex items-start justify-between">
        <span className="text-3xl" aria-hidden>
          {book.icon}
        </span>
        <span className="badge">{book.badge || statusLabel[book.status]}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy-900">{book.title}</h3>
      <p className="mt-1 text-sm font-medium text-federal">{book.subtitle}</p>
      <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
        For: {book.audience}
      </p>
      <p className="mt-2 text-sm text-slate-600">{book.description}</p>
      <ul className="mt-3 space-y-1 text-sm text-slate-600">
        {book.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-gold" aria-hidden>
              ✓
            </span>
            {b}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-base font-bold text-federal">{book.priceLabel}</p>

      {external ? (
        <a
          href={book.buyUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="focus-ring mt-3 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-gold-light"
        >
          {cta}
        </a>
      ) : (
        <Link
          href={book.buyUrl}
          className="focus-ring mt-3 inline-flex items-center justify-center rounded-full bg-federal px-5 py-2.5 text-sm font-semibold text-white hover:bg-federal-dark"
        >
          {cta}
        </Link>
      )}
    </article>
  );
}
