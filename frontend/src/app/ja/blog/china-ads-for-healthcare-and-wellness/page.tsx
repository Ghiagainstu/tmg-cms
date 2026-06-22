export const metadata = {
  title: '中国の医療・ウェルネス広告：コンプライアンスとクリエイティブプレイブック',
  description: '国際医療・ウェルネスブランド向けの中国広告実践ガイド。コンプライアンス要件、プラットフォーム選定、クリエイティブの期待値、よくある承認却下の原因を解説します。'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">業界プレイブック</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">中国の医療・ウェルネス広告：コンプライアンスとクリエイティブプレイブック</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">国際医療・ウェルネスブランド向けの中国広告実践ガイド。コンプライアンス要件、プラットフォーム選定、クリエイティブの期待値、よくある承認却下の原因を解説します。</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG 編集部 · 2026年6月22日 · 読了時間 14分</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">なぜ医療広告には異なるプレイブックが必要なのか</h2>
          <p className="text-[#dce4f0]">中国の医療・ウェルネス市場は急速に成長していますが、このカテゴリーの広告規制は一般消費者向け製品よりもはるかに厳しいものです。国際チームが標準的な消費者向け広告ワークフローで参入しようとすると、長期間の承認遅延、クリエイティブの却下、アカウント制限に直面することがよくあります。クリエイティブ資産を構築する前にコンプライアンスの枠組みを理解することが、最も重要な第一歩です。</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">コンプライアンスが最優先</p>
            <p className="text-sm text-[#b3c0d8]">健康声明、製品カテゴリー、認証はすべて主要プラットフォームで厳格に規制されています。</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">クリエイティブ表現に制限がある</p>
            <p className="text-sm text-[#b3c0d8]">「治癒」「保証」「臨床的に実証済み」などの表現は、特定の根拠なしには却下されます。</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">プラットフォーム選定が重要</p>
            <p className="text-sm text-[#b3c0d8]">すべてのプラットフォームがすべての医療カテゴリーを受け入れるわけではありません。不適切な選定は数週間のロスになります。</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">主要プラットフォーム別の適合性</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">プラットフォーム</th>
                  <th className="p-3 border-b border-[#1e2d45]">最適な用途</th>
                  <th className="p-3 border-b border-[#1e2d45]">注意点</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">百度（Baidu）</td>
                  <td className="p-3 text-[#dce4f0]">OTC医薬品、医療機器、疾患特異的な検索意図</td>
                  <td className="p-3 text-[#dce4f0]">厳格な証明書要件とランディングページ審査</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">WeChat</td>
                  <td className="p-3 text-[#dce4f0]">ウェルネスブランド、コンテンツマーケティング、プライベートドメイン</td>
                  <td className="p-3 text-[#dce4f0]">広告文の健康声明は慎重に審査する必要がある</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">小紅書（Xiaohongshu）</td>
                  <td className="p-3 text-[#dce4f0]">ビューティー×ウェルネス、サプリメント、ライフスタイル定位</td>
                  <td className="p-3 text-[#dce4f0]">広告とオーガニックコンテンツ両方の健康声明審査が非常に厳しい</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">抖音（Douyin）</td>
                  <td className="p-3 text-[#dce4f0]">ブランド認知、ウェルネスライフスタイルコンテンツ</td>
                  <td className="p-3 text-[#dce4f0]">直接的な健康声明やビフォーアフター画像は却下されやすい</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">重要ポイント</p>
          <p className="text-[#dce4f0]">中国の医療・ウェルネス広告は最も規制の厳しいカテゴリーの一つです。成功するブランドは、メディア費を投入する前にコンプライアンス準備とローカライズされたクリエイティブ戦略に投資します。基盤を正しく構築することで、高価な承認遅延とアカウントリスクを防げます。</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMGは、国際医療・ウェルネスブランドが中国の広告コンプライアンス要件をナビゲートし、承認対応可能なキャンペーンを構築するお手伝いをします。</p>
          <a href="/ja/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">TMGに相談する</a>
        </section>
      </article>
    </div>
  )
}
