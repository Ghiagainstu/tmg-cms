const fs = require('fs');
const path = require('path');

const ws = 'C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website';
const prefixes = ['baidu-', 'bilibili-', 'bing-china-', 'douyin-', 'wechat-', 'xiaohongshu-'];

// Show one example article structure
const f = 'bilibili-ecommerce-search-ads.html';
const content = fs.readFileSync(path.join(ws, 'ja', 'blog', f), 'utf-8');

const artMatch = content.match(/<article class="article-content reveal">([\s\S]*?)<\/article>/);
if (artMatch) {
  const article = artMatch[1];
  // Get all h2 tags
  const h2Regex = /<h2[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/h2>/g;
  let m;
  console.log('H2 tags in JA article:');
  while ((m = h2Regex.exec(article)) !== null) {
    const id = m[1];
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    console.log(`  id="${id}" text="${text.substring(0, 60)}"`);
  }
}

// Also check EN version for comparison
const enContent = fs.readFileSync(path.join(ws, 'blog', f), 'utf-8');
const enArtMatch = enContent.match(/<article class="article-content reveal">([\s\S]*?)<\/article>/);
if (enArtMatch) {
  const article = enArtMatch[1];
  const h2Regex = /<h2[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/h2>/g;
  let m;
  console.log('\nH2 tags in EN article:');
  while ((m = h2Regex.exec(article)) !== null) {
    console.log(`  id="${m[1]}" text="${m[2].replace(/<[^>]+>/g, '').trim().substring(0, 60)}"`);
  }
}
