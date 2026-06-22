export const metadata = {
  title: '중국 의료·웰니스 광고: 컴플라이언스 및 크리에이티브 플레이북',
  description: '국제 의료·웰니스 브랜드를 위한 중국 광고 실전 가이드. 컴플라이언스 요건, 플랫폼 선정, 크리에이티브 기대치, 일반적인 승인 반려 사유를 설명합니다.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">업계 플레이북</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">중국 의료·웰니스 광고: 컴플라이언스 및 크리에이티브 플레이북</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">국제 의료·웰니스 브랜드를 위한 중국 광고 실전 가이드. 컴플라이언스 요건, 플랫폼 선정, 크리에이티브 기대치, 일반적인 승인 반려 사유를 설명합니다.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG 편집부 · 2026년 6월 22일 · 읽기 시간 14분</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">의료 광고에 다른 플레이북이 필요한 이유</h2>
          <p className="text-[#dce4f0]">중국 의료·웰니스 시장은 빠르게 성장하고 있지만, 이 카테고리의 광고 규칙은 일반 소비자 제품보다 훨씬 엄격합니다. 국제 팀이 표준 소비자 광고 워크플로우로 진입하려 하면 장기 승인 지연, 크리에이티브 반려, 계정 제한에 직면하는 경우가 많습니다. 크리에이티브 에셋을 제작하기 전에 컴플라이언스 프레임워크를 이해하는 것이 가장 중요한 첫 단계입니다.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">컴플라이언스가 최우선</p>
            <p className="text-sm text-[#b3c0d8]">건강 주장, 제품 카테고리, 인증은 모든 주요 플랫폼에서 엄격히 규제됩니다.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">크리에이티브 표현에 제한이 있다</p>
            <p className="text-sm text-[#b3c0d8]">"치료", "보장", "임상적으로 입증" 등의 표현은 구체적 근거 없이는 반려됩니다.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">플랫폼 선택이 중요</p>
            <p className="text-sm text-[#b3c0d8]">모든 플랫폼이 모든 의료 카테고리를 수용하지 않습니다. 잘못된 선택은 수 주간의 손실을 초래합니다.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">주요 플랫폼별 적합성</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2d45] rounded-xl overflow-hidden">
              <thead className="bg-[#111827] text-left">
                <tr>
                  <th className="p-3 border-b border-[#1e2d45]">플랫폼</th>
                  <th className="p-3 border-b border-[#1e2d45]">최적 용도</th>
                  <th className="p-3 border-b border-[#1e2d45]">주의사항</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d45]">
                <tr>
                  <td className="p-3 font-semibold">Baidu</td>
                  <td className="p-3 text-[#dce4f0]">OTC 의약품, 의료기기, 질환별 검색 의도</td>
                  <td className="p-3 text-[#dce4f0]">엄격한 증명서 요건 및 랜딩페이지 심사</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">WeChat</td>
                  <td className="p-3 text-[#dce4f0]">웰니스 브랜드, 콘텐츠 마케팅, 프라이빗 도메인</td>
                  <td className="p-3 text-[#dce4f0]">광고 문구의 건강 주장은 신중히 검토해야 함</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Xiaohongshu</td>
                  <td className="p-3 text-[#dce4f0]">뷰티·웰니스 교차, 건강보조식품, 라이프스타일 포지셔닝</td>
                  <td className="p-3 text-[#dce4f0]">광고와 유기적 콘텐츠 모두 건강 주장 심사가 매우 엄격</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Douyin</td>
                  <td className="p-3 text-[#dce4f0]">브랜드 인지도, 웰니스 라이프스타일 콘텐츠</td>
                  <td className="p-3 text-[#dce4f0]">직접적인 건강 주장과 전후 비교 이미지는 반려되기 쉬움</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">핵심 포인트</p>
          <p className="text-[#dce4f0]">중국 의료·웰니스 광고는 가장 규제가 엄격한 카테고리 중 하나입니다. 성공하는 브랜드는 미디어 비용을 투입하기 전에 컴플라이언스 준비와 현지화된 크리에이티브 전략에 투자합니다. 기반을 올바르게 구축하면 값비싼 승인 지연과 계정 리스크를 방지할 수 있습니다.</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMG는 국제 의료·웰니스 브랜드가 중국 광고 컴플라이언스 요건을 탐색하고 승인 가능한 캠페인을 구축할 수 있도록 지원합니다.</p>
          <a href="/ko/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">TMG에 문의하기</a>
        </section>
      </article>
    </div>
  )
}
