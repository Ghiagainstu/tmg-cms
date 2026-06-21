import { getArticles } from "@/lib/api";

export default async function BlogPage() {
  let articles: Awaited<ReturnType<typeof getArticles>> = [];
  try {
    articles = await getArticles("en", "published");
  } catch {
    // CMS not available
  }

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-[#b3c0d8] max-w-2xl mx-auto">
          Insights, news, and expert perspectives on China&apos;s digital advertising landscape.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <a key={article.slug} href={`/blog/${article.slug}`}
                className="bg-[#111827] border border-[#1e2d45] rounded-xl overflow-hidden hover:border-[#c9a84c] transition group">
                {article.cover_image && (
                  <img src={article.cover_image} alt={article.title} className="w-full h-40 object-cover" />
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-[#c9a84c]/10 text-[#c9a84c] px-2 py-0.5 rounded">{article.category}</span>
                    <span className="text-xs text-[#8899b5]">{article.read_time}</span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-[#c9a84c] transition">{article.title}</h2>
                  <p className="text-sm text-[#b3c0d8] line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-[#8899b5]">
                    <span>{article.author}</span>
                    <span>·</span>
                    <span>{article.publish_date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#8899b5]">No articles published yet.</p>
            <p className="text-sm text-[#8899b5] mt-2">Content will appear here once published from the CMS.</p>
          </div>
        )}
      </div>
    </div>
  );
}
