import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'blog', 'baidu-advertising-complete-guide-2026.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the actual takeaway-banner element in the article
start = content.find('<article class="article-content reveal">')
end = content.find('</article>', start)
article = content[start:end]

# Check if takeaway-banner is in the article
print('takeaway-banner in article:', 'takeaway-banner' in article)

# Find the last section before CTA
last_h2 = list(re.finditer(r'<h2[^>]*id="([^"]*)"', article))[-1]
print('Last H2:', last_h2.group(1))

# Show what's after the last H2
after_last = article[last_h2.start():]
print('After last H2 (last 500 chars):')
print(after_last[-500:])
