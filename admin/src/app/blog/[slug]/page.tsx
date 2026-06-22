import { getArticle } from "@/lib/api";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticle(slug, "en");
    return {
      title: article.title + " | TMG",
      description: article.meta_description || article.excerpt,
      openGraph: { title: article.title, description: article.excerpt, type: "article" },
    };
  } catch {
    return { title: "Article Not Found | TMG" };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  let article;
  try {
    article = await getArticle(slug, "en");
  } catch {
    notFound();
  }
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <article className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <a href="/blog" className="text-sm text-[#8899b5] hover:text-[#c9a84c] mb-6 inline-block">&larr; Back to Blog</a>
        <div className="flex items-center gap-3 mb-4">
          {article.category && <span className="text-xs bg-[#c9a84c]/10 text-[#c9a84c] px-3 py-1 rounded-full">{article.category}</span>}
          <span className="text-xs text-[#8899b5]">{article.read_time}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center gap-3 text-sm text-[#8899b5] mb-8">
          <span>{article.author}</span>
          <span>—</span>
          <span>{article.publish_date}</span>
        </div>
        {article.cover_image && <img src={article.cover_image} alt={article.title} className="w-full rounded-xl mb-8" />}
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </div>
  );
}
