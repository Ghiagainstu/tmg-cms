import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'
ko_dir = os.path.join(ws, 'ko', 'blog')

# Find remaining KO read time issues
print("Remaining KO read time issues:")
print("-" * 50)

for f in sorted(os.listdir(ko_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    
    fp = os.path.join(ko_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    time_match = re.search(r'article-read-time">(.*?)</span>', content)
    if time_match:
        read_time = time_match.group(1).strip()
        if '분' not in read_time and '읽기' not in read_time:
            print(f"{f}: '{read_time}'")
