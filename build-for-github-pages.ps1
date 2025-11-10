# Build and Preview Script
# This script builds the frontend and allows you to preview it locally before deployment

Write-Host "🚀 Building Frontend for GitHub Pages..." -ForegroundColor Cyan
Write-Host ""

# Navigate to frontend directory
Set-Location frontend

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Build the project
Write-Host ""
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📁 Build output location: frontend/dist" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "To preview the build locally, run:" -ForegroundColor Yellow
    Write-Host "  npm run preview" -ForegroundColor White
    Write-Host ""
    Write-Host "To deploy to GitHub Pages:" -ForegroundColor Yellow
    Write-Host "  1. Commit and push your changes" -ForegroundColor White
    Write-Host "  2. Enable GitHub Pages in repository settings (Source: GitHub Actions)" -ForegroundColor White
    Write-Host "  3. The deployment will run automatically" -ForegroundColor White
    Write-Host ""
    Write-Host "📚 See DEPLOYMENT.md for complete deployment guide" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "❌ Build failed! Check the errors above." -ForegroundColor Red
    Write-Host ""
}

# Return to root directory
Set-Location ..
