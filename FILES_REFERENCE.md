# Key Files Reference Guide

## Backend Files

### Core Application
| File | Purpose |
|------|---------|
| `src/main.ts` | NestJS application entry point, enables CORS, validation pipes |
| `src/app.module.ts` | Root module, imports TypeORM and ContentModule |
| `src/app.controller.ts` | Default controller |
| `src/app.service.ts` | Default service |

### Database Configuration
| File | Purpose |
|------|---------|
| `.env` | Database credentials and connection settings |
| `.env.example` | Template for environment variables |
| `src/config/database.config.ts` | TypeORM database configuration (not actively used, config in AppModule) |

### Content Management (Main Feature)
| File | Purpose |
|------|---------|
| `src/entities/content-section.entity.ts` | TypeORM entity defining database table structure |
| `src/content/content.service.ts` | Business logic for CRUD operations and seeding |
| `src/content/content.controller.ts` | HTTP endpoints for content management |
| `src/content/content.module.ts` | Feature module for content management |
| `src/content/dto/content.dto.ts` | Data validation DTOs |

### Build Configuration
| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `tsconfig.build.json` | TypeScript build configuration |
| `nest-cli.json` | NestJS CLI configuration |
| `eslint.config.mjs` | ESLint configuration |
| `.prettierrc` | Prettier code formatting |

---

## Frontend Files

### Public Site
| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main homepage (lists all sections) |
| `src/app/layout.tsx` | Root layout with global styles |
| `src/app/globals.css` | Global CSS/Tailwind |
| `src/components/...` | All public site components |

### Custom Hooks
| File | Purpose |
|------|---------|
| `src/hooks/useContent.ts` | Custom hook for fetching content from backend API |

### Updated Components (Using Backend)
| File | Purpose |
|------|---------|
| `src/components/hero/HeroContent.tsx` | Fetches hero content from `/api/content/hero` |
| `src/components/faq/FAQAccordion.tsx` | Fetches FAQ items from `/api/content/faq` |
| `src/components/staking/Staking.tsx` | Fetches staking features from `/api/content/staking` |
| `src/components/tokenomics/Tokenomics.tsx` | Fetches tokenomics from `/api/content/tokenomics` |
| `src/components/roadmap/Roadmap.tsx` | Fetches roadmap phases from `/api/content/roadmap` |
| `src/components/testimonials/Testimonials.tsx` | Fetches testimonials from `/api/content/testimonials` |
| `src/components/news/NewsArticles.tsx` | Fetches news articles from `/api/content/news` |
| `src/components/features/WhyChooseUs.tsx` | Fetches features from `/api/content/features` |

### Admin Panel
| File | Purpose |
|------|---------|
| `src/app/admin/layout.tsx` | Admin layout with sidebar navigation |
| `src/app/admin/page.tsx` | Admin dashboard showing all editable sections |
| `src/app/admin/hero/page.tsx` | Hero section editor |
| `src/app/admin/faq/page.tsx` | FAQ section editor |
| `src/app/admin/staking/page.tsx` | Staking section editor |
| `src/app/admin/tokenomics/page.tsx` | Tokenomics section editor |
| `src/app/admin/roadmap/page.tsx` | Roadmap section editor |
| `src/app/admin/testimonials/page.tsx` | Testimonials section editor |
| `src/app/admin/news/page.tsx` | News section editor |
| `src/app/admin/banner/page.tsx` | Banner section editor |
| `src/app/admin/features/page.tsx` | Features section editor |

### Admin Components
| File | Purpose |
|------|---------|
| `src/components/admin/AdminForm.tsx` | Reusable form component for editing content |

### Build Configuration
| File | Purpose |
|------|---------|
| `.env.local` | API URL for backend connection |
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `next.config.ts` | Next.js configuration |
| `postcss.config.mjs` | PostCSS configuration for Tailwind |
| `tailwind.config.ts` | Tailwind CSS configuration (if exists) |
| `eslint.config.mjs` | ESLint configuration |

---

## Project Root Documentation

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `SETUP_GUIDE.md` | Complete step-by-step setup instructions |
| `QUICKSTART.md` | Quick start for rapid setup |
| `IMPLEMENTATION_SUMMARY.md` | Technical implementation details |
| `ARCHITECTURE.md` | System architecture and data flows |
| `VERIFICATION_CHECKLIST.md` | Complete checklist of all features |

---

## File Organization Logic

### Backend Structure
```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── entities/        # TypeORM entities
│   ├── content/         # Feature module
│   │   ├── dto/         # Data transfer objects
│   │   ├── *.controller.ts
│   │   ├── *.service.ts
│   │   └── *.module.ts
│   ├── app.module.ts    # Root module
│   ├── main.ts          # Entry point
│   └── ...
├── test/                # E2E tests
├── .env                 # Environment variables
├── .prettierrc          # Code formatting
├── eslint.config.mjs    # Linting
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript config
```

