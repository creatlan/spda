"""
Synthetic Data Generation Script
Generates realistic test data for WorkPlan backend testing
"""
import os
import sys
import random
import uuid
from datetime import datetime, timedelta
from typing import List

# Add parent directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database import Base, get_db
from app.models.user import User
from app.models.shift import Shift, ReplacementRequest
from app.models.availability import Availability
from app.auth import hash_password

# Database URL
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./workplan.db")

# Create engine and session
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Sample data
FIRST_NAMES = [
    "Иван", "Мария", "Александр", "Анна", "Дмитрий", "Елена", "Сергей", "Ольга",
    "Андрей", "Татьяна", "Михаил", "Наталья", "Алексей", "Екатерина", "Павел", "Юлия",
    "Николай", "Ирина", "Владимир", "Светлана", "Роман", "Марина", "Артем", "Анастасия"
]

LAST_NAMES = [
    "Иванов", "Петров", "Сидоров", "Смирнов", "Кузнецов", "Попов", "Васильев", "Петров",
    "Соколов", "Михайлов", "Новikov", "Федоров", "Морозов", "Волков", "Алексеев", "Лебедев"
]

POSITIONS = ["Хостес", "Официант", "Бармен", "Повар", "Администратор", "Менеджер"]

REASONS = [
    "Болезнь",
    "Семейные обстоятельства",
    "Отпуск",
    "Личные дела",
    "Другое мероприятие",
    None  # Some requests without reason
]

AVAILABILITY_STATUSES = ["free", "inconvenient", "unavailable", "shift-day", "shift-evening"]
TIME_SLOTS = ["morning", "afternoon", "evening"]

def generate_user_id():
    """Generate a unique user ID"""
    return f"user-{uuid.uuid4().hex[:12]}"

def generate_shift_id():
    """Generate a unique shift ID"""
    return f"shift-{uuid.uuid4().hex[:12]}"

def generate_request_id():
    """Generate a unique request ID"""
    return f"req-{uuid.uuid4().hex[:12]}"

def create_users(db, count: int = 50):
    """Create synthetic users"""
    print(f"Creating {count} users...")
    users = []
    
    for i in range(count):
        first_name = random.choice(FIRST_NAMES)
        last_name = random.choice(LAST_NAMES)
        name = f"{first_name} {last_name}"
        email = f"{first_name.lower()}.{last_name.lower()}{i}@example.com"
        phone = f"+7 ({random.randint(900, 999)}) {random.randint(100, 999)}-{random.randint(10, 99)}-{random.randint(10, 99)}"
        position = random.choice(POSITIONS)
        
        # 70% have phone (complete profile)
        if random.random() > 0.3:
            phone = phone
        else:
            phone = None
        
        user = User(
            userId=generate_user_id(),
            name=name,
            email=email,
            phone=phone,
            position=position,
            password_hash=hash_password("password123")  # Default password for all test users
        )
        users.append(user)
        db.add(user)
    
    db.commit()
    print(f"✓ Created {count} users")
    return users

