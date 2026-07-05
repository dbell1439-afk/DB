import type { Article } from "@/data/articles";
import BlogCard from "./BlogCard";

type Props = {
  articles: Article[];
  title?: string;
};

export default function RelatedArticles({
  articles,
  title = "Related reading",
}: Props) {
  if (articles.length === 0) return null;
  return (
    <section aria-label={title}>
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <BlogCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
