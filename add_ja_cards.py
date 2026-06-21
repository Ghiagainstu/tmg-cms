import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Read current JA index
with open(os.path.join(ws, 'ja', 'blog', 'index.html'), 'r', encoding='utf-8') as f:
    content = f.read()

# Get current links
current_links = set(re.findall(r'href="/ja/blog/([^/]+)/"', content))

# Get all JA blog files
ja_dir = os.path.join(ws, 'ja', 'blog')
missing = []

for f in sorted(os.listdir(ja_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    slug = f.replace('.html', '')
    if slug in current_links:
        continue
    
    # Read article metadata
    fp = os.path.join(ja_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        article = fobj.read()
    
    # Extract metadata
    title_match = re.search(r'<title>([^<]+)</title>', article)
    title = title_match.group(1).replace(' | TMG', '').strip() if title_match else slug
    
    date_match = re.search(r'article-date">([^<]+)<', article)
    date = date_match.group(1).strip() if date_match else '2026年6月18日'
    
    cat_match = re.search(r'article-category">([^<]+)<', article)
    cat = cat_match.group(1).strip() if cat_match else '中国デジタル'
    
    desc_match = re.search(r'<meta name="description" content="([^"]+)"', article)
    excerpt = desc_match.group(1).strip()[:150] if desc_match else ''
    
    time_match = re.search(r'article-read-time">([^<]+)<', article)
    read_time = time_match.group(1).strip() if time_match else '8分で読める'
    
    missing.append({
        'slug': slug,
        'title': title,
        'date': date,
        'cat': cat,
        'excerpt': excerpt,
        'read_time': read_time,
    })

print(f'Found {len(missing)} missing articles')

# Generate cards
cards_html = ''
for article in missing:
    cat_class = 'post-card__cat--ocean'
    
    cards_html += f'''<a href="/ja/blog/{article['slug']}/" class="post-card reveal" data-cat="{article['cat'][:10].lower()}">
    <div class="post-card__header">
        <span class="post-card__cat {cat_class}">{article['cat']}</span>
        <span class="post-card__date">{article['date']}</span>
    </div>
    <h2 class="post-card__title">{article['title']}</h2>
    <p class="post-card__excerpt">{article['excerpt']}</p>
    <div class="post-card__footer">
        <span class="post-card__read-time">{article['read_time']}</span>
        <span class="post-card__arrow">続きを読む →</span>
    </div>
</a>
'''

# Insert into grid
grid_match = re.search(r'(<div class="posts-grid">)\s*\n', content)
if grid_match:
    insert_pos = grid_match.end()
    content = content[:insert_pos] + cards_html + content[insert_pos:]
    
    with open(os.path.join(ws, 'ja', 'blog', 'index.html'), 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'Added {len(missing)} cards to JA index')
else:
    print('Could not find posts-grid')
