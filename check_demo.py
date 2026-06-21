import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Fix remaining files
# EN baidu-demographics
fp = os.path.join(ws, 'blog', 'baidu-demographics-who-are-these-735m-users.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Add callout after first section
# Find first H2
start = content.find('<article class="article-content reveal">')
end = content.find('</article>', start)
article = content[start:end]

# Check structure - this article uses div sections not h2 directly
# Find first section
sections = list(re.finditer(r'<div class="article-section"[^>]*>(.*?)</div>', article, re.DOTALL))
print(f'Found {len(sections)} article-section divs')

# Check h2 inside sections
h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', article, re.DOTALL)
print(f'H2 tags: {len(h2s)}')
for h2 in h2s[:5]:
    clean = re.sub(r'<[^>]+>', '', h2).strip()
    print(f'  {clean[:60]}')
