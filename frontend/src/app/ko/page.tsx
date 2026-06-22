import { getSiteConfig } from "@/lib/api";

export default async function KoreanHomePage() {
  let config = null;
  try { config = await getSiteConfig("ko"); } catch {}

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block text-xs bg-[#c9a84c]/10 text-[#c9a84c] px-3 py-1 rounded-full mb-6">?? ??? ??</div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            ??? ??.<br /><span className="text-[#c9a84c]">?? ?? ???.</span>
          </h1>
          <p className="text-lg text-[#b3c0d8] max-w-2xl mx-auto mb-10">
            ?? ??? ?? ??? ???? ?? ????? ?? ?? ??? ?????. WeChat, Douyin, Baidu, Xiaohongshu, Bilibili �� ??? ???? ?? ???.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/ko/contact" className="bg-[#c9a84c] text-[#080c14] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8c87a] transition">?? ??</a>
            <a href="/ko/services" className="border border-[#1e2d45] px-6 py-3 rounded-lg text-[#b3c0d8] hover:border-[#c9a84c]">??? ??</a>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 border-y border-[#1e2d45]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-[#8899b5] mb-8">?? ???</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["WeChat", "Douyin", "Baidu", "Xiaohongshu", "Bilibili", "Bing China"].map((p) => (
              <div key={p} className="bg-[#111827] border border-[#1e2d45] px-6 py-3 rounded-lg text-sm text-[#b3c0d8]">{p}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
