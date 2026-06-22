export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-28 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">会社概要</h1>
        <p className="text-[#b3c0d8] max-w-2xl mx-auto">トゥエ メディア ゲートウウェイ - 中国 デジタル 広告 専門会社</p>
      </section>
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-8">
          <p className="text-[#b3c0d8] mb-4">トゥエ メディア ゲートウウェイは 2018年 設立 以降、中国 デジタル 広告市場で活動しています。</p>
          <p className="text-[#b3c0d8]">私たちは WeChat、Douyin、Baidu、小紅書、Bilibili などすべての主要プラットフォームで広告開発とキャンペーン管理をサポートしています。</p>
        </div>
      </div>
    </div>
  );
}