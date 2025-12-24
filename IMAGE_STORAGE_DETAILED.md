# Image Storage Implementation - Complete Guide

## Architecture Overview

Images in DashPayX are stored as **URL strings** in the PostgreSQL JSONB `content` field, NOT as binary buffers. This is the simplest and most scalable approach.

---

## How Images Are Stored

### Current Approach: URL-Based Storage
```json
{
  "section_type": "hero",
  "content": {
    "title": "...",
    "image": "/hero-image.png",  // Just a path string!
    "...": "..."
  }
}
```

**Why this approach?**
- ✅ Simplest implementation
- ✅ No file upload complexity
- ✅ Works with any static hosting (CDN, cloud storage)
- ✅ Easy to update from admin panel
- ✅ JSONB supports flexible schema
- ✅ No base64 encoding overhead

---

## Two Options for Actual Image Files

### Option 1: Public Folder (Current - Simple)
```
frontend/public/
├── hero-image.png
├── banner-image.png
├── news-1.png
├── news-2.png
└── ...
```

**Advantages:**
- Zero setup required
- Works immediately with Next.js
- Perfect for small-medium projects
- Easy to manage

**Disadvantages:**
- Limited by disk space
- All images served from same server
- No optimization

---

### Option 2: Cloud Storage (Production - Recommended)
```
Store actual image files on:
- AWS S3
- Firebase Storage
- Cloudinary
- Vercel Blob Storage
```

**How it works:**
1. Admin uploads image via form
2. Backend receives file
3. File uploaded to cloud storage (AWS S3, Cloudinary, etc.)
4. Cloud returns URL (e.g., `https://cdn.example.com/hero-image.png`)
5. URL stored in database
6. Frontend fetches from URL

**Advantages:**
- Unlimited storage
- CDN distribution = fast loading
- Better performance
- Scalable

**Disadvantages:**
- Requires backend setup
- Third-party service costs
- More complex

---

## Current Implementation (URL-Based)

### Backend Database
```typescript
// PostgreSQL JSONB Storage
{
  "image": "/hero-image.png",
  "qrCode": "/qr-contract.png",
  "articles": [
    { "image": "/news-1.png", ... }
  ]
}
```

### Frontend Display
```tsx
// HeroImage.tsx - Example
export const HeroImage = () => {
    const { data: contentData } = useContent('hero');
    const imageSrc = contentData?.content?.image || '/image-36.png';
    
    return (
        <Image src={imageSrc} alt="..." width={474} height={510} />
    );
};
```

### Admin Form
```tsx
// Admin can update image URL
{
    name: 'image',
    label: 'Hero Image URL',
    type: 'text',
    placeholder: 'Enter image URL (e.g., /hero-image.png)',
}
```

---

## How to Upgrade to File Upload (Optional)

If you want actual file upload capability instead of just URL input, here's the path:

### Step 1: Install multer for file handling
```bash
npm install multer
npm install --save-dev @types/multer
```

### Step 2: Create file upload endpoint in backend
```typescript
// backend/src/upload/upload.controller.ts
import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('upload')
export class UploadController {
    @Post('image')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                cb(null, `${randomName}${extname(file.originalname)}`);
            }
        })
    }))
    uploadImage(@UploadedFile() file: Express.Multer.File) {
        return { url: `/uploads/${file.filename}` };
    }
}
```

### Step 3: Update admin form to handle file upload
```tsx
// admin/hero/page.tsx
const heroFields = [
    {
        name: 'image',
        label: 'Hero Image',
        type: 'file',  // Change to file type
        accept: 'image/*',
        endpoint: '/api/upload/image'  // Upload endpoint
    }
]
```

### Step 4: Update AdminForm component to handle file uploads
```tsx
// AdminForm.tsx
const handleFileUpload = async (file: File, endpoint: string) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(endpoint, {
        method: 'POST',
        body: formData
    });
    
    const data = await response.json();
    return data.url;  // Returns: /uploads/abc123.png
};
```

