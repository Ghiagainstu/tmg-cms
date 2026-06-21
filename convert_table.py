import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'blog', 'bilibili-genz-marketing.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the UL and convert it to a table
# The UL is in the strategy section (last H2)
start = content.find('<article class="article-content reveal">')
end = content.find('</article>', start)
article = content[start:end]

h2s = list(re.finditer(r'<h2[^>]*id="([^"]*)"[^>]*>(.*?)</h2>', article, re.DOTALL))
last_h2 = h2s[-1]

# Find the UL after the last H2
ul_match = re.search(r'<ul[^>]*>(.*?)</ul>', article[last_h2.start():], re.DOTALL)
if ul_match:
    ul_start = last_h2.start() + ul_match.start()
    ul_end = last_h2.start() + ul_match.end()
    ul_content = ul_match.group(1)
    lis = re.findall(r'<li[^>]*>(.*?)</li>', ul_content, re.DOTALL)
    print(f'Found UL with {len(lis)} items at position {ul_start}')
    print('Converting to table...')
    
    # Create table HTML
    table_rows = []
    for i, li in enumerate(lis):
        clean = re.sub(r'<[^>]+>', '', li).strip()
        # Split by — or : to get title and description
        if '—' in clean:
            parts = clean.split('—', 1)
            title = parts[0].strip()
            desc = parts[1].strip()
        elif ':' in clean:
            parts = clean.split(':', 1)
            title = parts[0].strip()
            desc = parts[1].strip()
        else:
            title = clean[:40]
            desc = clean
        table_rows.append(f'<tr><td><strong>{title}</strong></td><td>{desc}</td></tr>')
    
    table_html = '<table class="article-table"><thead><tr><th>Key Point</th><th>Details</th></tr></thead><tbody>\n'
    table_html += '\n'.join(table_rows)
    table_html += '\n</tbody></table>'
    
    print('New table:')
    print(table_html[:500])
