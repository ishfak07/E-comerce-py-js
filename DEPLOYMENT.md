# GitHub Pages Deployment Guide

This guide explains how to deploy the frontend of this e-commerce application to GitHub Pages.

## 🚀 Automated Deployment

The repository is configured with GitHub Actions to automatically build and deploy the frontend to GitHub Pages when you push to the `main` branch.

### Setup Steps:

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - Save the changes

2. **Push Changes:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor Deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow run
   - Once complete, your site will be available at: `https://ishfak07.github.io/E-comerce-py-js/`

## 📝 What Was Fixed

### Issues Resolved:
1. ✅ **Jekyll Processing Error** - Added `.nojekyll` file to disable Jekyll processing
2. ✅ **Build Configuration** - Created GitHub Actions workflow that:
   - Only builds the frontend (not backend Python files)
   - Uses proper Node.js environment
   - Deploys only the `frontend/dist` folder
3. ✅ **Base Path Configuration** - Updated `vite.config.ts` to support custom base paths

### Files Created/Modified:
- `.nojekyll` - Disables GitHub Pages Jekyll processing
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automated deployment
- `frontend/vite.config.ts` - Added base path configuration
- `DEPLOYMENT.md` - This file (deployment documentation)

## 🔧 Manual Deployment (Alternative)

If you prefer to deploy manually:

1. **Build the frontend:**
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. **Deploy the `dist` folder:**
   - Use the GitHub Pages settings to deploy from the `gh-pages` branch
   - Or use a tool like `gh-pages` package:
     ```bash
     npm install -g gh-pages
     gh-pages -d frontend/dist
     ```

## ⚠️ Important Notes

### Backend Integration
- The deployed frontend on GitHub Pages is **static only**
- API calls to `/api/*` and `/static/*` will not work without a backend
- For a fully functional app, you need to:
  1. Deploy the backend separately (e.g., Heroku, Railway, DigitalOcean)
  2. Update the frontend API configuration to point to your backend URL
  3. Configure CORS on the backend to allow requests from your GitHub Pages domain

### Environment Variables
If you need to configure the backend API URL for production:

1. Create `frontend/.env.production`:
   ```env
   VITE_API_URL=https://your-backend-url.com
   ```

2. Update `frontend/src/lib/api.ts` to use this environment variable:
   ```typescript
   const baseURL = import.meta.env.VITE_API_URL || '/api/v1';
   ```

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `frontend/public/`:
   ```
   yourdomain.com
   ```

2. Configure DNS records with your domain provider:
   - Add a CNAME record pointing to `ishfak07.github.io`
   
3. Enable custom domain in GitHub Pages settings

## 📊 Deployment Status

After deployment, verify:
- ✅ Site loads at: `https://ishfak07.github.io/E-comerce-py-js/`
- ✅ Static assets (CSS, JS, images) load correctly
- ✅ Routing works (all pages accessible)
- ⚠️ Note: API functionality requires backend deployment

## 🐛 Troubleshooting

### Problem: 404 Errors on Page Refresh
**Solution:** Add a `404.html` that redirects to `index.html` for client-side routing:
```html
<!-- frontend/public/404.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
</html>
```

### Problem: Blank Page After Deployment
**Solution:** Check browser console for errors. Common causes:
- Base path mismatch - ensure `base` in `vite.config.ts` matches your repository name
- Missing assets - verify build completed successfully

### Problem: GitHub Actions Workflow Fails
**Solution:** 
- Check the Actions tab for error details
- Verify `package-lock.json` is committed
- Ensure all dependencies are listed in `package.json`

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
