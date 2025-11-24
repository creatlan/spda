"""
Shifts routes
"""
from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import and_, func
from datetime import datetime, timedelta
from app.database import get_db
from app.auth import get_current_user
from app.models.user import User
from app.models.shift import Shift, ReplacementRequest
from pydantic import BaseModel
from typing import Optional
import uuid

router = APIRouter()

class FindReplacementRequest(BaseModel):
    shiftId: Optional[str] = None
    date: Optional[str] = None
    time: Optional[str] = None
    shiftStart: Optional[str] = None
    shiftEnd: Optional[str] = None
    reason: Optional[str] = None

class ShiftCreate(BaseModel):
    date: str  # YYYY-MM-DD
    type: str  # 'day' or 'night'
    startTime: str  # HH:MM
    endTime: str  # HH:MM
    hours: float = 6.0
    earnings: float = 0.0
    position: str

class ShiftUpdate(BaseModel):
    date: Optional[str] = None
    type: Optional[str] = None
    startTime: Optional[str] = None
    endTime: Optional[str] = None
    hours: Optional[float] = None
    earnings: Optional[float] = None
    position: Optional[str] = None

class ReplacementRequestUpdate(BaseModel):
    status: Optional[str] = None  # 'pending', 'approved', 'rejected'
    reason: Optional[str] = None

def format_date(date_str: str) -> str:
    """Format date from YYYY-MM-DD to DD.MM.YYYY"""
    try:
        dt = datetime.strptime(date_str, "%Y-%m-%d")
        return dt.strftime("%d.%m.%Y")
    except:
        return date_str

