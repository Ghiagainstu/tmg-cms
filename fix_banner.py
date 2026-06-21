import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'blog', 'baidu-demographics-who-are-these-735m-users.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Find TMG section
h2_match = re.search(r'<h2[^>]*id="tmg"', content)
if h2_match:
    print('Found TMG section at:', h2_match.start())
    # Insert banner before it
    banner_html = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">Key Takeaway</div><p class="takeaway-banner__text">Baidu 735M+ monthly active users represent the core of China internet. Understanding their demographics is essential for effective SEM targeting and content localization.</p></div>\n'
    content = content[:h2_match.start()] + banner_html + content[h2_match.start():]
    
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Added banner to EN baidu-demographics')
else:
    print('TMG section not found')
