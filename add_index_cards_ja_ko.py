import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Also fix JA and KO index files
for lang in ['ja', 'ko']:
    index_path = os.path.join(ws, lang, 'blog', 'index.html')
    if not os.path.exists(index_path):
        print(f'{lang} index not found')
        continue
    
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Get existing links
    index_links = set(re.findall(r'href="/' + lang + r'/blog/([^/]+)/"', content))
    
    # Get all blog files for this language
    lang_dir = os.path.join(ws, lang, 'blog')
    missing = []
    
    for f in sorted(os.listdir(lang_dir)):
        if not f.endswith('.html') or f == 'index.html':
            continue
        slug = f.replace('.html', '')
        if slug in index_links:
            continue
        
        fp = os.path.join(lang_dir, f)
        with open(fp, 'r', encoding='utf-8') as fobj:
            article = fobj.read()
        
        title_match = re.search(r'<title>([^<]+)</title>', article)
        title = title_match.group(1).replace(' | TMG', '').strip() if title_match else slug
        
        date_match = re.search(r'article-date">([^<]+)<', article)
        date = date_match.group(1).strip() if date_match else '2026年6月18日'
        
        cat_match = re.search(r'article-category">([^<]+)<', article)
        cat = cat_match.group(1).strip() if cat_match else 'China Digital'
        
        desc_match = re.search(r'<meta name="description" content="([^"]+)"', article)
        excerpt = desc_match.group(1).strip()[:150] if desc_match else ''
        
        time_match = re.search(r'article-read-time">([^<]+)<', article)
        read_time = time_match.group(1).strip() if time_match else ('8分で読める' if lang == 'ja' else '8분 읽기')
        
        missing.append({
            'slug': slug,
            'title': title,
            'date': date,
            'cat': cat,
            'excerpt': excerpt,
            'read_time': read_time,
        })
    
    if not missing:
        print(f'{lang}: no missing articles')
        continue
    
    # Generate cards
    cards_html = ''
    for article in missing:
        cat_class = 'post-card__cat--ocean'
        slug = article['slug']
        if slug.startswith('baidu'):
            cat_class = 'post-card__cat--baidu'
        elif slug.startswith('geo') or 'geo' in slug:
            cat_class = 'post-card__cat--geo'
        
        read_more = '続きを読む →' if lang == 'ja' else '더 보기 →'
        
        cards_html += f'''<a href="/{lang}/blog/{article['slug']}/" class="post-card reveal" data-cat="{article['cat'][:10].lower()}">
    <div class="post-card__header">
        <span class="post-card__cat {cat_class}">{article['cat']}</span>
        <span class="post-card__date">{article['date']}</span>
    </div>
    <h2 class="post-card__title">{article['title']}</h2>
    <p class="post-card__excerpt">{article['excerpt']}</p>
    <div class="post-card__footer">
        <span class="post-card__read-time">{article['read_time']}</span>
        <span class="post-card__arrow">{read_more}</span>
    </div>
</a>
'''
    
    # Insert into grid
    grid_match = re.search(r'(<div class="posts-grid">)\s*\n', content)
    if grid_match:
        insert_pos = grid_match.end()
        content = content[:insert_pos] + cards_html + content[insert_pos:]
        
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'{lang}: added {len(missing)} cards')
    else:
        print(f'{lang}: could not find posts-grid')
