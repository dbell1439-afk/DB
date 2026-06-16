import Link from "next/link";
import type { Article } from "@/data/articles";

type Props = {
  article: Article;
};

export default function BlogCard({ article }: Props) {
  return (
    <article className="card flex flex-col">
      <span className="text-xs font-semibold uppercase tracking-wide text-federal">
        {article.category}
      </span>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-navy-900">
        <Link href={`/blog/${article.slug}`} className="hover:text-federal">
          {article.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-600">
        {article.metaDescription}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <time dateTime={article.publishedAt}>
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <span>{article.readingMinutes} min read</span>
      </div>
    </article>
  );
}
