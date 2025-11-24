"""
Availability model
"""
from sqlalchemy import Column, String, Integer, DateTime
from datetime import datetime
from app.database import Base

class Availability(Base):
    __tablename__ = "availability"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    userId = Column(String, nullable=False, index=True)
    date = Column(String, nullable=False, index=True)  # Format: YYYY-MM-DD
    timeSlot = Column(String, nullable=False)  # 'morning', 'afternoon', 'evening'
    status = Column(String, nullable=False)  # 'free', 'inconvenient', 'unavailable', 'shift-day', 'shift-evening'
    updatedAt = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Unique constraint on userId, date, timeSlot
    __table_args__ = (
        {"sqlite_autoincrement": True},
    )

