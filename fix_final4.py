import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Fix JA demographics files
for f in ['baidu-demographics-who-are-these-735m-users.html', 'xiaohongshu-demographics-who-are-these-350m-users.html']:
    fp = os.path.join(ws, 'ja', 'blog', f)
    if not os.path.exists(fp):
        continue
    
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    # Add banner
    h2s = list(re.finditer(r'<h2[^>]*>', content))
    if h2s:
        # Find Sources or TMG section
        for h2 in reversed(h2s):
            ctx = content[h2.start():h2.start()+100]
            if 'TMG' in ctx or 'Source' in ctx or 'Bottom' in ctx or '出典' in ctx or 'まとめ' in ctx:
                if 'baidu' in f:
                    banner_html = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">重要な要点</div><p class="takeaway-banner__text">Baidu 7億3500万以上の月間アクティブユーザーは中国インターネットの核心。人口統計の理解が効果的なSEMターゲティングに不可欠。</p></div>\n'
                else:
                    banner_html = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">重要な要点</div><p class="takeaway-banner__text">Xiaohongshuユーザーは中国で最も影響力のある消費者セグメント。行動と好みの理解がプラットフォームでのブランド成功に不可欠。</p></div>\n'
                content = content[:h2.start()] + banner_html + content[h2.start():]
                break
        
        with open(fp, 'w', encoding='utf-8') as fobj:
            fobj.write(content)
        print(f'Enhanced JA: {f}')

# Fix KO files
for f in ['ocean-engine-overview.html', 'wechat-moments-ads-ko.html']:
    fp = os.path.join(ws, 'ko', 'blog', f)
    if not os.path.exists(fp):
        continue
    
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    h2s = list(re.finditer(r'<h2[^>]*>', content))
    if h2s:
        for h2 in reversed(h2s):
            ctx = content[h2.start():h2.start()+100]
            if 'TMG' in ctx or 'Source' in ctx or 'Bottom' in ctx or '결론' in ctx:
                if 'ocean' in f:
                    banner_html = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">핵심 요점</div><p class="takeaway-banner__text">Ocean Engine 로컬 리치는 위치 기반 타겟팅으로 브랜드와 인근 소비자를 연결. 오프라인 매장 비즈니스에 중요.</p></div>\n'
                else:
                    banner_html = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">핵심 요점</div><p class="takeaway-banner__text">WeChat 모먼트 광고는 중국에서 최고의 가시성 달성. 신뢰받는 소셜 컨텍스트가 표준 디스플레이보다 2배 참여 추진.</p></div>\n'
                content = content[:h2.start()] + banner_html + content[h2.start():]
                break
        
        with open(fp, 'w', encoding='utf-8') as fobj:
            fobj.write(content)
        print(f'Enhanced KO: {f}')
