// Seed the CMS with TMG's existing site structure and sample content
import { getDb, saveDb } from "./db";

const NAV_ITEMS_EN = [
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "All Services", href: "/services/", bold: true, accent: true },
      { label: "WeChat Ads", href: "/services/wechat/" },
      { label: "Douyin Ads", href: "/services/douyin/" },
      { label: "Baidu SEM", href: "/services/baidu/" },
      { label: "Bing China", href: "/services/bing/" },
      { label: "Xiaohongshu", href: "/services/xiaohongshu/" },
      { label: "Bilibili Ads", href: "/services/bilibili/" },
      { label: "China GEO", href: "/geo/" },
    ],
  },
  { label: "Pricing", href: "/pricing/" },
  { label: "Client Stories", href: "/client-stories/" },
  { label: "GEO", href: "/geo/", badge: "NEW" },
  { label: "Blog", href: "/blog/" },
  { label: "FAQ", href: "/faqs/" },
  {
    label: "About",
    href: "/about/",
    children: [
      { label: "Why TMG", href: "/why-tmg/" },
      { label: "About Us", href: "/about/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

const NAV_ITEMS_JA = [
  {
    label: "サービス",
    href: "/ja/services/",
    children: [
      { label: "すべてのサービス", href: "/ja/services/", bold: true, accent: true },
      { label: "WeChat広告", href: "/ja/services/wechat/" },
      { label: "Douyin広告", href: "/ja/services/douyin/" },
      { label: "Baidu SEM", href: "/ja/services/baidu/" },
      { label: "Bing China", href: "/ja/services/bing/" },
      { label: "小紅書（RED）", href: "/ja/services/xiaohongshu/" },
      { label: "Bilibili広告", href: "/ja/services/bilibili/" },
      { label: "中国GEO", href: "/ja/geo/" },
    ],
  },
  { label: "料金", href: "/ja/pricing/" },
  { label: "導入事例", href: "/ja/client-stories/" },
  { label: "GEO", href: "/ja/geo/", badge: "NEW" },
  { label: "ブログ", href: "/ja/blog/" },
  { label: "FAQ", href: "/ja/faqs/" },
  {
    label: "会社概要",
    href: "/ja/about/",
    children: [
      { label: "TMGを選ぶ理由", href: "/ja/why-tmg/" },
      { label: "会社概要", href: "/ja/about/" },
      { label: "お問い合わせ", href: "/ja/contact/" },
    ],
  },
];

const NAV_ITEMS_KO = [
  {
    label: "서비스",
    href: "/ko/services/",
    children: [
      { label: "전체 서비스", href: "/ko/services/", bold: true, accent: true },
      { label: "WeChat 광고", href: "/ko/services/wechat/" },
      { label: "Douyin 광고", href: "/ko/services/douyin/" },
      { label: "Baidu SEM", href: "/ko/services/baidu/" },
      { label: "Bing China", href: "/ko/services/bing/" },
      { label: "샤오홍슈(RED)", href: "/ko/services/xiaohongshu/" },
      { label: "Bilibili 광고", href: "/ko/services/bilibili/" },
      { label: "중국 GEO", href: "/ko/geo/" },
    ],
  },
  { label: "요금", href: "/ko/pricing/" },
  { label: "고객 사례", href: "/ko/client-stories/" },
  { label: "GEO", href: "/ko/geo/", badge: "NEW" },
  { label: "블로그", href: "/ko/blog/" },
  { label: "FAQ", href: "/ko/faqs/" },
  {
    label: "회사 소개",
    href: "/ko/about/",
    children: [
      { label: "TMG를 선택해야 하는 이유", href: "/ko/why-tmg/" },
      { label: "회사 소개", href: "/ko/about/" },
      { label: "문의하기", href: "/ko/contact/" },
    ],
  },
];

const LANG_CONFIGS = [
  {
    lang: "en",
    footerDesc: "The unified media interface for international agencies entering China's digital advertising market.",
    footerLinks: [
      { label: "Services", href: "/services/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "About Us", href: "/about/" },
      { label: "Client Stories", href: "/client-stories/" },
      { label: "FAQ", href: "/faqs/" },
    ],
    navItems: NAV_ITEMS_EN,
  },
  {
    lang: "ja",
    footerDesc: "中国デジタル広告市場に参入する国際エージェンシー向けの統一メディアインターフェース。",
    footerLinks: [
      { label: "サービス", href: "/ja/services/" },
      { label: "料金", href: "/ja/pricing/" },
      { label: "会社概要", href: "/ja/about/" },
      { label: "導入事例", href: "/ja/client-stories/" },
      { label: "FAQ", href: "/ja/faqs/" },
    ],
    navItems: NAV_ITEMS_JA,
  },
  {
    lang: "ko",
    footerDesc: "중국 디지털 광고 시장에 진출하는 국제 에이전시를 위한 통합 미디어 인터페이스.",
    footerLinks: [
      { label: "서비스", href: "/ko/services/" },
      { label: "요금", href: "/ko/pricing/" },
      { label: "회사 소개", href: "/ko/about/" },
      { label: "고객 사례", href: "/ko/client-stories/" },
      { label: "FAQ", href: "/ko/faqs/" },
    ],
    navItems: NAV_ITEMS_KO,
  },
];

const PLATFORMS = [
  { name: "WeChat", url: "https://ad.weixin.qq.com" },
  { name: "Douyin", url: "https://www.oceanengine.com" },
  { name: "Baidu", url: "https://e.baidu.com" },
  { name: "Xiaohongshu", url: "https://www.xiaohongshu.com/brand" },
  { name: "Bilibili", url: "https://member.bilibili.com/platform/ad" },
  { name: "Bing China", url: "https://ads.microsoft.com/zh-cn" },
];

const PAGE_TEMPLATES = [
  { slug: "home", titleEn: "Home", titleJa: "ホーム", titleKo: "홈" },
  { slug: "services", titleEn: "Services", titleJa: "サービス", titleKo: "서비스" },
  { slug: "pricing", titleEn: "Pricing", titleJa: "料金", titleKo: "요금" },
  { slug: "about", titleEn: "About Us", titleJa: "会社概要", titleKo: "회사 소개" },
  { slug: "contact", titleEn: "Contact", titleJa: "お問い合わせ", titleKo: "문의하기" },
  { slug: "faqs", titleEn: "FAQ", titleJa: "FAQ", titleKo: "FAQ" },
  { slug: "client-stories", titleEn: "Client Stories", titleJa: "導入事例", titleKo: "고객 사례" },
  { slug: "why-tmg", titleEn: "Why TMG", titleJa: "TMGを選ぶ理由", titleKo: "TMG를 선택해야 하는 이유" },
  { slug: "blog", titleEn: "Blog", titleJa: "ブログ", titleKo: "블로그" },
];

export async function seed() {
  const db = await getDb();

  // Seed navigation
  for (const config of LANG_CONFIGS) {
    const existing = db.exec("SELECT id FROM navigation WHERE lang = ?", [config.lang]);
    if (!existing.length || !existing[0].values.length) {
      db.run(
        "INSERT INTO navigation (lang, items) VALUES (?, ?)",
        [config.lang, JSON.stringify(config.navItems)]
      );
    }
  }

  // Seed site config
  for (const config of LANG_CONFIGS) {
    const existing = db.exec("SELECT id FROM site_config WHERE lang = ?", [config.lang]);
    if (!existing.length || !existing[0].values.length) {
      const title = config.lang === "en" ? "Tuyue Media Gateway" : config.lang === "ja" ? "Tuyue Media Gateway" : "Tuyue Media Gateway";
      db.run(
        `INSERT INTO site_config (lang, logo_text, footer_description, footer_links, footer_platforms, contact_email, ga_id)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          config.lang,
          title,
          config.footerDesc,
          JSON.stringify(config.footerLinks),
          JSON.stringify(PLATFORMS),
          "tmg@tuyuesouxin.cn",
          "G-P5RQGYPTGP",
        ]
      );
    }
  }

  // Seed pages
  for (const tpl of PAGE_TEMPLATES) {
    for (const { lang } of LANG_CONFIGS) {
      const title = lang === "en" ? tpl.titleEn : lang === "ja" ? tpl.titleJa : tpl.titleKo;
      const existing = db.exec("SELECT id FROM pages WHERE slug = ? AND lang = ?", [tpl.slug, lang]);
      if (!existing.length || !existing[0].values.length) {
        db.run(
          `INSERT INTO pages (slug, lang, title, status, template, blocks) VALUES (?, ?, ?, ?, ?, ?)`,
          [tpl.slug, lang, title, "draft", tpl.slug === "blog" ? "blog-list" : "default", "[]"]
        );
      }
    }
  }

  saveDb(db);
  console.log("✅ CMS seeded with TMG site structure");
}
