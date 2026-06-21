import sys, re
sys.stdout.reconfigure(encoding='utf-8')
fp = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\blog\baidu-ai-search-ads-2026.html'
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('<article class="article-content reveal">')
end_pos = content.find('</article>', start)
article = content[start:end_pos]

# Find first h2 and check what's before/after it
h2s = list(re.finditer(r'<h2[^>]*id="([^"]*)"[^>]*>(.*?)</h2>', article, re.DOTALL))
if len(h2s) >= 2:
    first_h2_end = h2s[0].end()
    second_h2_start = h2s[1].start()
    between = article[first_h2_end:second_h2_start]
    print(f'Between H2#1 and H2#2 ({len(between)} chars):')
    print(between[:500])
