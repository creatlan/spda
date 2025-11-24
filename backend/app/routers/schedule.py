"""
Schedule routes
"""
from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import and_
from datetime import datetime
from app.database import get_db
from app.auth import get_current_user
from app.models.user import User
from app.models.shift import Shift

router = APIRouter()

@router.get("/day")
async def get_day_schedule(
    date: str = Query(..., description="Date in YYYY-MM-DD format"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Get schedule for all staff on a specific day
    Note: In a real application, this would check user permissions (admin/manager)
    For now, any authenticated user can view schedules
    """
    # Validate date format
    try:
        datetime.strptime(date, "%Y-%m-%d")
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date format. Use YYYY-MM-DD")
    
    # Get all shifts for the day
    shifts = db.query(Shift).filter(Shift.date == date).all()
    
    # Group by time slot (morning/evening) and get user info
    morning_shifts = []
    evening_shifts = []
    
    for shift in shifts:
        user = db.query(User).filter(User.userId == shift.userId).first()
        if not user:
            continue
        
        shift_data = {
            "staffId": shift.userId,
            "name": user.name,
            "position": shift.position or user.position,
            "startTime": shift.startTime,
            "endTime": shift.endTime
        }
        
        # Determine time slot based on shift type and times
        if shift.type == "day" or (shift.startTime and shift.startTime < "15:00"):
            morning_shifts.append(shift_data)
        else:
            evening_shifts.append(shift_data)
    
    return {
        "date": date,
        "shifts": {
            "morning": morning_shifts,
            "evening": evening_shifts
        }
    }

