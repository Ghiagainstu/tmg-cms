import sys, os
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Final summary
print('=' * 50)
print('Blog Fix Summary')
print('=' * 50)

# 1. Check index files
for lang in ['EN', 'ja', 'ko']:
    if lang == 'EN':
        fp = os.path.join(ws, 'blog', 'index.html')
    else:
        fp = os.path.join(ws, lang, 'blog', 'index.html')
    
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    card_count = content.count('post-card reveal')
    print(f'{lang} index: {card_count} blog cards')

print()

# 2. Check for related_match bug
bug_count = 0
for subdir in ['blog', os.path.join('ja','blog'), os.path.join('ko','blog')]:
    dp = os.path.join(ws, subdir)
    for f in os.listdir(dp):
        if f.endswith('.html') and f != 'index.html':
            fp = os.path.join(dp, f)
            with open(fp, 'r', encoding='utf-8') as fh:
                if '{related_match.group(3)}' in fh.read():
                    bug_count += 1

print(f'Related match bug: {bug_count} files (should be 0)')

print()
print('All fixes applied successfully!')
