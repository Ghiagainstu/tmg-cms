const fs = require('fs');
const path = require('path');

const ws = 'C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website';
const koDir = path.join(ws, 'ko', 'blog');

const files = fs.readdirSync(koDir)
  .filter(f => f.endsWith('.html') && f !== 'index.html')
  .sort();

console.log(`Total KO blog files: ${files.length}\n`);

const results = [];

for (const f of files) {
  const content = fs.readFileSync(path.join(koDir, f), 'utf-8');
  
  // Check for visual enhancement components
  const hasCallout = content.includes('callout callout--accent');
  const hasGrid = content.includes('feature-grid');
  const hasTable = content.includes('article-table');
  const hasBanner = content.includes('takeaway-banner');
  
  // Check if article has real content (not a stub)
  const artMatch = content.match(/<article class="article-content reveal">([\s\S]*?)<\/article>/);
  let articleLen = 0;
  let h2Count = 0;
  let isStub = false;
  
  if (artMatch) {
    const article = artMatch[1];
    articleLen = article.length;
    h2Count = (article.match(/<h2/g) || []).length;
    isStub = article.includes('全文は執筆予定') || article.includes('Full body TBD') || articleLen < 1000;
  }
  
  const componentCount = [hasCallout, hasGrid, hasTable, hasBanner].filter(Boolean).length;
  
  results.push({
    file: f,
    components: componentCount,
    callout: hasCallout,
    grid: hasGrid,
    table: hasTable,
    banner: hasBanner,
    articleLen,
    h2Count,
    isStub,
  });
}

// Summary
const full = results.filter(r => r.components >= 3);
const partial = results.filter(r => r.components > 0 && r.components < 3);
const none = results.filter(r => r.components === 0);
const stubs = results.filter(r => r.isStub);

console.log(`4/4 components: ${results.filter(r => r.components === 4).length}`);
console.log(`3/4 components: ${results.filter(r => r.components === 3).length}`);
console.log(`1-2 components: ${partial.length}`);
console.log(`0 components: ${none.length}`);
console.log(`Stub articles: ${stubs.length}`);

// Show articles with 0 or few components
console.log('\n--- Articles missing visual enhancement ---');
for (const r of results) {
  if (r.components < 3) {
    const missing = [];
    if (!r.callout) missing.push('callout');
    if (!r.grid) missing.push('grid');
    if (!r.table) missing.push('table');
    if (!r.banner) missing.push('banner');
    const stub = r.isStub ? ' [STUB]' : '';
    console.log(`${r.file} (${r.components}/4) missing: ${missing.join(', ')}${stub} [${r.articleLen} chars, ${r.h2Count} h2]`);
  }
}

// Show stubs
if (stubs.length > 0) {
  console.log('\n--- Stub articles (no real content) ---');
  for (const r of stubs) {
    console.log(`${r.file} [${r.articleLen} chars, ${r.h2Count} h2]`);
  }
}