def create_shifts(db, users: List[User], months_back: int = 6, shifts_per_user_per_month: int = 8):
    """Create synthetic shifts with realistic patterns"""
    print(f"Creating shifts for last {months_back} months...")
    shifts = []
    now = datetime.now()
    
    # Create user activity profiles (some users are more active than others)
    user_activity_levels = {}
    for user in users:
        # 20% very active (15-20 shifts/month), 30% active (10-15), 30% moderate (5-10), 20% low (2-8)
        rand = random.random()
        if rand < 0.2:
            user_activity_levels[user.userId] = (15, 20)  # Very active
        elif rand < 0.5:
            user_activity_levels[user.userId] = (10, 15)  # Active
        elif rand < 0.8:
            user_activity_levels[user.userId] = (5, 10)   # Moderate
        else:
            user_activity_levels[user.userId] = (2, 8)     # Low activity
    
    # Create user shift type preferences (some prefer day, some night, some balanced)
    user_shift_preferences = {}
    for user in users:
        rand = random.random()
        if rand < 0.3:
            user_shift_preferences[user.userId] = 0.7  # Prefer day shifts (70% day)
        elif rand < 0.6:
            user_shift_preferences[user.userId] = 0.3  # Prefer night shifts (30% day = 70% night)
        else:
            user_shift_preferences[user.userId] = 0.5  # Balanced
    
    # Position-based earnings (different positions earn differently)
    position_rates = {
        "Хостес": (800, 1200),
        "Официант": (1000, 1500),
        "Бармен": (1200, 1800),
        "Повар": (1500, 2200),
        "Администратор": (2000, 3000),
        "Менеджер": (2500, 3500),
    }
    
    for user in users:
        activity_range = user_activity_levels[user.userId]
        shift_preference = user_shift_preferences[user.userId]
        base_rate_range = position_rates.get(user.position, (800, 1500))
        
        # Generate shifts for each month with trends (more shifts in recent months)
        for month_offset in range(months_back):
            target_month = now.month - month_offset
            target_year = now.year
            
            while target_month <= 0:
                target_month += 12
                target_year -= 1
            
            month_date = datetime(target_year, target_month, 1)
            
            # More recent months have more shifts (trending up)
            activity_multiplier = 1.0 + (months_back - month_offset) * 0.1
            min_shifts = max(1, int(activity_range[0] * activity_multiplier * 0.5))
            max_shifts = int(activity_range[1] * activity_multiplier)
            num_shifts = random.randint(min_shifts, max_shifts)
            
            # Some users skip months occasionally (10% chance)
            if random.random() < 0.1:
                continue
            
            # Generate shifts with clustering (users work multiple days in a row)
            shift_dates = []
            remaining_shifts = num_shifts
            
            while remaining_shifts > 0:
                if month_date.month == 12:
                    next_month = datetime(month_date.year + 1, 1, 1)
                else:
                    next_month = datetime(month_date.year, month_date.month + 1, 1)
                
                days_in_month = (next_month - month_date).days
                
                # Create clusters of shifts (2-5 consecutive days)
                cluster_size = min(remaining_shifts, random.randint(2, 5))
                start_day = random.randint(1, days_in_month - cluster_size + 1)
                
                for i in range(cluster_size):
                    day = start_day + i
                    if day > days_in_month:
                        break
                    shift_date = datetime(month_date.year, month_date.month, day)
                    if shift_date <= now:
                        shift_dates.append(shift_date)
                        remaining_shifts -= 1
                
                # Sometimes add gaps between clusters
                if remaining_shifts > 0 and random.random() < 0.3:
                    remaining_shifts -= random.randint(0, min(3, remaining_shifts))
            
            for shift_date in shift_dates:
                # Use user's shift preference
                if random.random() < shift_preference:
                    shift_type = "day"
                else:
                    shift_type = "night"
                
                # Day shift: 8:00-15:00 or 9:00-16:00
                # Night shift: 15:00-22:00 or 16:00-23:00
                if shift_type == "day":
                    start_hour = random.choice([8, 9])
                    start_time = f"{start_hour:02d}:00"
                    end_time = f"{start_hour + 7:02d}:00"
                else:
                    start_hour = random.choice([15, 16])
                    start_time = f"{start_hour:02d}:00"
                    end_time = f"{start_hour + 7:02d}:00"
                
                # Hours vary (some shifts are longer)
                hours = random.choices([6.0, 7.0, 8.0, 9.0], weights=[40, 30, 20, 10])[0]
                
                # Earnings vary by position and shift type (night shifts pay more)
                base_rate = random.uniform(base_rate_range[0], base_rate_range[1])
                if shift_type == "night":
                    base_rate *= 1.2  # 20% premium for night shifts
                rate = base_rate + random.uniform(-100, 200)  # Add some variation
                earnings = round(hours * rate, 2)
                
                shift = Shift(
                    shiftId=generate_shift_id(),
                    userId=user.userId,
                    date=shift_date.strftime("%Y-%m-%d"),
                    type=shift_type,
                    startTime=start_time,
                    endTime=end_time,
                    hours=hours,
                    earnings=earnings,
                    position=user.position,
                    createdAt=shift_date - timedelta(days=random.randint(0, 14))  # Created up to 2 weeks before
                )
                shifts.append(shift)
                db.add(shift)
    
    db.commit()
    print(f"✓ Created {len(shifts)} shifts")
    return shifts

