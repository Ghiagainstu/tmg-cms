export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-28 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">자주 문의하는 질문</h1>
        <p className="text-[#b3c0d8] max-w-2xl mx-auto">또에 미디아 게이트웨이 관련 문의</p>
      </section>
      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-6">
        <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-6">
          <h3 className="font-semibold mb-2">중국에서 광고를 시작하려면 어떠한 개월이 필요합니까?</h3>
          <p className="text-[#b3c0d8]">여러 플랜폼에 따라 다르지만, 최소 3-6개월 기간을 추천합니다.</p>
        </div>
        <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-6">
          <h3 className="font-semibold mb-2">최소 예산은 어디까지인가요?</h3>
          <p className="text-[#b3c0d8]">광고 조작법에 따라 다르지만, 최소 월 5,000달라부터 시작할 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}