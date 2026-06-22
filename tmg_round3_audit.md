# TMG Website Round 3 Audit Report

Generated: 2026-06-21 15:43:43

## NEW Issues (not in previous reports)

### 1. Duplicate H1 Tags (173 pages)

173 blog detail pages have TWO h1 tags. The second h1 is inside <article class="article-content"> and duplicates the article title.

- EN: 56 pages
- JA: 59 pages
- KO: 58 pages

Pattern: The hero section has `<h1 class="article-hero__title">Title</h1>` AND the article body starts with `<h1 id="...">Title</h1>`.

Fix: Change the second h1 inside article-content to h2.

### 2. Heading Level Skips (20 pages)

20 pages skip heading levels (e.g. h2 followed by h4, skipping h3). This hurts accessibility and SEO.

- EN: baidu-demographics, bing-china-premium-audience-guide, xiaohongshu-demographics
- JA: bing-china-premium-audience-guide, xiaohongshu-demographics
- KO: bilibili-demographics, bing-china-premium-audience-guide, chinese-influencer-marketing-ko, deepseek-image-recognition-geo, doubao-paid-what-it-means-for-geo, and 5 more

Fix: Change h4 to h3 where h2->h4 skips occur.

### 3. JA/KO FAQ Pages Missing Meta Description

- /ja/faqs/index.html - missing `<meta name="description">`
- /ko/faqs/index.html - missing `<meta name="description">`

Fix: Add Japanese and Korean meta descriptions.

### 4. JA/KO Non-Blog Pages - Meta Descriptions Same as EN (8 pages)

The following pages have meta descriptions identical to the English version (not translated):

- /ja/about/index.html
- /ko/about/index.html
- /ja/services/index.html
- /ko/services/index.html
- /ja/why-tmg/index.html
- /ko/why-tmg/index.html
- /ja/client-stories/index.html
- /ko/client-stories/index.html

Fix: Translate meta descriptions to Japanese/Korean.

### 5. Summary: ALL Issues Across 3 Reports

| # | Category | Count | Severity |
|---|----------|-------|----------|
| 1 | Duplicate h1 in article body | 173 pages | HIGH |
| 2 | Heading level skips (h2->h4) | 20 pages | MEDIUM |
| 3 | KO pages missing hreflang | 24 pages | HIGH |
| 4 | Missing Article + BreadcrumbList JSON-LD | 354 pages | HIGH |
| 5 | JA detail pages with English paragraphs | 20 pages | HIGH |
| 6 | KO detail pages with English/metadata leakage | 3 pages | HIGH |
| 7 | Wrong canonical paths (missing /blog/) | 4 pages | HIGH |
| 8 | KO bilibili-genz-marketing missing meta | 1 page | HIGH |
| 9 | JA/KO FAQ missing meta description | 2 pages | MEDIUM |
| 10 | JA/KO non-blog pages untranslated desc | 8 pages | MEDIUM |
| 11 | JA list page excerpts with English | 97 cards | MEDIUM |
| 12 | KO list page excerpts with English | 69 cards | MEDIUM |
| 13 | List page sort order not strict | 3 pages | LOW |
| 14 | JA English date on one card | 1 card | LOW |
| 15 | KO incomplete year-month dates | 3 cards | LOW |
| 16 | EN list page 119 cards vs 118 files | 1 extra | LOW |

## Complete Fix Prompt for WorkBuddy

```
Read D:\Codex\TMG\tmg_full_audit_report.md, D:\Codex\TMG\tmg_deep_audit_report.md, and D:\Codex\TMG\tmg_round3_audit.md.

Fix in this exact order (one phase at a time, report files changed after each):

### Phase 1: Duplicate h1 (173 pages)
1. In every blog detail page (EN/JA/KO) that has two <h1> tags, change the SECOND h1 (inside <article class="article-content">) to <h2>. Keep the first h1 (in article-hero__title) as-is.

### Phase 2: Heading level fixes (20 pages)
2. Fix h2->h4 skips by changing the h4 to h3 on affected pages.

### Phase 3: hreflang (24 KO pages)
3. Add hreflang tags (en/ja/ko/x-default) to the 24 KO blog pages listed in tmg_deep_audit_report.md.

### Phase 4: JSON-LD (354 pages)
4. Add Article JSON-LD to all 354 blog detail pages.
5. Add BreadcrumbList JSON-LD to all 354 blog detail pages.

### Phase 5: Detail page English content
6. Translate English paragraphs in 20 JA detail pages to Japanese.
7. Fix 3 KO detail pages with English/metadata leakage.
8. Fix 4 wrong canonical paths (add /blog/ segment).
9. Fix bilibili-genz-marketing.html missing canonical/og:url/date.

### Phase 6: Non-blog pages
10. Add meta descriptions to /ja/faqs/ and /ko/faqs/.
11. Translate meta descriptions on 8 JA/KO non-blog pages.

### Phase 7: List pages
12. Sort all 3 list pages newest-first.
13. Rewrite JA (97) and KO (69) card excerpts in target language.
14. Fix JA English date card.
15. Fix KO 3 incomplete-date cards.
16. Investigate EN 119 cards vs 118 files discrepancy.

### Phase 8: Verify
17. Spot-check 5 random pages for single h1.
18. Spot-check 3 random KO pages for hreflang.
19. Spot-check 5 random pages for JSON-LD.
20. Spot-check 3 list pages for sort order and excerpt language.
21. Report all files changed per phase.
```
