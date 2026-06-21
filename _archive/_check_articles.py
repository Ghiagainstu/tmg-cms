# -*- coding: utf-8 -*-
import os, re

base_blog = r"D:\WorkBuddy\Obsidian\TMG-Blog\Platform Topic Batch"

articles = {
    "Bilibili Search Content Matching": {
        "ja_title": "Bilibili検索コンテンツマッチング：ブランドセーフティのためのコンテキスト広告配置",
        "ja_slug": "bilibili-search-content-matching",
        "ko_title": "Bilibili 검색 콘텐츠 매칭: 브랜드 세이프티를 위한 맥락적 광고 배치",
        "ko_slug": "bilibili-search-content-matching",
        "category": "Bilibili",
    },
    "Bilibili Search Creative Lab": {
        "ja_title": "Bilibili検索クリエイティブラボ：Z世代が本当にクリックする広告",
        "ja_slug": "bilibili-search-creative-lab",
        "ko_title": "Bilibili 검색 크리에이티브 랩: Z세대가 진짜 클릭하는 광고",
        "ko_slug": "bilibili-search-creative-lab",
        "category": "Bilibili",
    },
    "Bilibili Search Funnel Guide": {
        "ja_title": "Bilibili検索ファネルガイド：認知からコンバージョンまで",
        "ja_slug": "bilibili-search-funnel-guide",
        "ko_title": "Bilibili 검색 퍼널 가이드: 인지에서 전환까지",
        "ko_slug": "bilibili-search-funnel-guide",
        "category": "Bilibili",
    },
    "Bilibili Search Performance 2026": {
        "ja_title": "Bilibili検索パフォーマンス最適化2026",
        "ja_slug": "bilibili-search-performance-2026",
        "ko_title": "Bilibili 검색 성과 최적화 2026",
        "ko_slug": "bilibili-search-performance-2026",
        "category": "Bilibili",
    },
    "Youth Search Ads on Bilibili": {
        "ja_title": "Bilibiliのユース検索広告：次世代を捉える",
        "ja_slug": "bilibili-youth-search-ads",
        "ko_title": "Bilibili 청소년 검색 광고: 다음 세대를 잡아라",
        "ko_slug": "bilibili-youth-search-ads",
        "category": "Bilibili",
    },
}

# Just print what we need to do
for name, info in articles.items():
    folder = os.path.join(base_blog, name)
    ja_path = os.path.join(folder, "JA.md")
    ko_path = os.path.join(folder, "KO.md")
    en_path = os.path.join(folder, "EN.md")
    
    # Check current JA.md hiragana count
    if os.path.exists(ja_path):
        with open(ja_path, "r", encoding="utf-8") as f:
            content = f.read()
        hiragana = len(re.findall(r'[\u3040-\u309F]', content))
        print(f"{name} JA.md hiragana: {hiragana}")
    else:
        print(f"{name} JA.md: MISSING")
    
    if os.path.exists(ko_path):
        with open(ko_path, "r", encoding="utf-8") as f:
            content = f.read()
        hangul = len(re.findall(r'[\uAC00-\uD7AF]', content))
        print(f"{name} KO.md hangul: {hangul}")
    else:
        print(f"{name} KO.md: MISSING")