### Frontend Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── admin/       # Admin panel
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Main page
│   ├── components/
│   │   ├── admin/       # Admin UI components
│   │   ├── banner/      # Banner components
│   │   ├── common/      # Shared components
│   │   ├── contact/     # Contact components
│   │   ├── faq/         # FAQ components
│   │   ├── features/    # Features components
│   │   ├── hero/        # Hero components
│   │   ├── navbar/      # Navigation
│   │   ├── news/        # News components
│   │   ├── roadmap/     # Roadmap components
│   │   ├── staking/     # Staking components
│   │   ├── testimonials/# Testimonials components
│   │   └── tokenomics/  # Tokenomics components
│   ├── hooks/
│   │   └── useContent.ts# Custom content hook
│   ├── app/
│   │   └── globals.css
│   └── ...
├── public/              # Static assets
├── .env.local          # Environment variables
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
└── next.config.ts      # Next.js config
```

---

## Critical Files (Must Not Delete)

### Backend
1. `src/main.ts` - Application won't start without it
2. `src/app.module.ts` - Root module required
3. `.env` - Database connection settings
4. `package.json` - Project dependencies

### Frontend
1. `src/app/page.tsx` - Main page/entry point
2. `.env.local` - API URL configuration
3. `src/hooks/useContent.ts` - Core data fetching
4. `package.json` - Project dependencies

---

## File Size Reference

### Backend Key Files
- `src/content/content.service.ts` ~ 400 lines (includes seed data)
- `src/app.module.ts` ~ 30 lines
- `src/main.ts` ~ 25 lines

### Frontend Key Files
- `src/hooks/useContent.ts` ~ 40 lines
- `src/components/admin/AdminForm.tsx` ~ 200 lines
- Each admin page ~ 30-50 lines

---

## How Files Relate to Each Other

### Data Flow
```
Database (.env)
    ↓
TypeORM (entity)
    ↓
Content Service (business logic)
    ↓
Content Controller (HTTP)
    ↓
useContent Hook
    ↓
Components
    ↓
Rendered UI
```

### Component Dependencies
```
page.tsx (imports all sections)
    ├── imports Hero
    │   └── HeroContent (uses useContent)
    ├── imports FAQ
    │   └── FAQAccordion (uses useContent)
    ├── imports Staking
    │   └── Staking (uses useContent)
    └── ... (etc for all sections)
```

### Admin Flow
```
admin/layout.tsx (provides sidebar)
    └── admin/[section]/page.tsx
        ├── imports AdminForm
        │   └── AdminForm (generic form handler)
        │       └── uses useContent (fetch)
        │       └── makes PUT requests (save)
```

---

## Environment Files

### `.env` (Backend - PostgreSQL Connection)
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=dashpayx
DB_SYNCHRONIZE=true
DB_LOGGING=true
NODE_ENV=development
```

### `.env.local` (Frontend - API URL)
```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

---

## Common File Modifications

### To Add New Section
1. Create admin page: `src/app/admin/[section]/page.tsx`
2. Add section entity to database seed (if needed)
3. Update database with new content type
4. Add component import to `page.tsx`

### To Change API URL
Edit `frontend/.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.production.com/api
```

### To Change Database
Edit `backend/.env`:
```
DB_HOST=your-db-host.com
DB_USERNAME=prod_user
DB_PASSWORD=secure_password
```

---

## Documentation Files Purpose

| Document | When to Read |
|----------|------------|
| `SETUP_GUIDE.md` | First time setup |
| `QUICKSTART.md` | Quick reference |
| `IMPLEMENTATION_SUMMARY.md` | Understanding architecture |
| `ARCHITECTURE.md` | System design details |
| `VERIFICATION_CHECKLIST.md` | Testing completeness |
| This file | Understanding file organization |

---

## File Change Frequency

### Rarely Changed
- `src/app.module.ts`
- `src/main.ts`
- `package.json` (after initial setup)

### Often Changed
- `src/content/content.service.ts` (add seed data)
- `.env` (for different deployments)
- Admin page files (new sections)

### Never Changed (Auto-Generated)
- `node_modules/**/*`
- `.next/**/*`
- `dist/**/*`

---

## How to Find Things

| What You Need | Where to Look |
|---------------|--------------|
| Database config | `backend/.env` |
| Backend API | `backend/src/content/content.controller.ts` |
| Edit hero content | `frontend/src/app/admin/hero/page.tsx` |
| Hero component | `frontend/src/components/hero/HeroContent.tsx` |
| Data fetching | `frontend/src/hooks/useContent.ts` |
| Admin form | `frontend/src/components/admin/AdminForm.tsx` |
| Database schema | `backend/src/entities/content-section.entity.ts` |
| Seed data | `backend/src/content/content.service.ts` (seedContent method) |

---

## Summary

✅ **Backend**: 8 files managing API + Database
✅ **Frontend**: 15+ component files + 10 admin pages + 1 hook
✅ **Documentation**: 6 comprehensive guides
✅ **Configuration**: 2 env files + multiple config files

All files work together to create a seamless content management system!
