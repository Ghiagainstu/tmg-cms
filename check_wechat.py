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

# Show UL#5 with 10 items
ul5 = uls[4]
lis = re.findall(r'<li[^>]*>(.*?)</li>', ul5.group(1), re.DOTALL)
print('UL#5 items (10):')
for i, li in enumerate(lis):
    clean = re.sub(r'<[^>]+>', '', li).strip()
    print(f'  {i+1}. {clean[:80]}')
