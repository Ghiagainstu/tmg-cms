import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

articles_to_process = [
    'bilibili-genz-marketing.html',
    'bilibili-demographics-who-are-these-gen-z-users.html',
    'bing-china-demographics-who-are-these-users.html',
    'bing-china-premium-audience-guide.html',
    'china-big-tech-ai-monetization-2026.html',
    'douyin-enterprise-account.html',
    'ocean-engine-local-reach.html',
    'tencent-ad-revenue-ai-deep-dive-2026.html',
    'wechat-channels-consumer-electronics.html',
    'wechat-mini-games-desktop.html',
    'wechat-moments-ads.html',
    'xiaohongshu-consumer-research.html',
]

ja_banner_texts = {
    'bilibili-genz-marketing': ('重要な要点', 'Bilibiliは中国Z世代へのゲートウェイ。3億6600万MAUと107分の日平均利用時間で、若者向けブランドに比類ないエンゲージメントを提供。'),
    'bilibili-demographics-who-are-these-gen-z-users': ('重要な要点', 'BilibiliのZ世代ユーザーは高い支出力と深いプラットフォームエンゲージメントを持つ。行動理解が効果的なマーケティングに不可欠。'),
    'bing-china-demographics-who-are-these-users': ('重要な要点', 'Bing ChinaユーザーはBaiduでは到達不可能な高収入プロフェッショナル。このプレミアムオーディエンスは優れたROIを提供。'),
    'bing-china-premium-audience-guide': ('重要な要点', 'Bing Chinaプレミアムオーディエンスは標準検索より高価値コンバージョンを提供。B2Bとラグジュアリーブランド広告主に不可欠。'),
    'china-big-tech-ai-monetization-2026': ('重要な要点', '中国大手テック企業は検索、広告、コマース全域でAIの収益化を急速に推進。ブランドはこの新しいAIネイティブ環境に適応する必要がある。'),
    'douyin-enterprise-account': ('重要な要点', 'Douyinエンタープライズアカウントは高度な分析とAPIアクセスを解放。基本広告を超えてスケールするブランドに不可欠。'),
    'ocean-engine-local-reach': ('重要な要点', 'Ocean Engineローカルリーチは位置ベースターゲティングでブランドと近隣消費者を接続。実店舗ビジネスに重要。'),
    'tencent-ad-revenue-ai-deep-dive-2026': ('重要な要点', 'Tencentの広告収益成長はAI統合で加速中。WeChatとQQ広告はよりスマートかつ効果的に。'),
    'wechat-channels-consumer-electronics': ('重要な要点', 'WeChatチャンネルの家電は発見と購入を推進。ビデオコンテンツは静的広告の3倍のコンバージョン率。'),
    'wechat-mini-games-desktop': ('重要な要点', 'デスクトップのWeChatミニゲームは新しいゲームオーディエンスを開く。ミニゲームの検索広告はデスクトップで2倍のエンゲージメント。'),
    'wechat-moments-ads': ('重要な要点', 'WeChatモーメント広告は中国で最高の視認性を達成。信頼されたソーシャルコンテキストが標準ディスプレイの2倍のエンゲージメントを推進。'),
    'xiaohongshu-consumer-research': ('重要な要点', 'Xiaohongshuの消費者調査は従来の検索より数週間早い購入意図を明らかに。このシグナルを監視するブランドは顧客をより早くインターセプト。'),
}

ko_banner_texts = {
    'bilibili-genz-marketing': ('핵심 요점', 'Bilibili는 중국 Z세대 게이트웨이. 3억 6600만 MAU와 107분 일평균 사용 시간으로 청소년 대상 브랜드에 비할 데 없는 참여 제공.'),
    'bilibili-demographics-who-are-these-gen-z-users': ('핵심 요점', 'Bilibili Z세대 사용자는 높은 소비력과 깊은 플랫폼 참여 보유. 행동 이해가 효과적 마케팅에 필수.'),
    'bing-china-demographics-who-are-these-users': ('핵심 요점', 'Bing China 사용자는 Baidu에서 도달 불가능한 고소득 전문가. 이 프리미엄 오디언스는 우수한 ROI 제공.'),
    'bing-china-premium-audience-guide': ('핵심 요점', 'Bing China 프리미엄 오디언스는 표준 검색보다 고가치 전환 제공. B2B 및 럭셔리 브랜드 광고주에 필수.'),
    'china-big-tech-ai-monetization-2026': ('핵심 요점', '중국 대형 테크기업은 검색, 광고, 커머스 전반에서 AI 수익화 가속. 브랜드는 새로운 AI 네이티브 환경에 적응 필요.'),
    'douyin-enterprise-account': ('핵심 요점', 'Douyin 엔터프라이즈 계정은 고급 분석과 API 접근 해제. 기본 광고를 넘어 스케일하는 브랜드에 필수.'),
    'ocean-engine-local-reach': ('핵심 요점', 'Ocean Engine 로컬 리치는 위치 기반 타겟팅으로 브랜드와 인근 소비자 연결. 오프라인 매장 비즈니스에 중요.'),
    'tencent-ad-revenue-ai-deep-dive-2026': ('핵심 요점', 'Tencent 광고 수익 성장은 AI 통합으로 가속화. WeChat과 QQ 광고가 더 스마트하고 효과적으로 변화.'),
    'wechat-channels-consumer-electronics': ('핵심 요점', 'WeChat 채널 가전은 발견과 구매를 추진. 비디오 콘텐츠는 정적 광고보다 3배 높은 전환율.'),
    'wechat-mini-games-desktop': ('핵심 요점', '데스크톱 WeChat 미니 게임은 새로운 게임 오디언스 개방. 미니 게임 검색 광고는 데스크톱에서 2배 참여.'),
    'wechat-moments-ads': ('핵심 요점', 'WeChat 모먼트 광고는 중국에서 최고의 가시성 달성. 신뢰받는 소셜 컨텍스트가 표준 디스플레이보다 2배 참여 추진.'),
    'xiaohongshu-consumer-research': ('핵심 요점', 'Xiaohongshu 소비자 조사는 전통 검색보다 몇 주 빠른 구매 의도 발견. 이 시그널을 모니터링하는 브랜드가 고객을 더 빨리 포착.'),
}

