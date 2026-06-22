# TMG Website Deep Audit Report

Generated: 2026-06-21 15:33:19

This report covers issues NOT in the previous tmg_full_audit_report.md.

## 1. KO Blog Pages Missing hreflang Tags (24 files)

The following 24 KO blog detail pages have NO hreflang tags at all (missing en/ja/ko/x-default). This hurts SEO for multi-language sites.

- /ko/blog/attribution-models-guide.html
- /ko/blog/baidu-demographics-who-are-these-735m-users.html
- /ko/blog/bilibili-demographics-who-are-these-gen-z-users.html
- /ko/blog/bilibili-genz-marketing.html
- /ko/blog/bing-china-demographics-who-are-these-users.html
- /ko/blog/bing-china-premium-audience-guide.html
- /ko/blog/china-big-tech-ai-monetization-2026.html
- /ko/blog/china-mobile-internet-spring-2026.html
- /ko/blog/cpm-is-rising-bad.html
- /ko/blog/cpm-ocpm-ecpm-explained.html
- /ko/blog/deepseek-image-recognition-geo.html
- /ko/blog/deepseek-v4-price-cut-geo.html
- /ko/blog/doubao-ads-geo-still-worth-it.html
- /ko/blog/doubao-paid-what-it-means-for-geo.html
- /ko/blog/douyin-enterprise-account.html
- /ko/blog/geo-channel-weight-2026.html
- /ko/blog/kuaishou-demographics-who-are-these-400m-users.html
- /ko/blog/ocean-engine-ai-assistant.html
- /ko/blog/ocean-engine-local-reach.html
- /ko/blog/ocean-engine-overview.html
- /ko/blog/pangle-ads.html
- /ko/blog/tencent-ad-revenue-ai-deep-dive-2026.html
- /ko/blog/xiaohongshu-consumer-research.html
- /ko/blog/xiaohongshu-demographics-who-are-these-350m-users.html

Fix: Add hreflang tags pointing to /blog/, /ja/blog/, /ko/blog/ equivalents plus x-default.

## 2. JSON-LD: Missing Article + BreadcrumbList (ALL 354 files)

Every blog detail page (EN/JA/KO, all 354 files) only has an Organization JSON-LD block. They are ALL missing:

- Article schema (with headline, datePublished, dateModified, author, image, publisher)
- BreadcrumbList schema (Home > Blog > Article)

This is a significant SEO gap. Google uses Article schema for rich results and BreadcrumbList for navigation display.

Fix: Add Article and BreadcrumbList JSON-LD to every blog detail page, with correct language-specific URLs.

## 3. EN List Page: 1 Extra Card vs Detail Files

EN /blog/index.html has 119 post-cards but only 118 detail HTML files exist.

Previously identified absolute link `https://www.tuyuesouxin.cn/blog/tencent-ads-home-furnishing/` has been fixed.

Now check: Is there a card pointing to a slug that does not have a corresponding HTML file on disk?

## 4. List Page Sort Order Still Not Strict

All 3 list pages still have sort order issues:
- EN: 3 out-of-order pairs
- JA: 2 out-of-order pairs
- KO: 2 out-of-order pairs

## 5. JA/KO List Page Excerpts Still Mix English

- JA: 97 card excerpts still contain English words
- KO: 69 card excerpts still contain English words

## 6. Previously Found Issues Still Open (from tmg_full_audit_report.md)

Refer to D:\Codex\TMG\tmg_full_audit_report.md for the full list. Key still-open items:

- B1: 20 JA detail pages with English paragraphs in body
- B2: 3 KO detail pages with English/metadata leakage
- C1: 4 wrong canonical paths (missing /blog/ segment)
- C2: 1 missing meta file (bilibili-genz-marketing.html)
- A2.1: JA English date on tencent-ads-home-furnishing-ja card
- A3.1: KO incomplete dates (3 cards with only year-month)

## Fix Priority (New Issues)

1. HIGH: Add hreflang to 24 KO pages
2. HIGH: Add Article + BreadcrumbList JSON-LD to all 354 pages
3. MEDIUM: Verify EN index 119 vs 118 detail files
4. MEDIUM: Fix list page sort order (all 3 languages)
5. MEDIUM: Rewrite JA 97 + KO 69 excerpt English content

## Complete Fix Prompt for WorkBuddy

Read both D:\Codex\TMG\tmg_full_audit_report.md and D:\Codex\TMG\tmg_deep_audit_report.md.

Fix in this order:

### Phase 1: Detail page content
1. Translate English paragraphs in 20 JA detail pages (list in tmg_full_audit_report.md B1)
2. Fix 3 KO detail pages with English/metadata leakage (list in tmg_full_audit_report.md B2)
3. Fix 4 wrong canonical paths (list in tmg_full_audit_report.md C1)
4. Fix 1 missing meta file bilibili-genz-marketing.html (C2)

### Phase 2: hreflang
5. Add hreflang tags (en/ja/ko/x-default) to 24 KO blog pages listed above

### Phase 3: JSON-LD
6. Add Article JSON-LD to all 354 blog detail pages (headline, datePublished, dateModified, author, image, publisher, mainEntityOfPage)
7. Add BreadcrumbList JSON-LD to all 354 blog detail pages

### Phase 4: List pages
8. Verify EN index has exactly 118 unique cards matching 118 detail files
9. Sort all 3 list pages newest-first by date
10. Rewrite JA (97) and KO (69) list page card excerpts in target language
11. Fix JA English date on tencent-ads-home-furnishing-ja card
12. Fix KO incomplete dates (3 cards with only year-month)

### Phase 5: Verify
13. Run verification: check hreflang on 5 random KO pages, JSON-LD on 5 random pages, list page order, excerpt language
14. Report all files changed
