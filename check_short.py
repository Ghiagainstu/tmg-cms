import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
dp = os.path.join(ws, 'blog')

short_articles = []
for f in sorted(os.listdir(dp)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    fp = os.path.join(dp, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    start = content.find('<article class="article-content reveal">')
    end = content.find('</article>', start)
    if start < 0 or end < 0:
        continue
    article = content[start:end]
    
    # Count h2 tags after style
    style_end = content.find('</style>')
    after_style = content[style_end:]
    h2_ids = re.findall(r'<h2[^>]*id="([^"]*)"', after_style)
    
    if len(h2_ids) <= 2:
        short_articles.append((f, len(article), h2_ids))

print(f'Short articles (<=2 H2): {len(short_articles)}')
for f, size, ids in short_articles:
    print(f'  {f}: {size} chars, H2s: {ids}')
