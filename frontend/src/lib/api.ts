// TMG Frontend API Client
// Fetches content from the admin CMS API

const API_BASE = process.env.NEXT_PUBLIC_CMS_API_URL || "http://localhost:3001";

export interface Page {
  id: number; slug: string; lang: string; title: string;
  meta_description: string; og_image: string; canonical: string;
  status: string; template: string; blocks: unknown[];
}

export interface Article {
  id: number; slug: string; lang: string; title: string;
  excerpt: string; content: string; cover_image: string;
  category: string; tags: string[]; author: string;
  read_time: string; meta_description: string; og_image: string;
  canonical: string; status: string; publish_date: string;
}

export interface NavItem {
  label: string; href: string; badge?: string;
  children?: NavItem[];
}

export interface SiteConfig {
  lang: string; logo_text: string; footer_description: string;
  footer_links: { label: string; href: string }[];
  footer_platforms: { name: string; url: string }[];
  contact_email: string; announcement: string; ga_id: string;
}

async function fetchAPI<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function getPage(slug: string, lang: string = "en"): Promise<Page> {
  return fetchAPI<Page>(`/api/pages?slug=${slug}&lang=${lang}`);
}

export async function getPages(lang: string = "en"): Promise<Page[]> {
  return fetchAPI<Page[]>(`/api/pages?lang=${lang}`);
}

export async function getArticle(slug: string, lang: string = "en"): Promise<Article> {
  return fetchAPI<Article>(`/api/articles?slug=${slug}&lang=${lang}`);
}

export async function getArticles(lang: string = "en", status?: string): Promise<Article[]> {
  let url = `/api/articles?lang=${lang}`;
  if (status) url += `&status=${status}`;
  return fetchAPI<Article[]>(url);
}

export async function getNavigation(lang: string = "en"): Promise<{ items: NavItem[] }> {
  return fetchAPI<{ items: NavItem[] }>(`/api/navigation?lang=${lang}`);
}

export async function getSiteConfig(lang: string = "en"): Promise<SiteConfig> {
  return fetchAPI<SiteConfig>(`/api/config?lang=${lang}`);
}
