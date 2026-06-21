import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Fix xiaohongshu-demographics EN
fp = os.path.join(ws, 'blog', 'xiaohongshu-demographics-who-are-these-350m-users.html')
with open(fp, 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('<article class="article-content reveal">')
end = content.find('</article>', start)
article = content[start:end]

# Add callout after first section
first_section_end = article.find('</div>', article.find('article-section'))
if first_section_end > 0:
    insert_pos = start + first_section_end + 6
    
    callout_html = '\n<div class="callout callout--accent"><div class="callout__label">Why This Matters</div><p>Xiaohongshu 350M+ monthly active users are predominantly female, urban, aged 18-35 with above-average spending power. This demographic is the most valuable consumer segment in China.</p></div>\n'
    
    content = content[:insert_pos] + callout_html + content[insert_pos:]
    
    # Add banner
    tmg_match = re.search(r'<h2[^>]*id="[^"]*"[^>]*>.*?TMG.*?</h2>', content, re.DOTALL | re.IGNORECASE)
    if not tmg_match:
        tmg_match = re.search(r'<h2[^>]*id="[^"]*"[^>]*>.*?How TMG.*?</h2>', content, re.DOTALL | re.IGNORECASE)
    
    if tmg_match:
        banner_html = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">Key Takeaway</div><p class="takeaway-banner__text">Xiaohongshu users represent China most influential consumer segment. Understanding their behavior and preferences is essential for brand success on the platform.</p></div>\n'
        content = content[:tmg_match.start()] + banner_html + content[tmg_match.start():]
    
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Enhanced EN: xiaohongshu-demographics-who-are-these-350m-users.html')
