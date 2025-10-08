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

CI
- GitHub Actions builds/lints backend and frontend

Next steps
- Complete cart persistence, admin portal, and tests
- Harden security (rate limiting, input validation)


