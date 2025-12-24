# DashPayX Full Stack Setup Guide

This guide will help you set up the complete DashPayX project with NestJS backend, PostgreSQL database, and Next.js frontend with admin panel.

## Project Structure

```
DashPayX/
├── frontend/          # Next.js application
├── backend/           # NestJS API server
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Backend Setup

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Configure Database

Update the `.env` file in the backend directory:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=dashpayx
DB_SYNCHRONIZE=true
DB_LOGGING=true
NODE_ENV=development
```

**Important**: Make sure PostgreSQL is running and create the database:

```sql
CREATE DATABASE dashpayx;
```

### 3. Start Backend Server

```bash
npm run start:dev
```

The backend will run on `http://localhost:3001`

### 4. Seed Database (Optional)

To populate the database with sample content, visit:
```
http://localhost:3001/api/content/seed
```

## Frontend Setup

### 1. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 2. Configure Environment

Create/update `.env.local` in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### 3. Start Frontend Development Server

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Features

### Main Website
- **Home**: `http://localhost:3000`
- Dynamic content loaded from backend
- All sections fetch data from the NestJS API

### Admin Panel
- **Dashboard**: `http://localhost:3000/admin`
- Edit individual sections:
  - `/admin/hero` - Hero section content
  - `/admin/faq` - FAQ items
  - `/admin/staking` - Staking features
  - `/admin/tokenomics` - Tokenomics details
  - `/admin/roadmap` - Roadmap phases
  - `/admin/testimonials` - Transparency cards
  - `/admin/news` - News articles
  - `/admin/banner` - Banner content
  - `/admin/features` - Features section

## API Endpoints

### Content Management
- `GET /api/content` - Get all published content
- `GET /api/content/:type` - Get specific section content
- `POST /api/content` - Create new content section
- `PUT /api/content/:type` - Update content section
- `DELETE /api/content/:type` - Delete content section
- `GET /api/content/seed` - Seed database with default content

## Database Schema

### content_sections table

```sql
CREATE TABLE content_sections (
  id SERIAL PRIMARY KEY,
  section_type VARCHAR(50) UNIQUE NOT NULL,
  content JSONB NOT NULL,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Troubleshooting

### Backend Connection Issues
- Ensure PostgreSQL is running
- Verify database credentials in `.env`
- Check if port 3001 is available

### Frontend API Errors
- Verify backend is running on port 3001
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Ensure CORS is enabled in backend

### Admin Panel Not Loading
- Clear browser cache
- Check browser console for errors
- Verify API connection with `http://localhost:3001/api/content`

## Development Tips

1. **Monitor API Calls**: Open browser DevTools Network tab to see API calls
2. **Database Backup**: Export content before major changes
3. **Hot Reload**: Both backend and frontend support hot reload during development
4. **Admin Panel**: Start with seeding default content for testing

## Production Deployment

Before deploying, update:
1. Database credentials for security
2. API URL in frontend `.env.local`
3. CORS settings in backend for production domain
4. Set `DB_SYNCHRONIZE=false` in production

## File Organization

### Backend
- `src/entities/` - TypeORM entities
- `src/content/` - Content module (controller, service, DTOs)
- `src/config/` - Database configuration
- `src/main.ts` - Application entry point

### Frontend
- `src/hooks/useContent.ts` - Hook for fetching content
- `src/components/admin/` - Admin UI components
- `src/app/admin/` - Admin pages
- `src/components/` - Public site components

## Next Steps

1. Customize admin panel fields for your needs
2. Add authentication to admin panel
3. Implement image upload functionality
4. Add content versioning
5. Set up automated backups

## Support

For issues or questions, refer to:
- NestJS Documentation: https://docs.nestjs.com
- Next.js Documentation: https://nextjs.org/docs
- TypeORM Documentation: https://typeorm.io
