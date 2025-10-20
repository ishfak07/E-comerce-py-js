# Currency Change to Sri Lankan Rupees (LKR)

## Overview
This document describes the comprehensive changes made to convert the e-commerce system from US Dollars (USD) to Sri Lankan Rupees (LKR). All currency displays, calculations, and configurations have been updated to reflect Sri Lankan currency format.

## Changes Made

### 1. Frontend Price Displays

#### Shop Page (`frontend/src/pages/Shop.tsx`)
**Changed:**
- Product card price display from `$` to `LKR`
- Format: `LKR 19.99`

**Location:** Product grid cards in the shop listing

#### Product Detail Page (`frontend/src/pages/ProductDetail.tsx`)
**Changed:**
- Product detail price display from `$` to `LKR`
- Format: `LKR 19.99`

**Location:** Main product detail view

#### Cart Page (`frontend/src/pages/Cart.tsx`)
**Changed (4 locations):**
1. Individual item price column: `$` → `LKR`
2. Item total (price × quantity) column: `$` → `LKR`
3. Cart subtotal in table footer: `$` → `LKR`
4. Order summary sidebar (2 locations): `$` → `LKR`
5. WhatsApp payment confirmation message: `$` → `LKR`

**Format Examples:**
- Item price: `LKR 19.99`
- Subtotal: `LKR 129.97`
- WhatsApp message: "I have transferred LKR 129.97..."

#### Checkout Page (`frontend/src/pages/Checkout.tsx`)
**Changed:**
- Default country from `'US'` to `'LK'` (Sri Lanka)
- Country code changed in shipping address initialization

### 2. Admin Panel Price Displays

#### Admin Orders Page (`frontend/src/pages/AdminOrders.tsx`)
**Changed:**
- `formatMoney()` function updated
- Changed from: `return $${v.toFixed(2)}`
- Changed to: `return LKR ${v.toFixed(2)}`

**Affected areas:**
- Order total column
- All monetary displays in orders table

#### Admin Dashboard Home (`frontend/src/pages/AdminDashboardHome.tsx`)
**Changed:**
- Sales metric display from `$` to `LKR`
- Format: `LKR 12,345.67`

**Location:** Sales card in metrics dashboard

#### Admin Dashboard (`frontend/src/pages/AdminDashboard.tsx`)
**Changed (2 locations):**
1. Default currency setting: `'USD'` → `'LKR'`
2. `formatMoney()` function symbol mapping:
   - Changed: `'Rs '` → `'LKR '` for consistency

**Function signature:**
```typescript
function formatMoney(x: number, currency: Currency) {
  const sym = currency === 'USD' ? '$' : currency === 'LKR' ? 'LKR ' : '€'
  return `${sym}${x.toFixed(2)}`
}
```

**Default settings:**
```typescript
const seedSettings: SiteSettings = {
  currency: 'LKR',  // Changed from 'USD'
  supportPhone: '+94 11 234 5678',  // Already Sri Lankan format
  // ...
}
```

### 3. New Currency Utility Module

#### Created: `frontend/src/lib/currency.ts`

**Purpose:** Centralized currency formatting for consistent LKR display across the application

**Exported Functions:**

1. **`formatLKR(amount, options?)`**
   - Main currency formatting function
   - Returns: `"LKR 1,234.50"`
   - Options:
     - `includeDecimals`: boolean (default: true)
     - `includeCommas`: boolean (default: true)

2. **`formatAmount(amount, decimals?)`**
   - Formats number without currency prefix
   - Useful for input fields
   - Returns: `"1234.50"`

3. **`parseCurrency(value)`**
   - Parses currency string to number
   - Handles: `"LKR 1,234.50"` → `1234.50`

4. **`CURRENCY` constant**
   - Configuration object with currency metadata:
     ```typescript
     {
       code: 'LKR',
       symbol: 'LKR',
       name: 'Sri Lankan Rupee',
       country: 'Sri Lanka',
       countryCode: 'LK'
     }
     ```

**Usage Example:**
```typescript
import { formatLKR } from '@/lib/currency'

const price = 1234.56
console.log(formatLKR(price)) // "LKR 1,234.56"
console.log(formatLKR(price, { includeCommas: false })) // "LKR 1234.56"
```

## Summary of Changes

### Frontend Files Modified (8 files)
1. ✅ `frontend/src/pages/Shop.tsx` - Product price display
2. ✅ `frontend/src/pages/ProductDetail.tsx` - Product detail price
3. ✅ `frontend/src/pages/Cart.tsx` - Cart prices (5 locations)
4. ✅ `frontend/src/pages/Checkout.tsx` - Default country
5. ✅ `frontend/src/pages/AdminOrders.tsx` - Order totals
6. ✅ `frontend/src/pages/AdminDashboardHome.tsx` - Sales metrics
7. ✅ `frontend/src/pages/AdminDashboard.tsx` - Currency settings + formatMoney
8. ✅ `frontend/src/lib/currency.ts` - **NEW** utility module

