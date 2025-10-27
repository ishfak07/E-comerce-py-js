"""
Quick test script to verify invoice generation works.
Run this to test the invoice service without starting the full server.
"""
import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from app.services.invoice import generate_order_invoice
from datetime import datetime

# Sample order data for testing
test_order = {
    "id": "507f1f77bcf86cd799439011",
    "created_at": datetime.now().isoformat(),
    "customer_name": "John Doe",
    "customer_email": "john.doe@example.com",
    "customer_phone": "+94 77 123 4567",
    "shipping_address": {
        "line1": "123 Main Street",
        "city": "Colombo",
        "postal_code": "00100",
        "country": "LK"
    },
    "items": [
        {
            "title": "Wireless Bluetooth Headphones",
            "quantity": 2,
            "price": 4500.00
        },
        {
            "title": "USB-C Cable 2m",
            "quantity": 1,
            "price": 850.00
        },
        {
            "title": "Phone Case - Premium Leather",
            "quantity": 1,
            "price": 2200.00
        }
    ],
    "total_amount": 12050.00,
    "shipping_cost": 350.00,
    "tax": 0,
    "payment_method": "bank_transfer",
    "payment_status": "verified",
    "selected_bank": "Bank of Ceylon (BOC)",
    "transaction_reference": "BOC123456789"
}

def test_invoice_generation():
    """Test PDF invoice generation."""
    print("🧪 Testing invoice generation...")
    
    try:
        # Generate invoice
        pdf_buffer = generate_order_invoice(test_order)
        
        # Save to file for inspection
        output_path = Path(__file__).parent / "test_invoice.pdf"
        with open(output_path, "wb") as f:
            f.write(pdf_buffer.read())
        
        print(f"✅ Invoice generated successfully!")
        print(f"📄 Saved to: {output_path}")
        print(f"📊 File size: {output_path.stat().st_size} bytes")
        print("\n👉 Open the PDF file to verify the invoice looks correct.")
        
        return True
        
    except Exception as e:
        print(f"❌ Error generating invoice: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    success = test_invoice_generation()
    sys.exit(0 if success else 1)
