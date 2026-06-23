export const metadata = {
  title: '抖音を超えた中国ショートビデオコマースの全体像',
  description: '抖音以外のショートビデオコマースプラットフォームに関する実践ガイド。快手、ビデオアカウント、ビリビリ、小紅書を網羅し、プラットフォーム比較と国際ブランド向け戦略提言を解説します。'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">コマース戦略</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">抖音を超えた中国ショートビデオコマースの全体像</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">抖音以外のショートビデオコマースプラットフォームに関する実践ガイド。快手、ビデオアカウント、ビリビリ、小紅書を網羅し、プラットフォーム比較と国際ブランド向け戦略提言を解説します。</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG 編集部 · 2026年6月22日 · 読了時間 14分</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">なぜ抖音だけでは中国のショートビデオコマースを語れないのか</h2>
          <p className="text-[#dce4f0]">中国のショートビデオコマースといえば抖音が注目を集めますが、それだけで語るのは不十分です。抖音は最大規模のプラットフォームで、最も成熟したコマースインフラを備えています。しかし、中国のショートビデオコマースエコシステムは抖音だけでは語りきれないほど多様です。快手、微信ビデオアカウント、ビリビリ、小紅書はそれぞれ異なるコマースモデル、オーディエンス特性、戦略的優位性を持っています。抖音だけに投資する国際ブランドは、これらの補完的なプラットフォーム上の貴重な機会を見落としている可能性があります。</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">各プラットフォームのオーディエンスは異なる</p>
            <p className="text-sm text-[#b3c0d8]">快手、ビデオアカウント、ビリビリ、小紅書はそれぞれ異なるデモグラフィックと購買行動に対応しています。</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">コマースモデルは同一ではない</p>
            <p className="text-sm text-[#b3c0d8]">ライブコマース、コンテンツシーディング、検索から購買への導線、ソーシャルコマースは各プラットフォームで異なった仕組みで機能します。</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">マルチプラットフォーム戦略でリスクを軽減</p>
            <p className="text-sm text-[#b3c0d8]">複数プラットフォームに分散するブランドは、特定のアルゴリズムやポリシー変更への依存度を低減できます。</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">プラットフォーム別比較</h2>
          <p className="text-[#dce4f0]">中国の各ショートビデオコマースプラットフォームにはそれぞれ異なる強みがあります。最適な選択は、ブランドのカテゴリー、ターゲットオーディエンス、コマースモデルによって決まります。TMGでは通常、国際ブランドに対してオーディエンスとの適合性、コマースの準備度、コンテンツ要件の3つの観点からプラットフォームを評価することを推奨しています。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">プラットフォーム</th>
                  <th className="p-3 border-b border-[#1e2d45]">主要コマースモデル</th>
                  <th className="p-3 border-b border-[#1e2d45]">最適な用途</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">快手</td>
                  <td className="p-3 text-[#dce4f0]">ライブコマース主導。下位都市で強い影響力</td>
                  <td className="p-3 text-[#dce4f0]">コストパフォーマンス重視の商品、ファミリーカテゴリー、農産物・地場産品</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">微信ビデオアカウント</td>
                  <td className="p-3 text-[#dce4f0]">微信エコシステム内ソーシャルコマース。プライマリドメイン活用</td>
                  <td className="p-3 text-[#dce4f0]">既存の微信プレゼンスを持つブランド、高検討度商品、信頼ベースの購買</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">ビリビリ</td>
                  <td className="text-[#dce4f0]">コンテンツ駆動型コマース。長尺動画とコミュニティの信頼関係</td>
                  <td className="p-3 text-[#dce4f0]">若年層デモグラフィック、テック製品、ゲーム、教育、ニッチホビー</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">小紅書</td>
                  <td className="p-3 text-[#dce4f0]">コンテンツシーディングと検索から購買への導線。美容・ライフスタイルで強い</td>
                  <td className="p-3 text-[#dce4f0]">美容、スキンケア、ファッション、ウェルネス、ライフスタイル商品</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">どのプラットフォームに投資すべきかの判断基準</h2>
          <p className="text-[#dce4f0]">判断はブランドのターゲットオーディエンスとプロダクトカテゴリーから始めるべきです。美容ブランドは小紅書と抖音から最も恩恵を受けられる可能性が高く、テックブランドはビリビリと微信でより良い成果を得られるでしょう。下位都市をターゲットとするブランドは快手の検討が有効です。最も重要なのは、国際チームがすべてのプラットフォームに予算を薄く広げすぎないことです。5つのプラットフォームで浅いキャンペーンを展開するより、1つか2つのプラットフォームに集中して深く取り組む方が通常は効果的です。</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">マルチプラットフォームショートビデオコマースのよくある失敗</h2>
          <p className="text-[#dce4f0]">最も一般的な失敗は、各プラットフォームの文化やフォーマットの期待に適応せずに、同じクリエイティブをすべてのプラットフォームで使い回すことです。快手のオーディエンスは素朴で実用的なコンテンツを好み、ビリビリのオーディエンスは深さと独自性を期待し、小紅書のオーディエンスは洗練されたライフスタイルストーリーテリングに反応します。もう一つのよくある失敗は、各プラットフォーム固有のコマースインフラを無視することです。プラットフォームによって異なるストア設定、マーチャント資格、手数料構造が必要となります。</p>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">重要ポイント</p>
          <p className="text-[#dce4f0]">中国のショートビデオコマースは抖音だけの戦略ではなく、マルチプラットフォームの機会です。快手、ビデオアカウント、ビリビリ、小紅書それぞれの強みを理解した国際ブランドは、市場全体にわたってより強固で効果的なコマースプレゼンスを構築できます。</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMGは、国際ブランドが中国のショートビデオコマースプラットフォームを評価し、各プラットフォームのオーディエンス、文化、コマースモデルに合ったマルチプラットフォーム戦略を構築するお手伝いをします。</p>
          <a href="/ja/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">TMGに相談する</a>
        </section>
      </article>
    </div>
  )
}