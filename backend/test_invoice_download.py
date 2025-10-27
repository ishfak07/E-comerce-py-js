"""
Quick test to verify invoice endpoint returns valid PDF
Run this after backend is running to check if PDFs are being generated correctly
"""
import requests
import sys

# Test configuration
BASE_URL = "http://localhost:8000/api/v1"
# You'll need to replace this with a real JWT token from your browser's localStorage
TOKEN = "YOUR_JWT_TOKEN_HERE"
# And a real order ID that has verified payment
ORDER_ID = "YOUR_ORDER_ID_HERE"

def test_invoice_download():
    """Test invoice download endpoint"""
    
    if TOKEN == "YOUR_JWT_TOKEN_HERE" or ORDER_ID == "YOUR_ORDER_ID_HERE":
        print("❌ Please update TOKEN and ORDER_ID in this script first!")
        print("\nTo get your token:")
        print("1. Open browser DevTools (F12)")
        print("2. Go to Application/Storage → Local Storage")
        print("3. Copy the value of 'access_token'")
        print("\nTo get an order ID:")
        print("1. Go to /orders in your app")
        print("2. Look at the network tab for the order ID")
        print("3. Make sure the order has payment_status='verified'")
        return False
    
    print(f"🧪 Testing invoice download for order: {ORDER_ID[:8]}...")
    
    headers = {
        "Authorization": f"Bearer {TOKEN}"
    }
    
    try:
        response = requests.get(
            f"{BASE_URL}/orders/{ORDER_ID}/invoice",
            headers=headers,
            stream=True
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Content-Type: {response.headers.get('Content-Type')}")
        print(f"Content-Length: {response.headers.get('Content-Length', 'Unknown')}")
        
        if response.status_code == 200:
            # Save PDF to file
            output_file = "downloaded_invoice.pdf"
            with open(output_file, "wb") as f:
                f.write(response.content)
            
            file_size = len(response.content)
            print(f"\n✅ Invoice downloaded successfully!")
            print(f"📄 Saved to: {output_file}")
            print(f"📊 File size: {file_size} bytes")
            
            if file_size < 1000:
                print("\n⚠️  Warning: File is very small, might be empty or corrupted")
                print("First 200 bytes:")
                print(response.content[:200])
            else:
                print("\n✅ File size looks good!")
            
            return True
        else:
            print(f"\n❌ Error: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"\n❌ Exception occurred: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    success = test_invoice_download()
    sys.exit(0 if success else 1)
