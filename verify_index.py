import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Verify all index files
for lang in ['EN', 'ja', 'ko']:
    if lang == 'EN':
        fp = os.path.join(ws, 'blog', 'index.html')
    else:
        fp = os.path.join(ws, lang, 'blog', 'index.html')
    
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    
    card_count = content.count('post-card reveal')
    print(f'{lang} index: {card_count} cards')
