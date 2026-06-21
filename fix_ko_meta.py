import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# KO translations for missing meta descriptions
ko_meta = {
    'attribution-models-guide': '어트리뷰션 모델 가이드: 퍼스트 터치, 라스트 터치, 데이터 기반 등 다양한 모델을 이해하고 마케팅 ROI를 최적화하세요.',
    'baidu-demographics-who-are-these-735m-users': 'Baidu 7억 3500만 사용자 분석: 연령, 성별, 도시 분포 등 중국 검색 엔진 사용자의 인구통계를 파악하세요.',
    'bilibili-demographics-who-are-these-gen-z-users': 'Bilibili Z세대 사용자 분석: 3억 6600만 MAU의 구매력과 플랫폼 참여 행동을 이해하세요.',
    'bilibili-genz-marketing': 'Bilibili Z세대 마케팅: 중국 청소년 시장에 효과적으로 도달하기 위한 전략과 크리에이터 협업 방법.',
    'bing-china-demographics-who-are-these-users': 'Bing China 사용자 분석: Baidu에서 도달 불가능한 고소득 전문가 오디언스 특성.',
    'bing-china-premium-audience-guide': 'Bing China 프리미엄 오디언스 가이드: B2B 및 럭셔리 브랜드 광고주를 위한 고가치 전환 전략.',
    'china-big-tech-ai-monetization-2026': '중국 대형 테크기업의 AI 수익화: 검색, 광고, 커머스 전반의 AI 통합 동향 분석.',
    'china-mobile-internet-spring-2026': '중국 모바일 인터넷 2026 봄 보고서: 사용자 행동 변화와 디지털 광고 시장 동향.',
    'cpm-is-rising-bad': 'CPM 상승은 나쁜 것일까요? 실제 프로그래매틱 캠페인에서 높은 CPM이 좋은 시그널인 경우를 분석합니다.',
    'cpm-ocpm-ecpm-explained': 'CPM, oCPM, eCPM 차이점 설명: 지불 금액, 입찰 방법, 시스템 순위 매기기 방식을 이해하세요.',
    'deepseek-image-recognition-geo': 'DeepSeek 이미지 인식과 GEO: 중국 AI 검색에서 시각적 콘텐츠 최적화의 중요성.',
    'deepseek-v4-price-cut-geo': 'DeepSeek V4 가격 인하가 GEO에 미치는 영향: AI 검색 시장의 변화 분석.',
    'doubao-ads-geo-still-worth-it': '더우바오 광고와 GEO: AI 검색 시대에 브랜드 가시성 확보 전략.',
    'doubao-paid-what-it-means-for-geo': '더우바오 유료화가 GEO에 의미하는 것: AI 수익화와 브랜드 발견의 미래.',
    'douyin-enterprise-account': 'Douyin 엔터프라이즈 계정: 고급 분석, API 접근, 대규모 캠페인 관리를 위한 도구.',
    'geo-channel-weight-2026': 'GEO 채널 가중치 2026 업데이트: AI 플랫폼이 더 많이 인용하는 콘텐츠 소스 분석.',
    'geo-market-2026-midyear': '중국 GEO 시장 9420억 위안 돌파: 2026년 중반 현실 점검.',
    'kuaishou-demographics-who-are-these-400m-users': '콰이쇼우 4억 사용자 분석: 중국 숏비디오 플랫폼의 인구통계와 사용자 행동.',
    'ocean-engine-local-reach': 'Ocean Engine 로컬 리치: 위치 기반 타겟팅으로 오프라인 매장 트래픽 증대.',
    'ocean-engine-overview': 'Ocean Engine 개요: 바이트댄스의 통합 광고 플랫폼 특징 및 활용 방법.',
    'pangle-ads': 'Pangle 광고: 글로벌 앱 개발자를 위한 바이트댄스 광네트워크.',
    'smart-bidding-strategies-explained': '스마트 입찰 전략 설명: 자동 입찰 방법과 최적화 기법.',
    'tencent-hy-memory': 'Tencent Hy-Memory: AI 메모리 기술과 광고 타겟팅 혁신.',
    'tencent-influencer-marketing': 'Tencent 인플루언서 마케팅: WeChat과 QQ 생태계의 KOL 전략.',
}

# Fix KO articles
print("Fixing KO article meta descriptions...")
ko_dir = os.path.join(ws, 'ko', 'blog')
fixed = 0

for slug, new_desc in ko_meta.items():
    fp = os.path.join(ko_dir, f'{slug}.html')
    if not os.path.exists(fp):
        # Try with -ko suffix
        fp = os.path.join(ko_dir, f'{slug}-ko.html')
        if not os.path.exists(fp):
            continue
    
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if has meta description
    desc_match = re.search(r'<meta name="description" content="([^"]*)"', content)
    if desc_match and desc_match.group(1).strip():
        continue  # Already has description
    
    # Add meta description after charset
    if '<meta charset' in content:
        content = content.replace(
            '<meta charset',
            f'<meta name="description" content="{new_desc}">\n  <meta charset',
            1
        )
    elif '<meta name="viewport"' in content:
        content = content.replace(
            '<meta name="viewport"',
            f'<meta name="description" content="{new_desc}">\n  <meta name="viewport"',
            1
        )
    
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    fixed += 1
    print(f"  Added meta to: {slug}")

print(f"Fixed {fixed} KO articles")
