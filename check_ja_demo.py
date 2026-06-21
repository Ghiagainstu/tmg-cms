import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'ja', 'blog', 'baidu-demographics-who-are-these-735m-users.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

print('File size:', len(content))

start = content.find('<article class="article-content reveal">')
end = content.find('</article>', start)
if start >= 0:
    article = content[start:end]
    print(f'Article: {end-start} chars')
    h2s = re.findall(r'<h2[^>]*id="([^"]*)"', article)
    print(f'H2 tags: {len(h2s)}')
    uls = re.findall(r'<ul', article)
    print(f'UL elements: {len(uls)}')
