Database seeding and connection instructions

When bcrypt binaries are not available on your system (common on Windows), the project includes a safe fallback so you can still run the app and seed the database.

Steps to start the database and seed locally (PowerShell):

1) Start MongoDB with Docker-compose (from repo root):

```powershell
docker-compose up -d mongo
```

2) Install Python dependencies for the backend (use a virtualenv):

```powershell
python -m venv .venv; .\.venv\Scripts\Activate.ps1; pip install -r backend/requirements.txt
```

If bcrypt fails to install, the app will still work thanks to a fallback in `backend/app/core/security.py` which uses sha256 hashes for seeded users.

3) Run the seed script (two options):

- Normal seed (uses hashing when possible):

```powershell
python -m backend.app.seed
```

- Seed without hashing (explicit plain-text fallback script):

```powershell
python backend\seed_no_hash.py
```

4) Connection details (Mongo):

- Host: localhost
- Port: 27017
- Database: ecommerce

Mongo URI:

mongodb://localhost:27017/ecommerce

Test accounts created by the seed:

-- Admin: admin@example.com / adminpass
-- User: user@example.com / userpass

Notes:
- The `sha256$<hex>` stored hash format is used as a fallback and is supported by the app's `verify_password` implementation.
- Storing plain text passwords (`plain$...`) is only used as a last-resort development fallback and must never be used in production.
- If you need bcrypt on Windows, use a Python distribution that provides prebuilt bcrypt wheels (e.g., Microsoft Store Python or conda) or install a compatible binary wheel.
