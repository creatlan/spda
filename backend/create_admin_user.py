"""
Create Admin User Script
Creates an admin user for dashboard access
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.user import User
from app.auth import hash_password

def create_admin_user():
    """Create admin user if it doesn't exist"""
    db: Session = SessionLocal()
    
    try:
        # Check if admin already exists
        admin = db.query(User).filter(User.email == 'admin@workplan.local').first()
        
        if admin:
            print("Admin user already exists!")
            print(f"  Email: {admin.email}")
            print(f"  User ID: {admin.userId}")
            return admin
        
        # Create admin user
        admin = User(
            userId="admin-000000000000",
            name="Admin User",
            email="admin@workplan.local",
            phone="+7 (999) 000-00-00",
            position="Administrator",
            password_hash=hash_password("admin123")
        )
        
        db.add(admin)
        db.commit()
        
        print("✓ Admin user created successfully!")
        print(f"  Email: {admin.email}")
        print(f"  Password: admin123")
        print(f"  User ID: {admin.userId}")
        
        return admin
        
    except Exception as e:
        db.rollback()
        print(f"✗ Error creating admin user: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    print("=" * 60)
    print("Creating Admin User")
    print("=" * 60)
    create_admin_user()
    print("=" * 60)

