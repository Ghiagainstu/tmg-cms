import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check KO read times too
ko_dir = os.path.join(ws, 'ko', 'blog')

print("=" * 70)
print("检查韩语博客阅读时间")
print("=" * 70)

issues = []
good = 0

for f in sorted(os.listdir(ko_dir)):
    if not f.endswith('.html') or f == 'index.html':
        continue
    
    fp = os.path.join(ko_dir, f)
    with open(fp, 'r', encoding='utf-8') as fobj:
        content = fobj.read()
    
    time_match = re.search(r'article-read-time">(.*?)</span>', content)
    if time_match:
        read_time = time_match.group(1).strip()
        if 'min read' in read_time.lower():
            issues.append((f, 'ENGLISH', read_time))
        elif '분' in read_time or '읽기' in read_time:
            good += 1
        else:
            issues.append((f, 'WRONG FORMAT', read_time))
    else:
        issues.append((f, 'MISSING', ''))

print(f"\n总文章数: {len([f for f in os.listdir(ko_dir) if f.endswith('.html') and f != 'index.html'])}")
print(f"正确: {good}")
print(f"问题: {len(issues)}")

if issues:
    print("\n问题文章:")
    for f, issue_type, time_str in issues[:20]:
        print(f"  {f}: {issue_type} - '{time_str}'")
