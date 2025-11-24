"""
User model
"""
from sqlalchemy import Column, String, Integer
from app.database import Base

class User(Base):
    __tablename__ = "users"

    userId = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    position = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    phone = Column(String, nullable=True)
    password_hash = Column(String, nullable=False)  # For future auth implementation

