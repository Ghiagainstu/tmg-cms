# JA Blog 审计报告 — 视觉增强组件 + 英文残留问题

**生成日期**: 2026-06-19  
**总文章数**: 118  
**有问题的文章**: 118（100%）

---

## 一、问题总览

| 类别 | 文章数 | 说明 |
|------|--------|------|
| 缺少 visual 组件 | 118 | 所有文章都至少缺少1个组件 |
| 0/4 组件 | 10 | 完全没有增强 |
| 1/4 组件 | 49 | 只有 callout |
| 2/4 组件 | 45 | 缺2个组件 |
| 3/4 组件 | 14 | 只缺 article-table |
| 英文 callout 标签 | 23 | "Key Insight"/"Market Signal" |
| 英文 takeaway 标题 | 16 | "Key Takeaway" |
| 英文 TOC 条目 | 15 | "Key Data" |
| 英文残留词汇 | 17+ | "significantly"/"massive"/"uniquely" |
| 阅读时间格式不统一 | 17种 | "X分で読める" vs "読了まで約X分" |
| 文章过短 (<2000字) | 17 | 内容不完整 |

---

## 二、缺失组件分类

### A. 0/4 组件（完全无增强）— 10篇

| 文章 slug | 缺失组件 |
|-----------|----------|
| ad-billing-models-explained | callout, feature-grid, article-table, takeaway-banner |
| baidu-demographics-who-are-these-735m-users | callout, feature-grid, article-table, takeaway-banner |
| cpm-is-rising-bad | callout, feature-grid, article-table, takeaway-banner |
| cpm-ocpm-ecpm-explained | callout, feature-grid, article-table, takeaway-banner |
| deepseek-v4-price-cut-geo | callout, feature-grid, article-table, takeaway-banner |
| geo-channel-weight-2026 | callout, feature-grid, article-table, takeaway-banner |
| kuaishou-demographics-who-are-these-400m-users | callout, feature-grid, article-table, takeaway-banner |
| pangle-ads | callout, feature-grid, article-table, takeaway-banner |
| smart-bidding-strategies-explained | callout, feature-grid, article-table, takeaway-banner |
| tencent-ads-home-furnishing-ja | callout, feature-grid, article-table, takeaway-banner |

**修复**: 需要添加全部4个组件。

---

### B. 1/4 组件（只有 callout）— 49篇

这些文章已有 `callout callout--accent`，但缺少 `feature-grid`、`article-table`、`takeaway-banner`。

| 文章 slug | 额外问题 |
|-----------|----------|
| douyin-brand-search-2026 | callout label 英文: "Market Signal" |
| douyin-live-search-conversion | callout label 英文: "Market Signal" |
| wechat-brand-zone-search-2026 | callout label 英文: "Market Signal" |
| wechat-service-search-conversion | callout label 英文: "Market Signal" |
| xiaohongshu-brand-zone-search | callout label 英文: "Market Signal" |
| xiaohongshu-local-business-search | callout label 英文: "Market Signal" + body 含 "significantly"/"uniquely" |
| 618-2026-ai-takedown-shopping-festival | — |
| baidu-ai-search-ads-2026 | — |
| baidu-brand-zone-2026 | — |
| baidu-ecommerce-search-ads-2026 | — |
| baidu-local-service-search-ads | — |
| baidu-search-creative-automation | — |
| baidu-search-keyword-expansion-ai | — |
| baidu-search-offline-to-online | — |
| baidu-search-privacy-compliance-2026 | — |
| baidu-search-quality-score-advanced | — |
| baidu-smart-mini-program-search-ads | — |
| bilibili-brand-search-2026 | — |
| bilibili-creator-search-strategy | — |
| bilibili-ecommerce-search-ads | body 含 "significantly"/"massive"/"uniquely" |
| bilibili-gaming-search-ads | — |
| bilibili-search-ads-2026 | — |
| deepseek-74b-funding-tencent-leads | — |
| douyin-content-search-discovery | — |
| douyin-ecommerce-search-2026 | — |
| douyin-local-life-search-ads | — |
| douyin-search-ads-ranking-2026 | — |
| douyin-search-competitive-analysis | — |
| douyin-search-creative-lab | — |
| douyin-search-omni-funnel | — |
| douyin-sem-vs-search-feed-2026 | — |
| pentagon-blacklists-alibaba-baidu-advertisers | — |
| tencent-influencer-marketing | — |
| wechat-channels-search-discovery | — |
| wechat-mini-program-search-ads | — |
| wechat-mini-store-search-ads | — |
| wechat-omni-search-brand-strategy | — |
| wechat-private-domain-search-retention | — |
| wechat-search-ads-2026 | — |
| wechat-search-creative-testing | — |
| wechat-search-funnel-optimization | — |
| xiaohongshu-category-search-growth | — |
| xiaohongshu-product-search-ads | — |
| xiaohongshu-search-ads-2026 | — |
| xiaohongshu-search-creative-testing | — |
| xiaohongshu-search-funnel-2026 | — |
| xiaohongshu-search-koc-strategy | — |
| xiaohongshu-search-omni-attribution | — |
| xiaohongshu-search-seo-vs-sem | — |

**修复**: 需要添加 feature-grid + article-table + takeaway-banner。标红的还需要修复英文标签。

---

### C. 2/4 组件 — 45篇

#### C1. 缺 feature-grid + article-table（有 callout + takeaway-banner）— 16篇

