export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-28 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">회사 소개</h1>
        <p className="text-[#b3c0d8] max-w-2xl mx-auto">또에 미디아 게이트웨이 - 중국 디지털 광고 전문 개봉처</p>
      </section>
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-8">
          <p className="text-[#b3c0d8] mb-4">또에 미디아 게이트웨이는 2018년 설립 이후 중국 디지털 광고 시장에서 활동하고 있습니다.</p>
          <p className="text-[#b3c0d8]">우리는 WeChat, Douyin, Baidu, 소화릭숨, Bilibili 등 모든 주요 플랜폼에서 광고 개발과 친구 관리를 지원합니다.</p>
        </div>
      </div>
    </div>
  );
}