def create_availability(db, users: List[User], days_back: int = 90):
    """Create synthetic availability entries with realistic patterns"""
    print(f"Creating availability entries for last {days_back} days...")
    entries = []
    now = datetime.now()
    
    # User availability activity levels
    user_availability_levels = {}
    for user in users:
        # 30% very active (set availability often), 40% moderate, 30% low
        rand = random.random()
        if rand < 0.3:
            user_availability_levels[user.userId] = (20, 40)  # Very active
        elif rand < 0.7:
            user_availability_levels[user.userId] = (10, 25)   # Moderate
        else:
            user_availability_levels[user.userId] = (5, 15)     # Low
    
    # User availability preferences (some prefer certain time slots)
    user_time_preferences = {}
    for user in users:
        rand = random.random()
        if rand < 0.4:
            user_time_preferences[user.userId] = ["morning", "afternoon"]  # Prefer day
        elif rand < 0.7:
            user_time_preferences[user.userId] = ["evening"]  # Prefer evening
        else:
            user_time_preferences[user.userId] = TIME_SLOTS  # No preference
    
    for user in users:
        activity_range = user_availability_levels[user.userId]
        preferred_slots = user_time_preferences[user.userId]
        num_dates = random.randint(activity_range[0], activity_range[1])
        
        # Create availability in clusters (users set availability for weeks at a time)
        dates_set = set()
        remaining_dates = num_dates
        
        while remaining_dates > 0:
            # Start of a cluster
            days_ago = random.randint(0, days_back - 7)
            cluster_start = now - timedelta(days=days_ago)
            
            # Cluster size (3-10 days)
            cluster_size = min(remaining_dates, random.randint(3, 10))
            
            for i in range(cluster_size):
                cluster_date = cluster_start - timedelta(days=i)
                if cluster_date > now:
                    continue
                date_str = cluster_date.strftime("%Y-%m-%d")
                if date_str not in dates_set:
                    dates_set.add(date_str)
                    remaining_dates -= 1
                    
                    # Use preferred slots 70% of the time
                    if random.random() < 0.7:
                        slots = preferred_slots
                    else:
                        slots = TIME_SLOTS
                    
                    # Set availability for 1-3 time slots
                    num_slots = random.randint(1, min(3, len(slots)))
                    selected_slots = random.sample(slots, num_slots)
                    
                    for slot in selected_slots:
                        # Status distribution: 40% free, 20% inconvenient, 15% unavailable, 25% shift-related
                        rand_status = random.random()
                        if rand_status < 0.4:
                            status = "free"
                        elif rand_status < 0.6:
                            status = "inconvenient"
                        elif rand_status < 0.75:
                            status = "unavailable"
                        elif rand_status < 0.875:
                            status = "shift-day"
                        else:
                            status = "shift-evening"
                        
                        entry = Availability(
                            userId=user.userId,
                            date=date_str,
                            timeSlot=slot,
                            status=status,
                            updatedAt=cluster_date - timedelta(hours=random.randint(0, 24))
                        )
                        entries.append(entry)
                        db.add(entry)
    
    db.commit()
    print(f"✓ Created {len(entries)} availability entries")
    return entries