@router.get("")
async def get_shifts(
    month: int = Query(..., ge=0, le=11, description="Month (0-11)"),
    year: int = Query(..., ge=2020, description="Year"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Get shifts for a specific month
    Returns shifts in format: { "YYYY-M-D": "day" | "night" }
    """
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
    ).all()
    
    shifts_dict = {}
    for shift in shifts:
        # Normalize date format (remove leading zeros from month/day)
        date_parts = shift.date.split("-")
        normalized_date = f"{date_parts[0]}-{int(date_parts[1])}-{int(date_parts[2])}"
        shifts_dict[normalized_date] = shift.type
    
    return shifts_dict

@router.get("/next")
async def get_next_shift(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get next upcoming shift"""
    today = datetime.now().strftime("%Y-%m-%d")
    
    next_shift = db.query(Shift).filter(
        and_(
            Shift.userId == current_user.userId,
            Shift.date >= today
        )
    ).order_by(Shift.date, Shift.startTime).first()
    
    if not next_shift:
        raise HTTPException(status_code=404, detail="No upcoming shifts found")
    
    return {
        "date": format_date(next_shift.date),
        "startTime": next_shift.startTime,
        "endTime": next_shift.endTime,
        "type": next_shift.type,
        "position": next_shift.position
    }

@router.post("")
async def create_shift(
    shift_data: ShiftCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Create a new shift"""
    # Validate date format
    try:
        datetime.strptime(shift_data.date, "%Y-%m-%d")
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date format. Use YYYY-MM-DD")
    
    # Validate shift type
    if shift_data.type not in ["day", "night"]:
        raise HTTPException(status_code=400, detail="Shift type must be 'day' or 'night'")
    
    # Validate time format
    try:
        datetime.strptime(shift_data.startTime, "%H:%M")
        datetime.strptime(shift_data.endTime, "%H:%M")
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid time format. Use HH:MM")
    
    # Create shift
    shift = Shift(
        shiftId=f"shift-{uuid.uuid4().hex[:8]}",
        userId=current_user.userId,
        date=shift_data.date,
        type=shift_data.type,
        startTime=shift_data.startTime,
        endTime=shift_data.endTime,
        hours=shift_data.hours,
        earnings=shift_data.earnings,
        position=shift_data.position
    )
    
    db.add(shift)
    db.commit()
    db.refresh(shift)
    
    return {
        "success": True,
        "message": "Shift created successfully",
        "shift": {
            "shiftId": shift.shiftId,
            "date": shift.date,
            "type": shift.type,
            "startTime": shift.startTime,
            "endTime": shift.endTime,
            "hours": shift.hours,
            "earnings": shift.earnings,
            "position": shift.position
        }
    }

@router.get("/{shiftId}")
async def get_shift(
    shiftId: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get a specific shift by ID"""
    shift = db.query(Shift).filter(
        and_(
            Shift.shiftId == shiftId,
            Shift.userId == current_user.userId
        )
    ).first()
    
    if not shift:
        raise HTTPException(status_code=404, detail="Shift not found")
    
    return {
        "shiftId": shift.shiftId,
        "date": shift.date,
        "type": shift.type,
        "startTime": shift.startTime,
        "endTime": shift.endTime,
        "hours": shift.hours,
        "earnings": shift.earnings,
        "position": shift.position,
        "createdAt": shift.createdAt.isoformat() if shift.createdAt else None
    }

@router.put("/{shiftId}")
async def update_shift(
    shiftId: str,
    shift_data: ShiftUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Update a shift"""
    shift = db.query(Shift).filter(
        and_(
            Shift.shiftId == shiftId,
            Shift.userId == current_user.userId
        )
    ).first()
    
    if not shift:
        raise HTTPException(status_code=404, detail="Shift not found")
    
    # Update fields if provided
    if shift_data.date is not None:
        try:
            datetime.strptime(shift_data.date, "%Y-%m-%d")
            shift.date = shift_data.date
        except ValueError:
            raise HTTPException(status_code=400, detail="Invalid date format. Use YYYY-MM-DD")
    
    if shift_data.type is not None:
        if shift_data.type not in ["day", "night"]:
            raise HTTPException(status_code=400, detail="Shift type must be 'day' or 'night'")
        shift.type = shift_data.type
    
    if shift_data.startTime is not None:
        try:
            datetime.strptime(shift_data.startTime, "%H:%M")
            shift.startTime = shift_data.startTime
        except ValueError:
            raise HTTPException(status_code=400, detail="Invalid time format. Use HH:MM")
    
    if shift_data.endTime is not None:
        try:
            datetime.strptime(shift_data.endTime, "%H:%M")
            shift.endTime = shift_data.endTime
        except ValueError:
            raise HTTPException(status_code=400, detail="Invalid time format. Use HH:MM")
    
    if shift_data.hours is not None:
        shift.hours = shift_data.hours
    
    if shift_data.earnings is not None:
        shift.earnings = shift_data.earnings
    
    if shift_data.position is not None:
        shift.position = shift_data.position
    
    db.commit()
    db.refresh(shift)
    
    return {
        "success": True,
        "message": "Shift updated successfully",
        "shift": {
            "shiftId": shift.shiftId,
            "date": shift.date,
            "type": shift.type,
            "startTime": shift.startTime,
            "endTime": shift.endTime,
            "hours": shift.hours,
            "earnings": shift.earnings,
            "position": shift.position
        }
    }

@router.delete("/{shiftId}")
async def delete_shift(
    shiftId: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Delete a shift"""
    shift = db.query(Shift).filter(
        and_(
            Shift.shiftId == shiftId,
            Shift.userId == current_user.userId
        )
    ).first()
    
    if not shift:
        raise HTTPException(status_code=404, detail="Shift not found")
    
    db.delete(shift)
    db.commit()
    
    return {
        "success": True,
        "message": "Shift deleted successfully"
    }

@router.post("/find-replacement")
async def find_replacement(
    request: FindReplacementRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Request replacement for a shift"""
    # Find the shift
    shift = None
    if request.shiftId:
        shift = db.query(Shift).filter(
            and_(
                Shift.shiftId == request.shiftId,
                Shift.userId == current_user.userId
            )
        ).first()
    elif request.date:
        shift = db.query(Shift).filter(
            and_(
                Shift.userId == current_user.userId,
                Shift.date == request.date
            )
        ).first()
    
    if not shift:
        raise HTTPException(status_code=404, detail="Shift not found")
    
    # Create replacement request
    replacement_request = ReplacementRequest(
        requestId=str(uuid.uuid4()),
        shiftId=shift.shiftId,
        userId=current_user.userId,
        reason=request.reason or "Не могу выйти"
    )
    
    db.add(replacement_request)
    db.commit()
    
    return {
        "success": True,
        "message": "Запрос на замену отправлен",
        "requestId": replacement_request.requestId,
        "replacementFound": False  # Would be determined by matching logic
    }

@router.get("/replacement-requests")
async def get_replacement_requests(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get all replacement requests for current user"""
    requests = db.query(ReplacementRequest).filter(
        ReplacementRequest.userId == current_user.userId
    ).order_by(ReplacementRequest.createdAt.desc()).all()
    
    return {
        "requests": [
            {
                "requestId": req.requestId,
                "shiftId": req.shiftId,
                "reason": req.reason,
                "status": req.status,
                "createdAt": req.createdAt.isoformat() if req.createdAt else None
            }
            for req in requests
        ]
    }

@router.get("/replacement-requests/{requestId}")
async def get_replacement_request(
    requestId: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get a specific replacement request"""
    request = db.query(ReplacementRequest).filter(
        and_(
            ReplacementRequest.requestId == requestId,
            ReplacementRequest.userId == current_user.userId
        )
    ).first()
    
    if not request:
        raise HTTPException(status_code=404, detail="Replacement request not found")
    
    return {
        "requestId": request.requestId,
        "shiftId": request.shiftId,
        "reason": request.reason,
        "status": request.status,
        "createdAt": request.createdAt.isoformat() if request.createdAt else None
    }

@router.put("/replacement-requests/{requestId}")
async def update_replacement_request(
    requestId: str,
    update_data: ReplacementRequestUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Update a replacement request"""
    request = db.query(ReplacementRequest).filter(
        and_(
            ReplacementRequest.requestId == requestId,
            ReplacementRequest.userId == current_user.userId
        )
    ).first()
    
    if not request:
        raise HTTPException(status_code=404, detail="Replacement request not found")
    
    if update_data.status is not None:
        if update_data.status not in ["pending", "approved", "rejected"]:
            raise HTTPException(
                status_code=400,
                detail="Status must be 'pending', 'approved', or 'rejected'"
            )
        request.status = update_data.status
    
    if update_data.reason is not None:
        request.reason = update_data.reason
    
    db.commit()
    db.refresh(request)
    
    return {
        "success": True,
        "message": "Replacement request updated successfully",
        "request": {
            "requestId": request.requestId,
            "shiftId": request.shiftId,
            "reason": request.reason,
            "status": request.status
        }
    }

@router.delete("/replacement-requests/{requestId}")
async def delete_replacement_request(
    requestId: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Cancel/delete a replacement request"""
    request = db.query(ReplacementRequest).filter(
        and_(
            ReplacementRequest.requestId == requestId,
            ReplacementRequest.userId == current_user.userId
        )
    ).first()
    
    if not request:
        raise HTTPException(status_code=404, detail="Replacement request not found")
    
    db.delete(request)
    db.commit()
    
    return {
        "success": True,
        "message": "Replacement request deleted successfully"
    }