def add_table_and_banner(content, slug, lang, banner_texts):
    start = content.find('<article class="article-content reveal">')
    end = content.find('</article>', start)
    if start < 0 or end < 0:
        return content, False
    
    article = content[start:end]
    modified = False
    
    # Add table if missing
    if 'article-table' not in article:
        ul_match = re.search(r'<ul[^>]*>(.*?)</ul>', article, re.DOTALL)
        if ul_match:
            ul_content = ul_match.group(1)
            lis = re.findall(r'<li[^>]*>(.*?)</li>', ul_content, re.DOTALL)
            if len(lis) >= 3:
                ul_abs_start = start + ul_match.start()
                ul_abs_end = start + ul_match.end()
                
                table_rows = []
                for li in lis:
                    clean = re.sub(r'<[^>]+>', '', li).strip()
                    for sep in ['—', ' – ', ': ', '：']:
                        if sep in clean:
                            parts = clean.split(sep, 1)
                            title = parts[0].strip()[:50]
                            desc = parts[1].strip()
                            break
                    else:
                        title = clean[:50]
                        desc = clean
                    table_rows.append(f'<tr><td><strong>{title}</strong></td><td>{desc}</td></tr>')
                
                table_html = '\n<table class="article-table"><thead><tr><th>Key Point</th><th>Details</th></tr></thead><tbody>\n'
                table_html += '\n'.join(table_rows)
                table_html += '\n</tbody></table>\n'
                
                content = content[:ul_abs_start] + table_html + content[ul_abs_end:]
                modified = True
                
                start = content.find('<article class="article-content reveal">')
                end = content.find('</article>', start)
                article = content[start:end]
    
    # Add banner if missing
    if 'takeaway-banner' not in content:
        h2s = list(re.finditer(r'<h2[^>]*id="([^"]*)"[^>]*>(.*?)</h2>', article, re.DOTALL))
        if len(h2s) >= 2:
            last_h2 = h2s[-1]
            insert_pos = start + last_h2.start()
            
            title, text = banner_texts.get(slug, ('Key Takeaway', 'Understanding this platform is essential.'))
            banner_html = f'\n<div class="takeaway-banner"><div class="takeaway-banner__title">{title}</div><p class="takeaway-banner__text">{text}</p></div>\n'
            
            content = content[:insert_pos] + banner_html + content[insert_pos:]
            modified = True
    
    return content, modified

fixed_ja = 0
fixed_ko = 0

for f in articles_to_process:
    slug = f.replace('.html', '')
    
    # JA
    fp = os.path.join(ws, 'ja', 'blog', f)
    if os.path.exists(fp):
        with open(fp, 'r', encoding='utf-8') as fobj:
            content = fobj.read()
        new_content, added = add_table_and_banner(content, slug, 'ja', ja_banner_texts)
        if added:
            with open(fp, 'w', encoding='utf-8') as fobj:
                fobj.write(new_content)
            fixed_ja += 1
            print(f'Enhanced JA: {f}')
    
    # KO
    fp = os.path.join(ws, 'ko', 'blog', f)
    if os.path.exists(fp):
        with open(fp, 'r', encoding='utf-8') as fobj:
            content = fobj.read()
        new_content, added = add_table_and_banner(content, slug, 'ko', ko_banner_texts)
        if added:
            with open(fp, 'w', encoding='utf-8') as fobj:
                fobj.write(new_content)
            fixed_ko += 1
            print(f'Enhanced KO: {f}')

print(f'\nEnhanced {fixed_ja} JA + {fixed_ko} KO files')
