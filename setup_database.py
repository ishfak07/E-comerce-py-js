#!/usr/bin/env python3
"""
Database setup script for E-commerce project
This script will create the database tables and populate them with sample data
"""

import os
import sys
import subprocess
from pathlib import Path

def run_command(command, cwd=None):
    """Run a command and return the result"""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            cwd=cwd, 
            capture_output=True, 
            text=True, 
            check=True
        )
        print(f"✅ {command}")
        if result.stdout:
            print(result.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error running: {command}")
        print(f"Error: {e.stderr}")
        return False

def main():
    print("🚀 Setting up E-commerce Database...")
    print("=" * 50)
    
    # Check if we're in the right directory
    if not Path("backend").exists():
        print("❌ Please run this script from the project root directory")
        sys.exit(1)
    
    # Step 1: Start Docker services (if Docker is available)
    print("\n📦 Starting Docker services...")
    docker_available = run_command("docker --version")
    
    if docker_available:
        print("🐳 Starting PostgreSQL with Docker...")
        if run_command("docker-compose up -d db"):
            print("✅ Database started successfully!")
        else:
            print("⚠️  Docker failed, trying alternative setup...")
    else:
        print("⚠️  Docker not available, please ensure PostgreSQL is running locally")
        print("   Connection: postgresql://postgres:postgres@localhost:5432/ecommerce")
    
    # Step 2: Install Python dependencies
    print("\n📦 Installing Python dependencies...")
    if not run_command("pip install -r backend/requirements.txt", cwd="."):
        print("❌ Failed to install dependencies")
        sys.exit(1)
    
    # Step 3: Run the seed script
    print("\n🌱 Seeding database with sample data...")
    if not run_command("python -m backend.app.seed", cwd="."):
        print("❌ Failed to seed database")
        sys.exit(1)
    
    print("\n" + "=" * 50)
    print("🎉 Database setup complete!")
    print("\n📊 Database Connection Details:")
    print("   Host: localhost")
    print("   Port: 5432")
    print("   Database: ecommerce")
    print("   Username: postgres")
    print("   Password: postgres")
    print("\n🔗 DBeaver Connection String:")
    print("   postgresql://postgres:postgres@localhost:5432/ecommerce")
    print("\n🔑 Test Accounts:")
    print("   Admin: admin@example.com / admin123")
    print("   User: john.doe@example.com / password123")
    print("   User: jane.smith@example.com / password123")
    print("   User: bob.wilson@example.com / password123")
    print("\n📈 Sample Data Created:")
    print("   - 4 users (1 admin + 3 regular)")
    print("   - 5 categories")
    print("   - 6 products with variants")
    print("   - 2 coupons")
    print("   - Sample orders and reviews")

if __name__ == "__main__":
    main()
