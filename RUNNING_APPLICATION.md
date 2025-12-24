# Setup & Running the Application

## ✅ Completed Tasks

### Database Seeding
- ✅ Created seed script at `backend/scripts/seed-database.ts`
- ✅ Added `npm run seed` command to `backend/package.json`
- ✅ Successfully seeded database with 10 content sections:
  - hero
  - banner
  - staking
  - tokenomics
  - roadmap
  - testimonials
  - faq
  - news
  - features
  - contact

### API Routing Fix
- ✅ Fixed double `api/` prefix issue in `backend/src/content/content.controller.ts`
- Changed `@Controller('api/content')` to `@Controller('content')`
- The global prefix `api` is already set in `main.ts`

### React Client Components
- ✅ Added `"use client"` directive to all components using React hooks:
  - `frontend/src/hooks/useContent.ts`
  - `frontend/src/components/hero/HeroContent.tsx`
  - `frontend/src/components/news/NewsArticles.tsx`
  - `frontend/src/components/staking/Staking.tsx`
  - `frontend/src/components/tokenomics/Tokenomics.tsx`
  - `frontend/src/components/roadmap/Roadmap.tsx`
  - `frontend/src/components/features/WhyChooseUs.tsx`

## 🚀 Quick Start - Run All 3 Commands in Separate Terminals

### Terminal 1: Backend Server
```bash
cd c:\Users\asad\Code\DashPayX\backend
npm run start:dev
```
✨ Runs on: `http://localhost:3001`

### Terminal 2: Frontend Server
```bash
cd c:\Users\asad\Code\DashPayX\frontend
npm run dev
```
✨ Runs on: `http://localhost:3000`

## 📡 API Endpoints

All endpoints are ready to use with the seeded database:

### Get All Content
```bash
GET http://localhost:3001/api/content
```

### Get Content by Type
```bash
GET http://localhost:3001/api/content/staking
GET http://localhost:3001/api/content/hero
GET http://localhost:3001/api/content/faq
GET http://localhost:3001/api/content/tokenomics
GET http://localhost:3001/api/content/roadmap
GET http://localhost:3001/api/content/testimonials
GET http://localhost:3001/api/content/news
GET http://localhost:3001/api/content/features
GET http://localhost:3001/api/content/contact
GET http://localhost:3001/api/content/banner
```

### Update Content
```bash
PUT http://localhost:3001/api/content/:type
Content-Type: application/json

{
  "section_type": "staking",
  "content": {
    "title": "Updated Title",
    "subtitle": "Updated Subtitle",
    "features": [...]
  },
  "is_published": true
}
```

### Delete Content
```bash
DELETE http://localhost:3001/api/content/:type
```

### Re-seed Database
```bash
npm run seed
```

Or via API:
```bash
GET http://localhost:3001/api/content/seed
```

## 📋 Database

The database uses a single `content_sections` table with flexible JSONB structure:

```sql
- id: SERIAL PRIMARY KEY
- section_type: VARCHAR (UNIQUE) - identifies the content section
- content: JSONB - flexible JSON structure for any content shape
- is_published: BOOLEAN - flag to enable/disable sections
- created_at: TIMESTAMP - auto-generated
- updated_at: TIMESTAMP - auto-updated
```

## 🔌 Frontend Integration

All components automatically fetch from the API:

```typescript
// In any component marked as "use client"
import { useContent } from "@/hooks/useContent";

export const MyComponent = () => {
  const { data, loading, error } = useContent('staking');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  // Use data.content here
  return <div>{data.content.title}</div>;
};
```

## 🎨 Admin Panel

Navigate to: `http://localhost:3000/admin`

### Available Sections
- Dashboard (`/admin`)
- Hero Section (`/admin/hero`)
- FAQ (`/admin/faq`)
- Staking (`/admin/staking`)
- Tokenomics (`/admin/tokenomics`)
- Roadmap (`/admin/roadmap`)
- Testimonials (`/admin/testimonials`)
- News (`/admin/news`)
- Banner (`/admin/banner`)
- Features (`/admin/features`)

### Editing Content
1. Navigate to any section in the admin panel
2. Edit the fields directly
3. Click "Save Changes" button
4. Changes are immediately sent to the backend
5. Frontend automatically updates when you refresh

## 📊 System Architecture

```
Frontend (Next.js 14)
├─ Components (Client-side)
│  ├─ Hero
│  ├─ FAQ
│  ├─ Staking
│  ├─ Tokenomics
│  ├─ Roadmap
│  ├─ Testimonials
│  ├─ News
│  └─ Features
├─ Custom Hooks
│  └─ useContent (fetches from API)
└─ Admin Panel (CMS)
   └─ Dynamic forms for each section

        ↓ HTTP (REST API)

Backend (NestJS 10)
├─ Controllers (6 endpoints)
├─ Services (Business logic + seeding)
├─ Entities (TypeORM)
└─ DTOs (Validation)

        ↓ SQL Queries

Database (PostgreSQL)
└─ Single Table: content_sections (JSONB storage)
```

## 🔧 Configuration

### Backend (.env)
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=root
DB_DATABASE=dashpayx
DB_SYNCHRONIZE=true
DB_LOGGING=true
NODE_ENV=development
PORT=3001
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## ✨ Seeded Content Sections

The database is pre-populated with 10 sections containing:
- **hero**: Title, description, and CTA buttons
- **banner**: Promotional banner content
- **staking**: Features and staking info
- **tokenomics**: Token details and supply info
- **roadmap**: 4-phase project roadmap
- **testimonials**: Transparency milestones
- **faq**: 6 frequently asked questions
- **news**: 3 crypto news articles
- **features**: Key features list
- **contact**: Contact information

## 🎯 Next Steps

1. ✅ Backend running on port 3001
2. ✅ Frontend running on port 3000
3. ✅ Database seeded with content
4. ✅ API endpoints working
5. ✅ Admin panel ready
6. 🔜 Visit http://localhost:3000 to see the site
7. 🔜 Visit http://localhost:3000/admin to manage content

---

**All systems are operational!** 🎉
