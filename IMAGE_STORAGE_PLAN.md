# Image Storage Implementation Plan

## Backend Updates ✅ COMPLETED

### Database Changes
- ✅ Updated seed data with image fields for sections that need them:
  - **hero**: `image: '/hero-image.png'`
  - **banner**: `image: '/banner-image.png'`
  - **secondbanner**: `image: '/secondbanner-image.png'`
  - **faq**: `image: '/faq-image.png'`
  - **news**: Each article has `image: '/news-X.png'`
  - **testimonials**: Each card has `qrCode: '/qr-XXXX.png'`
  - **features**: Each feature has `image: '/image-XX.png'`

### Next Steps

Run seed to apply changes:
```bash
cd backend
npm run seed
```

---

## Frontend Components to Update

### 1. **Hero Section** - HeroImage component
**Current State**: Uses static image `/rectangle-5391.png`
**Required**: Fetch from DB and display `contentData.content.image`

**File**: `frontend/src/components/hero/HeroImage.tsx`
```tsx
// Should fetch from: heroData.image from useContent('hero')
```

---

### 2. **Banner Section** - BannerImage component
**Current State**: Uses static image 
**Required**: Fetch from DB and display `contentData.content.image`

**File**: `frontend/src/components/banner/BannerImage.tsx`
```tsx
// Should fetch from: bannerData.image from useContent('banner')
```

---

### 3. **SecondBanner Section** - SecondBannerImage component
**Current State**: Uses static image
**Required**: Fetch from DB and display `contentData.content.image`

**File**: `frontend/src/components/secondbanner/SecondBannerImage.tsx`
```tsx
// Should fetch from: secondBannerData.image from useContent('secondbanner')
```

---

### 4. **FAQ Section** - FAQImage component
**Current State**: Uses static image
**Required**: Fetch from DB and display `contentData.content.image`

**File**: `frontend/src/components/faq/FAQImage.tsx`
```tsx
// Should fetch from: faqData.image from useContent('faq')
```

---

### 5. **News Section** - NewsCard component
**Current State**: Accepts image prop but articles come from hardcoded defaults
**Required**: Articles already have `image` field in DB, pass to NewsCard

**File**: `frontend/src/components/news/NewsCard.tsx`
```tsx
// Already expects image prop - just ensure it's passed correctly
```

---

### 6. **Testimonials Section** - Testimonials card display
**Current State**: May display QR codes
**Required**: Fetch `qrCode` from DB for each card

**File**: `frontend/src/components/testimonials/TestimonialsCards.tsx`
```tsx
// Add qrCode display logic - render if available
```

---

### 7. **Features Section** - FeatureCard component
**Current State**: Cards display images
**Required**: Ensure images come from DB `features[].image`

**File**: `frontend/src/components/features/FeatureCard.tsx`
```tsx
// Already has image handling - verify it uses DB images
```

---

## Admin Panel Forms to Update

### 1. **Hero Admin** - `/admin/hero/page.tsx`
Add field for image URL:
```tsx
{
    name: 'image',
    label: 'Hero Image URL',
    type: 'text',
    placeholder: 'Enter image URL (e.g., /hero-image.png)',
}
```

### 2. **Banner Admin** - `/admin/banner/page.tsx`
Add field for image URL:
```tsx
{
    name: 'image',
    label: 'Banner Image URL',
    type: 'text',
    placeholder: 'Enter image URL (e.g., /banner-image.png)',
}
```

### 3. **SecondBanner Admin** - `/admin/secondbanner/page.tsx`
Add field for image URL:
```tsx
{
    name: 'image',
    label: 'SecondBanner Image URL',
    type: 'text',
    placeholder: 'Enter image URL',
}
```

### 4. **FAQ Admin** - `/admin/faq/page.tsx`
Add field for image URL:
```tsx
{
    name: 'image',
    label: 'FAQ Image URL',
    type: 'text',
    placeholder: 'Enter image URL (e.g., /faq-image.png)',
}
```

### 5. **News Admin** - `/admin/news/page.tsx`
Ensure article form includes image field:
```tsx
{
    name: 'articles',
    label: 'News Articles',
    type: 'array',
    subfields: [
        { name: 'image', type: 'text', placeholder: 'Image URL' },
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'date', type: 'text' },
        { name: 'link', type: 'text' },
    ],
}
```

### 6. **Testimonials Admin** - `/admin/testimonials/page.tsx`
Ensure card form includes qrCode field:
```tsx
{
    name: 'cards',
    label: 'Transparency Cards',
    type: 'array',
    subfields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'status', type: 'text' },
        { name: 'qrCode', type: 'text', placeholder: 'QR Code image URL' },
        // ... other fields
    ],
}
```

### 7. **Features Admin** - `/admin/features/page.tsx`
Ensure feature form includes image field:
```tsx
{
    name: 'features',
    label: 'Features',
    type: 'array',
    subfields: [
        { name: 'image', type: 'text', placeholder: 'Image URL' },
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
    ],
}
```

---

## Implementation Order

1. ✅ **Database**: Update seed with image paths (DONE)
2. **Frontend Components**: Update to fetch images from DB
3. **Admin Forms**: Add image URL fields to each section
4. **Test**: Verify all images load from DB
5. **Deploy**: Run `npm run seed` on production DB

---

## Image Path Convention

All images should be stored in `public/` directory and referenced as:
- `/hero-image.png`
- `/banner-image.png`
- `/secondbanner-image.png`
- `/faq-image.png`
- `/news-1.png`, `/news-2.png`, etc.
- `/image-41.png`, `/image-42.png`, etc. (for features)
- `/qr-contract.png`, `/qr-bscscan.png`, etc. (for testimonials)

---

## Notes

- Images are stored as URL strings in the JSONB content field
- Sections without images: staking, tokenomics, roadmap, contact
- All images are currently using placeholder paths - update them with actual image URLs in the database
- Admin forms use generic `text` type for image URLs (can be upgraded to file upload later with proper backend support)
