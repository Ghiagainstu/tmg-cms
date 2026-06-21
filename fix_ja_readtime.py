import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
ja_dir = os.path.join(ws, 'ja', 'blog')

# Fix all English read times to Japanese format
fixed = 0

for f in sorted(os.listdir(ja_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    
    fp = os.path.join(ja_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    # Find read time
    time_match = re.search(r'article-read-time">(.*?)</span>', content)
    if not time_match:
        continue
    
    read_time = time_match.group(1).strip()
    
    # Check if English format
    if 'min read' in read_time.lower():
        # Extract number
        num_match = re.search(r'(\d+)', read_time)
        if num_match:
            num = num_match.group(1)
            new_time = f'{num}分で読める'
            content = content.replace(
                f'article-read-time">{read_time}</span>',
                f'article-read-time">{new_time}</span>'
            )
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed += 1

print(f"Fixed {fixed} articles read time")
