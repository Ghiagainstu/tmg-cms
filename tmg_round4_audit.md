# TMG Website Round 4 Audit Report

Generated: 2026-06-21 15:55:12

## NEW Issues (not in previous reports)

### 1. Missing Twitter Card Meta (350 pages)

350 out of 354 blog detail pages are missing twitter:title and twitter:description meta tags.
They have twitter:card and twitter:image, but not the title/description.

- EN: 116 pages missing twitter:title + twitter:description
- JA: 117 pages missing twitter:title + twitter:description
- KO: 117 pages missing twitter:title + twitter:description

Fix: Add `<meta name="twitter:title" content="...">` and `<meta name="twitter:description" content="...">` to each page, matching og:title and og:description.

### 2. JA/KO OG Meta in English (42 pages)

42 JA/KO blog pages have og:title, og:description, title, or meta description still in English.

Examples:
- JA 618-2026-ai-takedown-shopping-festival.html: og:title + og:description in English
- JA bing-china-b2b-search-2026.html: og:title + og:description + title in English
- JA bing-china-education-search-ads.html: og:title + og:description + title in English

Fix: Translate og:title, og:description, <title>, and <meta description> to target language.

### 3. JA 2 Pages with Pure Chinese Paragraphs

- /ja/blog/tencent-ad-revenue-ai-deep-dive-2026.html — 1 paragraph in pure Chinese
- /ja/blog/byte-jump-vs-alibaba-content-agent-war.html — 1 paragraph in pure Chinese

Fix: Translate these Chinese paragraphs to Japanese.

### 4. Broken Internal Anchor Links (2 pages)

- /blog/kuaishou-demographics-who-are-these-400m-users.html — 9 broken #anchors
- /ja/blog/kuaishou-demographics-who-are-these-400m-users.html — 9 broken #anchors

The page has a table of contents with anchor links like #why-kuaishou-demographics-matter but the headings lack matching id attributes.

Fix: Add id attributes to h2/h3 headings that match the TOC anchor links.

## Issues Already Known (from previous reports, still open)

| # | Issue | Count | Report |
|---|-------|-------|--------|
| 1 | Duplicate h1 in article body | 173 pages | round3 |
| 2 | Heading level skips | 20 pages | round3 |
| 3 | KO missing hreflang | 24 pages | deep_audit |
| 4 | Missing Article+BreadcrumbList JSON-LD | 354 pages | deep_audit |
| 5 | JA detail English paragraphs | 20 pages | full_audit |
| 6 | KO detail English/metadata leakage | 3 pages | full_audit |
| 7 | Wrong canonical paths | 4 pages | full_audit |
| 8 | bilibili-genz-marketing missing meta | 1 page | full_audit |
| 9 | JA/KO FAQ missing description | 2 pages | round3 |
|10 | JA/KO non-blog untranslated desc | 8 pages | round3 |
|11 | JA list excerpts with English | 97 cards | full_audit |
|12 | KO list excerpts with English | 69 cards | full_audit |
|13 | List page sort order | 3 pages | full_audit |
|14 | JA English date card | 1 card | full_audit |
|15 | KO incomplete dates | 3 cards | full_audit |
|16 | EN 119 vs 118 discrepancy | 1 extra | full_audit |

## VERIFIED: No Issues Found

- All 3 root pages have correct hreflang
- Language switcher links all valid
- No broken internal blog cross-links
- No placeholder/example URLs
- robots.txt correct
- All nav links valid
- All CSS/JS refs valid
- All img tags have alt text
- No noindex pages

## Complete Fix Prompt for WorkBuddy (All 4 Reports Combined)

```
Read all 4 audit reports:
1. D:\Codex\TMG\tmg_full_audit_report.md
2. D:\Codex\TMG\tmg_deep_audit_report.md
3. D:\Codex\TMG\tmg_round3_audit.md
4. D:\Codex\TMG\tmg_round4_audit.md

Fix ALL issues in this order (one phase at a time):

### Phase 1: Article Body Structure
- Change duplicate h1 to h2 in 173 pages
- Fix heading level skips (h4->h3) in 20 pages
- Fix 2 pages with broken internal anchor links (kuaishou-demographics EN+JA)

### Phase 2: hreflang
- Add hreflang tags to 24 KO pages

### Phase 3: JSON-LD
- Add Article + BreadcrumbList JSON-LD to all 354 pages

### Phase 4: Meta Tags
- Add twitter:title + twitter:description to 350 pages
- Translate English OG/title/description meta in 42 JA/KO pages
- Fix 4 wrong canonical paths
- Fix bilibili-genz-marketing.html missing meta
- Add description to JA/KO FAQ pages
- Translate description on 8 JA/KO non-blog pages

### Phase 5: Content Translation
- Translate English paragraphs in 20 JA detail pages
- Fix 3 KO pages with English/metadata leakage
- Translate 2 pure Chinese paragraphs in JA pages

### Phase 6: List Pages
- Sort all 3 list pages newest-first
- Rewrite JA 97 + KO 69 card excerpts
- Fix JA English date card
- Fix KO 3 incomplete-date cards
- Verify EN 119 vs 118

### Phase 7: Verify
- Check 5 random pages for single h1, JSON-LD, hreflang
- Check 3 list pages for sort order and excerpt language
- Report all files changed per phase
```
