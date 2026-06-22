export type Lang = "zh" | "en";

const translations: Record<string, { zh: string; en: string }> = {
  // Layout
  "nav.dashboard":       { zh: "控制台",      en: "Dashboard" },
  "nav.pages":           { zh: "页面管理",    en: "Pages" },
  "nav.articles":        { zh: "文章管理",    en: "Articles" },
  "nav.navigation":      { zh: "导航管理",    en: "Navigation" },
  "nav.siteConfig":      { zh: "站点配置",    en: "Site Config" },
  "nav.media":           { zh: "媒体库",      en: "Media" },
  "badge.phase1":        { zh: "第一期",      en: "Phase 1" },
  "viewSite":            { zh: "查看网站 ↗",  en: "View Site ↗" },

  // Dashboard
  "dashboard.title":     { zh: "TMG 后台管理",       en: "TMG CMS Dashboard" },
  "dashboard.pages":     { zh: "页面",                en: "Pages" },
  "dashboard.articles":  { zh: "文章",                en: "Articles" },
  "dashboard.languages": { zh: "语言",                en: "Languages" },
  "dashboard.media":     { zh: "媒体",                en: "Media" },
  "actions.title":       { zh: "快捷操作",            en: "Quick Actions" },
  "actions.seed":        { zh: "🌱 初始化数据库（首次运行）", en: "🌱 Seed Database (First Run)" },
  "actions.seeding":     { zh: "正在初始化...",        en: "Seeding..." },
  "actions.managePages": { zh: "📄 管理页面",          en: "📄 Manage Pages" },
  "actions.manageArticles": { zh: "📝 管理文章",       en: "📝 Manage Articles" },
  "actions.importArticles": { zh: "📥 导入文章数据",   en: "📥 Import Articles" },
  "actions.importing":   { zh: "正在导入...",          en: "Importing..." },
  "info.title":          { zh: "第一期 — TMG 后台管理", en: "Phase 1 — TMG CMS" },
  "info.api":            { zh: "公开 API：",           en: "API" },
  "info.admin":          { zh: "管理接口：",           en: "Admin" },
  "info.langs":          { zh: "支持语言：",           en: "Languages" },
  "info.langsValue":     { zh: "en, ja, ko（已预置 TMG 站点结构）", en: "en, ja, ko (all pre-seeded with TMG site structure)" },
  "info.db":             { zh: "数据库：",             en: "Database" },
  "info.dbValue":        { zh: "SQLite（sql.js，纯 JS，无需编译）", en: "SQLite (sql.js, pure JS — no native deps)" },
  "info.deploy":         { zh: "部署：",               en: "Deploy" },
  "info.deployValue":    { zh: "Admin 和 Frontend 分别部署到 Vercel", en: "Admin on Vercel, Frontend on Vercel (separate project)" },

  // Pages
  "pages.title":         { zh: "页面管理",            en: "Pages" },
  "pages.allLangs":      { zh: "所有语言",            en: "All Languages" },
  "pages.new":           { zh: "+ 新建页面",          en: "+ New Page" },
  "pages.edit":          { zh: "编辑页面",            en: "Edit Page" },
  "pages.create":        { zh: "新建页面",            en: "New Page" },
  "pages.slug":          { zh: "路径标识",            en: "Slug" },
  "pages.lang":          { zh: "语言",                en: "Language" },
  "pages.titleField":    { zh: "页面标题",            en: "Title" },
  "pages.metaDesc":      { zh: "SEO 描述",            en: "Meta Description" },
  "pages.status":        { zh: "状态",                en: "Status" },
  "pages.template":      { zh: "模板",                en: "Template" },
  "pages.th.slug":       { zh: "路径",                en: "Slug" },
  "pages.th.lang":       { zh: "语言",                en: "Lang" },
  "pages.th.title":      { zh: "标题",                en: "Title" },
  "pages.th.status":     { zh: "状态",                en: "Status" },
  "pages.th.template":   { zh: "模板",                en: "Template" },
  "pages.th.actions":    { zh: "操作",                en: "Actions" },
  "pages.empty":         { zh: '暂无页面，请先在控制台点击「初始化数据库」', en: 'No pages found. Click "Seed Database" on the dashboard first.' },
  "pages.deleteConfirm": { zh: "确定要删除这个页面吗？", en: "Delete this page?" },

  // Articles
  "articles.title":      { zh: "文章管理",            en: "Articles" },
  "articles.allLangs":   { zh: "所有语言",            en: "All Languages" },
  "articles.new":        { zh: "+ 新建文章",          en: "+ New Article" },
  "articles.th.slug":    { zh: "路径",                en: "Slug" },
  "articles.th.lang":    { zh: "语言",                en: "Lang" },
  "articles.th.title":   { zh: "标题",                en: "Title" },
  "articles.th.category":{ zh: "分类",                en: "Category" },
  "articles.th.status":  { zh: "状态",                en: "Status" },
  "articles.th.date":    { zh: "日期",                en: "Date" },
  "articles.th.actions": { zh: "操作",                en: "Actions" },
  "articles.empty":      { zh: "暂无文章，请通过 API 添加。", en: "No articles yet. Use the API to add articles." },
  "articles.deleteConfirm": { zh: "确定要删除这篇文章吗？", en: "Delete this article?" },

  // Navigation
  "navigation.title":    { zh: "导航管理",            en: "Navigation" },
  "navigation.desc":     { zh: "导航菜单项（JSON 格式）。目前可通过 API 编辑，可视化编辑器将在第二期推出。", en: "Navigation items (JSON format). Edit via API for now; visual editor coming in Phase 2." },

  // Config
  "config.title":        { zh: "站点配置",            en: "Site Config" },

  // Media
  "media.title":         { zh: "媒体库",              en: "Media Library" },
  "media.coming":        { zh: "媒体上传和管理功能将在第二期推出。", en: "Media upload and management coming in Phase 2." },
  "media.hint":          { zh: "目前请使用外部图片链接或 /public 目录。", en: "For now, use external image URLs or the /public directory." },

  // Common
  "btn.cancel":          { zh: "取消",                en: "Cancel" },
  "btn.save":            { zh: "保存",                en: "Save" },
  "btn.saving":          { zh: "保存中...",            en: "Saving..." },
  "btn.edit":            { zh: "编辑",                en: "Edit" },
  "btn.delete":          { zh: "删除",                en: "Delete" },
  "status.draft":        { zh: "草稿",                en: "Draft" },
  "status.published":    { zh: "已发布",              en: "Published" },
};

export function t(key: string, lang: Lang = "zh"): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en;
}
