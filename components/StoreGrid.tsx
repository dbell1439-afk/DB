"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { productTags, type Product, type ProductTag } from "@/data/products";

type Props = {
  products: Product[];
};

export default function StoreGrid({ products }: Props) {
  const [active, setActive] = useState<ProductTag | "All">("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.tags.includes(active));

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
        <FilterChip
          label="All"
          active={active === "All"}
          onClick={() => setActive("All")}
        />
        {productTags.map((tag) => (
          <FilterChip
            key={tag}
            label={tag}
            active={active === tag}
            onClick={() => setActive(tag)}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-slate-600">No toolkits match that filter yet.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`focus-ring rounded-full px-4 py-2 text-sm font-medium ${
        active
          ? "bg-federal text-white"
          : "border border-navy-100 bg-white text-slate-700 hover:bg-navy-50"
      }`}
    >
      {label}
    </button>
  );
}
