"""
Availability routes
"""
from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import and_
from datetime import datetime, timedelta
from app.database import get_db
from app.auth import get_current_user
from app.models.user import User
from app.models.shift import Shift
from app.models.availability import Availability
from pydantic import BaseModel
from typing import Dict, Optional

router = APIRouter()

class AvailabilityUpdate(BaseModel):
    date: str
    timeSlot: str  # 'morning', 'afternoon', 'evening'
    status: str  # 'free', 'inconvenient', 'unavailable', 'shift-day', 'shift-evening'

def get_availability_status(user_id: str, date: str, time_slot: str, db: Session) -> Optional[str]:
    """Get availability status, checking both availability table and shifts"""
    # Check if there's a shift for this date/time
    shift = db.query(Shift).filter(
        and_(
            Shift.userId == user_id,
            Shift.date == date
        )
    ).first()
    
    if shift:
        if time_slot == "morning" and shift.type == "day":
            return "shift-day"
        elif time_slot == "evening" and shift.type == "night":
            return "shift-evening"
    
    # Check availability table
    availability = db.query(Availability).filter(
        and_(
            Availability.userId == user_id,
            Availability.date == date,
            Availability.timeSlot == time_slot
        )
    ).first()
    
    if availability:
        return availability.status
    
    return None

@router.get("")
async def get_availability(
    startDate: str = Query(..., description="Start date in YYYY-MM-DD format"),
    days: int = Query(7, ge=1, le=30, description="Number of days"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get availability statuses for N days forward"""
    try:
        start = datetime.strptime(startDate, "%Y-%m-%d")
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date format. Use YYYY-MM-DD")
    
    result: Dict[str, Dict[str, Optional[str]]] = {}
    
    for i in range(days):
        date = (start + timedelta(days=i)).strftime("%Y-%m-%d")
        result[date] = {
            "morning": get_availability_status(current_user.userId, date, "morning", db),
            "afternoon": get_availability_status(current_user.userId, date, "afternoon", db),
            "evening": get_availability_status(current_user.userId, date, "evening", db)
        }
    
    return result

@router.put("")
async def update_availability(
    update: AvailabilityUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Update availability status"""
    # Validate status
    valid_statuses = ["free", "inconvenient", "unavailable", "shift-day", "shift-evening"]
    if update.status not in valid_statuses:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid status. Must be one of: {', '.join(valid_statuses)}"
        )
    
    # Validate time slot
    valid_slots = ["morning", "afternoon", "evening"]
    if update.timeSlot not in valid_slots:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid timeSlot. Must be one of: {', '.join(valid_slots)}"
        )
    
    # Validate date format
    try:
        datetime.strptime(update.date, "%Y-%m-%d")
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date format. Use YYYY-MM-DD")
    
    # Check if record exists
    availability = db.query(Availability).filter(
        and_(
            Availability.userId == current_user.userId,
            Availability.date == update.date,
            Availability.timeSlot == update.timeSlot
        )
    ).first()
    
    if availability:
        availability.status = update.status
    else:
        availability = Availability(
            userId=current_user.userId,
            date=update.date,
            timeSlot=update.timeSlot,
            status=update.status
        )
        db.add(availability)
    
    db.commit()
    
    return {
        "success": True,
        "message": "Статус обновлен"
    }

@router.delete("")
async def delete_availability(
    date: str = Query(..., description="Date in YYYY-MM-DD format"),
    timeSlot: str = Query(..., description="Time slot: morning, afternoon, or evening"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Delete availability entry"""
    # Validate date format
    try:
        datetime.strptime(date, "%Y-%m-%d")
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date format. Use YYYY-MM-DD")
    
    # Validate time slot
    valid_slots = ["morning", "afternoon", "evening"]
    if timeSlot not in valid_slots:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid timeSlot. Must be one of: {', '.join(valid_slots)}"
        )
    
    availability = db.query(Availability).filter(
        and_(
            Availability.userId == current_user.userId,
            Availability.date == date,
            Availability.timeSlot == timeSlot
        )
    ).first()
    
    if not availability:
        raise HTTPException(status_code=404, detail="Availability entry not found")
    
    db.delete(availability)
    db.commit()
    
    return {
        "success": True,
        "message": "Availability entry deleted successfully"
    }

