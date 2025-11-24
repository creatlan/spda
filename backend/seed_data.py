"""
Script to seed the database with sample data for development/testing
Run this after initializing the database to populate sample data
"""
from app.database import SessionLocal, init_db
from app.models.user import User
from app.models.shift import Shift
from app.models.availability import Availability
from app.auth import hash_password
from datetime import datetime, timedelta
import uuid

def seed_database():
    """Seed database with sample data"""
    init_db()
    db = SessionLocal()
    
    try:
        # Create sample user
        user_id = "user-123"
        user = db.query(User).filter(User.userId == user_id).first()
        
        if not user:
            user = User(
                userId=user_id,
                name="Иван Иванов",
                position="Официант",
                email="ivan@example.com",
                phone="+7 (999) 123-45-67",
                password_hash=hash_password("password123")  # Default password for testing
            )
            db.add(user)
            db.commit()
            print(f"Created user: {user.name}")
        else:
            print(f"User already exists: {user.name}")
        
        # Create sample shifts for current month
        now = datetime.now()
        current_month_start = datetime(now.year, now.month, 1)
        
        # Add some shifts for the current month
        sample_shifts = [
            {
                "date": (current_month_start + timedelta(days=5)).strftime("%Y-%m-%d"),
                "type": "day",
                "startTime": "09:00",
                "endTime": "15:00",
                "hours": 6.0,
                "earnings": 4075.0,
                "position": "Официант"
            },
            {
                "date": (current_month_start + timedelta(days=7)).strftime("%Y-%m-%d"),
                "type": "day",
                "startTime": "09:00",
                "endTime": "15:00",
                "hours": 6.0,
                "earnings": 4075.0,
                "position": "Официант"
            },
            {
                "date": (current_month_start + timedelta(days=10)).strftime("%Y-%m-%d"),
                "type": "night",
                "startTime": "15:00",
                "endTime": "21:00",
                "hours": 6.0,
                "earnings": 5000.0,
                "position": "Официант"
            },
            {
                "date": (current_month_start + timedelta(days=15)).strftime("%Y-%m-%d"),
                "type": "day",
                "startTime": "09:00",
                "endTime": "15:00",
                "hours": 6.0,
                "earnings": 4075.0,
                "position": "Официант"
            },
            {
                "date": (current_month_start + timedelta(days=20)).strftime("%Y-%m-%d"),
                "type": "night",
                "startTime": "15:00",
                "endTime": "21:00",
                "hours": 6.0,
                "earnings": 5000.0,
                "position": "Официант"
            },
            # Add a future shift for "next shift" endpoint
            {
                "date": (now + timedelta(days=3)).strftime("%Y-%m-%d"),
                "type": "night",
                "startTime": "15:00",
                "endTime": "21:00",
                "hours": 6.0,
                "earnings": 5000.0,
                "position": "Официант"
            }
        ]
        
        for shift_data in sample_shifts:
            shift_id = f"shift-{uuid.uuid4().hex[:8]}"
            existing_shift = db.query(Shift).filter(
                Shift.shiftId == shift_id
            ).first()
            
            if not existing_shift:
                shift = Shift(
                    shiftId=shift_id,
                    userId=user_id,
                    **shift_data
                )
                db.add(shift)
                print(f"Created shift: {shift_data['date']} ({shift_data['type']})")
        
        # Add some availability entries
        tomorrow = (now + timedelta(days=1)).strftime("%Y-%m-%d")
        day_after = (now + timedelta(days=2)).strftime("%Y-%m-%d")
        
        availability_entries = [
            {"date": tomorrow, "timeSlot": "morning", "status": "free"},
            {"date": tomorrow, "timeSlot": "afternoon", "status": "inconvenient"},
            {"date": tomorrow, "timeSlot": "evening", "status": "unavailable"},
            {"date": day_after, "timeSlot": "morning", "status": "free"},
            {"date": day_after, "timeSlot": "afternoon", "status": "free"},
            {"date": day_after, "timeSlot": "evening", "status": "free"},
        ]
        
        for avail_data in availability_entries:
            existing = db.query(Availability).filter(
                Availability.userId == user_id,
                Availability.date == avail_data["date"],
                Availability.timeSlot == avail_data["timeSlot"]
            ).first()
            
            if not existing:
                availability = Availability(
                    userId=user_id,
                    **avail_data
                )
                db.add(availability)
                print(f"Created availability: {avail_data['date']} {avail_data['timeSlot']} = {avail_data['status']}")
        
        db.commit()
        print("\n✅ Database seeded successfully!")
        print(f"\nYou can now login with:")
        print(f"  Email: ivan@example.com")
        print(f"  Password: password123")
        
    except Exception as e:
        db.rollback()
        print(f"❌ Error seeding database: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()

