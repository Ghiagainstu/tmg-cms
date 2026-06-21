import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'blog', 'wechat-moments-ads.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('<article class="article-content reveal">')
end = content.find('</article>', start)
article = content[start:end]

uls = list(re.finditer(r'<ul[^>]*>(.*?)</ul>', article, re.DOTALL))

# Convert UL#5 to table
ul5 = uls[4]
ul_abs_start = start + ul5.start()
ul_abs_end = start + ul5.end()
lis = re.findall(r'<li[^>]*>(.*?)</li>', ul5.group(1), re.DOTALL)

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

table_html = '\n<table class="article-table"><thead><tr><th>Optimization Tip</th><th>Details</th></tr></thead><tbody>\n'
table_html += '\n'.join(table_rows)
table_html += '\n</tbody></table>\n'

new_content = content[:ul_abs_start] + table_html + content[ul_abs_end:]

with open(fp, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Converted UL#5 to article-table in wechat-moments-ads.html')