def create_replacement_requests(db, shifts: List[Shift], users: List[User], request_rate: float = 0.15):
    """Create synthetic replacement requests with realistic patterns"""
    print("Creating replacement requests...")
    requests = []
    
    # Some users request replacements more often (problem users)
    user_request_rates = {}
    for user in users:
        rand = random.random()
        if rand < 0.1:
            user_request_rates[user.userId] = 0.3  # 10% of users request replacements frequently (30% of their shifts)
        elif rand < 0.3:
            user_request_rates[user.userId] = 0.2  # 20% request moderately (20%)
        else:
            user_request_rates[user.userId] = 0.05  # 70% rarely request (5%)
    
    # Group shifts by user
    shifts_by_user = {}
    for shift in shifts:
        if shift.userId not in shifts_by_user:
            shifts_by_user[shift.userId] = []
        shifts_by_user[shift.userId].append(shift)
    
    # Reason weights (some reasons are more common)
    reason_weights = {
        "Болезнь": 0.35,
        "Семейные обстоятельства": 0.25,
        "Отпуск": 0.15,
        "Личные дела": 0.15,
        "Другое мероприятие": 0.05,
        None: 0.05
    }
    
    for user_id, user_shifts in shifts_by_user.items():
        user_rate = user_request_rates[user_id]
        num_requests = max(0, int(len(user_shifts) * user_rate))
        
        # Select shifts for this user
        selected_shifts = random.sample(user_shifts, min(num_requests, len(user_shifts)))
        
        for shift in selected_shifts:
            # Request created 1-14 days before the shift (more urgent = closer to shift date)
            days_before = random.choices(
                [1, 2, 3, 4, 5, 7, 10, 14],
                weights=[15, 20, 15, 10, 10, 10, 10, 10]  # More requests closer to shift date
            )[0]
            request_date = datetime.strptime(shift.date, "%Y-%m-%d") - timedelta(days=days_before)
            
            # Status distribution varies by how early the request was made
            # Early requests (7+ days) are more likely to be approved
            if days_before >= 7:
                status_rand = random.random()
                if status_rand < 0.75:  # 75% approved
                    status = "approved"
                elif status_rand < 0.85:  # 10% pending
                    status = "pending"
                else:  # 15% rejected
                    status = "rejected"
            else:  # Late requests (less than 7 days)
                status_rand = random.random()
                if status_rand < 0.5:  # 50% approved
                    status = "approved"
                elif status_rand < 0.75:  # 25% pending
                    status = "pending"
                else:  # 25% rejected
                    status = "rejected"
            
            # Select reason based on weights
            reason = random.choices(
                list(reason_weights.keys()),
                weights=list(reason_weights.values())
            )[0]
            
            request = ReplacementRequest(
                requestId=generate_request_id(),
                shiftId=shift.shiftId,
                userId=shift.userId,
                reason=reason,
                status=status,
                createdAt=request_date
            )
            requests.append(request)
            db.add(request)
    
    db.commit()
    print(f"✓ Created {len(requests)} replacement requests")
    return requests

def main():
    """Main function to generate all synthetic data"""
    print("=" * 60)
    print("WorkPlan Synthetic Data Generator")
    print("=" * 60)
    
    # Ask for confirmation
    response = input("\nThis will generate synthetic test data. Continue? (yes/no): ")
    if response.lower() not in ['yes', 'y']:
        print("Cancelled.")
        return
    
    # Ask for data volume
    try:
        num_users = int(input("Number of users to create (default 50): ") or "50")
        months_back = int(input("Months of historical data (default 6): ") or "6")
        shifts_per_month = int(input("Average shifts per user per month (default 8): ") or "8")
    except ValueError:
        print("Using defaults...")
        num_users = 50
        months_back = 6
        shifts_per_month = 8
    
    db = SessionLocal()
    
    try:
        # Clear existing data (optional - comment out if you want to keep existing data)
        clear = input("\nClear existing data? (yes/no, default no): ")
        if clear.lower() in ['yes', 'y']:
            print("Clearing existing data...")
            db.query(ReplacementRequest).delete()
            db.query(Shift).delete()
            db.query(Availability).delete()
            db.query(User).delete()
            db.commit()
            print("✓ Cleared existing data")
        
        # Generate data
        users = create_users(db, num_users)
        shifts = create_shifts(db, users, months_back, shifts_per_month)
        availability = create_availability(db, users, days_back=months_back * 30)
        requests = create_replacement_requests(db, shifts, users)
        
        print("\n" + "=" * 60)
        print("Summary:")
        print(f"  Users: {len(users)}")
        print(f"  Shifts: {len(shifts)}")
        print(f"  Availability entries: {len(availability)}")
        print(f"  Replacement requests: {len(requests)}")
        print("=" * 60)
        print("\n✓ Synthetic data generation complete!")
        print("\nNote: All test users have password 'password123'")
        
    except Exception as e:
        db.rollback()
        print(f"\n✗ Error: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    main()