| 文章 slug | 额外问题 |
|-----------|----------|
| bilibili-search-content-matching | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bilibili-search-creative-lab | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bilibili-search-funnel-guide | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bilibili-search-performance-2026 | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bilibili-youth-search-ads | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bing-china-b2b-search-2026 | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bing-china-brand-search-2026 | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bing-china-copilot-search-ads | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bing-china-cross-border-search-ads | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bing-china-education-search-ads | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bing-china-local-search-ads | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bing-china-performance-max-2026 | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bing-china-retail-search-ads | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bing-china-search-creative-guide | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| bing-china-travel-search-ads | TOC英文"Key Data" + callout英文"Key Insight" + banner英文"Key Takeaway" + body含"significantly"/"Leveraging" |
| baidu-q1-2026-ai-revenue | banner英文"Key Takeaway" |

**修复**: 需要添加 feature-grid + article-table。还需要修复英文标签/词汇。

#### C2. 缺 feature-grid + article-table（其他）— 14篇

| 文章 slug | 额外问题 |
|-----------|----------|
| bilibili-demographics-who-are-these-gen-z-users | callout含 emoji 标签 |
| bing-china-demographics-who-are-these-users | — |
| bing-china-premium-audience-guide | — |
| china-big-tech-ai-monetization-2026 | callout英文"Key Insight" |
| doubao-goes-paid-what-advertisers-need-to-know | — |
| geo-market-2026-midyear | — |
| tencent-ad-revenue-ai-deep-dive-2026 | callout英文"Key Insight" |
| tencent-hy-memory | — |
| wechat-ai-agent-coming-for-advertisers | — |
| xiaohongshu-618-guide-for-international-brands | — |
| xiaohongshu-demographics-who-are-these-350m-users | — |
| doubao-ads-geo-still-worth-it | — |
| attribution-models-guide | callout含 emoji + 英文 "Key Insight"/"Pro Tip"/"Watch Out" |

#### C3. 缺 article-table + takeaway-banner — 15篇

| 文章 slug |
|-----------|
| china-mobile-internet-spring-2026 |
| chinese-influencer-marketing-ja |
| deepseek-image-recognition-geo |
| doubao-paid-what-it-means-for-geo |
| douyin-advertising-complete-guide-2026 |
| mass-to-personal-ja |
| ocean-engine-ai-assistant |
| ocean-engine-overview |
| search-new-storefront-ja |
| tencent-aimplus-ja |
| wechat-advertising-complete-guide-2026 |
| xiaohongshu-advertising-complete-guide-2026 |

---

### D. 3/4 组件（只缺 article-table）— 14篇

| 文章 slug |
|-----------|
| 618-2026-final-push-ai-everywhere |
| 618-2026-geo-goes-mainstream |
| alipay-abao-ai-launch-2026 |
| bilibili-genz-marketing |
| byte-jump-vs-alibaba-content-agent-war |
| douyin-enterprise-account |
| ocean-engine-local-reach |
| tencent-ai-pivot-yuanbao-workbuddy |
| wechat-ai-ecosystem-opens-to-developers |
| wechat-channels-consumer-electronics-ja |
| wechat-mini-games-desktop-ja |
| wechat-moments-ads-ja |
| wechat-vs-alipay-ai-payment-agent-war |
| xiaohongshu-consumer-research |

---

## 三、英文残留词汇

以下日文文章中混入了英文词，需要替换为日文：

| 英文词 | 日文替换建议 | 影响文章数 |
|--------|-------------|-----------|
| significantly | 大幅に / 有意に | 17 |
| massive | 大規模な / 膨大な | 1 |
| uniquely | 独自に / 特有に | 2 |
| Leveraging | 活用して | 15 |

---

## 四、Callout 标签英文问题

| 英文标签 | 应改为日文 | 影响文章数 |
|----------|-----------|-----------|
| Key Insight | 重要な洞察 | 17 |
| Market Signal | 市場シグナル | 6 |
| Key Takeaway (banner title) | 重要ポイント | 16 |
| Key Data (TOC) | 主要データ | 15 |

---

## 五、阅读时间格式不统一

当前有17种不同格式。建议统一为「約X分で読完」格式：

| 当前格式 | 出现次数 |
|----------|---------|
| X分で読める | ~60 |
| 読了まで約X分 | ~29 |
| X 分で読める（有空格）| 2 |

---

## 六、过短文章 (<2000字)

| 文章 slug | 字符数 |
|-----------|--------|
| ocean-engine-overview | 966 |
| ocean-engine-local-reach | 1039 |
| pangle-ads | 1141 |
| doubao-ads-geo-still-worth-it | 1365 |
| 618-2026-geo-goes-mainstream | 1464 |
| 618-2026-final-push-ai-everywhere | 1481 |
| wechat-vs-alipay-ai-payment-agent-war | 1483 |
| deepseek-image-recognition-geo | 1577 |
| wechat-ai-agent-coming-for-advertisers | 1606 |
| ocean-engine-ai-assistant | 1635 |
| china-mobile-internet-spring-2026 | 1659 |
| doubao-goes-paid-what-advertisers-need-to-know | 1687 |
| mass-to-personal-ja | 1767 |
| cpm-is-rising-bad | 1812 |
| 618-2026-ai-takedown-shopping-festival | 1851 |
| 618-data-review-2026 | 1902 |
| xiaohongshu-618-guide-for-international-brands | 1996 |

---

## 七、修复建议（逐篇修复，不要批量）

**修复顺序建议**：
1. 先修 10篇 0/4 的（完全无增强）→ 添加全部4个组件
2. 再修 14篇 3/4 的（只缺 table）→ 添加 article-table
3. 再修 15篇英文标签问题的 → 翻译标签
4. 再修 49篇 1/4 的 → 添加缺失的3个组件
5. 最后修 2/4 的 → 按缺失类型分组处理

**每篇修复时同时**：
- 检查并修复英文 callout label → 日文
- 检查并修复英文 takeaway title → 日文
- 检查并修复英文 TOC → 日文
- 替换 body 中的英文残留词
- 统一阅读时间格式
