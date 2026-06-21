import sys, re
sys.stdout.reconfigure(encoding='utf-8')
with open(r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\blog\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

links = re.findall(r'href="/blog/([^/]+)/"', content)
print(f'Found {len(links)} blog links in index')
for link in sorted(set(links)):
    print(f'  {link}')