---

## Current Data Structure in Database

All 7 sections with images:

```typescript
// HERO
{
  "image": "/hero-image.png",
  "title": "...",
  "description": "...",
  "primaryCta": { "text": "...", "link": "..." },
  "secondaryCta": { "text": "...", "link": "..." }
}

// BANNER
{
  "image": "/banner-image.png",
  "heading": "...",
  "description": "...",
  "features": [...]
}

// SECONDBANNER
{
  "image": "/secondbanner-image.png",
  "title": "...",
  "description": "...",
  "bulletPoints": [...]
}

// FAQ
{
  "image": "/faq-image.png",
  "title": "...",
  "subtitle": "...",
  "faqs": [...]
}

// NEWS (Multiple images)
{
  "articles": [
    { "image": "/news-1.png", "title": "...", ... },
    { "image": "/news-2.png", "title": "...", ... }
  ]
}

// TESTIMONIALS (QR Codes)
{
  "cards": [
    { "qrCode": "/qr-contract.png", "title": "...", ... },
    { "qrCode": "/qr-bscscan.png", "title": "...", ... }
  ]
}

// FEATURES (Multiple images)
{
  "features": [
    { "image": "/image-41.png", "title": "...", ... },
    { "image": "/image-42.png", "title": "...", ... }
  ]
}
```

---

## Admin Panel Image Management

### Update Flow:
1. Admin goes to `/admin/hero`
2. Sees form with "Hero Image URL" field
3. Enters URL like `/my-hero-image.png`
4. Clicks Save
5. URL stored in database: `content.image = "/my-hero-image.png"`
6. Frontend fetches DB and renders: `<Image src="/my-hero-image.png" />`

### Add Image to Public Folder:
```bash
# Option 1: Manual
1. Place image in frontend/public/
2. Reference it in admin form: /image-name.png

# Option 2: Keep images elsewhere
1. Use absolute URL in admin form: https://cdn.example.com/image.png
2. Works with external CDNs
```

---

## Complete Image Field Summary

| Section | Image Field | Type | Database Location |
|---------|------------|------|-------------------|
| Hero | `image` | String | `content.image` |
| Banner | `image` | String | `content.image` |
| SecondBanner | `image` | String | `content.image` |
| FAQ | `image` | String | `content.image` |
| News Articles | `image` | String | `content.articles[].image` |
| Testimonials | `qrCode` | String | `content.cards[].qrCode` |
| Features | `image` | String | `content.features[].image` |

---

## Next Steps

1. ✅ **Database**: Updated with image fields
2. ✅ **Frontend**: Components fetch images from DB
3. ✅ **Admin Forms**: Image URL fields added
4. 📝 **To Do**: Run `npm run seed` to apply changes
5. 📝 **To Do**: Add image files to `frontend/public/`
6. 📝 (Optional): Implement file upload endpoint for production

---

## Testing

### Test if images load from database:
```bash
1. npm run seed
2. npm run dev (frontend)
3. Visit http://localhost:3000
4. Open DevTools Network tab
5. Verify images load from /hero-image.png, /banner-image.png, etc.
6. Check if all sections display images
```

---

## Key Points

✅ Images are stored as **URL strings** in JSONB, not binary  
✅ All 7 image-enabled sections now have DB support  
✅ Admin forms can update image URLs  
✅ Frontend components fetch from DB  
✅ Fallback to default images if DB is empty  
✅ Easy to migrate to cloud storage later  

---

## Notes for Production

- **Option 1 (Current)**: Use public folder + CDN for speed
- **Option 2 (Recommended)**: Implement cloud storage (AWS S3, Cloudinary)
- **Validation**: Consider adding image validation in admin form
- **Caching**: Next.js Image component handles caching automatically
- **Performance**: Use Next.js Image optimization for all image sizes
