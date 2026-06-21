import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'blog', 'baidu-demographics-who-are-these-735m-users.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Find h2 tags without id attribute
h2s = list(re.finditer(r'<h2[^>]*>', content))
print(f'Found {len(h2s)} H2 tags')

# Show last 3
for h2 in h2s[-3:]:
    ctx = content[h2.start():h2.start()+100]
    print(f'  Position {h2.start()}: {ctx[:80]}')

# Insert banner before last H2
if h2s:
    last_h2 = h2s[-1]
    banner_html = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">Key Takeaway</div><p class="takeaway-banner__text">Baidu 735M+ monthly active users represent the core of China internet. Understanding their demographics is essential for effective SEM targeting.</p></div>\n'
    content = content[:last_h2.start()] + banner_html + content[last_h2.start():]
    
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Added banner to EN baidu-demographics')
