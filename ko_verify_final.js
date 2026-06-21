const fs = require('fs');
const path = require('path');

const ws = 'C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website';
const koDir = path.join(ws, 'ko', 'blog');

const files = fs.readdirSync(koDir)
  .filter(f => f.endsWith('.html') && f !== 'index.html')
  .sort();

const results = [];
const missing = [];

for (const f of files) {
  const content = fs.readFileSync(path.join(koDir, f), 'utf-8');
  const slug = f.replace('.html', '');
  const url = 'https://www.tuyuesouxin.cn/ko/blog/' + slug + '/';
  
  const hasCallout = content.includes('callout callout--accent');
  const hasGrid = content.includes('feature-grid');
  const hasTable = content.includes('article-table');
  const hasBanner = content.includes('takeaway-banner');
  const count = [hasCallout, hasGrid, hasTable, hasBanner].filter(Boolean).length;
  
  // Check article length
  const artMatch = content.match(/<article class="article-content reveal">([\s\S]*?)<\/article>/);
  const artLen = artMatch ? artMatch[1].length : 0;
  const h2Count = artMatch ? (artMatch[1].match(/<h2/g) || []).length : 0;
  
  results.push({ slug, count, hasCallout, hasGrid, hasTable, hasBanner, artLen, h2Count });
  
  if (count < 3) {
    const lacks = [];
    if (!hasCallout) lacks.push('callout');
    if (!hasGrid) lacks.push('grid');
    if (!hasTable) lacks.push('table');
    if (!hasBanner) lacks.push('banner');
    missing.push({ slug, url, count, lacks, artLen, h2Count });
  }
}

// Stats
const dist = [0, 0, 0, 0, 0];
results.forEach(r => dist[r.count]++);
console.log('=== KO Blog Visual Enhancement Status ===');
console.log('Total articles: ' + results.length);
console.log('4/4 components: ' + dist[4]);
console.log('3/4 components: ' + dist[3]);
console.log('2/4 components: ' + dist[2]);
console.log('1/4 components: ' + dist[1]);
console.log('0/4 components: ' + dist[0]);

if (missing.length === 0) {
  console.log('\n✅ ALL 118 articles have 3+ visual components!');
} else {
  console.log('\n⚠️ ' + missing.length + ' articles still need attention:');
  console.log('');
  for (const m of missing) {
    console.log(m.url);
    console.log('  ' + m.count + '/4  Missing: ' + m.lacks.join(', ') + '  [' + m.artLen + ' chars, ' + m.h2Count + ' h2]');
  }
}
