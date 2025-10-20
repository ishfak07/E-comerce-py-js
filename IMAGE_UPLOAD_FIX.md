# Image Upload Fix and Testing Guide

## Summary of Changes

### Fixed Issues
1. **Added detailed console logging** to AdminProducts.tsx uploadImageIfNeeded() function
2. **Added detailed console logging** to the create() function to track the product creation flow
3. **Fixed preview clearing** when form is reset after successful product creation
4. **Verified backend configuration**:
   - Upload endpoint exists at `/api/v1/admin/products/upload`
   - Static files are mounted at `/static` → `backend/app/static/`
   - Product creation endpoint accepts `images` field in payload
   - Shop page already displays `product.images[0]` in product cards

### Backend Configuration (Already Working)
- **Upload Endpoint**: `POST /api/v1/admin/products/upload`
  - Saves files to: `backend/app/static/uploads/`
  - Returns URL: `http://localhost:8001/static/uploads/{uuid}.{ext}`
  - Requires admin authentication

- **Static File Serving**: Configured in `backend/app/main.py`
  ```python
  uploads_dir = Path(__file__).parent / 'static'
  app.mount("/static", StaticFiles(directory=str(uploads_dir)), name="static")
  ```

- **Product Creation**: `POST /api/v1/admin/products`
  - Accepts `images` array in payload
  - Stores images URLs in MongoDB

### Frontend Configuration
- **Admin Products Page**: `frontend/src/pages/AdminProducts.tsx`
  - File upload input with preview
  - `uploadImageIfNeeded()` creates FormData and posts to upload endpoint
  - `create()` calls upload first, then creates product with image URLs
  - Product table displays images in first column

- **Shop Page**: `frontend/src/pages/Shop.tsx`
  - Fetches products from `/api/v1/products`
  - Displays `product.images[0]` in product cards
  - Listens for localStorage 'products:update' event to refresh

## Testing

### Test 1: Direct Backend Test (Python)
```bash
cd d:\E-comerce-py-js
python test_image_upload.py
```

**Expected Output:**
```
Step 1: Logging in as admin...
Login status: 200
Got token: eyJhbGciOiJIUzI1NiIs...

Step 2: Uploading image...
Upload status: 200
Response: {"url":"http://localhost:8001/static/uploads/{uuid}.jpg"}

✅ Upload successful! Image URL: http://localhost:8001/static/uploads/{uuid}.jpg
Image accessibility test: 200
```

### Test 2: Browser Test (HTML)
1. Make sure backend and frontend are running:
   ```powershell
   # Terminal 1 - Backend
   cd d:\E-comerce-py-js\backend
   python run_server.py

   # Terminal 2 - Frontend
   cd d:\E-comerce-py-js\frontend
   npm run dev
   ```

2. Open browser to: `http://localhost:5174/test_upload.html`

3. Click "Login" (credentials pre-filled: admin@example.com / adminpass)
   - Should see: "Login successful! Token: ..."

4. Select an image file and click "Upload"
   - Should see: "Upload successful!"
   - Should see the uploaded image displayed below

### Test 3: Admin Panel (Production Flow)
1. Navigate to: `http://localhost:5174/admin/products`

2. Fill in product details:
   - Name: "Test Product"
   - Slug: "test-product"
   - Price: 29.99
   - Stock: 10

3. Click file input and select an image
   - Should see preview thumbnail appear

4. Click "Add" button

5. **Check console logs** (F12 → Console):
   ```
   No file to upload, returning existing images: undefined
   (or)
   Uploading file: test.jpg image/jpeg 54321 bytes
   Upload successful, URL: http://localhost:8001/static/uploads/{uuid}.jpg
   Creating product with payload: {...}
   Product created successfully: {...}
   ```

6. **Verify in Admin Products Table**:
   - New product should appear at the top
   - Image should be displayed in the first column next to the name

7. **Verify in Shop Page**:
   - Navigate to: `http://localhost:5174/shop`
   - New product should appear with the uploaded image

## Troubleshooting

### Issue: Upload returns 401 Unauthorized
**Solution**: Make sure you're logged in as admin
- Email: admin@example.com
- Password: adminpass (or admin123 for fallback database)

### Issue: Upload returns 422 Validation Error
**Solution**: Check that the file input has `name="file"` and FormData uses:
```typescript
formData.append('file', file)
```

### Issue: Image doesn't appear in Shop page
**Solutions**:
1. Hard refresh the shop page (Ctrl+F5)
2. Check that product was created with `images` field
3. Check browser console for CORS or loading errors
4. Verify image URL is accessible: `http://localhost:8001/static/uploads/{filename}`

### Issue: Content-Type boundary error
**Solution**: Do NOT manually set Content-Type header when uploading FormData:
```typescript
// ❌ Wrong
api.post(url, formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
})

// ✅ Correct
api.post(url, formData)
// Let axios/browser set Content-Type with proper boundary
```

## Console Logging

### AdminProducts.tsx
With the new logging, you should see detailed output during product creation:

1. **Before upload**:
   ```
   Creating product, uploading image first...
   Uploading file: myimage.jpg image/jpeg 123456 bytes
   ```

2. **After upload**:
   ```
   Upload successful, URL: http://localhost:8001/static/uploads/{uuid}.jpg
   Image upload complete, images: ["http://localhost:8001/static/uploads/{uuid}.jpg"]
   ```

3. **After product creation**:
   ```
   Creating product with payload: {name: "Test", slug: "test", price: 29.99, ...}
   Product created successfully: {id: "..."}
   ```

4. **If error**:
   ```
   Upload error: Error {...}
   Upload failed with message: ...
   ```

## File Structure

```
backend/
  app/
    static/
      uploads/          # Uploaded images stored here
        {uuid}.jpg
        {uuid}.png
    api/v1/endpoints/
      admin_products.py # Upload & CRUD endpoints
      products.py       # Public product listing
    main.py            # Static file mounting

frontend/
  src/
    pages/
      AdminProducts.tsx # Admin product management with upload
      Shop.tsx          # Public shop with image display
    lib/
      api.ts           # Axios configuration

test_image_upload.py   # Python test script
test_upload.html      # Browser test page
```

## Next Steps

1. **Test the upload flow** using one of the three test methods above
2. **Check console logs** to see detailed information about what's happening
3. **Report any errors** you see in the console or network tab
4. If upload is working but images not showing, check:
   - MongoDB/JSON to verify `images` field is saved
   - Shop page to verify it's rendering images
   - Browser network tab to verify image URLs are accessible

## Expected Behavior

### Admin Panel
- ✅ File input allows selecting images
- ✅ Preview thumbnail appears after selection
- ✅ Clicking "Add" uploads image first, then creates product
- ✅ Product appears in table with image thumbnail
- ✅ Form resets after successful creation

### Shop Page
- ✅ Products display with images
- ✅ New products appear automatically (via localStorage event)
- ✅ Image fallback to placeholder if no image

## Debugging Commands

```powershell
# Check if backend is running
curl http://localhost:8001/api/v1/health

# Check if uploads directory exists
ls backend\app\static\uploads

# Check MongoDB for product with images
# (from backend directory)
python -c "from app.db.mongo import get_mongo_db; db = get_mongo_db(); print(list(db.get_collection('products').find({})))"

# Test upload endpoint directly
python test_image_upload.py
```

## Notes

- Image upload uses multipart/form-data with FormData API
- Axios automatically sets correct Content-Type with boundary
- Static files served at `/static/*` via FastAPI StaticFiles
- Admin authentication required for upload endpoint
- Images stored with UUID filename to prevent collisions
- Original file extension preserved (e.g., .jpg, .png, .webp)
