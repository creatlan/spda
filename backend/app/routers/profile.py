"""
Profile routes
"""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.auth import get_current_user
from app.models.user import User
from pydantic import BaseModel
from typing import Optional

router = APIRouter()

class ProfileResponse(BaseModel):
    userId: str
    name: str
    position: str
    email: str
    phone: Optional[str] = None

class ProfileUpdate(BaseModel):
    name: Optional[str] = None
    position: Optional[str] = None
    phone: Optional[str] = None

@router.get("/profile")
async def get_profile(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get current user profile"""
    return {
        "userId": current_user.userId,
        "name": current_user.name,
        "position": current_user.position,
        "email": current_user.email,
        "phone": current_user.phone
    }

@router.put("/profile")
async def update_profile(
    profile_data: ProfileUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Update user profile"""
    if profile_data.name is not None:
        current_user.name = profile_data.name
    if profile_data.position is not None:
        current_user.position = profile_data.position
    if profile_data.phone is not None:
        current_user.phone = profile_data.phone
    
    db.commit()
    db.refresh(current_user)
    
    return {
        "success": True,
        "message": "Профиль обновлен",
        "profile": {
            "userId": current_user.userId,
            "name": current_user.name,
            "position": current_user.position,
            "email": current_user.email,
            "phone": current_user.phone
        }
    }

@router.delete("/profile")
async def delete_profile(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Delete user account"""
    # Delete all related data
    from app.models.shift import Shift, ReplacementRequest
    from app.models.availability import Availability
    
    # Delete replacement requests
    db.query(ReplacementRequest).filter(
        ReplacementRequest.userId == current_user.userId
    ).delete()
    
    # Delete shifts
    db.query(Shift).filter(
        Shift.userId == current_user.userId
    ).delete()
    
    # Delete availability entries
    db.query(Availability).filter(
        Availability.userId == current_user.userId
    ).delete()
    
    # Delete user
    db.delete(current_user)
    db.commit()
    
    return {
        "success": True,
        "message": "User account deleted successfully"
    }

