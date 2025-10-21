# How to Test Order Status Tracking

## Quick Test Guide

### Step 1: Place a New Order
1. Go to `http://localhost:5174/checkout`
2. Fill in customer details:
   - Name: "Test User"
   - Phone: "0771234567"
   - Email: "test@example.com"
3. Select a bank and upload receipt
4. Submit order
5. Note the Order ID shown in success message

### Step 2: View as User
1. Login with the same credentials
2. Go to `http://localhost:5174/orders`
3. You should see:
   - Order number
   - Total amount
   - Status: "PLACED"
   - Payment: "⏳ Pending Verification"
   - Progress bar at 20%

### Step 3: Update Status as Admin
1. Login as admin
2. Go to `http://localhost:5174/admin/orders`
3. Find your order
4. Change status from dropdown:
   - Select "Payment Verified"
5. Status updates immediately

### Step 4: Verify User Sees Update
1. Go back to user order history page
2. Refresh or wait 5 seconds
3. You should see:
   - Status: "VERIFIED"
   - Payment: "✅ Verified"
   - Progress bar at 40%

### Step 5: Continue Testing
Update status through these stages:
1. ✅ Payment Verified (40% progress)
2. 🔄 Order Processing (60% progress)
3. 🚚 Shipped (80% progress)
4. ✅ Delivered (100% progress)

Each change should appear in user view within 5 seconds!

## Status Tracking Codes

```typescript
// Frontend Types (OrderHistory.tsx)
type TrackingStatus = 
  | 'placed'      // 20% - Orange
  | 'verified'    // 40% - Blue
  | 'processing'  // 60% - Orange
  | 'shipped'     // 80% - Blue
  | 'delivered'   // 100% - Green
  | 'rejected'    // Red
  | 'cancelled'   // Gray

type PaymentStatus = 
  | 'pending'     // ⏳ Yellow badge
  | 'verified'    // ✅ Green badge
  | 'rejected'    // ❌ Red badge
```

## API Endpoints

### Get User Order History
```bash
GET /api/v1/orders/history?status_filter=all
Headers: Authorization: Bearer {token}
```

### Update Order Status (Admin)
```bash
PUT /api/v1/admin/orders/{order_id}/status
Headers: Authorization: Bearer {admin_token}
Body: {
  "new_status": "payment_verified",
  "admin_feedback": null,
  "resubmit_required": false,
  "estimated_delivery_date": null
}
```

## Database Fields

Each order has:
```javascript
{
  _id: ObjectId,
  customer_name: string,
  customer_email: string,
  customer_phone: string,
  total_amount: number,
  
  // Three status fields (all updated together)
  status: string,           // Admin-facing status
  tracking_status: string,  // User-facing tracking
  payment_status: string,   // Payment state
  
  // Optional fields
  admin_feedback: string,
  resubmit_required: boolean,
  estimated_delivery_date: string,
  created_at: string
}
```

## Auto-Refresh Feature

The order history page automatically refreshes every 5 seconds:
- Only when tab is visible
- Fetches latest data from backend
- Updates UI smoothly
- No manual refresh needed!

## Common Issues

### Order shows "N/A"
**Cause**: Old test order with missing customer_name
**Solution**: Delete old orders or place new ones

### Order shows "LKR 0.00"
**Cause**: Old test order with total_amount = 0
**Solution**: Delete old orders or place new ones

### Status not updating
**Check**:
1. Backend is running
2. MongoDB is connected
3. Browser console for errors
4. Network tab shows API calls
5. Wait at least 5 seconds for auto-refresh

## Expected Behavior

✅ **Working Correctly**:
- User sees "PLACED" immediately after checkout
- Admin updates status → saved to database
- User page refreshes → shows new status
- Progress bar updates automatically
- Payment badges change colors
- Admin feedback appears if provided

❌ **NOT How It Works**:
- No fake/static statuses
- No hardcoded default values
- No client-side only updates
- Everything comes from database!

## Verification Script

Run this to check order data:
```bash
python check_order_statuses.py
```

This will show:
- All orders in database
- Their current statuses
- Missing or invalid data
- Which orders will display correctly

---

## 🎯 Key Takeaway

**The system is fully working!** Every status you see on the user order history page comes directly from the database and reflects the admin's updates. There are no fake or static statuses.
