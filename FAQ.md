# Frequently Asked Questions (FAQ) - E-commerce Platform

## Welcome to Our FAQ Hub

This comprehensive FAQ covers everything you need to know about our e-commerce platform. Whether you're a customer, administrator, or developer, you'll find answers to common questions here.

## 📋 Table of Contents

### [General Platform Questions](#general-platform-questions)
### [Customer FAQs](#customer-faqs)
### [Administrator FAQs](#administrator-faqs)
### [Technical & Development FAQs](#technical--development-faqs)
### [Payment & Order FAQs](#payment--order-faqs)
### [Troubleshooting](#troubleshooting)

---

## General Platform Questions

### What is this platform?
This is a modern e-commerce platform built with **FastAPI** (Python backend) and **React** (frontend), designed for Sri Lankan businesses. It features a complete shopping experience with product management, secure payments, order tracking, and administrative tools.

### What technologies are used?
- **Backend**: FastAPI, MongoDB, PostgreSQL
- **Frontend**: React, TypeScript, Vite
- **Payments**: Stripe integration + Bank Transfer
- **Authentication**: JWT tokens
- **Deployment**: Docker support

### Is the platform production-ready?
Yes! The platform includes:
- ✅ Secure authentication and authorization
- ✅ Payment processing (Stripe + Bank Transfer)
- ✅ Order management and tracking
- ✅ Invoice generation (PDF)
- ✅ Admin panel for business management
- ✅ Image upload and management
- ✅ Mobile-responsive design

---

## Customer FAQs

### How do I create an account?
1. Visit the website and click "Register"
2. Fill in your details (name, email, password)
3. Click "Register" - you'll be automatically logged in
4. Start shopping!

### Do I need an account to browse?
You can view the home page and about page without an account, but **shopping requires registration** for security and personalization.

### What payment methods are accepted?
- **Stripe**: Credit/Debit cards (Visa, Mastercard, American Express)
- **Bank Transfer**: Direct transfer to our bank account

### How do I track my orders?
1. Login to your account
2. Click "Orders" in the navigation
3. View all your orders with status updates
4. Click any order for detailed information

### Can I download invoices?
Yes! Once your payment is verified, an "Invoice" button appears in your order details. Click to download a professional PDF invoice.

### What currencies are supported?
All prices are in **Sri Lankan Rupees (LKR)**. The platform is optimized for Sri Lankan customers.