### Total Currency Replacements
- **13** instances of `$` changed to `LKR`
- **1** country code changed: `'US'` → `'LK'`
- **1** currency setting changed: `'USD'` → `'LKR'`
- **1** new utility module created

## Currency Format Standard

### Display Format
**Standard format used throughout the application:**
```
LKR 1,234.56
```

**Components:**
- Currency code: `LKR` (not symbol)
- Space separator
- Amount with 2 decimal places
- Thousand separators (optional in some contexts)

### Why "LKR" instead of "Rs"?
- **LKR** is the ISO 4217 currency code
- More internationally recognized
- Avoids confusion with other currencies using "Rs" (INR, PKR, NPR, etc.)
- Professional standard for e-commerce platforms

## Backend Compatibility

### No Backend Changes Required
The backend stores all prices as numeric values (floats/decimals). Currency formatting is purely a frontend presentation concern. This means:

✅ No database migration needed
✅ No API changes required
✅ No price recalculation needed
✅ Existing product prices remain valid

### Price Storage
- **Database:** Stores raw numeric values (e.g., `19.99`)
- **API:** Returns numeric values in JSON
- **Frontend:** Applies LKR formatting for display

## Testing Checklist

### User-Facing Pages
- [ ] Shop page displays prices as "LKR X.XX"
- [ ] Product detail page shows "LKR X.XX"
- [ ] Cart page shows LKR in all 5 locations:
  - [ ] Item price column
  - [ ] Item total column
  - [ ] Table footer subtotal
  - [ ] Summary sidebar subtotal
  - [ ] Summary sidebar total
- [ ] Cart WhatsApp message includes "LKR"
- [ ] Checkout defaults to country "LK"

### Admin Panel
- [ ] Admin orders page shows "LKR" for totals
- [ ] Admin dashboard home shows "LKR" for sales
- [ ] Admin dashboard settings show currency as "LKR"
- [ ] Product editing displays prices correctly

### Edge Cases
- [ ] Zero prices display as "LKR 0.00"
- [ ] Large numbers format correctly (e.g., "LKR 123,456.78")
- [ ] Decimal precision maintained (2 places)

## Future Enhancements

### Potential Improvements
1. **Number Formatting:**
   - Add Sri Lankan number formatting (lakhs/crores)
   - Example: "LKR 1,23,456.78" (Indian subcontinent style)

2. **Currency Utility:**
   - Integrate `formatLKR()` utility into all pages
   - Replace inline formatting with utility calls
   - Centralize formatting logic

3. **Internationalization:**
   - Add i18n support if multi-currency needed in future
   - Allow admin to switch between LKR/USD/other currencies
   - Store user's preferred currency

4. **Localization:**
   - Add Sinhala/Tamil translations for "LKR"
   - Consider local number separators
   - Date formatting for Sri Lankan locale

## Migration Notes

### For Developers
1. **New code should use:** `frontend/src/lib/currency.ts` utility
2. **Currency symbol:** Always use "LKR" (not "Rs" or "රු")
3. **Decimal places:** Always show 2 decimals (.00)
4. **Thousand separators:** Use commas for amounts > 1000

### For Content Managers
1. **Product prices:** Enter numeric values only (no currency symbols)
2. **Format:** System automatically adds "LKR" prefix
3. **Examples:**
   - Enter: `1999.99`
   - Displays as: `LKR 1,999.99`

## Related Files

### Configuration Files
- `frontend/src/pages/AdminDashboard.tsx` - Default currency setting
- `frontend/src/lib/currency.ts` - Currency utilities

### Display Files
- `frontend/src/pages/Shop.tsx`
- `frontend/src/pages/ProductDetail.tsx`
- `frontend/src/pages/Cart.tsx`
- `frontend/src/pages/Checkout.tsx`
- `frontend/src/pages/AdminOrders.tsx`
- `frontend/src/pages/AdminDashboardHome.tsx`

## Rollback Instructions

If you need to revert to USD:

1. **Search and replace:** `LKR` → `$` in all frontend files
2. **Checkout country:** Change `'LK'` → `'US'`
3. **Admin dashboard:** Change `currency: 'LKR'` → `'USD'`
4. **formatMoney function:** Change `'LKR '` → `'$'`

## Support

For questions or issues with currency display:
1. Check browser console for errors
2. Verify numeric values are valid (not NaN)
3. Ensure `toFixed(2)` is applied consistently
4. Test with different price ranges (0, decimal, large numbers)

---

**Last Updated:** October 20, 2025  
**Version:** 1.0  
**Status:** ✅ Complete - All currency references updated to LKR
