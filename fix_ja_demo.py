import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Fix JA demographics files
ja_fixes = [
    ('baidu-demographics-who-are-these-735m-users.html', 
     'なぜ重要か', 'Baiduの人口統計データは中国デジタル環境の実態を明らかにする。Baiduユーザーの行動と検索パターンを理解することは、中国マーケティング戦略の基盤。',
     '重要な要点', 'Baidu 7億3500万以上の月間アクティブユーザーは中国インターネットの核心。人口統計の理解が効果的なSEMターゲティングとコンテンツローカライゼーションに不可欠。'),
    ('xiaohongshu-demographics-who-are-these-350m-users.html',
     'なぜ重要か', 'Xiaohongshu 3億5000万以上の月間アクティブユーザーは主に女性、都市部、18-35歳で平均以上の支出力を持つ。このデモグラフィックは中国で最も価値のある消費者セグメント。',
     '重要な要点', 'Xiaohongshuユーザーは中国で最も影響力のある消費者セグメント。行動と好みの理解がプラットフォームでのブランド成功に不可欠。'),
]

for f, callout_label, callout_text, banner_title, banner_text in ja_fixes:
    fp = os.path.join(ws, 'ja', 'blog', f)
    if not os.path.exists(fp):
        print(f'Not found: {f}')
        continue
    
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    start = content.find('<article class="article-content reveal">')
    end = content.find('</article>', start)
    article = content[start:end]
    
    # Find first section end
    first_section_pos = article.find('article-section')
    if first_section_pos > 0:
        first_section_end = article.find('</div>', first_section_pos)
        if first_section_end > 0:
            insert_pos = start + first_section_end + 6
            
            callout_html = f'\n<div class="callout callout--accent"><div class="callout__label">{callout_label}</div><p>{callout_text}</p></div>\n'
            content = content[:insert_pos] + callout_html + content[insert_pos:]
            
            # Add banner before TMG section
            h2_match = re.search(r'<h2[^>]*id="[^"]*"[^>]*>.*?</h2>', content[start:])
            if h2_match:
                banner_html = f'\n<div class="takeaway-banner"><div class="takeaway-banner__title">{banner_title}</div><p class="takeaway-banner__text">{banner_text}</p></div>\n'
                content = content[:start + h2_match.start()] + banner_html + content[start + h2_match.start():]
            
            with open(fp, 'w', encoding='utf-8') as fobj:
                fobj.write(content)
            print(f'Enhanced JA: {f}')