### How do I contact support?
Use the "Contact" page in the navigation, or check the [Contact Information](#contact-information) section below.

---

## Administrator FAQs

### How do I access the admin panel?
1. Login with admin credentials (admin@example.com / adminpass)
2. Click the "Admin" button in the navigation
3. Access the purple/blue gradient admin dashboard

### What can I do in the admin panel?
- **Dashboard**: View metrics (users, products, orders, revenue)
- **Products**: Add/edit/delete products with multiple images (up to 5 per product)
- **Users**: View user accounts, block/unblock users
- **Orders**: Update order statuses, track fulfillment

### How do I add new products?
1. Go to Admin → Products
2. Click "Add Product"
3. Fill in: Name, Slug, Price, Stock
4. Upload 1-5 product images
5. Click "Create" - product appears in shop immediately

### How do I update order statuses?
1. Go to Admin → Orders
2. Find the order in the list
3. Click the order to open details
4. Update status from dropdown (Pending → Processing → Shipped → Delivered)

---

## Payment & Order FAQs

### How does bank transfer work?
1. During checkout, select "Bank Transfer"
2. Note the payment details displayed:
   - Account Holder: Ishfaque Mif
   - Bank: [Bank Name]
   - Account Number: [Account Number]
   - Reference: [Unique reference number]
3. Transfer the exact amount to the account
4. Use the reference number for tracking
5. Order status updates once payment is verified

### What are the order statuses?
- **Pending Verification**: Order placed, payment being checked
- **Processing**: Payment verified, order being prepared
- **Shipped**: Order dispatched for delivery
- **Delivered**: Order completed successfully
- **Cancelled**: Order was cancelled

### When do I get my invoice?
Invoices become available after payment verification. Look for the "Invoice" button in your order details page.

### Can I cancel orders?
Orders can be cancelled before payment verification. Contact support immediately for orders after payment.

---

## Technical & Development FAQs

### How do I set up the development environment?
See our [Quick Start Guide](QUICK_START.md) for complete setup instructions.

### What are the system requirements?
- **Backend**: Python 3.8+, MongoDB/PostgreSQL
- **Frontend**: Node.js 16+, npm
- **Docker**: Optional for containerized deployment

### How do I run the application?
```bash
# Backend (Terminal 1)
cd backend
python -m venv .venv && .venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend (Terminal 2)
cd frontend
npm install
npm run dev
```

### How do I deploy to production?
Use Docker for production deployment:
```bash
docker compose up --build
```

### Where are the API docs?
- **Local Development**: http://localhost:8000/api/docs
- **Production**: [Your domain]/api/docs

---

## Troubleshooting

### Login issues
**Problem**: "Invalid credentials" error
**Solution**:
1. Clear browser localStorage (F12 → Application → Local Storage → Clear All)
2. Try password: `adminpass` (for admin account)
3. Check email format is correct

### Admin panel not accessible
**Problem**: Admin button not visible or 404 error
**Solution**:
1. Ensure you're logged in as admin user
2. Check `is_staff` field is true in user data
3. Clear browser cache and refresh

### Images not displaying
**Problem**: Product images not loading
**Solution**:
1. Ensure backend server is running (serves static files)
2. Check image URLs in database
3. Verify upload directory exists: `backend/app/static/uploads/`

### Payment processing issues
**Problem**: Stripe payments failing
**Solution**:
1. Check STRIPE_SECRET_KEY environment variable
2. Verify card details and sufficient funds
3. Check browser console for errors

### Order status not updating
**Problem**: Orders stuck in "Pending Verification"
**Solution**:
1. For bank transfers: Wait for manual verification
2. For Stripe: Check webhook configuration
3. Contact admin to manually update status

---

## 📚 Related Documentation

### Quick Start & Setup
- [🚀 Quick Start Guide](QUICK_START.md) - Complete setup and first run
- [🔐 Authentication Implementation](AUTHENTICATION_IMPLEMENTATION.md) - Login/registration system
- [💰 Currency Configuration](CURRENCY_CHANGE.md) - LKR setup and conversion

### Features & Functionality
- [📦 Order Status System](ORDER_STATUS_TECHNICAL_DOCS.md) - Complete order tracking
- [📄 Invoice Feature](INVOICE_FEATURE_COMPLETE.md) - PDF generation and download
- [📸 Multiple Images](MULTIPLE_IMAGES_FEATURE.md) - Product image management
- [🏦 Bank Transfer Payments](BANK_TRANSFER_UPGRADE.md) - Manual payment processing

### Administration
- [👑 Admin Panel Fixes](ADMIN_PANEL_FIXES.md) - Admin interface setup
- [🎨 Admin UI Comparison](ADMIN_UI_COMPARISON.md) - Visual design differences
- [🖼️ Image Upload System](IMAGE_UPLOAD_FIX.md) - File upload configuration

### Development & Technical
- [🐛 Order History Fixes](ORDER_HISTORY_FIX_SUMMARY.md) - Bug fixes and patches
- [📊 Content Visibility](CONTENT_VISIBILITY_RESTRICTION.md) - Access control
- [🔧 Invoice Auth Fix](INVOICE_AUTH_FIX.md) - Security improvements

---

## Contact Information

### Support
- **Email**: [Your support email]
- **Phone**: [Your phone number]
- **Address**: [Your business address]

### Business Hours
- Monday - Friday: 9:00 AM - 6:00 PM (Sri Lanka Time)
- Saturday: 9:00 AM - 2:00 PM
- Sunday: Closed

### Emergency Contact
For urgent technical issues or payment problems, contact our support team immediately.

---

## Version Information

- **Platform Version**: 1.0.0
- **Last Updated**: November 2025
- **Documentation**: Comprehensive and up-to-date

---

*This FAQ is regularly updated. If you have questions not covered here, please contact our support team.*