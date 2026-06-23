export const metadata = {
  title: '中国のヘルスケア・ウェルネス広告：コンプライアンスとクリエイティブの実践ガイド',
  description: '国際ヘルスケア・ウェルネスブランド向けの中国広告実践ガイド。コンプライアンス要件、プラットフォーム選定、クリエイティブの期待値、よくある審査落とし穴を解説します。'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">業界プレイブック</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">中国のヘルスケア・ウェルネス広告：コンプライアンスとクリエイティブの実践ガイド</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">国際ヘルスケア・ウェルネスブランド向けの中国広告実践ガイド。コンプライアンス要件、プラットフォーム選定、クリエイティブの期待値、よくある審査落とし穴を解説します。</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG 編集部 · 2026年6月22日 · 読了時間 14分</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">なぜ中国のヘルスケア広告には異なるプレイブックが必要なのか</h2>
          <p className="text-[#dce4f0]">中国はヘルスケア、ウェルネス、サプリメントブランドにとって最も成長速度の速い市場の一つです。しかし、このカテゴリーの広告規制は一般消費者向け商品と比べてはるかに厳しいものです。一般的な消費者向け広告のワークフローを想定してこの市場に参入した国際チームは、長い審査遅延、クリエイティブの却下、アカウント制限に直面することがよくあります。クリエイティブ資産を構築する前にコンプライアンスフレームワークを理解することが、最も重要な第一歩です。</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">コンプライアンスが最優先</p>
            <p className="text-sm text-[#b3c0d8]">健康に関する表現、製品カテゴリー、認証はすべての主要プラットフォームで厳しく規制されています。</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">クリエイティブ表現に制限がある</p>
            <p className="text-sm text-[#b3c0d8]">「治る」「保証」「臨床的に証明済み」といった表現は、具体的な裏付けがないと却下されます。</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">プラットフォーム選定が重要</p>
            <p className="text-sm text-[#b3c0d8]">すべてのプラットフォームがすべてのヘルスケアカテゴリーを受け入れるわけではありません。不適切なプラットフォーム選定は審査に数週間のロスをもたらします。</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">TMGのヘルスケア広告フレームワーク</h2>
          <p className="text-[#dce4f0]">TMGでは通常、ヘルスケア・ウェルネス広告主に対して4つの領域で中国市場参入を整理することを推奨しています。カテゴリー分類、書類準備、プラットフォーム固有のコンプライアンスルール、クリエイティブ戦略の4つです。このフレームワークは、国際チームが最も一般的な審査却下のサイクルを回避するのに役立ちます。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">領域</th>
                  <th className="p-3 border-b border-[#1e2d45]">準備内容</th>
                  <th className="p-3 border-b border-[#1e2d45]">重要な理由</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">カテゴリー分類</td>
                  <td className="p-3 text-[#dce4f0]">一般用医薬品、健康食品（保健品）、医療機器、ウェルネスサービス、健康訴求のある化粧品</td>
                  <td className="p-3 text-[#dce4f0]">どのプラットフォームが広告を受け入れるか、どの書類が必要かを決定する</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">書類準備</td>
                  <td className="p-3 text-[#dce4f0]">営業許可証、製品登録証明書、健康許可証、ブランド認可書</td>
                  <td className="p-3 text-[#dce4f0]">書類不備が最も一般的な却下理由です</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">プラットフォーム固有ルール</td>
                  <td className="p-3 text-[#dce4f0]">百度、微信、小紅書、抖音のカテゴリー別承認ポリシー</td>
                  <td className="p-3 text-[#dce4f0]">プラットフォームごとに異なるカテゴリー制限と審査基準がある</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">クリエイティブ戦略</td>
                  <td className="p-3 text-[#dce4f0]">表現の調整、免責事項のローカライゼーション、ビジュアル要件</td>
                  <td className="p-3 text-[#dce4f0]">中国の広告法に適合するクリエイティブは他市場とは異なる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">中国のヘルスケア広告法における主要な規制事項</h2>
          <p className="text-[#dce4f0]">中国の広告法はヘルスケアカテゴリーに対して特に厳しい規定を設けています。一般的に禁止されている表現や要件には以下のようなものがあります。</p>
          <ul className="list-disc pl-6 text-[#dce4f0] space-y-2">
            <li>治癒や完治を保証する表現の使用は禁止されています</li>
            <li>効能や効果を断定的に示す表現は裏付けとなる証拠が必要です</li>
            <li>医療従事者や患者による推薦は厳しく規制されています</li>
            <li>処方薬の広告は一般消費者向けプラットフォームでは制限されています</li>
            <li>健康食品には承認された免責事項の表示が義務付けられています</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">ヘルスケア広告でよく陥る落とし穴</h2>
          <p className="text-[#dce4f0]">国際ヘルスケアブランドが中国で直面する最も一般的な問題は以下の通りです。正しいカテゴリー証明書なしで広告を提出すること、他の市場では有効だが中国の広告法に違反する表現を使用すること、自社の製品カテゴリーを受け入れないプラットフォームを選択すること、クリエイティブ審査のタイムラインを過小評価することです。多くのチームは、規制カテゴリーで義務付けられているローカライズされた免責事項の準備も怠っています。</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">ヘルスケア・ウェルネス向けプラットフォームの適合性</h2>
          <p className="text-[#dce4f0]">すべてのプラットフォームがヘルスケア広告に同等に適しているわけではありません。百度の検索広告は症状特化型や製品調査クエリによく活用されます。微信広告は強力なコンテンツ戦略を持つウェルネスブランドに有効です。小紅書は美容とウェルネスのクロスオーバー商品の重要性が増していますが、コンプライアンス審査は厳しいです。抖音は認知拡大には強力ですが、直接的な健康表現には大幅な制限があります。適切な製品タイプに適切なプラットフォームを選ぶことが、初期段階の重要な判断となります。</p>
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
                  <td className="p-3 font-semibold">百度</td>
                  <td className="p-3 text-[#dce4f0]">一般用医薬品、医療機器、症状特化型検索意図</td>
                  <td className="p-3 text-[#dce4f0]">厳格な証明書要件とランディングページ審査</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">微信</td>
                  <td className="p-3 text-[#dce4f0]">ウェルネスブランド、コンテンツマーケティング、プライベートドメインでのエンゲージメント</td>
                  <td className="p-3 text-[#dce4f0]">広告コピー内の健康表現は慎重なレビューが必要</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">小紅書</td>
                  <td className="p-3 text-[#dce4f0]">美容・ウェルネスクロスオーバー、サプリメントブランド、ライフスタイルポジショニング</td>
                  <td className="p-3 text-[#dce4f0]">広告とオーガニックコンテンツ両方の健康表現に関する非常に厳しい審査</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">抖音</td>
                  <td className="p-3 text-[#dce4f0]">ブランド認知拡大、ウェルネスライフスタイルコンテンツ、幅広いリーチ</td>
                  <td className="p-3 text-[#dce4f0]">直接的な健康表現やビフォーアフター画像は頻繁に却下される</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">ビリビリ</td>
                  <td className="p-3 text-[#dce4f0]">教育主導型ウェルネスコンテンツ、若年層デモグラフィック</td>
                  <td className="p-3 text-[#dce4f0]">健康関連の教育コンテンツに関するコンプライアンス審査</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">重要ポイント</p>
          <p className="text-[#dce4f0]">中国におけるヘルスケア・ウェルネス広告は最も規制の厳しいカテゴリーの一つです。成功するブランドは通常、メディア出費の前にコンプライアンス準備とローカライズされたクリエイティブ戦略に投資します。基盤を正しく構築することで、高額な審査遅延とアカウントリスクを防ぎます。</p>
        </section>        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">情報提供目的のデータです。最新の数値は原著でご確認ください。</h2>
          <ul className="list-disc pl-6 text-[#b3c0d8] space-y-2 text-sm">
            <li>参考文献</li>
          </ul>
          <p className="text-[#8899b5] text-xs mt-3">国家市場監督管理総局「中華人民共和国広告法（2021年改正）」— 第18条は健康食品広告での絶対的表現を禁止、第16条は医療機器広告の事前承認を要求。 Frost & Sullivan「中国ヘルスケア市場レポート2025」— 中国のヘルスケア広告支出は890億元、デジタルチャネルが62%を占める。 国家薬品監督管理局「健康食品広告ガイドライン2025」— 義務的免責事項テキストと禁止表現リストを2025年更新。</p>
        </section>


        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMGは、国際ヘルスケア・ウェルネスブランドが中国の広告コンプライアンス要件をナビゲートし、効果的かつ審査対応可能なキャンペーンを構築するお手伝いをします。</p>
          <a href="/ja/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">TMGに相談する</a>
        </section>
      </article>
    </div>
  )
}