import sys, os, re, datetime
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Fix JA files with -ja suffix
ja_files_with_suffix = [
    'wechat-channels-consumer-electronics-ja.html',
    'wechat-mini-games-desktop-ja.html',
    'wechat-moments-ads-ja.html',
]

ja_banner_texts = {
    'wechat-channels-consumer-electronics': ('重要な要点', 'WeChatチャンネルの家電は発見と購入を推進。ビデオコンテンツは静的広告の3倍のコンバージョン率。'),
    'wechat-mini-games-desktop': ('重要な要点', 'デスクトップのWeChatミニゲームは新しいゲームオーディエンスを開く。ミニゲームの検索広告はデスクトップで2倍のエンゲージメント。'),
    'wechat-moments-ads': ('重要な要点', 'WeChatモーメント広告は中国で最高の視認性を達成。信頼されたソーシャルコンテキストが標準ディスプレイの2倍のエンゲージメントを推進。'),
}

for f in ja_files_with_suffix:
    fp = os.path.join(ws, 'ja', 'blog', f)
    if not os.path.exists(fp):
        print(f'Not found: {f}')
        continue
    
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    slug = f.replace('-ja.html', '').replace('.html', '')
    modified = False
    
    # Check for table
    has_table = 'article-table' in content
    has_banner = 'takeaway-banner' in content
    
    if not has_table:
        start = content.find('<article class="article-content reveal">')
        end = content.find('</article>', start)
        if start >= 0:
            article = content[start:end]
            ul_match = re.search(r'<ul[^>]*>(.*?)</ul>', article, re.DOTALL)
            if ul_match:
                lis = re.findall(r'<li[^>]*>(.*?)</li>', ul_match.group(1), re.DOTALL)
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
    
    if not has_banner and 'takeaway-banner' not in content:
        start = content.find('<article class="article-content reveal">')
        end = content.find('</article>', start)
        if start >= 0:
            article = content[start:end]
            h2s = list(re.finditer(r'<h2[^>]*id="([^"]*)"[^>]*>(.*?)</h2>', article, re.DOTALL))
            if len(h2s) >= 2:
                last_h2 = h2s[-1]
                insert_pos = start + last_h2.start()
                title, text = ja_banner_texts.get(slug, ('重要な要点', 'このプラットフォームの理解は不可欠。'))
                banner_html = f'\n<div class="takeaway-banner"><div class="takeaway-banner__title">{title}</div><p class="takeaway-banner__text">{text}</p></div>\n'
                content = content[:insert_pos] + banner_html + content[insert_pos:]
                modified = True
    
    if modified:
        with open(fp, 'w', encoding='utf-8') as fobj:
            fobj.write(content)
        print(f'Enhanced JA: {f}')
    else:
        print(f'Skipped JA: {f}')
