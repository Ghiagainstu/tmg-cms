const fs = require("node:fs");
const path = require("node:path");

const base = "D:\\WorkBuddy\\Obsidian\\TMG-Blog\\Platform Topic Batch";

// Define all 60 topics with human-readable titles and TMG angles
const topics = {
  WeChat: [
    { slug: "wechat-brand-zone-search-2026", title: "WeChat Brand Zone Search: How Brands Own the Top Spot", tmg: "Brand Zone lets brands dominate WeChat Search with custom modules, mini-program links, and product showcases.", data: ["WeChat Search MAU: 800M+", "Brand Zone CTR 3-5x higher than standard ads", "Mini Program integration enables direct conversion"] },
    { slug: "wechat-channels-search-discovery", title: "WeChat Channels Search Discovery: The New Content SEO", tmg: "Channels content now appears in WeChat Search results, creating a new SEO-like optimization opportunity for video content.", data: ["Channels ad revenue +50% YoY", "Video content indexed in search results", "Cross-pollination between Channels and Search"] },
    { slug: "wechat-mini-program-search-ads", title: "WeChat Mini Program Search Ads: Turning Apps Into Discoverable Assets", tmg: "Mini Programs are now searchable and ad-eligible, turning previously hidden app content into discoverable commerce.", data: ["Mini Program GMV +18%", "Search ads can surface Mini Program content", "In-app content becomes externally discoverable"] },
    { slug: "wechat-mini-store-search-ads", title: "WeChat Mini Store Search Ads: E-Commerce Meets Search", tmg: "Mini Store products now appear in WeChat Search, creating a direct path from search query to purchase.", data: ["Mini Store transaction volume +20%", "Product listings in search results", "Direct purchase without leaving WeChat"] },
    { slug: "wechat-omni-search-brand-strategy", title: "Omni-Search Brand Strategy on WeChat: A Unified Approach", tmg: "Brands need a unified search strategy across WeChat ecosystem: Search, Channels, Mini Programs, and Moments.", data: ["WeChat search ads +60% YoY", "Multiple touchpoints in single search journey", "Cross-module attribution needed"] },
    { slug: "wechat-private-domain-search-retention", title: "Private Domain + Search: WeChat's Retention Power Combo", tmg: "Combining private domain (groups, official accounts) with search ads creates a powerful retention loop.", data: ["Private domain drives repeat search behavior", "Official account content indexed in search", "Group-to-search conversion paths"] },
    { slug: "wechat-search-ads-2026", title: "WeChat Search Ads in 2026: The Complete Performance Guide", tmg: "Comprehensive guide to WeChat Search advertising: formats, targeting, bidding, and optimization for 2026.", data: ["Search ad revenue +60% YoY", "AI-powered ad CTR +15-22%", "New ad formats: service cards, product cards"] },
    { slug: "wechat-search-creative-testing", title: "WeChat Search Creative Testing: What Works in 2026", tmg: "Data-driven creative testing methodology for WeChat Search ads, including AI-generated creative variants.", data: ["AI creative tools: Miaosi assistant", "A/B testing framework for search ads", "Creative formats: text, image, video, service cards"] },
    { slug: "wechat-search-funnel-optimization", title: "WeChat Search Funnel Optimization: From Click to Conversion", tmg: "End-to-end funnel optimization for WeChat Search: impression → click → Mini Program → conversion → retention.", data: ["Mini Program conversion tracking", "Multi-step attribution models", "Cross-module funnel analysis"] },
    { slug: "wechat-service-search-conversion", title: "WeChat Service Search: Converting Queries Into Customers", tmg: "Service-based searches on WeChat (doctor, restaurant, travel) have high conversion intent. How brands capture this.", data: ["Service search queries growing rapidly", "Mini Program booking integration", "Location-based service ads"] }
  ],
  Douyin: [
    { slug: "douyin-brand-search-2026", title: "Douyin Brand Search 2026: How Brands Win the Search Bar", tmg: "Brand search on Douyin is growing as users shift from passive browsing to active product discovery.", data: ["Douyin daily searches: 5.3B+", "Brand search CTR 2-3x higher than feed ads", "Search intent = higher purchase probability"] },
    { slug: "douyin-content-search-discovery", title: "Content-to-Search Discovery on Douyin: The New Purchase Path", tmg: "Douyin users discover products through content, then search to compare and purchase. Optimizing this path is key.", data: ["Content discovery → search → purchase funnel", "Video content drives search behavior", "Hashtag and topic search optimization"] },
    { slug: "douyin-ecommerce-search-2026", title: "Douyin E-Commerce Search Ads: The 2026 Playbook", tmg: "Complete guide to Douyin's e-commerce search advertising: product cards, shop search, and marketplace ads.", data: ["Product card commission-free expansion", "Shop search ads with product feeds", "Marketplace search ranking factors"] },
    { slug: "douyin-live-search-conversion", title: "Live Commerce + Search: Douyin's Conversion Powerhouse", tmg: "Combining live commerce with search ads creates the highest-converting path on Douyin.", data: ["Live commerce + search = closed-loop conversion", "Qianchuan live bidding optimization", "Real-time search during livestreams"] },
    { slug: "douyin-local-life-search-ads", title: "Douyin Local Life Search Ads: Capturing Nearby Demand", tmg: "Douyin's local life search (restaurants, services, entertainment) is a growing ad channel for local businesses.", data: ["Local life GMV growing rapidly", "POI-based search targeting", "Store visit conversion tracking"] },
    { slug: "douyin-search-ads-ranking-2026", title: "Douyin Search Ad Ranking: How the Algorithm Decides", tmg: "Understanding Douyin's search ad ranking factors: bid, relevance, quality score, and user behavior signals.", data: ["Ranking factors: bid × quality × relevance", "AI-powered ranking optimization", "Quality score components explained"] },
    { slug: "douyin-search-competitive-analysis", title: "Competitive Analysis for Douyin Search Ads", tmg: "How to analyze competitor search ad strategies on Douyin and find gaps to exploit.", data: ["Competitor keyword analysis tools", "Share of voice tracking", "Market gap identification methods"] },
    { slug: "douyin-search-creative-lab", title: "Douyin Search Creative Lab: High-Performing Ad Formats", tmg: "Testing and optimizing search ad creative on Douyin: formats, hooks, and AI-generated variants.", data: ["Top-performing creative formats", "AI creative generation via Qianchuan", "Hook testing methodology"] },
    { slug: "douyin-search-omni-funnel", title: "Douyin Omni-Funnel Search Strategy", tmg: "Unified search strategy across Douyin's ecosystem: feed, search, live, shop, and local life.", data: ["Cross-touchpoint attribution", "Omni-funnel budget allocation", "Search across all Douyin surfaces"] },
    { slug: "douyin-sem-vs-search-feed-2026", title: "SEM vs Search Feed on Douyin: Which Delivers Better ROI?", tmg: "Comparing traditional SEM-style search ads with Douyin's algorithmic search feed ads.", data: ["SEM: keyword-targeted, CPC bidding", "Search feed: AI-matched, oCPM optimization", "ROI comparison across ad types"] }
  ],
  Baidu: [
    { slug: "baidu-ai-search-ads-2026", title: "Baidu AI Search Ads: The New Frontier of Search Advertising", tmg: "Baidu's AI-generated search results are changing ad formats. Brands must adapt to AI-native ad placements.", data: ["AI content in search: 35% → 64%", "Smart Search MAU: 735M", "New AI-native ad formats emerging"] },
    { slug: "baidu-brand-zone-2026", title: "Baidu Brand Zone 2026: Dominating the Search Results Page", tmg: "Brand Zone on Baidu gives brands a custom presence at the top of search results with rich media modules.", data: ["Brand Zone impressions: premium placement", "Custom modules: products, news, videos", "CTR 3-5x higher than standard ads"] },
    { slug: "baidu-ecommerce-search-ads-2026", title: "Baidu E-Commerce Search Ads: Competing in the AI Era", tmg: "Baidu's e-commerce search ads face disruption from AI but still deliver for high-intent product queries.", data: ["Online marketing revenue -15% YoY", "Product search still high-intent", "AI integration changing ad formats"] },
    { slug: "baidu-local-service-search-ads", title: "Baidu Local Service Ads: Capturing Nearby Customers", tmg: "Baidu's local service ads connect businesses with nearby searchers for immediate service needs.", data: ["Location-based ad targeting", "Service category expansion", "Map integration for local discovery"] },
    { slug: "baidu-search-creative-automation", title: "Baidu Search Creative Automation: AI-Powered Ad Creation", tmg: "Baidu's AI tools automate search ad creative: headlines, descriptions, and extensions.", data: ["AI-generated ad copy optimization", "Dynamic creative assembly", "Performance-based creative rotation"] },
    { slug: "baidu-search-keyword-expansion-ai", title: "AI-Powered Keyword Expansion on Baidu Search", tmg: "Baidu's AI expands keyword lists automatically, finding new search queries that drive conversions.", data: ["Smart keyword expansion tools", "Search query mining", "Negative keyword automation"] },
    { slug: "baidu-search-offline-to-online", title: "Baidu Search: Bridging Offline to Online for Brands", tmg: "How Baidu search ads drive offline store visits and service bookings through O2O integration.", data: ["O2O conversion tracking", "Store visit attribution", "QR code to search funnel"] },
    { slug: "baidu-search-privacy-compliance-2026", title: "Baidu Search Privacy Compliance: What Advertisers Must Know", tmg: "China's data privacy regulations affect Baidu search advertising. Compliance guide for brands.", data: ["PIPL compliance requirements", "First-party data strategies", "Consent-based targeting approaches"] },
    { slug: "baidu-search-quality-score-advanced", title: "Advanced Baidu Quality Score Optimization", tmg: "Deep dive into Baidu's quality score factors and how to improve ad rank and reduce CPC.", data: ["Quality score components", "Landing page optimization", "CTR improvement strategies"] },
    { slug: "baidu-smart-mini-program-search-ads", title: "Baidu Smart Mini Program Search Ads", tmg: "Baidu's Smart Mini Programs integrate with search ads for seamless in-SERP experiences.", data: ["Smart Mini Program ad formats", "In-search conversion experiences", "Cross-device tracking"] }
  ],
  Xiaohongshu: [
    { slug: "xiaohongshu-brand-zone-search", title: "Xiaohongshu Brand Zone: Premium Search Presence", tmg: "Brand Zone on Xiaohongshu gives brands a curated search presence with product showcases and KOL content.", data: ["350M+ MAU on Xiaohongshu", "Brand Zone search CTR premium", "KOL content integration"] },
    { slug: "xiaohongshu-category-search-growth", title: "Category Search Growth on Xiaohongshu: Finding Your Niche", tmg: "Category-level search on Xiaohongshu is growing. Brands that own category keywords win discovery.", data: ["Category search volume growing 40%+ YoY", "Niche keyword opportunities", "Content-to-search optimization"] },
    { slug: "xiaohongshu-local-business-search", title: "Xiaohongshu Local Business Search: The New Yelp of China", tmg: "Xiaohongshu is becoming the go-to platform for local business discovery, especially for beauty, food, and lifestyle.", data: ["Local search queries growing rapidly", "POI and store page optimization", "Review and rating system impact"] },
    { slug: "xiaohongshu-product-search-ads", title: "Xiaohongshu Product Search Ads: From Discovery to Purchase", tmg: "Product search ads on Xiaohongshu bridge the gap between content discovery and e-commerce purchase.", data: ["Product card search ads", "Shopping integration in search", "Content-commerce attribution"] },
    { slug: "xiaohongshu-search-ads-2026", title: "Xiaohongshu Search Ads 2026: The Complete Guide", tmg: "Comprehensive guide to Xiaohongshu search advertising: formats, targeting, bidding, and best practices.", data: ["Search ad formats: note, product, brand", "Targeting by interest and behavior", "Bidding strategies for different objectives"] },
    { slug: "xiaohongshu-search-creative-testing", title: "Xiaohongshu Search Creative Testing: What Converts", tmg: "Testing search ad creative on Xiaohongshu: note-style ads, product cards, and visual search formats.", data: ["Note-style ad performance data", "Visual vs text creative testing", "UGC-style creative outperforms polished ads"] },
    { slug: "xiaohongshu-search-funnel-2026", title: "Xiaohongshu Search Funnel: From Impression to Loyalty", tmg: "Building a complete search funnel on Xiaohongshu from awareness through purchase and advocacy.", data: ["Full-funnel search strategy", "Attribution across touchpoints", "Post-purchase content loop"] },
    { slug: "xiaohongshu-search-koc-strategy", title: "KOC Search Strategy on Xiaohongshu: Authentic Discovery", tmg: "Key Opinion Consumers (KOCs) drive authentic search results on Xiaohongshu. How brands leverage this.", data: ["KOC content ranks higher in search", "Authentic reviews drive conversion", "KOC seeding strategies"] },
    { slug: "xiaohongshu-search-omni-attribution", title: "Xiaohongshu Omni-Attribution: Measuring Search Impact", tmg: "Attribution models for Xiaohongshu search: measuring the true impact of search ads across the customer journey.", data: ["Multi-touch attribution models", "Cross-platform measurement", "Incremental lift testing"] },
    { slug: "xiaohongshu-search-seo-vs-sem", title: "Xiaohongshu SEO vs SEM: Organic vs Paid Search Strategy", tmg: "Balancing organic SEO and paid SEM on Xiaohongshu for maximum search visibility.", data: ["Organic search optimization tactics", "Paid search bidding strategies", "SEO+SEM synergy effects"] }
  ],
  Bilibili: [
    { slug: "bilibili-brand-search-2026", title: "Bilibili Brand Search 2026: Reaching Gen-Z Through Search", tmg: "Brand search on Bilibili connects advertisers with 340M+ young users actively searching for content.", data: ["340M+ MAU, 65% under 30", "Brand search ad formats", "Gen-Z search behavior patterns"] },
    { slug: "bilibili-creator-search-strategy", title: "Creator Search Strategy on Bilibili: KOL-Driven Discovery", tmg: "Bilibili's creator ecosystem drives search behavior. Brands can leverage KOL content for search visibility.", data: ["Creator content indexed in search", "KOL collaboration for search SEO", "UP主 partnership models"] },
    { slug: "bilibili-ecommerce-search-ads", title: "Bilibili E-Commerce Search Ads: Selling to Gen-Z", tmg: "Bilibili's e-commerce search ads target Gen-Z shoppers with content-integrated product discovery.", data: ["Gen-Z spending power growing", "Content-commerce integration", "Product search ad formats"] },
    { slug: "bilibili-gaming-search-ads", title: "Bilibili Gaming Search Ads: Reaching China's Gamers", tmg: "Bilibili is the #1 platform for gaming content. Search ads reach gamers at the moment of interest.", data: ["Gaming content dominates Bilibili", "Game search ad formats", "Pre-registration and install campaigns"] },
    { slug: "bilibili-search-ads-2026", title: "Bilibili Search Ads 2026: Complete Advertising Guide", tmg: "Comprehensive guide to Bilibili search advertising: formats, targeting, and optimization for 2026.", data: ["Search ad revenue growing", "New ad formats: pause ads, in-feed", "Targeting by interest and content type"] },
    { slug: "bilibili-search-content-matching", title: "Bilibili Search Content Matching: Contextual Ad Placement", tmg: "Bilibili's search matches ads to content context, ensuring brand safety and relevance.", data: ["Content-matched ad placement", "Brand safety controls", "Contextual targeting accuracy"] },
    { slug: "bilibili-search-creative-lab", title: "Bilibili Search Creative Lab: Ads That Gen-Z Actually Clicks", tmg: "Creative testing for Bilibili search ads: what works with Gen-Z audiences.", data: ["Gen-Z creative preferences", "Authentic vs polished creative", "A/B testing framework"] },
    { slug: "bilibili-search-funnel-guide", title: "Bilibili Search Funnel Guide: Awareness to Conversion", tmg: "Building a complete search funnel on Bilibili from brand awareness to purchase conversion.", data: ["Full-funnel search strategy", "Multi-step attribution", "Cross-format funnel optimization"] },
    { slug: "bilibili-search-performance-2026", title: "Bilibili Search Performance Optimization 2026", tmg: "Performance optimization techniques for Bilibili search ads: bidding, targeting, and creative rotation.", data: ["Performance benchmarks", "Bid optimization strategies", "Creative rotation best practices"] },
    { slug: "bilibili-youth-search-ads", title: "Youth Search Ads on Bilibili: Capturing the Next Generation", tmg: "Reaching China's youth through Bilibili search: trends, behaviors, and advertising strategies.", data: ["Youth search behavior data", "Campus and education ad targeting", "Youth brand building through search"] }
  ],
  BingChina: [
    { slug: "bing-china-b2b-search-2026", title: "Bing China B2B Search Ads: The Enterprise Opportunity", tmg: "Bing China's B2B search ads reach enterprise decision-makers who use Bing for work-related searches.", data: ["B2B search intent on Bing", "Enterprise keyword targeting", "LinkedIn integration for B2B"] },
    { slug: "bing-china-brand-search-2026", title: "Bing China Brand Search 2026: Premium Placement Strategy", tmg: "Brand search on Bing China offers premium placement with lower competition than Baidu.", data: ["Lower CPC than Baidu", "Premium audience demographics", "Cross-border search queries"] },
    { slug: "bing-china-copilot-search-ads", title: "Bing China Copilot Search Ads: AI-Native Advertising", tmg: "Microsoft Copilot integration with Bing China creates new AI-native ad formats for advertisers.", data: ["Copilot AI integration", "Conversational ad formats", "AI-generated product recommendations"] },
    { slug: "bing-china-cross-border-search-ads", title: "Cross-Border Search Ads on Bing China", tmg: "Bing China captures cross-border shopping searches from Chinese consumers buying international products.", data: ["Cross-border e-commerce queries", "International brand discovery", "Multi-language search targeting"] },
    { slug: "bing-china-education-search-ads", title: "Bing China Education Search Ads: Reaching Students", tmg: "Education-related searches on Bing China reach students and professionals seeking courses and certifications.", data: ["Education search volume", "Course and certification targeting", "Student demographic reach"] },
    { slug: "bing-china-local-search-ads", title: "Bing China Local Search Ads: Geo-Targeted Advertising", tmg: "Local search ads on Bing China target users searching for nearby services and businesses.", data: ["Location-based targeting", "Maps integration", "Local business ad formats"] },
    { slug: "bing-china-performance-max-2026", title: "Bing China Performance Max: Automated Campaign Optimization", tmg: "Performance Max campaigns on Bing China use AI to optimize across all Microsoft surfaces.", data: ["AI-powered bid optimization", "Cross-surface campaign delivery", "Automated creative assembly"] },
    { slug: "bing-china-retail-search-ads", title: "Bing China Retail Search Ads: E-Commerce on Microsoft", tmg: "Retail search ads on Bing China connect brands with shoppers searching for products.", data: ["Product listing ads", "Shopping campaign formats", "Retail-specific targeting"] },
    { slug: "bing-china-search-creative-guide", title: "Bing China Search Creative Guide: Best Practices", tmg: "Creative best practices for Bing China search ads: headlines, descriptions, extensions, and responsive ads.", data: ["Responsive search ad format", "Ad extension strategies", "Creative testing methodology"] },
    { slug: "bing-china-travel-search-ads", title: "Bing China Travel Search Ads: Reaching Travelers", tmg: "Travel search ads on Bing China reach users planning trips, booking hotels, and researching destinations.", data: ["Travel search intent data", "Hotel and flight ad formats", "Seasonal travel targeting"] }
  ]
};

