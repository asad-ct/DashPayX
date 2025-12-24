# DashPayX Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    DASHPAYX SYSTEM ARCHITECTURE                │
└─────────────────────────────────────────────────────────────────┘

                        ┌──────────────────┐
                        │   POSTGRESQL DB  │
                        │                  │
                        │  content_sections│
                        │     table        │
                        │   (JSONB Store)  │
                        └────────▲─────────┘
                                 │
                                 │ TypeORM
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    │    NESTJS BACKEND      │
                    │   (http://localhost:3001)
                    │                         │
                    │  • Content Service     │
                    │  • Content Controller  │
                    │  • Validation Pipes    │
                    │  • CORS Enabled        │
                    │                         │
                    └────────────┬────────────┘
                                 │
                    HTTP REST API│
                                 │
        ┌────────────────────────┼────────────────────────┐
        │                        │                        │
        │                        │                        │
    ┌───▼────────────────┐  ┌────▼──────────────────┐    │
    │   PUBLIC FRONTEND  │  │   ADMIN PANEL        │    │
    │   Next.js App      │  │   Next.js App        │    │
    │  (localhost:3000)  │  │  (localhost:3000)    │    │
    │                    │  │                      │    │
    │  • Hero Section    │  │  • Admin Dashboard   │    │
    │  • FAQ             │  │  • Edit Forms        │    │
    │  • Staking         │  │  • Save Changes      │    │
    │  • Tokenomics      │  │  • Content Forms     │    │
    │  • Roadmap         │  │                      │    │
    │  • Testimonials    │  │  Sections:           │    │
    │  • News            │  │  • Hero              │    │
    │  • Features        │  │  • FAQ               │    │
    │                    │  │  • Staking           │    │
    │  Uses useContent   │  │  • Tokenomics        │    │
    │  Hook to Fetch     │  │  • Roadmap           │    │
    │  Data              │  │  • Testimonials      │    │
    │                    │  │  • News              │    │
    │                    │  │  • Banner            │    │
    │                    │  │  • Features          │    │
    └────────────────────┘  └─────────────────────┘    │
                                                        │
```

## Data Flow - Reading Content

```
┌──────────────┐
│ User Visits  │
│  Main Site  │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│  React Component │
│  (e.g., Hero)    │
└──────┬───────────┘
       │
       ├─ useContent('hero')
       │
       ▼
┌──────────────────────────────┐
│  useEffect Hook Runs         │
│  (Fetches on Mount)          │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  HTTP GET Request            │
│ /api/content/hero            │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  NestJS Controller           │
│  ContentController.ts        │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  Content Service             │
│  getContentByType('hero')    │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  TypeORM Query               │
│  Find where section_type     │
│  = 'hero'                    │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  PostgreSQL Database         │
│  Query content_sections      │
│  table                       │
└──────┬───────────────────────┘
       │
       ◄─── JSON Response ──────┐
       │                        │
       ▼                        │
    Return ContentSection with  │
    content.title              │
    content.description        │
    etc.                       │
       │                       │
       ▼                       │
┌──────────────────────────────┐
│  Component State Updated     │
│  setData(result)             │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  Component Re-renders        │
│  with Dynamic Content        │
└──────────────────────────────┘
```

## Data Flow - Updating Content

```
┌──────────────────────────────┐
│  Admin Visits /admin         │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  Admin Page Loads            │
│  (e.g., /admin/hero)         │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  useContent Hook Fetches     │
│  Current Content             │
│  (Same as above)             │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  AdminForm Component         │
│  Renders Input Fields        │
│  Pre-filled with Current     │
│  Content                     │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  User Edits Fields           │
│  (onChange events update     │
│   local state)               │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  User Clicks                 │
│  "Save Changes" Button       │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  handleSave Function Runs    │
│  Creates JSON from formData  │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  HTTP PUT Request            │
│  /api/content/hero           │
│  Body: { content: {...} }    │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  NestJS Controller           │
│  Receives PUT Request        │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  Content Service             │
│  updateContent('hero', dto)  │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  TypeORM Update Query        │
│  Find by section_type        │
│  Update content JSONB        │
│  Update updated_at           │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  PostgreSQL Executes         │
│  UPDATE content_sections     │
│  WHERE section_type='hero'   │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  Return Updated Entity       │
│  to Frontend                 │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  AdminForm Shows Success     │
│  Message: "✓ Content saved!" │
└──────────────────────────────┘

User can now refresh main site
to see the changes!
```

## Database Schema

```
┌─────────────────────────────────────────────────────┐
│           content_sections TABLE                   │
├──────────┬─────────┬──────────────────────────────┤
│ Column   │ Type    │ Details                      │
├──────────┼─────────┼──────────────────────────────┤
│ id       │ INT PK  │ Auto-increment primary key   │
│          │         │                              │
│ section_ │ VARCHAR │ UNIQUE NOT NULL              │
│ type     │ (50)    │ Values: hero, faq, staking.. │
│          │         │                              │
│ content  │ JSONB   │ Flexible JSON data           │
│          │         │ {title, description, ...}   │
│          │         │                              │
│ is_      │ BOOLEAN │ Default: true                │
│ published│         │ Controls visibility          │
│          │         │                              │
│ created_ │ TIMESTAMP │ Created timestamp          │
│ at       │         │ Default: CURRENT_TIMESTAMP  │
│          │         │                              │
│ updated_ │ TIMESTAMP │ Updated timestamp          │
│ at       │         │ Updated on save              │
└──────────┴─────────┴──────────────────────────────┘

Example row:
┌─────────────────────────────────────────────────────┐
│ id: 1                                               │
│ section_type: 'hero'                               │
│ content: {                                          │
│   "title": "BEP-20 . BNB SMART CHAIN...",         │
│   "description": "A utility-first BEP-20...",     │
│   "primaryCta": {                                   │
│     "text": "Token Distribution",                  │
│     "link": "/"                                    │
│   },                                               │
│   "secondaryCta": {                                 │
│     "text": "Whitepaper",                          │
│     "link": "/"                                    │
│   }                                                │
│ }                                                   │
│ is_published: true                                  │
│ created_at: 2024-12-24 10:00:00                    │
│ updated_at: 2024-12-24 11:30:00                    │
└─────────────────────────────────────────────────────┘
```

## Content Sections Structure

```
hero:
  ├── title: string
  ├── description: string
  ├── primaryCta: { text, link }
  └── secondaryCta: { text, link }

faq:
  ├── title: string
  ├── subtitle: string
  └── faqs: [{ question, answer }, ...]

staking:
  ├── title: string
  ├── subtitle: string
  └── features: [{ title, description, icon }, ...]

tokenomics:
  ├── title: string
  ├── subtitle: string
  └── cards: [{ title, description }, ...]

roadmap:
  ├── title: string
  ├── subtitle: string
  └── phases: [{
        phaseNumber,
        title,
        description: [string, ...]
      }, ...]

testimonials:
  ├── title: string
  ├── subtitle: string
  └── cards: [{
        title,
        description,
        status
      }, ...]

news:
  ├── title: string
  ├── subtitle: string
  └── articles: [{
        title,
        description,
        date,
        link,
        image
      }, ...]

banner:
  ├── title: string
  └── subtitle: string

features:
  ├── title: string
  ├── subtitle: string
  └── features: [{
        title,
        description
      }, ...]
```

## Component Dependency Tree

```
Frontend App
├── Navbar
│   ├── Logo
│   ├── NavLinks
│   └── JoinButton
├── Hero
│   ├── HeroImage
│   └── HeroContent ────────► useContent('hero')
├── SectionHeading
├── Banner ────────────────► Dynamic Props
├── Staking ───────────────► useContent('staking')
│   ├── StakingHeader
│   └── StakingCards
├── SecondBanner
├── Tokenomics ────────────► useContent('tokenomics')
│   ├── TokenomicsHeader
│   └── TokenomicsGrid
├── Roadmap ───────────────► useContent('roadmap')
│   ├── RoadmapHeader
│   ├── RoadmapGrid
│   └── RoadmapFooter
├── WhyChooseUs ──────────► useContent('features')
│   └── FeatureCard
├── Testimonials ─────────► useContent('testimonials')
│   ├── TestimonialsHeader
│   ├── TestimonialsCards
│   └── TestimonialsFooter
├── FAQ ──────────────────► useContent('faq')
│   ├── FAQImage
│   └── FAQAccordion
├── NewsArticles ─────────► useContent('news')
│   └── NewsCard
└── Contact ──────────────► useContent('contact')
    ├── ContactCard
    ├── ContactForm
    └── Footer

Admin App
├── AdminLayout
│   ├── Sidebar Navigation
│   └── Main Content
├── AdminPage (Dashboard)
├── AdminForms for:
   ├── /admin/hero
   ├── /admin/faq
   ├── /admin/staking
   ├── /admin/tokenomics
   ├── /admin/roadmap
   ├── /admin/testimonials
   ├── /admin/news
   ├── /admin/banner
   └── /admin/features
```

## API Request/Response Flow

```
REQUEST:
GET /api/content/hero

RESPONSE:
200 OK
{
  "id": 1,
  "section_type": "hero",
  "content": {
    "title": "...",
    "description": "...",
    "primaryCta": {...},
    "secondaryCta": {...}
  },
  "is_published": true,
  "created_at": "2024-12-24T10:00:00Z",
  "updated_at": "2024-12-24T10:00:00Z"
}

---

REQUEST:
PUT /api/content/hero
{
  "content": {
    "title": "New Title",
    "description": "New Desc",
    ...
  }
}

RESPONSE:
200 OK
{
  "id": 1,
  "section_type": "hero",
  "content": {
    "title": "New Title",
    "description": "New Desc",
    ...
  },
  "is_published": true,
  "created_at": "2024-12-24T10:00:00Z",
  "updated_at": "2024-12-24T11:30:00Z"
}
```

## Technology Stack

```
FRONTEND
├── Framework: Next.js 14+
├── UI Library: React 18+
├── Styling: Tailwind CSS
├── Language: TypeScript
└── API Client: Fetch API

BACKEND  
├── Framework: NestJS 10+
├── Database: PostgreSQL 12+
├── ORM: TypeORM 0.3+
├── Validation: class-validator
├── Language: TypeScript
└── Runtime: Node.js 18+

HOSTING (Future)
├── Frontend: Vercel / Netlify
├── Backend: AWS / DigitalOcean / Heroku
└── Database: AWS RDS / DigitalOcean
```

## Deployment Architecture (For Future)

```
                    ┌──────────────────┐
                    │  CDN / CloudFlare │
                    └────────┬──────────┘
                             │
            ┌────────────────┴────────────────┐
            │                                 │
        ┌───▼────────┐              ┌────────▼──────┐
        │   Frontend │              │   API Gateway │
        │  (Vercel)  │              │   (AWS API GW)│
        │            │              │               │
        │  Next.js   │              │   NestJS App  │
        │  Static &  │              │   (AWS EC2 or │
        │  SSG       │              │    ECS/Fargate)
        └────────────┘              │               │
                                    └───────┬───────┘
                                            │
                                    ┌───────▼────────┐
                                    │   PostgreSQL   │
                                    │   (AWS RDS)    │
                                    │   With Backups │
                                    │   & Replicas   │
                                    └────────────────┘
```

This architecture ensures:
- ✅ Scalability
- ✅ High availability
- ✅ Data persistence
- ✅ Fast content delivery
- ✅ Easy maintenance
