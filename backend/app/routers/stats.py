"""
Statistics routes
"""
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import and_, func
from datetime import datetime
from app.database import get_db
from app.auth import get_current_user
from app.models.user import User
from app.models.shift import Shift

router = APIRouter()

@router.get("/current-month")
async def get_current_month_stats(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get current month statistics"""
    now = datetime.now()
    start_date = datetime(now.year, now.month, 1)
    if now.month == 12:
        end_date = datetime(now.year + 1, 1, 1)
    else:
        end_date = datetime(now.year, now.month + 1, 1)
    
    shifts = db.query(Shift).filter(
        and_(
            Shift.userId == current_user.userId,
            Shift.date >= start_date.strftime("%Y-%m-%d"),
            Shift.date < end_date.strftime("%Y-%m-%d")
        )
    ).all()
    
    total_shifts = len(shifts)
    day_shifts = len([s for s in shifts if s.type == "day"])
    night_shifts = len([s for s in shifts if s.type == "night"])
    total_earnings = sum(s.earnings for s in shifts)
    
    # Today's earnings
    today = now.strftime("%Y-%m-%d")
    today_shifts = [s for s in shifts if s.date == today]
    today_earnings = sum(s.earnings for s in today_shifts)
    
    return {
        "totalShifts": total_shifts,
        "dayShifts": day_shifts,
        "nightShifts": night_shifts,
        "totalEarnings": total_earnings,
        "todayEarnings": today_earnings
    }


