export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <section className="pt-28 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">문의하기</h1>
        <p className="text-[#b3c0d8] max-w-2xl mx-auto">또에 미디아 게이트웨이에 문의하세요</p>
      </section>
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-4">연락 정보</h2>
          <p className="text-[#b3c0d8]">이메일: tmg@tuyuesouxin.cn</p>
        </div>
      </div>
    </div>
  );
}