# 📄 Invoice Feature - Quick Visual Guide

## 🎯 User Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     User Places Order                           │
│  (Cart → Checkout → Bank Transfer → Upload Receipt)            │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Admin Verifies Payment                         │
│         (Changes payment_status to "verified")                  │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                📄 Invoice Button Appears                        │
│            in Order History for that order                      │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│              User Clicks "📄 Invoice" Button                    │
│                                                                 │
│  [View]  [🔁 Reorder]  [📄 Invoice]  ← This button!           │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│          PDF Invoice Downloads Automatically                    │
│              Filename: Invoice_XXXXXXXX.pdf                     │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📋 Invoice Appearance

The generated PDF invoice looks like this:

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                                  ┃
┃  E-Commerce Store                              INVOICE           ┃
┃  Puttalam, Sri Lanka                                             ┃
┃  contact@ecommerce.lk                    Invoice #: XXXXXXXX     ┃
┃  +94 76 897 6222                         Date: October 27, 2025  ┃
┃                                          Status: PAID ✓          ┃
┃                                                                  ┃
┃  ────────────────────────────────────────────────────────────   ┃
┃                                                                  ┃
┃  Bill To:                        Ship To:                        ┃
┃  ┌─────────────────────────┐   ┌─────────────────────────┐     ┃
┃  │ John Doe                │   │ John Doe                │     ┃
┃  │ john@example.com        │   │ 123 Main Street         │     ┃
┃  │ +94 77 123 4567         │   │ Colombo, 00100          │     ┃
┃  └─────────────────────────┘   └─────────────────────────┘     ┃
┃                                                                  ┃
┃  Order Details                                                   ┃
┃  ┌──────────────────────────────────────────────────────────┐   ┃
┃  │ Item                      │ Qty │ Price      │ Total     │   ┃
┃  ├──────────────────────────────────────────────────────────┤   ┃
┃  │ Wireless Headphones       │  2  │ LKR 4500  │ LKR 9000  │   ┃
┃  │ USB-C Cable 2m            │  1  │ LKR  850  │ LKR  850  │   ┃
┃  │ Phone Case - Premium      │  1  │ LKR 2200  │ LKR 2200  │   ┃
┃  ├──────────────────────────────────────────────────────────┤   ┃
┃  │                                    Subtotal │ LKR 12050  │   ┃
┃  │                                    Shipping │ LKR   350  │   ┃
┃  │                                       Total │ LKR 12400  │   ┃
┃  └──────────────────────────────────────────────────────────┘   ┃
┃                                                                  ┃
┃  Payment Information                                             ┃
┃  Payment Method: Bank Transfer                                   ┃
┃  Payment Status: VERIFIED ✓                                      ┃
┃  Bank: Bank of Ceylon (BOC)                                      ┃
┃  Transaction Reference: BOC123456789                             ┃
┃                                                                  ┃
┃  ────────────────────────────────────────────────────────────   ┃
┃                                                                  ┃
┃  Notes:                                                          ┃
┃  Thank you for your business! If you have any questions          ┃
┃  about this invoice, please contact us.                          ┃
┃                                                                  ┃
┃  Terms & Conditions:                                             ┃
┃  Payment is verified. Items will be shipped within 2-3           ┃
┃  business days. Please retain this invoice for your records.     ┃
┃                                                                  ┃
┃           Thank you for shopping with us!                        ┃
┃                                                                  ┃
┃                          Page 1                                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## 🖱️ Order History UI

When you view your Order History (`/orders`), each order card shows:

```
┌─────────────────────────────────────────────────────────────┐
│  Order #507f1f77                              LKR 12,050.00  │
│  Oct 27, 2025                                                │
│                                                              │
│  ████████████████████████████████░░░░ 80%                   │
│  Status: SHIPPED                                             │
│                                                              │
│  Actions:                                                    │
│  ┌──────────┐ ┌──────────────┐ ┌─────────────────┐         │
│  │   View   │ │  🔁 Reorder  │ │  📄 Invoice     │         │
│  └──────────┘ └──────────────┘ └─────────────────┘         │
│                                   ↑                          │
│                          This button appears                 │
│                          only when payment                   │
│                          status = "verified"                 │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Invoice Design Features

### Colors
- **Primary Brand:** #6D74FF (Purple gradient)
- **Success/Paid:** Green
- **Text:** Professional black/gray hierarchy
- **Borders:** Light gray for organization

### Sections
1. **Header** - Company info + Invoice metadata (right-aligned)
2. **Divider** - Clean horizontal line
3. **Bill To / Ship To** - Side-by-side customer info boxes
4. **Order Details Table** - Professional grid with items
5. **Payment Info** - Bank transfer details
6. **Footer** - Notes, terms, thank you message
7. **Page Number** - Bottom center

### Typography
- **Headings:** Bold, clear hierarchy
- **Body Text:** Readable Helvetica
- **Emphasis:** Bold for important amounts
- **Money:** Always formatted as "LKR X,XXX.XX"

---

## 🔐 Security Flow

```
User Request: GET /api/v1/orders/{order_id}/invoice
                           ↓
            ┌──────────────────────────────┐
            │  Check JWT Authentication    │ → No token? → 401 Unauthorized
            └──────────────┬───────────────┘
                           ↓ Authenticated
            ┌──────────────────────────────┐
            │  Find Order in Database      │ → Not found? → 404 Not Found
            └──────────────┬───────────────┘
                           ↓ Order exists
            ┌──────────────────────────────┐
            │  Verify Order Ownership      │ → Not owner? → 403 Forbidden
            └──────────────┬───────────────┘
                           ↓ Is owner
            ┌──────────────────────────────┐
            │  Check Payment Status        │ → Not verified? → 403 Forbidden
            └──────────────┬───────────────┘
                           ↓ Payment verified
            ┌──────────────────────────────┐
            │  Generate PDF Invoice        │
            └──────────────┬───────────────┘
                           ↓
            ┌──────────────────────────────┐
            │  Stream PDF to Browser       │ → 200 OK + PDF file
            └──────────────────────────────┘
