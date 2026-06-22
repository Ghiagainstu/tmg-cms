import { getSiteConfig } from "@/lib/api";

export default async function KoreanHomePage() {
  let config = null;
  try { config = await getSiteConfig("ko"); } catch {}

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* 中国数字广告 */}
          <div className="inline-block text-xs bg-[#c9a84c]/10 text-[#c9a84c] px-3 py-1 rounded-full mb-6">중국 디지털 광고</div>
          {/* 一个连接，全中国平台 */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            하나의 연결.<br /><span className="text-[#c9a84c]">모든 중국 플랫폼.</span>
          </h1>
          {/* 海外代理商进入中国数字广告市场的统一媒体接口。WeChat、抖音、百度、小红书、Bilibili——一个合作伙伴，全平台覆盖。 */}
          <p className="text-lg text-[#b3c0d8] max-w-2xl mx-auto mb-10">
            해외 대리사가 중국 디지털 광고 시장에 참여하도록 하는 일제 메디어 인터페이스. WeChat, Douyin, Baidu, Xiaohongshu, Bilibili — 하나의 팀냐 모든 플랫폼.
          </p>
          {/* 无费咨询 / 服务一览 */}
          <div className="flex justify-center gap-4">
            <a href="/ko/contact" className="bg-[#c9a84c] text-[#080c14] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8c87a] transition">무료 상담　← 无费咨询</a>
            <a href="/ko/services" className="border border-[#1e2d45] px-6 py-3 rounded-lg text-[#b3c0d8] hover:border-[#c9a84c]">서비스 모든　← 服务一览</a>
          </div>
        </div>
      </section>
      {/* 连接平台 */}
      <section className="py-16 px-6 border-y border-[#1e2d45]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-[#8899b5] mb-8">연결 플랫폼　← 连接平台</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["WeChat", "도유인 ← 抖音", "백도 ← 百度", "소화서 ← 小红书", "Bilibili", "Bing China"].map((p) => (
              <div key={p} className="bg-[#111827] border border-[#1e2d45] px-6 py-3 rounded-lg text-sm text-[#b3c0d8]">{p}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
