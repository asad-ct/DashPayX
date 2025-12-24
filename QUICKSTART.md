# Quick Start Guide

## One-Time Setup

### 1. Start PostgreSQL
```bash
# Windows (if using PostgreSQL installer)
# PostgreSQL should start automatically, or start it from Services

# Or use Docker
docker run --name dashpayx-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=dashpayx -p 5432:5432 -d postgres:15
```

### 2. Start Backend (Terminal 1)
```bash
cd backend
npm install  # First time only
npm run start:dev
```

Wait for: `Backend server running on port 3001`

### 3. Start Frontend (Terminal 2)
```bash
cd frontend
npm install  # First time only
npm run dev
```

Wait for: `Local: http://localhost:3000`

### 4. Seed Database (Browser)
Open: `http://localhost:3001/api/content/seed`

You should see a JSON response with seeded content.

## Access Points

### Public Website
- Main: http://localhost:3000

### Admin Panel
- Dashboard: http://localhost:3000/admin
- Edit sections from the sidebar

## Common Commands

```bash
# Backend development
cd backend
npm run start:dev      # Development with auto-reload
npm run start          # Production mode
npm run build          # Build for production

# Frontend development
cd frontend
npm run dev            # Development with hot reload
npm run build          # Build for production
npm start              # Serve production build
```

## Testing an API Call

```bash
# Get hero content
curl http://localhost:3001/api/content/hero

# Update hero content
curl -X PUT http://localhost:3001/api/content/hero \
  -H "Content-Type: application/json" \
  -d '{"content": {"title": "New Title"}}'
```

## Reset Database

```bash
# Drop and recreate (with TypeORM synchronize enabled)
# Backend will auto-create tables on startup

# Or manually in PostgreSQL:
DROP DATABASE dashpayx;
CREATE DATABASE dashpayx;
```

## Important Notes

- Both servers must run simultaneously
- Frontend and backend use different ports (3000 and 3001)
- Database URL is configured in `backend/.env`
- API URL is configured in `frontend/.env.local`

## Next Steps

1. Visit http://localhost:3000/admin to edit content
2. Make changes in the form
3. Click "Save Changes"
4. Refresh the main site to see updates
