# 🔧 FIX ORDER STATUS - ONE-TIME MIGRATION

## Problem
Existing orders in the database don't have `tracking_status` and `payment_status` fields, so the user Order History page shows "PENDING" as a fallback instead of the real status.

## Solution
Run a one-time migration API call to fix all existing orders.

## Steps to Fix:

### Option 1: Using Browser (Easiest)

1. **Login as Admin** at `http://localhost:5174/login`

2. **Open Browser Console** (Press F12)

3. **Run this command in the Console:**
```javascript
fetch('http://localhost:8001/api/v1/admin/migrate/fix-order-status', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
    'Content-Type': 'application/json'
  }
})
.then(r => r.json())
.then(data => {
  console.log('✅ Migration Result:', data);
  alert(`Success! Updated ${data.updated} orders`);
})
.catch(err => console.error('❌ Error:', err));
```

4. **Check the response** - it should show how many orders were updated

5. **Refresh the Order History page** at `http://localhost:5174/orders`

### Option 2: Using PowerShell

```powershell
# Get your auth token first (login as admin in browser, then run in console: localStorage.getItem('access_token'))
$token = "YOUR_ACCESS_TOKEN_HERE"

$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

Invoke-RestMethod -Uri "http://localhost:8001/api/v1/admin/migrate/fix-order-status" -Method POST -Headers $headers
```

### Option 3: Using Postman/Thunder Client

1. **Method:** POST
2. **URL:** `http://localhost:8001/api/v1/admin/migrate/fix-order-status`
3. **Headers:**
   - `Authorization: Bearer YOUR_TOKEN`
   - `Content-Type: application/json`
4. **Send Request**

## Expected Response

```json
{
  "success": true,
  "total_orders": 4,
  "updated": 4,
  "already_had_status": 0,
  "updates": [
    {
      "order_id": "68f71e7a24947b4dc9acbb00",
      "status": "processing",
      "tracking_status": "processing",
      "payment_status": "pending"
    },
    ...
  ]
}
```

## Verification

After running the migration:

1. ✅ **Admin Panel** (`/admin/orders`) - Orders should still show correct status
2. ✅ **User Order History** (`/orders`) - Should now show real statuses instead of "PENDING"
3. ✅ **Status Updates** - Admin can now change status and user sees it immediately

## Status Mapping

The migration will set these based on current `status` field:

| Admin Status | → | Tracking Status (User Sees) | Payment Status |
|--------------|---|----------------------------|----------------|
| pending_verification | → | placed | pending |
| payment_verified | → | verified | verified |
| processing | → | processing | (unchanged) |
| shipped | → | shipped | (unchanged) |
| delivered | → | delivered | (unchanged) |
| cancelled | → | cancelled | cancelled |

## Future Orders

All new orders created through checkout will automatically have these fields set, so this migration is only needed **once** for existing orders.

## Troubleshooting

**Error: "Database not configured"**
- Backend server not running
- Start backend: `cd backend; python run_server.py`

**Error: "401 Unauthorized"**
- Token expired or invalid
- Login again as admin
- Get new token from `localStorage.getItem('access_token')`

**Error: "403 Forbidden"**
- Not logged in as admin
- Login with admin account (is_staff=true)

## Confirm It's Working

After migration, check a user order:
1. Go to `/orders` as a regular user
2. Orders should show:
   - ✅ Real status (not "PENDING")
   - ✅ Progress bar at correct percentage
   - ✅ Colored status badge
   - ✅ Timeline showing current stage

---

**Note:** This is a ONE-TIME operation. You don't need to run it again unless you manually delete the `tracking_status` fields from orders.
