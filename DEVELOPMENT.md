# E-Commerce Development Guide

## 🚀 Quick Start

### Prerequisites
- Python 3.10+
- Node.js 18+
- MongoDB (local or Atlas)

### Local Development Setup

#### 1. Backend (FastAPI)
```bash
cd backend
python -m venv .venv
# Windows
.venv\Scripts\activate
# Linux/Mac
source .venv/bin/activate

pip install -r requirements.txt
```

**Environment Variables** (`.env`):
```env
MONGO_URL=mongodb://localhost:27017/ecommerce
SECRET_KEY=your-secret-key-here
STRIPE_SECRET_KEY=sk_test_...  # optional
STRIPE_WEBHOOK_SECRET=whsec_...  # optional
```

**Run Backend:**
```bash
uvicorn app.main:app --reload --port 8000
```

API Docs: http://localhost:8000/api/docs

#### 2. Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

#### 3. Seed Database
```bash
# From backend directory
python seed_admins.py
```

**Test Accounts:**
- Admin: admin@example.com / adminpass
- User: user@example.com / userpass

---

## 🐳 Docker Setup

```bash
docker compose up --build
```

Services:
- Backend: http://localhost:8000
- Frontend: http://localhost:5173
- MongoDB: localhost:27017

---

## 📁 Project Structure

```
E-comerce-py-js/
├── backend/
│   ├── app/
│   │   ├── api/v1/        # API endpoints
│   │   ├── core/          # Config, security
│   │   ├── db/            # MongoDB connection
│   │   ├── dependencies/  # FastAPI dependencies
│   │   └── main.py        # App entry point
│   ├── static/uploads/    # Uploaded images
│   ├── requirements.txt
│   └── seed_admins.py     # Database seeding
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # API, hooks, utils
│   │   └── main.tsx       # Entry point
│   ├── public/            # Static assets
│   └── package.json
├── .env                   # Environment variables
├── docker-compose.yml
└── README.md
```

---

## 🔧 Key Features

### Authentication
- JWT-based authentication
- Admin and user roles
- Protected routes

### Products
- Multiple images per product (max 5)
- Image cropping feature
- Published/draft status
- Stock management

### Orders
- Order tracking with status history
- Payment methods: COD, Bank Transfer, Stripe
- PDF invoice generation
- Admin order management

### Admin Panel
- User management
- Product CRUD operations
- Order management
- Dashboard statistics

---

## 🛠 Development Tips

### Backend
- **MongoDB Connection:** The app uses MongoDB for all data storage
- **File Uploads:** Images stored in `backend/static/uploads/`
- **API Testing:** Use FastAPI's Swagger UI at `/api/docs`
- **Logging:** Check console for detailed logs

### Frontend
- **API Client:** Configured in `src/lib/api.ts`
- **State Management:** React hooks + context
- **Routing:** React Router v6
- **Styling:** CSS modules with modern gradient designs

### Common Issues

**MongoDB Connection Failed:**
- Ensure MongoDB is running
- Check `MONGO_URL` in `.env`
- Default: `mongodb://localhost:27017/ecommerce`

**CORS Errors:**
- Backend automatically allows `localhost:5173` and `localhost:5174`
- Add custom origins in `backend/app/core/config.py`

**Image Upload Issues:**
- Ensure `backend/static/uploads/` directory exists
- Check file size limits (max 5MB per image)
- Supported formats: JPEG, PNG, WebP

---

## 🚢 Deployment

### Frontend (GitHub Pages)
The frontend auto-deploys to GitHub Pages on push to `main`.
- Live: https://ishfak07.github.io/E-comerce-py-js/

### Backend
Deploy to any platform supporting Python/FastAPI:
- Render
- Railway
- Heroku
- AWS/GCP/Azure

**Required Environment Variables:**
```env
MONGO_URL=mongodb+srv://...
SECRET_KEY=production-secret-key
```

See `DEPLOYMENT.md` for detailed deployment instructions.

---

## 📝 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login
- `GET /api/v1/auth/me` - Get current user

### Products
- `GET /api/v1/products` - List all products
- `GET /api/v1/products/{id}` - Get product details
- `POST /api/v1/admin/products` - Create product (admin)
- `PUT /api/v1/admin/products/{id}` - Update product (admin)
- `DELETE /api/v1/admin/products/{id}` - Delete product (admin)

### Orders
- `POST /api/v1/orders` - Create order
- `GET /api/v1/orders/history` - User order history
- `GET /api/v1/admin/orders` - All orders (admin)
- `PUT /api/v1/admin/orders/{id}` - Update order status (admin)

### Admin
- `GET /api/v1/admin/users` - List all users
- `PUT /api/v1/admin/users/{id}` - Update user
- `GET /api/v1/admin/metrics` - Dashboard metrics

---

## 🧪 Testing

```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

---

## 📦 Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  email: String,
  name: String,
  hashed_password: String,
  is_staff: Boolean,
  is_superuser: Boolean,
  is_active: Boolean,
  created_at: Date
}
```

### Products Collection
```javascript
{
  _id: ObjectId,
  name: String,
  slug: String,
  description: String,
  price: Number,
  stock: Number,
  images: [String],  // URLs
  is_published: Boolean,
  created_at: Date
}
```

### Orders Collection
```javascript
{
  _id: ObjectId,
  user_id: String,
  customer_name: String,
  customer_email: String,
  customer_phone: String,
  items: [{
    product_id: String,
    name: String,
    price: Number,
    quantity: Number
  }],
  total_amount: Number,
  status: String,  // "pending", "processing", "completed", "cancelled"
  payment_method: String,  // "cod", "bank_transfer", "stripe"
  payment_status: String,  // "pending", "paid", "failed"
  created_at: Date,
  status_history: [{
    status: String,
    timestamp: Date,
    note: String
  }]
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this project for learning and development.

---

## 🆘 Support

For issues and questions:
- Check existing GitHub Issues
- Create a new issue with detailed description
- Include error messages and logs

---

## 🔗 Useful Links

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Vite Documentation](https://vitejs.dev/)