// Generate proper format for each topic file
function generateTopicFile(slug, title, platform, tmg, data, sourceUrl, category) {
  var blogUrl = `https://www.tuyuesouxin.cn/blog/${slug}/`;
  var jaBlogUrl = `https://www.tuyuesouxin.cn/ja/blog/${slug}/`;
  var koBlogUrl = `https://www.tuyuesouxin.cn/ko/blog/${slug}/`;

  return `---
title: "${title}"
slug: "${slug}"
language: en
category: "${category}"
status: draft
publish_date: "2026-06-17"
source_data: "platform-topic-research"
source_url: "${sourceUrl}"
blog_url: "${blogUrl}"
online_url: ""
tags: [${platform}, search-ads, advertising, 2026]
---

# ${title}

## TMG Perspective

${tmg}

## Key Data Points

${data.map(d => "- " + d).join("\n")}

## Source + Links

- Blog URL (EN): ${blogUrl}
- Blog URL (JA): ${jaBlogUrl}
- Blog URL (KO): ${koBlogUrl}
- Source: ${sourceUrl}
- Status: Draft
- Next Step: Write full EN/JA/KO blog body
`;
}

// Generate README for each batch
function generateBatchReadme(platform, topics, sourceUrl, category) {
  return `---
title: "${platform} Topic Batch"
slug: "platform-topic-batch-${platform.toLowerCase()}"
language: en
category: "${category}"
status: draft
publish_date: "2026-06-17"
source_data: "platform-search-recommendation"
source_url: "${sourceUrl}"
blog_url: "https://www.tuyuesouxin.cn/blog/"
online_url: ""
tags: [${platform}, topic-batch, planning]
---

# ${platform} Topic Batch — Recommended Blog Topics

## Summary

${topics.length} recommended blog topics for ${platform} advertising content. All topics are in draft status and pending full blog body writing.

## Recommended Topics

${topics.map((t, i) => `${i+1}. **${t.title}** — \`${t.slug}\``).join("\n")}

