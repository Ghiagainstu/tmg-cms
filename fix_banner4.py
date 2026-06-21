import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Fix xiaohongshu-demographics EN banner
fp = os.path.join(ws, 'blog', 'xiaohongshu-demographics-who-are-these-350m-users.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Find last H2
h2s = list(re.finditer(r'<h2[^>]*>', content))
print(f'Found {len(h2s)} H2 tags')

# Show last 3
for h2 in h2s[-3:]:
    ctx = content[h2.start():h2.start()+100]
    print(f'  Position {h2.start()}: {ctx[:80]}')

# Insert banner before last H2 (Sources section)
if h2s:
    # Find the Sources or TMG section
    for h2 in reversed(h2s):
        ctx = content[h2.start():h2.start()+100]
        if 'TMG' in ctx or 'Source' in ctx or 'Bottom' in ctx:
            banner_html = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">Key Takeaway</div><p class="takeaway-banner__text">Xiaohongshu users represent China most influential consumer segment. Understanding their behavior and preferences is essential for brand success on the platform.</p></div>\n'
            content = content[:h2.start()] + banner_html + content[h2.start():]
            break
    
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Added banner to EN xiaohongshu-demographics')
