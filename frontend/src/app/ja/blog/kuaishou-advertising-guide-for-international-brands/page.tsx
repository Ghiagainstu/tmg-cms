export const metadata = {
  title: '国際ブランド向け快手（Kuaishou）広告ガイド',
  description: '国際ブランド向けの快手広告実践ガイド。プラットフォームのオーディエンス、広告フォーマット、アカウントセットアップ、クリエイティブのベストプラクティス、中国メディア計画への位置付けを解説します。'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">プラットフォームガイド</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">国際ブランド向け快手（Kuaishou）広告ガイド</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">国際ブランド向けの快手広告実践ガイド。プラットフォームのオーディエンス、広告フォーマット、アカウントセットアップ、クリエイティブのベストプラクティスを解説します。</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG 編集部 · 2026年6月22日 · 読了時間 14分</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">なぜ快手が国際広告主に注目されるべきなのか</h2>
          <p className="text-[#dce4f0]">国際チームが中国のショートビデオ広告を計画する際、最初に思い浮かぶのは通常抖音（Douyin）です。しかし、快手は中国最大級のショートビデオおよびライブコマースプラットフォームの一つであり、明確に異なるオーディエンスプロファイルとエンゲージメント行動を持っています。低線都市、価値志向の消費者、ライブコマース型カテゴリーをターゲットとするブランドにとって、快手はメディアミックスの重要な追加要素となります。</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">異なるオーディエンス、異なる機会</p>
            <p className="text-sm text-[#b3c0d8]">快手のユーザーベースは2線、3線以下の都市に偏り、実用的・価値志向のカテゴリーで高いエンゲージメントを持ちます。</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">ライブコマースが中核行動</p>
            <p className="text-sm text-[#b3c0d8]">他のプラットフォームではライブコマースが追加機能であるのに対し、快手のオーディエンスはライブストリーム購入に深く慣れています。</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">真正性がパフォーマンスを左右する</p>
            <p className="text-sm text-[#b3c0d8]">快手のコミュニティ文化は、洗練されたブランド広告よりも実用的で親しみやすいコンテンツを評価する傾向があります。</p>
          </div>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">重要ポイント</p>
          <p className="text-[#dce4f0]">快手は「もう一つの抖音」ではなく、独自のオーディエンス、文化、コマースモデルを持つ独立したプラットフォームです。快手の独自の強みを理解する国際ブランドは、低線都市リーチとライブコマース型コンバージョンの貴重なチャネルを開拓できます。</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMGは、国際ブランドが快手が中国メディア戦略に合っているかどうかを評価し、快手のオーディエンスとコマース文化に合ったプラットフォーム固有のキャンペーンを構築するお手伝いをします。</p>
          <a href="/ja/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">TMGに相談する</a>
        </section>
      </article>
    </div>
  )
}
