import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'blog', 'bilibili-genz-marketing.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Find UL in article
start = content.find('<article class="article-content reveal">')
end = content.find('</article>', start)
article = content[start:end]

# Find all UL elements
uls = list(re.finditer(r'<ul[^>]*>(.*?)</ul>', article, re.DOTALL))
print(f'Found {len(uls)} UL elements')

for i, ul in enumerate(uls):
    lis = re.findall(r'<li[^>]*>(.*?)</li>', ul.group(1), re.DOTALL)
    print(f'UL#{i+1}: {len(lis)} items')
    for j, li in enumerate(lis[:3]):
        clean = re.sub(r'<[^>]+>', '', li).strip()
        print(f'  {j+1}. {clean[:60]}')
