const fs = require('fs');
const path = require('path');

const ws = 'C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website';
const prefixes = ['baidu-', 'bilibili-', 'bing-china-', 'douyin-', 'wechat-', 'xiaohongshu-'];

// Check JA and KO batch articles
for (const lang of ['ja', 'ko']) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${lang.toUpperCase()} batch articles:`);
  
  const dir = path.join(ws, lang, 'blog');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');
  const batch = files.filter(f => prefixes.some(p => f.startsWith(p)));
  
  let tocEn = 0;
  let mixedEn = 0;
  
  for (const f of batch) {
    const content = fs.readFileSync(path.join(dir, f), 'utf-8');
    
    // Check TOC
    const tocMatch = content.match(/<ul class="toc__list">([\s\S]*?)<\/ul>/);
    if (tocMatch) {
      const tocText = tocMatch[1];
      const hasNative = lang === 'ja' 
        ? /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(tocText)
        : /[\uAC00-\uD7AF]/.test(tocText);
      if (!hasNative) tocEn++;
    }
    
    // Check h2 ids in article - are they English?
    const artMatch = content.match(/<article class="article-content reveal">([\s\S]*?)<\/article>/);
    if (artMatch) {
      const article = artMatch[1];
      const h2s = article.match(/<h2[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/h2>/g) || [];
      let enH2 = 0;
      for (const h2 of h2s) {
        const textMatch = h2.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
        if (textMatch) {
          const text = textMatch[1].replace(/<[^>]+>/g, '').trim();
          const hasNative = lang === 'ja'
            ? /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(text)
            : /[\uAC00-\uD7AF]/.test(text);
          if (!hasNative && text.length > 2) enH2++;
        }
      }
      if (enH2 > 0) mixedEn++;
    }
  }
  
  console.log(`  Total batch: ${batch.length}`);
  console.log(`  English TOC: ${tocEn}`);
  console.log(`  English H2 in body: ${mixedEn}`);
}
