export const metadata = {
  title: '국제 브랜드를 위한 콰이쇼우(Kuaishou) 광고 가이드',
  description: '국제 브랜드를 위한 콰이쇼우 광고 실전 가이드. 플랫폼 오디언스, 광고 포맷, 계정 설정, 크리에이티브 모범 사례, 중국 미디어 기획에서의 위치를 설명합니다.'
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      <header className="pt-24 pb-10 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">플랫폼 가이드</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">국제 브랜드를 위한 콰이쇼우(Kuaishou) 광고 가이드</h1>
        <p className="mt-4 text-[#b3c0d8] max-w-3xl mx-auto">국제 브랜드를 위한 콰이쇼우 광고 실전 가이드. 플랫폼 오디언스, 광고 포맷, 계정 설정, 크리에이티브 모범 사례를 설명합니다.</p>
        <p className="mt-3 text-sm text-[#8899b5]">TMG 편집부 · 2026년 6월 22일 · 읽기 시간 14분</p>
      </header>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">콰이쇼우가 국제 광고주에게 주목받아야 하는 이유</h2>
          <p className="text-[#dce4f0]">국제 팀이 중국 숏비디오 광고를 계획할 때 보통 먼저 떠오르는 것은 두인(Douyin)입니다. 그러나 콰이쇼우는 중국 최대 규모의 숏비디오 및 라이브커머스 플랫폼 중 하나로, 뚜렷이 다른 오디언스 프로필과 참여 행동을 보유하고 있습니다. 저선 도시, 가성비 소비자, 라이브커머스 중심 카테고리를 타겟하는 브랜드에게 콰이쇼우는 미디어 믹스의 중요한 추가 채널이 될 수 있습니다.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">1</p>
            <p className="font-semibold mb-1">다른 오디언스, 다른 기회</p>
            <p className="text-sm text-[#b3c0d8]">콰이쇼우 사용자 기반은 2선, 3선 이하 도시에 편중되어 있으며 실용적·가성비 중심 카테고리에서 높은 참여율을 보입니다.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">2</p>
            <p className="font-semibold mb-1">라이브커머스가 핵심 행동</p>
            <p className="text-sm text-[#b3c0d8]">다른 플랫폼에서 라이브커머스가 부가 기능인 반면, 콰이쇼우 오디언스는 라이브스트림 구매에 익숙합니다.</p>
          </div>
          <div className="bg-[#111827] border border-[#1e2d45] rounded-xl p-5">
            <p className="text-[#c9a84c] text-sm font-semibold mb-2">3</p>
            <p className="font-semibold mb-1">진정성이 성과를 좌우</p>
            <p className="text-sm text-[#b3c0d8]">콰이쇼우 커뮤니티 문화는 세련된 브랜드 광고보다 실용적이고 친근한 콘텐츠를 선호합니다.</p>
          </div>
        </section>

        <section className="bg-[#111827] border border-[#c9a84c]/40 rounded-2xl p-6">
          <p className="text-[#c9a84c] font-semibold mb-2">핵심 포인트</p>
          <p className="text-[#dce4f0]">콰이쇼우는 "또 하나의 두인"이 아니라 고유한 오디언스, 문화, 커머스 모델을 가진 별도의 플랫폼입니다. 콰이쇼우의 고유한 강점을 이해하는 국제 브랜드는 저선 도시 도달과 라이브커머스 기반 전환의 소중한 채널을 확보할 수 있습니다.</p>
        </section>

        <section className="text-center">
          <p className="text-[#dce4f0] max-w-2xl mx-auto mb-4">TMG는 국제 브랜드가 중국 미디어 전략에 콰이쇼우가 적합한지 평가하고, 콰이쇼우의 오디언스와 커머스 문화에 맞는 플랫폼별 캠페인을 구축할 수 있도록 지원합니다.</p>
          <a href="/ko/contact" className="inline-block bg-[#c9a84c] text-[#080c14] font-semibold px-6 py-3 rounded-full">TMG에 문의하기</a>
        </section>
      </article>
    </div>
  )
}
