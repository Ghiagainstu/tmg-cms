import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'ko', 'blog', 'ocean-engine-overview.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Check file size and structure
print('File size:', len(content))

# Find article section
start = content.find('<article class="article-content reveal">')
end = content.find('</article>', start)
if start >= 0:
    article = content[start:end]
    print(f'Article: {end-start} chars')
    
    # Find H2 tags
    h2s = list(re.finditer(r'<h2[^>]*>', article))
    print(f'H2 tags in article: {len(h2s)}')
    
    # Find UL lists
    uls = list(re.finditer(r'<ul', article))
    print(f'UL elements: {len(uls)}')