## Key Data Highlights

${topics.slice(0, 5).map(t => "- " + t.data[0]).join("\n")}

## Source + Links

- Source: ${sourceUrl}
- Status: Draft
- All topics require EN/JA/KO blog body writing
`;
}

// Source URLs per platform
const sourceUrls = {
  WeChat: "https://ad.weixin.qq.com/",
  Douyin: "https://www.oceanengine.com/",
  Baidu: "https://e.baidu.com/",
  Xiaohongshu: "https://www.xiaohongshu.com/brand",
  Bilibili: "https://member.bilibili.com/platform/ad",
  BingChina: "https://ads.microsoft.com/zh-cn"
};

const categories = {
  WeChat: "WeChat / Search Ads",
  Douyin: "Douyin / Search Ads",
  Baidu: "Baidu / Search Ads",
  Xiaohongshu: "Xiaohongshu / Search Ads",
  Bilibili: "Bilibili / Search Ads",
  BingChina: "Bing China / Search Ads"
};

var results = [];

for (var platform of Object.keys(topics)) {
  var batchDir = path.join(base, platform);
  fs.mkdirSync(batchDir, { recursive: true });
  
  var platformTopics = topics[platform];
  
  // Write README
  var readme = generateBatchReadme(platform, platformTopics, sourceUrls[platform], categories[platform]);
  fs.writeFileSync(path.join(batchDir, "README.md"), readme, "utf8");
  results.push(`${platform}/README.md: ${readme.length} chars`);
  
  // Write each topic file
  for (var t of platformTopics) {
    var content = generateTopicFile(t.slug, t.title, platform, t.tmg, t.data, sourceUrls[platform], categories[platform]);
    fs.writeFileSync(path.join(batchDir, t.slug + ".md"), content, "utf8");
    results.push(`${platform}/${t.slug}.md: ${content.length} chars`);
  }
}

console.log(`Total files written: ${results.length}`);
console.log("Sample: " + results[0]);