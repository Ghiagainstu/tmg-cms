import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

fp = os.path.join(ws, 'blog', 'baidu-demographics-who-are-these-735m-users.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

# Find where to insert callout - after first section
start = content.find('<article class="article-content reveal">')
end = content.find('</article>', start)
article = content[start:end]

# Find first section end
first_section_end = article.find('</div>', article.find('article-section'))
if first_section_end > 0:
    insert_pos = start + first_section_end + 6  # After </div>
    
    callout_html = '\n<div class="callout callout--accent"><div class="callout__label">Why This Matters</div><p>Baidu demographics data reveals the real China digital landscape. Understanding who uses Baidu and how they search is the foundation of any successful China marketing strategy.</p></div>\n'
    
    content = content[:insert_pos] + callout_html + content[insert_pos:]
    
    # Add banner before TMG section
    tmg_idx = content.find('id="tmg"')
    if tmg_idx > 0:
        # Find the h2 before tmg
        h2_match = re.search(r'<h2[^>]*id="tmg"', content)
        if h2_match:
            banner_html = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">Key Takeaway</div><p class="takeaway-banner__text">Baidu 735M+ monthly active users represent the core of China internet. Understanding their demographics is essential for effective SEM targeting and content localization.</p></div>\n'
            content = content[:h2_match.start()] + banner_html + content[h2_match.start():]
    
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Enhanced EN: baidu-demographics-who-are-these-735m-users.html')
