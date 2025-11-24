"""
Shift models
"""
from sqlalchemy import Column, String, Integer, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base

class Shift(Base):
    __tablename__ = "shifts"

    shiftId = Column(String, primary_key=True, index=True)
    userId = Column(String, ForeignKey("users.userId"), nullable=False, index=True)
    date = Column(String, nullable=False, index=True)  # Format: YYYY-MM-DD
    type = Column(String, nullable=False)  # 'day' or 'night'
    startTime = Column(String, nullable=False)  # Format: HH:MM
    endTime = Column(String, nullable=False)  # Format: HH:MM
    hours = Column(Float, nullable=False, default=6.0)
    earnings = Column(Float, nullable=False, default=0.0)
    position = Column(String, nullable=False)
    createdAt = Column(DateTime, default=datetime.utcnow)

    # Relationship
    user = relationship("User", backref="shifts")

class ReplacementRequest(Base):
    __tablename__ = "replacement_requests"

    requestId = Column(String, primary_key=True, index=True)
    shiftId = Column(String, ForeignKey("shifts.shiftId"), nullable=False)
    userId = Column(String, ForeignKey("users.userId"), nullable=False)
    reason = Column(String, nullable=True)
    status = Column(String, default="pending")  # 'pending', 'approved', 'rejected'
    createdAt = Column(DateTime, default=datetime.utcnow)

    # Relationships
    shift = relationship("Shift", backref="replacement_requests")
    user = relationship("User", backref="replacement_requests")

