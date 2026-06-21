import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

ws = r'C:\Users\fireh\WorkBuddy\20260326144402\tmg-website'

# Check index files for excerpt issues
print("Checking index file excerpts...")
print("=" * 60)

for lang in ['ja', 'ko']:
    print(f"\n{lang.upper()} Index:")
    
    index_path = os.path.join(ws, lang, 'blog', 'index.html')
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all post-card excerpts
    excerpts = re.findall(r'<p class="post-card__excerpt">(.*?)</p>', content, re.DOTALL)
    
    print(f"Total excerpts: {len(excerpts)}")
    
    # Check for issues
    encoding_issues = 0
    english_only = 0
    good = 0
    
    for excerpt in excerpts:
        has_encoding_issue = bool(re.search(r'[銉銈銇銉銊]', excerpt))
        if lang == 'ja':
            has_native = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', excerpt))
        else:
            has_native = bool(re.search(r'[\uAC00-\uD7AF]', excerpt))
        
        has_english_only = bool(re.match(r'^[a-zA-Z0-9\s\.,!?\-:;()]+$', excerpt.strip()))
        
        if has_encoding_issue:
            encoding_issues += 1
        elif has_english_only and not has_native:
            english_only += 1
        else:
            good += 1
    
    print(f"Good: {good}")
    print(f"English-only: {english_only}")
    print(f"Encoding issues: {encoding_issues}")
    
    # Show examples of issues
    if english_only > 0 or encoding_issues > 0:
        print(f"\nSample issues:")
        count = 0
        for excerpt in excerpts:
            has_encoding_issue = bool(re.search(r'[銉銈銇銉銊]', excerpt))
            if lang == 'ja':
                has_native = bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', excerpt))
            else:
                has_native = bool(re.search(r'[\uAC00-\uD7AF]', excerpt))
            has_english_only = bool(re.match(r'^[a-zA-Z0-9\s\.,!?\-:;()]+$', excerpt.strip()))
            
            if (has_encoding_issue or (has_english_only and not has_native)) and count < 3:
                print(f"  - {excerpt[:80]}...")
                count += 1
