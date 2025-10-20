# Multiple Image Upload Feature - Admin Products

## Overview
Enhanced the Admin Products page to support **1-5 images per product** with full editing capabilities, image preview, and removal functionality.

## ✨ New Features

### 1. Multiple Image Upload (1-5 images)
- **Minimum:** 1 image required per product
- **Maximum:** 5 images allowed per product
- **File Format:** All image formats supported (JPEG, PNG, WebP, etc.)
- **Multiple Selection:** Select multiple files at once using file picker

### 2. Image Preview Before Upload
- Live preview thumbnails for all selected images
- Preview shows before product creation
- Visual feedback with border colors:
  - **Purple border** (#6D74FF) - New product images
  - **Green border** (#4ade80) - New images being added to existing product

### 3. Image Management
- **Remove Images:** Click × button on any preview to remove
- **Reorder:** Currently sequential (first image is primary)
- **Replace:** Remove old images and add new ones

### 4. Edit Product Modal
- Full product editing in modal overlay
- Edit all fields: Name, Slug, Price, Stock, Images
- Manage existing images (view & remove)
- Add new images (up to 5 total)
- Real-time validation

## 📸 How to Use

### Adding a New Product with Images

1. **Fill in product details:**
   - Name (required, min 2 characters)
   - Slug (required, min 2 characters)
   - Price (required, ≥ 0)
   - Stock (required, integer ≥ 0)

2. **Select images:**
   - Click the file input under "Product Images"
   - Select 1-5 images (you can select multiple at once)
   - Preview thumbnails will appear below

3. **Remove unwanted images:**
   - Click the red × button on any preview thumbnail
   - Thumbnail is immediately removed from selection

4. **Add product:**
   - Click "Add Product" button
   - All images are uploaded to server
   - Product is created with all image URLs

### Editing an Existing Product

1. **Open edit modal:**
   - Click "Edit" button next to any product in the table
   - Modal opens with all current product details

2. **View current images:**
   - All existing images are shown with purple borders
   - Shows count: "Current Images (X/5)"

3. **Remove existing images:**
   - Click red × button on any existing image
   - Image is marked for removal (won't be saved)

4. **Add new images:**
   - Click "Add New Images" file input
   - Select additional images (total must be 1-5)
   - New image previews show with green borders

5. **Save changes:**
   - Click "Save Changes" button
   - New images are uploaded
   - Product is updated with new image list

6. **Cancel:**
   - Click "Cancel" or click outside modal to close
   - No changes are saved

## 🎨 UI/UX Features

### Visual Feedback
- **Image Counter:** Shows how many images selected (e.g., "3 selected")
- **Total Count:** In edit modal shows "Current Images (3/5)"
- **Color Coding:**
  - Purple borders = Existing/New product images
  - Green borders = New images being added to existing product
  - Red × button = Remove image

### Validation Messages
- "Maximum 5 images allowed per product"
- "At least 1 image is required"
- "No images selected. Please select 1-5 images."
- Error alerts for upload failures

### Modal Design
- **Dark theme** consistent with admin panel
- **Backdrop blur** for focus
- **Scrollable content** for long image lists
- **Responsive layout** (90% width, max 600px)
- **Custom scrollbar** with purple thumb

## 🔧 Technical Implementation

### State Management
```typescript
const [selectedFiles, setSelectedFiles] = useState<File[]>([])
const [previewUrls, setPreviewUrls] = useState<string[]>([])
const [editingProduct, setEditingProduct] = useState<Prod | null>(null)
const [showEditModal, setShowEditModal] = useState<boolean>(false)
```

### Key Functions

#### `uploadImages(files: File[]): Promise<string[]>`
- Uploads multiple files sequentially
- Returns array of uploaded image URLs
- Handles errors for individual files

#### `handleFileSelect(e: React.ChangeEvent<HTMLInputElement>)`
- Validates max 5 images
- Creates preview URLs using `URL.createObjectURL()`
- Sets selected files and preview URLs

#### `removePreviewImage(index: number)`
- Removes file from selection
- Revokes object URL to free memory
- Updates preview list

#### `removeProductImage(index: number)`
- Removes image from editing product
- Updates product state immediately

#### `saveEditedProduct()`
- Uploads new images first
- Combines existing + new images
- Validates 1-5 image requirement
- Updates product via API

### Image Upload Flow

**New Product:**
```
1. User selects files → handleFileSelect()
2. Create preview URLs → setPreviewUrls()
3. User clicks "Add Product" → create()
4. Upload all images → uploadImages()
5. Create product with image URLs
6. Clean up previews
```

**Edit Product:**
```
1. User clicks "Edit" → openEditModal()
2. Load existing images → setEditingProduct()
3. User adds new files → handleFileSelect()
4. User removes images → removeProductImage()
5. User clicks "Save" → saveEditedProduct()
6. Upload new images → uploadImages()
7. Combine old + new images
8. Update product via API
9. Close modal → closeEditModal()
```

## 📊 Image Display

### Product Table
- **Primary Image:** First image in array displayed as thumbnail
- **Size:** 48px height
- **Fallback:** No image shown if product.images is empty

### Shop Page (User-Facing)
- **Primary Image:** `product.images[0]` displayed
- **Fallback:** Placeholder if no images

### Product Detail Page
- **Primary Image:** `product.images[0]` displayed
- **Gallery:** Can be extended to show all images (future enhancement)

## 🚀 Future Enhancements

### Potential Features
1. **Drag & Drop Reordering:**
   - Allow dragging to change image order
   - Set featured/primary image manually

2. **Image Gallery in Detail Page:**
   - Show all 5 images in product detail
   - Carousel or grid layout
   - Zoom functionality

3. **Image Cropping:**
   - Built-in image editor
   - Crop/resize before upload
   - Aspect ratio enforcement

4. **Bulk Upload:**
   - Upload images to library
   - Select from previously uploaded images

5. **Image Optimization:**
   - Auto-resize large images
   - Convert to WebP format
   - Compress for faster loading

## 🐛 Known Limitations

1. **No Reordering:** Images are stored in upload order
2. **No Bulk Edit:** Must edit products one at a time
3. **No Image Library:** Each upload is independent
4. **No Server-Side Validation:** 5-image limit only on frontend

## 🧪 Testing Checklist

### New Product Creation
- [ ] Upload 1 image → Success
- [ ] Upload 5 images → Success
- [ ] Try to upload 6 images → Error shown
- [ ] Try to create without images → Error shown
- [ ] Remove images from preview → Works
- [ ] Preview thumbnails display correctly

### Product Editing
- [ ] Open edit modal → Shows current images
- [ ] Remove existing image → Updates count
- [ ] Add new image → Shows with green border
- [ ] Total > 5 images → Error on save
- [ ] Total < 1 image → Error on save
- [ ] Save with valid images → Success
- [ ] Cancel modal → No changes saved

### Image Display
- [ ] Table shows first image
- [ ] Shop page shows product images
- [ ] Product detail shows image
- [ ] No image fallback works

## 📝 Code Locations

### Main File
```
frontend/src/pages/AdminProducts.tsx
```

### Key Components
- Line ~91-155: Image upload and management functions
- Line ~395-490: New product form with multi-image input
- Line ~605-760: Edit product modal

### Related Files
```
backend/app/api/v1/endpoints/admin_products.py - Upload endpoint
backend/app/static/uploads/ - Uploaded images storage
frontend/src/pages/Shop.tsx - User-facing display
frontend/src/pages/ProductDetail.tsx - Product detail display
```

## 💡 Tips

### For Admins
1. **First image is primary** - Choose your best product photo first
2. **Use high quality images** - Recommended min 600x400px
3. **Consistent aspect ratio** - Use similar image dimensions
4. **Test on mobile** - Verify images look good on small screens

### For Developers
1. **Memory Management** - Always revoke object URLs when done
2. **Error Handling** - Upload errors are logged to console
3. **Validation** - Both client and server should validate
4. **Image Optimization** - Consider adding compression

---

**Version:** 1.0  
**Last Updated:** October 20, 2025  
**Status:** ✅ Complete and Ready to Use
