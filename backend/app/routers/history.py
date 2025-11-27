"""
History routes
"""
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import and_, func
from datetime import datetime
from app.database import get_db
from app.auth import get_current_user
from app.models.user import User
from app.models.shift import Shift

router = APIRouter()

def format_date(date_str: str) -> str:
    """Format date from YYYY-MM-DD to DD.MM.YYYY"""
    try:
        dt = datetime.strptime(date_str, "%Y-%m-%d")
        return dt.strftime("%d.%m.%Y")
    except:
        return date_str

@router.get("/all-time")
async def get_all_time_history(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get all-time statistics"""
    shifts = db.query(Shift).filter(Shift.userId == current_user.userId).all()
    
    total_shifts = len(shifts)
    total_hours = sum(s.hours for s in shifts)
    total_earnings = sum(s.earnings for s in shifts)
    
    day_shifts = [s for s in shifts if s.type == "day"]
    night_shifts = [s for s in shifts if s.type == "night"]
    
    day_shifts_count = len(day_shifts)
    day_hours = sum(s.hours for s in day_shifts)
    day_earnings = sum(s.earnings for s in day_shifts)
    
    night_shifts_count = len(night_shifts)
    night_hours = sum(s.hours for s in night_shifts)
    night_earnings = sum(s.earnings for s in night_shifts)
    
    return {
        "totalShifts": total_shifts,
        "totalHours": total_hours,
        "totalEarnings": total_earnings,
        "dayShifts": day_shifts_count,
        "dayHours": day_hours,
        "dayEarnings": day_earnings,
        "nightShifts": night_shifts_count,
        "nightHours": night_hours,
        "nightEarnings": night_earnings
    }

@router.get("/month")
async def get_month_history(
    month: int = Query(..., ge=0, le=11, description="Month (0-11)"),
    year: int = Query(..., ge=2020, description="Year"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get monthly statistics and shift list"""
    # Calculate date range for the month
    start_date = datetime(year, month + 1, 1)
    if month == 11:
        end_date = datetime(year + 1, 1, 1)
    else:
        end_date = datetime(year, month + 2, 1)
    
    shifts = db.query(Shift).filter(
        and_(
            Shift.userId == current_user.userId,
            Shift.date >= start_date.strftime("%Y-%m-%d"),
            Shift.date < end_date.strftime("%Y-%m-%d")
        )
    ).order_by(Shift.date).all()
    
    total_shifts = len(shifts)
    total_hours = sum(s.hours for s in shifts)
    total_earnings = sum(s.earnings for s in shifts)
    
    day_shifts = [s for s in shifts if s.type == "day"]
    night_shifts = [s for s in shifts if s.type == "night"]
    
    day_shifts_count = len(day_shifts)
    day_hours = sum(s.hours for s in day_shifts)
    day_earnings = sum(s.earnings for s in day_shifts)
    
    night_shifts_count = len(night_shifts)
    night_hours = sum(s.hours for s in night_shifts)
    night_earnings = sum(s.earnings for s in night_shifts)
    
    # Format shifts list
    shifts_list = [
        {
            "date": format_date(s.date),
            "type": s.type,
            "hours": s.hours,
            "earnings": s.earnings
        }
        for s in shifts
    ]
    
    return {
        "totalShifts": total_shifts,
        "totalHours": total_hours,
        "totalEarnings": total_earnings,
        "dayShifts": day_shifts_count,
        "dayHours": day_hours,
        "dayEarnings": day_earnings,
        "nightShifts": night_shifts_count,
        "nightHours": night_hours,
        "nightEarnings": night_earnings,
        "shifts": shifts_list
    }


