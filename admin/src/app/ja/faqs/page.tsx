export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-28 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">よくある質問</h1>
        <p className="text-[#b3c0d8] max-w-2xl mx-auto">トゥエ メディア ゲートウウェイについてよくある質問</p>
      </section>
      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-6">
        <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-6">
          <h3 className="font-semibold mb-2">中国で広告を開始するにはどのくらいの期間が必要ですか?</h3>
          <p className="text-[#b3c0d8]">プラットフォームにより異なりますが、最低 3か月 6か月をお軣めします。</p>
        </div>
        <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-6">
          <h3 className="font-semibold mb-2">最小予算はどのくらいですか?</h3>
          <p className="text-[#b3c0d8]">広告手法により異なりますが、月額 $5,000から開始できます。</p>
        </div>
      </div>
    </div>
  );
}