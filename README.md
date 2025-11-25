# 🛍️ E-Commerce Platform

A modern, full-stack e-commerce application built with **FastAPI** (Python) and **React** (TypeScript).

## ✨ Features

- 🔐 **Authentication** - JWT-based auth with admin and user roles
- 🛒 **Shopping Cart** - Persistent cart with local storage
- 📦 **Product Management** - Multiple images, cropping, stock tracking
- 💳 **Multiple Payment Methods** - COD, Bank Transfer, Stripe
- 📄 **Invoice Generation** - Automatic PDF invoices
- 📊 **Admin Dashboard** - User, product, and order management
- 📱 **Responsive Design** - Modern UI with gradient themes

## 🚀 Quick Start

### Using Docker (Recommended)
```bash
docker compose up --build
```
- **Backend:** http://localhost:8000/api/docs
- **Frontend:** http://localhost:5173
- **MongoDB:** localhost:27017

### Local Development
```bash
# Backend
cd backend
python -m venv .venv
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # Linux/Mac
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

**Environment:** Create `.env` in root:
```env
MONGO_URL=mongodb://localhost:27017/ecommerce
SECRET_KEY=your-secret-key
```

## 📚 Documentation

- **[Development Guide](DEVELOPMENT.md)** - Complete setup and development instructions
- **[Deployment Guide](DEPLOYMENT.md)** - Production deployment guide
- **[Quick Start](QUICK_START.md)** - Fast setup for beginners
- **[FAQ](FAQ.md)** - Common questions and troubleshooting

## 🌐 Live Demo

**Frontend:** [https://ishfak07.github.io/E-comerce-py-js/](https://ishfak07.github.io/E-comerce-py-js/)

*Note: GitHub Pages hosts the static frontend only. Backend needs separate deployment.*

## 🛠️ Tech Stack

**Backend:**
- FastAPI
- MongoDB (Motor/PyMongo)
- JWT Authentication
- Stripe API
- ReportLab (PDF generation)

**Frontend:**
- React 18
- TypeScript
- Vite
- React Router
- Axios

## 🎯 Default Accounts

After seeding the database:
- **Admin:** admin@example.com / adminpass
- **User:** user@example.com / userpass

## 📝 Project Structure

```
├── backend/          # FastAPI application
├── frontend/         # React application
├── data/             # Database seeds
└── docker-compose.yml
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push and create a Pull Request

## 📄 License

MIT License - Free to use for learning and commercial projects.

## 📧 Support

For issues or questions, please create a GitHub issue with details.

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


