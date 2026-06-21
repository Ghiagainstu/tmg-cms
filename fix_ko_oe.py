import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'ko', 'blog', 'ocean-engine-overview.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('<article class="article-content reveal">')
end = content.find('</article>', start)
article = content[start:end]

# Find UL with 3+ items
uls = list(re.finditer(r'<ul[^>]*>(.*?)</ul>', article, re.DOTALL))
for i, ul in enumerate(uls):
    lis = re.findall(r'<li[^>]*>(.*?)</li>', ul.group(1), re.DOTALL)
    if len(lis) >= 3:
        print(f'UL#{i+1}: {len(lis)} items')
        # Convert to table
        ul_abs_start = start + ul.start()
        ul_abs_end = start + ul.end()
        
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
        
        table_html = '\n<table class="article-table"><thead><tr><th>핵심 포인트</th><th>상세</th></tr></thead><tbody>\n'
        table_html += '\n'.join(table_rows)
        table_html += '\n</tbody></table>\n'
        
        content = content[:ul_abs_start] + table_html + content[ul_abs_end:]
        break

# Add banner
h2s = list(re.finditer(r'<h2[^>]*>', content[start:]))
if h2s:
    last_h2 = h2s[-1]
    insert_pos = start + last_h2.start()
    banner_html = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">핵심 요점</div><p class="takeaway-banner__text">Ocean Engine 로컬 리치는 위치 기반 타겟팅으로 브랜드와 인근 소비자를 연결. 오프라인 매장 비즈니스에 중요.</p></div>\n'
    content = content[:insert_pos] + banner_html + content[insert_pos:]

with open(fp, 'w', encoding='utf-8') as f:
    f.write(content)

print('Enhanced KO: ocean-engine-overview.html')
