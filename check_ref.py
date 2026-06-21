import sys, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
dp = ws + '\\blog'

# Check the reference article
fp = dp + '\\xiaohongshu-advertising-complete-guide-2026.html'
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('<article class="article-content reveal">')
end_pos = content.find('</article>', start)
article = content[start:end_pos]

h2s = list(re.finditer(r'<h2[^>]*id="([^"]*)"[^>]*>(.*?)</h2>', article, re.DOTALL))
for i, h2 in enumerate(h2s[:10]):
    h2_id = h2.group(1)
    title = re.sub(r'<[^>]+>', '', h2.group(2)).strip()
    # Check for components between this h2 and the next
    next_start = h2s[i+1].start() if i+1 < len(h2s) else len(article)
    section = article[h2.start():next_start]
    has_callout = 'callout callout--accent' in section
    has_grid = 'feature-grid' in section
    has_table = 'article-table' in section
    has_banner = 'takeaway-banner' in section
    components = []
    if has_callout: components.append('callout')
    if has_grid: components.append('grid')
    if has_table: components.append('table')
    if has_banner: components.append('banner')
    print(f'H2#{i+1} [{h2_id}]: {title[:50]} => {", ".join(components) if components else "plain text"}')