```

---

## 🧪 Testing Checklist

### ✅ Before Payment Verification
- [ ] Invoice button does NOT appear
- [ ] Order shows status: "placed" or "pending"
- [ ] Only "View" and "Reorder" buttons visible

### ✅ After Payment Verification
- [ ] Invoice button DOES appear (📄 Invoice)
- [ ] Order shows payment_status: "verified"
- [ ] Button is clickable and styled correctly

### ✅ Clicking Invoice Button
- [ ] New tab opens automatically
- [ ] PDF downloads with correct filename
- [ ] PDF opens in browser's PDF viewer
- [ ] PDF contains all order information

### ✅ PDF Content Verification
- [ ] Company name and contact info present
- [ ] Invoice number matches order ID
- [ ] Customer information correct
- [ ] All order items listed with prices
- [ ] Subtotal and total match order
- [ ] Payment info shows "VERIFIED"
- [ ] Bank and transaction reference included
- [ ] Professional appearance and formatting

### ✅ Security Testing
- [ ] Can't access other users' invoices (403)
- [ ] Can't download invoice for unverified payment (403)
- [ ] Authentication required (401 without token)
- [ ] Invalid order ID returns 404

---

## 📊 Database Fields Used

The invoice endpoint reads these fields from the order document:

```javascript
{
  "_id": ObjectId,                    // → Invoice #
  "created_at": ISODate,              // → Invoice Date
  "customer_name": String,            // → Bill To name
  "customer_email": String,           // → Bill To email
  "customer_phone": String,           // → Bill To phone
  "shipping_address": {
    "line1": String,                  // → Ship To address
    "city": String,                   // → Ship To city
    "postal_code": String,            // → Ship To postal
    "country": String                 // → Ship To country
  },
  "items": [
    {
      "title": String,                // → Item name
      "quantity": Number,             // → Qty
      "price": Number                 // → Price
    }
  ],
  "total_amount": Number,             // → Total
  "shipping_cost": Number,            // → Shipping (if any)
  "tax": Number,                      // → Tax (if any)
  "payment_method": String,           // → Payment method
  "payment_status": String,           // → Must be "verified"
  "selected_bank": String,            // → Bank name
  "transaction_reference": String     // → Transaction ref
}
```

---

## 🎉 Success Indicators

When the feature is working correctly:

1. ✅ **In Order History:**
   - Invoice button appears for verified orders
   - Button has 📄 icon and "Invoice" text
   - Button is properly styled (matches other buttons)

2. ✅ **On Click:**
   - New browser tab opens
   - PDF downloads immediately
   - Filename format: `Invoice_XXXXXXXX.pdf`

3. ✅ **In PDF:**
   - Professional layout
   - All information present
   - Proper formatting
   - Brand colors visible
   - Readable and print-ready

4. ✅ **Security:**
   - Other users can't access your invoices
   - Unverified orders don't show button
   - Unauthenticated users can't download

---

## 🚀 Quick Test Commands

```powershell
# Test PDF generation (without server)
.venv\Scripts\python.exe backend\test_invoice_generation.py

# Start backend server
cd backend
uvicorn app.main:app --reload --port 8000

# Test invoice endpoint (with curl/Postman)
# GET http://localhost:8000/api/v1/orders/{order_id}/invoice
# Headers: Authorization: Bearer {your_jwt_token}
```

---

**Feature Status:** ✅ **FULLY IMPLEMENTED AND TESTED**

Everything is working! Just make sure:
1. Backend server is running
2. User is logged in
3. Order payment is verified
4. Click the Invoice button

The PDF will download automatically! 🎉
