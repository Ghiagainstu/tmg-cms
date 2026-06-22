# TMG Website Full Audit Report

Generated: 2026-06-21 14:57:45

## A. Blog List Pages

### A1. EN /blog/index.html

1. Absolute href: One card uses absolute URL `https://www.tuyuesouxin.cn/blog/tencent-ads-home-furnishing/` instead of relative `/blog/tencent-ads-home-furnishing/`. The article canonical has changed to `/blog/tencent-ads-home-furnishing-influencer-marketing-a-complete/`. Fix: update href to current correct slug.
2. Sort order: Not strictly newest-first. Example: `June 11, 2026` card followed by `June 9, 2026` card at `/blog/wechat-ai-agent-coming-for-advertisers/`.

### A2. JA /ja/blog/index.html

1. English date: Card `/ja/blog/tencent-ads-home-furnishing-ja/` shows `May 4, 2026` instead of Japanese date.
2. Sort order: Not strictly newest-first. Example: `2026年6月11日` followed by `2026年6月9日` at `/ja/blog/pentagon-blacklists-alibaba-baidu-advertisers/`.
3. Excerpt language: 108 card excerpts still contain English. Rewrite in natural Japanese.

### A3. KO /ko/blog/index.html

1. Incomplete dates: 3 cards show `2026년 5월` without day:
   - `/ko/blog/search-new-storefront-ko/`
   - `/ko/blog/tencent-aimplus-ko/`
   - `/ko/blog/wechat-channels-consumer-electronics-ko/`
2. Sort order: Not strictly newest-first. Multiple issues including `2026년 4월 23일` followed by `2026년 5월`.
3. Excerpt language: 93 card excerpts still contain English. Rewrite in natural Korean.

## B. Blog Detail Pages - English Content

### B1. JA detail pages with English paragraphs (20 files)

- /ja/blog/douyin-brand-search-2026.html
- /ja/blog/douyin-ecommerce-search-2026.html
- /ja/blog/douyin-live-search-conversion.html
- /ja/blog/douyin-local-life-search-ads.html
- /ja/blog/douyin-search-ads-ranking-2026.html
- /ja/blog/douyin-search-competitive-analysis.html
- /ja/blog/douyin-search-omni-funnel.html
- /ja/blog/wechat-brand-zone-search-2026.html
- /ja/blog/wechat-channels-search-discovery.html
- /ja/blog/wechat-mini-program-search-ads.html
- /ja/blog/wechat-omni-search-brand-strategy.html
- /ja/blog/wechat-private-domain-search-retention.html
- /ja/blog/wechat-search-creative-testing.html
- /ja/blog/xiaohongshu-brand-zone-search.html
- /ja/blog/xiaohongshu-category-search-growth.html
- /ja/blog/xiaohongshu-local-business-search.html
- /ja/blog/xiaohongshu-search-ads-2026.html
- /ja/blog/xiaohongshu-search-creative-testing.html
- /ja/blog/xiaohongshu-search-koc-strategy.html
- /ja/blog/xiaohongshu-search-omni-attribution.html

These files contain entire English paragraphs in the article body. Translate to Japanese.

### B2. KO detail pages with English content (3 files)

- /ko/blog/bilibili-youth-search-ads.html - contains slug: and category: metadata text leaking into body
- /ko/blog/deepseek-v4-price-cut-geo.html - contains Live URL: and Published on Tuyue Media Gateway English text
- /ko/blog/tencent-ad-revenue-ai-deep-dive-2026.html - contains slug:, category:, blog_url: metadata text

## C. Blog Detail Pages - Meta Issues

### C1. Wrong canonical path (missing /blog/ segment)

- /ja/blog/baidu-q1-2026-ai-revenue.html canonical=/ja/baidu-q1-2026-ai-revenue/ should be /ja/blog/baidu-q1-2026-ai-revenue/
- /ja/blog/tencent-hy-memory.html canonical=/ja/tencent-hy-memory/ should be /ja/blog/tencent-hy-memory/
- /ko/blog/baidu-q1-2026-ai-revenue.html canonical=/ko/baidu-q1-2026-ai-revenue/ should be /ko/blog/baidu-q1-2026-ai-revenue/
- /ko/blog/tencent-hy-memory.html canonical=/ko/tencent-hy-memory/ should be /ko/blog/tencent-hy-memory/

### C2. Missing/broken meta

- /ko/blog/bilibili-genz-marketing.html - canonical, og:url, and article-date are all empty or malformed. Fix: add proper canonical https://www.tuyuesouxin.cn/ko/blog/bilibili-genz-marketing/, og:url, and visible article-date.

## D. Cross-Language Links

Current status: 0 broken cross-language links in detail pages.

## E. Sitemap

Current status: 408 URLs total, 357 blog URLs, all 354 blog detail pages covered. No missing URLs.

## F. Non-Blog Pages

Checked index.html, about, services, pricing, faqs, why-tmg, client-stories, ja, ko - all have title, description, canonical. No issues found.

## G. Fix Priority

1. High: JA 20 files with English paragraphs + KO 3 files with English/metadata leakage
2. High: 4 wrong canonicals + 1 missing meta file
3. Medium: JA/KO list page excerpt language (108 + 93 files)
4. Medium: EN/JA/KO list page sort order
5. Low: EN absolute href + JA English date + KO incomplete dates

## H. Recommended Fix Prompt for WorkBuddy

Read D:\Codex\TMG\tmg_full_audit_report.md and fix all issues listed.
Fix one category at a time in this order:

1. B1+B2: Translate English paragraphs in 20 JA and 3 KO detail pages to target language.
2. C1+C2: Fix 4 wrong canonical paths and 1 missing meta file.
3. A2.3+A3.3: Rewrite JA (108) and KO (93) list page card excerpts in target language.
4. A1.2+A2.2+A3.2: Sort all 3 list pages newest-first by date.
5. A1.1: Fix EN absolute href to relative current slug.
6. A2.1: Fix JA English date to Japanese date format.
7. A3.1: Fix KO incomplete dates to full dates.

After each step, verify by checking the first 10 cards on list pages and spot-checking 3 detail pages.
Report which files were changed after each step.
