E-commerce App (FastAPI + React)

Quick start (Docker)

1. Set envs before compose (Stripe optional): STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET
2. Start services:

```bash
docker compose up --build
```

Services:
- API: http://localhost:8000/api/docs
- Frontend: http://localhost:5173
- Postgres: localhost:5432 (user: postgres / password: postgres)

Local dev (without Docker)

Backend:
```bash
cd backend
python -m venv .venv && . .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

Environment
- DATABASE_URL e.g. postgresql+psycopg://postgres:postgres@localhost:5432/ecommerce
- SECRET_KEY for JWT
- STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET (optional)

## 🌐 Deployment

### GitHub Pages (Frontend Only)
The frontend is automatically deployed to GitHub Pages on every push to `main`.

**Live Demo:** `https://ishfak07.github.io/E-comerce-py-js/`

**Documentation:**
- [Complete Deployment Guide](DEPLOYMENT.md)
- [GitHub Pages Fix Summary](GITHUB_PAGES_FIX.md)

**Note:** GitHub Pages hosts only the static frontend. For full functionality, deploy the backend separately and configure the API URL.

## CI/CD
- GitHub Actions builds/lints backend and frontend
- Automated deployment to GitHub Pages via workflow

## 📚 Documentation
- [Quick Start Guide](QUICK_START.md)
- [Authentication Implementation](AUTHENTICATION_IMPLEMENTATION.md)
- [Order Status System](ORDER_STATUS_TECHNICAL_DOCS.md)
- [Invoice Feature](INVOICE_FEATURE_COMPLETE.md)
- [Multiple Images](MULTIPLE_IMAGES_FEATURE.md)
- [Currency Change](CURRENCY_CHANGE.md)
- [Admin Panel Fixes](ADMIN_PANEL_FIXES.md)
- [Bank Transfer Payments](BANK_TRANSFER_UPGRADE.md)
- [Image Upload System](IMAGE_UPLOAD_FIX.md)

Next steps
- Complete cart persistence, admin portal, and tests
- Harden security (rate limiting, input validation)
- Deploy backend for production


