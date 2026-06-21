# TMG CMS — Tuyue Media Gateway

Content Management System for the Tuyue Media Gateway website.
Front-back separation: **Next.js Admin** (CMS + API) + **Next.js Frontend** (public site).

## Architecture

```
tmg/
├── admin/          # CMS admin dashboard + API (port 3001)
│   ├── src/app/api/          # Public API routes
│   ├── src/app/admin/        # Admin dashboard UI
│   └── src/lib/              # Database + seed logic
├── frontend/       # Public website (port 3000)
│   ├── src/app/              # Pages (home, blog, etc.)
│   └── src/lib/              # API client
├── _archive/       # Legacy HTML artifacts and scripts
└── agency-agents/  # Agent definitions library (git submodule)
```

## Quick Start

### 1. Install dependencies

```bash
cd admin && npm install
cd ../frontend && npm install
```

### 2. Start the admin backend

```bash
cd admin && npm run dev
# Runs on http://localhost:3001
```

### 3. Seed the database (first run only)

```bash
# Open in browser:
# http://localhost:3001/admin → click "Seed Database"

# Or via curl:
curl -X POST http://localhost:3001/admin/api/seed
```

### 4. Start the frontend

```bash
cd frontend && npm run dev
# Runs on http://localhost:3000
```

## API Endpoints

### Public (read-only, used by frontend)

| Endpoint | Description |
|----------|-------------|
| `GET /api/pages?lang=en&slug=home` | Get page(s) |
| `GET /api/articles?lang=en&status=published` | Get articles |
| `GET /api/navigation?lang=en` | Get navigation structure |
| `GET /api/config?lang=en` | Get site config |

### Admin (write, used by dashboard)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/admin/api/pages` | POST | Create/update page |
| `/admin/api/pages?id=N` | DELETE | Delete page |
| `/admin/api/articles` | POST | Create/update article |
| `/admin/api/articles?id=N` | DELETE | Delete article |
| `/admin/api/seed` | POST | Seed database |

## Data Models

- **Pages**: slug, lang, title, meta_description, status, template, blocks[]
- **Articles**: slug, lang, title, excerpt, content, category, tags, author, publish_date, status
- **Navigation**: lang, items[] (hierarchical menu structure)
- **SiteConfig**: lang, logo, footer, contact, GA ID, platforms
- **Media**: filename, mime_type, alt, dimensions

## Languages

Pre-seeded: `en`, `ja`, `ko`
Add more by inserting rows into the database tables.

## Deployment

### Admin → Vercel
```bash
cd admin
vercel --prod
```

### Frontend → Vercel
```bash
cd frontend
vercel --prod
```

Set `NEXT_PUBLIC_CMS_API_URL` in the frontend Vercel project to point to the admin deployment URL.

## Phase 1 Features

- ✅ Page management (CRUD, multi-language)
- ✅ Article management (CRUD, multi-language)
- ✅ Navigation structure management
- ✅ Site config (logo, footer, contact, GA)
- ✅ Admin dashboard UI
- ✅ Public API for frontend consumption
- ✅ TMG site structure pre-seeded
- ✅ Vercel-ready deployment

## Phase 2 (Planned)

- [ ] Rich text editor (TipTap/Slate)
- [ ] Media library with upload
- [ ] Visual page builder (drag & drop blocks)
- [ ] SEO management per page
- [ ] Version history & rollback
- [ ] User authentication (NextAuth)
- [ ] Content preview
- [ ] Automatic sitemap generation

## Legacy Archive

The root contains legacy HTML files and scripts from the previous workflow.
These are preserved in git history and can be removed once migration is complete.
