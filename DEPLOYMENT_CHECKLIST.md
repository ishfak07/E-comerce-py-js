# ✅ GitHub Pages Deployment Checklist

Use this checklist to deploy your e-commerce frontend to GitHub Pages.

## Pre-Deployment Checklist

- [ ] **All changes committed to Git**
  ```bash
  git status  # Verify no uncommitted changes
  ```

- [ ] **Build runs successfully locally**
  ```bash
  cd frontend
  npm run build
  ```

- [ ] **Review files created/modified:**
  - [ ] `.nojekyll` - Disables Jekyll
  - [ ] `.github/workflows/deploy.yml` - Deployment workflow
  - [ ] `frontend/vite.config.ts` - Base path config
  - [ ] `frontend/public/404.html` - Client-side routing fix
  - [ ] `frontend/src/main.tsx` - 404 redirect handler
  - [ ] `frontend/public/docs/*.md` - Documentation files (9 files)

## Deployment Steps

### Step 1: Enable GitHub Pages
- [ ] Go to GitHub repository: `https://github.com/ishfak07/E-comerce-py-js`
- [ ] Click **Settings** tab
- [ ] Click **Pages** in left sidebar
- [ ] Under "Build and deployment":
  - [ ] Source: Select **"GitHub Actions"** (not "Deploy from a branch")
- [ ] Save changes

### Step 2: Push Changes to GitHub
```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "Configure GitHub Pages deployment with automated workflow"

# Push to main branch
git push origin main
```

### Step 3: Monitor Deployment
- [ ] Go to **Actions** tab on GitHub
- [ ] You should see "Deploy to GitHub Pages" workflow running
- [ ] Wait for workflow to complete (usually 2-3 minutes)
- [ ] Check for green checkmark ✅

### Step 4: Verify Deployment
- [ ] Open your site: `https://ishfak07.github.io/E-comerce-py-js/`
- [ ] Test navigation:
  - [ ] Home page loads
  - [ ] FAQ page loads (`/faq`)
  - [ ] Shop page loads (`/shop`)
  - [ ] About page loads (`/about`)
  - [ ] Documentation links work (click any doc in FAQ page)
- [ ] Test page refresh:
  - [ ] Navigate to `/shop`
  - [ ] Press F5 to refresh
  - [ ] Should stay on `/shop` (not show 404)

## Troubleshooting

### ❌ Problem: Workflow Fails
**Check:**
1. Go to Actions tab → Click failed workflow → View logs
2. Common issues:
   - Missing `package-lock.json` → Run `npm install` in frontend folder and commit
   - Build errors → Test build locally: `cd frontend && npm run build`
   - Permission errors → Check repository permissions in Settings

**Fix:**
```bash
cd frontend
npm install  # Regenerate package-lock.json
npm run build  # Verify build works
cd ..
git add frontend/package-lock.json
git commit -m "Add package-lock.json"
git push
```

### ❌ Problem: Site Shows 404 Not Found
**Possible causes:**
1. GitHub Pages not enabled correctly
   - **Fix:** Go to Settings → Pages → Source: GitHub Actions
2. Deployment still in progress
   - **Fix:** Wait for Actions workflow to complete
3. Wrong URL
   - **Fix:** Use `https://ishfak07.github.io/E-comerce-py-js/` (note repository name in path)

### ❌ Problem: Blank Page After Deployment
**Check browser console (F12):**
1. Look for errors
2. Common causes:
   - Assets not loading (base path issue)
   - JavaScript errors

**Fix:**
```bash
# Verify base path in vite.config.ts
# Should have: base: process.env.VITE_BASE_PATH || '/',
```

### ❌ Problem: Routes Return 404 on Refresh
**This should be fixed by 404.html, but if not:**

**Verify files exist:**
- [ ] `frontend/public/404.html` exists
- [ ] `frontend/src/main.tsx` has redirect handler code

### ❌ Problem: Documentation Links Don't Work
**Check:**
1. Files exist in `frontend/public/docs/` (9 markdown files)
2. FAQ links point to `/docs/*.md` (not `/FILENAME.md`)

**Fix:**
```bash
# Verify files exist
ls frontend/public/docs/

# Should show:
# QUICK_START.md
# AUTHENTICATION_IMPLEMENTATION.md
# ... (7 more files)
```

## Post-Deployment Notes

### ⚠️ Backend Not Included
- GitHub Pages deployment is **frontend only** (static files)
- API calls won't work without backend deployment
- Features requiring backend (login, cart sync, checkout) won't function

### 🚀 To Enable Full Functionality:
1. **Deploy Backend Separately:**
   - Use Heroku, Railway, DigitalOcean, AWS, etc.
   - Deploy the `backend/` folder
   - Set up MongoDB connection
   - Configure environment variables

2. **Connect Frontend to Backend:**
   - Create `frontend/.env.production`
   - Add: `VITE_API_URL=https://your-backend-url.com`
   - Update `frontend/src/lib/api.ts` to use env variable
   - Rebuild and redeploy frontend

3. **Configure CORS on Backend:**
   - Allow requests from `https://ishfak07.github.io`
   - Add to FastAPI CORS middleware origins

## Success! 🎉

If all checks pass:
- ✅ Your frontend is live at: `https://ishfak07.github.io/E-comerce-py-js/`
- ✅ All routes work correctly
- ✅ Documentation is accessible
- ✅ Automatic deployment on future commits to main branch

## Additional Resources

- 📖 [DEPLOYMENT.md](DEPLOYMENT.md) - Full deployment guide
- 📝 [GITHUB_PAGES_FIX.md](GITHUB_PAGES_FIX.md) - Technical details of fixes
- 🔧 [GitHub Actions Logs](https://github.com/ishfak07/E-comerce-py-js/actions) - Monitor deployments
- 📚 [GitHub Pages Docs](https://docs.github.com/en/pages) - Official documentation

---

**Need help?** Check the troubleshooting section above or review the full deployment guide in `DEPLOYMENT.md`.
