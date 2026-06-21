import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Process 12 articles missing table and banner
articles_to_process = [
    'bilibili-genz-marketing.html',
    'bilibili-demographics-who-are-these-gen-z-users.html',
    'bing-china-demographics-who-are-these-users.html',
    'bing-china-premium-audience-guide.html',
    'china-big-tech-ai-monetization-2026.html',
    'douyin-enterprise-account.html',
    'ocean-engine-local-reach.html',
    'tencent-ad-revenue-ai-deep-dive-2026.html',
    'wechat-channels-consumer-electronics.html',
    'wechat-mini-games-desktop.html',
    'wechat-moments-ads.html',
    'xiaohongshu-consumer-research.html',
]

def add_table_and_banner(content, slug, lang='en'):
    """Add table (convert UL) and takeaway banner to article."""
    start = content.find('<article class="article-content reveal">')
    end = content.find('</article>', start)
    if start < 0 or end < 0:
        return content, False
    
    article = content[start:end]
    modified = False
    
    # Find H2 tags
    h2s = list(re.finditer(r'<h2[^>]*id="([^"]*)"[^>]*>(.*?)</h2>', article, re.DOTALL))
    if len(h2s) < 2:
        return content, False
    
    # Add table: convert first UL with 3+ items to table
    ul_match = re.search(r'<ul[^>]*>(.*?)</ul>', article, re.DOTALL)
    if ul_match and 'article-table' not in article:
        ul_content = ul_match.group(1)
        lis = re.findall(r'<li[^>]*>(.*?)</li>', ul_content, re.DOTALL)
        if len(lis) >= 3:
            ul_abs_start = start + ul_match.start()
            ul_abs_end = start + ul_match.end()
            
            table_rows = []
            for li in lis:
                clean = re.sub(r'<[^>]+>', '', li).strip()
                if '—' in clean:
                    parts = clean.split('—', 1)
                    title = parts[0].strip()[:50]
                    desc = parts[1].strip()
                elif ' – ' in clean:
                    parts = clean.split(' – ', 1)
                    title = parts[0].strip()[:50]
                    desc = parts[1].strip()
                else:
                    title = clean[:50]
                    desc = clean
                table_rows.append(f'<tr><td><strong>{title}</strong></td><td>{desc}</td></tr>')
            
            table_html = '\n<table class="article-table"><thead><tr><th>Key Point</th><th>Details</th></tr></thead><tbody>\n'
            table_html += '\n'.join(table_rows)
            table_html += '\n</tbody></table>\n'
            
            content = content[:ul_abs_start] + table_html + content[ul_abs_end:]
            modified = True
            
            # Recalculate positions
            start = content.find('<article class="article-content reveal">')
            end = content.find('</article>', start)
            article = content[start:end]
    
    # Add takeaway banner before the last H2 section
    if 'takeaway-banner' not in content:
        h2s = list(re.finditer(r'<h2[^>]*id="([^"]*)"[^>]*>(.*?)</h2>', article, re.DOTALL))
        if len(h2s) >= 2:
            last_h2 = h2s[-1]
            # Insert before last H2
            insert_pos = start + last_h2.start()
            
            # Generate banner text based on slug
            banner_texts = {
                'bilibili-genz-marketing': ('Key Takeaway', 'Bilibili is the gateway to China Gen Z. With 366M MAU and 107 min daily usage, it offers unmatched engagement for brands targeting youth audiences.'),
                'bilibili-demographics-who-are-these-gen-z-users': ('Key Takeaway', 'Bilibili Gen Z users have high spending power and deep platform engagement. Understanding their behavior is essential for effective marketing.'),
                'bing-china-demographics-who-are-these-users': ('Key Takeaway', 'Bing China users are high-income professionals unreachable on Baidu. This premium audience offers superior ROI for targeted campaigns.'),
                'bing-china-premium-audience-guide': ('Key Takeaway', 'Bing China Premium Audience delivers higher-value conversions than standard search. Essential for B2B and luxury brand advertisers.'),
                'china-big-tech-ai-monetization-2026': ('Key Takeaway', 'Chinese big tech is rapidly monetizing AI across search, ads, and commerce. Brands must adapt strategies to this new AI-native landscape.'),
                'douyin-enterprise-account': ('Key Takeaway', 'Douyin Enterprise Accounts unlock advanced analytics and API access. Essential for brands scaling beyond basic advertising.'),
                'ocean-engine-local-reach': ('Key Takeaway', 'Ocean Engine local reach connects brands with nearby consumers through location-based targeting. Critical for brick-and-mortar businesses.'),
                'tencent-ad-revenue-ai-deep-dive-2026': ('Key Takeaway', 'Tencent ad revenue growth is accelerating with AI integration. WeChat and QQ ads are becoming smarter and more effective.'),
                'wechat-channels-consumer-electronics': ('Key Takeaway', 'WeChat Channels for consumer electronics drives discovery and purchase. Video content converts at 3x the rate of static ads.'),
                'wechat-mini-games-desktop': ('Key Takeaway', 'WeChat Mini Games on desktop opens a new gaming audience. Search ads for mini games see 2x higher engagement on desktop.'),
                'wechat-moments-ads': ('Key Takeaway', 'WeChat Moments ads achieve the highest viewability in China. The trusted social context drives 2x higher engagement than standard display.'),
                'xiaohongshu-consumer-research': ('Key Takeaway', 'Xiaohongshu consumer research reveals purchase intent weeks before traditional search. Brands monitoring this signal intercept customers earlier.'),
            }
            
            title, text = banner_texts.get(slug, ('Key Takeaway', 'Understanding this platform is essential for maximizing advertising ROI in China.'))
            
            if lang == 'ja':
                title = '重要な要点'
                text = 'このプラットフォームの理解は、中国での広告ROI最大化に不可欠です。'
            elif lang == 'ko':
                title = '핵심 요점'
                text = '이 플랫폼을 이해하는 것은 중국에서 광고 ROI를 극대화하는 데 필수적입니다.'
            
            banner_html = f'\n<div class="takeaway-banner"><div class="takeaway-banner__title">{title}</div><p class="takeaway-banner__text">{text}</p></div>\n'
            
            content = content[:insert_pos] + banner_html + content[insert_pos:]
            modified = True
    
    return content, modified

fixed = 0
for f in articles_to_process:
    fp = os.path.join(ws, 'blog', f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    slug = f.replace('.html', '')
    new_content, added = add_table_and_banner(content, slug, 'en')
    
    if added:
        with open(fp, 'w', encoding='utf-8') as fobj:
            fobj.write(new_content)
        fixed += 1
        print(f'Enhanced: {f}')
    else:
        print(f'Skipped: {f}')

print(f'\nEnhanced {fixed} EN files')
