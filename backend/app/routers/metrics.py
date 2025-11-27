"""
Comprehensive metrics and analytics endpoints
"""
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import func, and_, or_, case, distinct, extract
from datetime import datetime, timedelta
from typing import Optional
from app.database import get_db
from app.auth import get_current_user
from app.models.user import User
from app.models.shift import Shift, ReplacementRequest
from app.models.availability import Availability

router = APIRouter()

# ============================================================================
# 1. USER & ENGAGEMENT METRICS
# ============================================================================

@router.get("/users/active")
async def get_active_users(
    days: int = Query(30, description="Number of days to look back"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Total Active Users - Count of users with at least one shift in the last N days"""
    cutoff_date = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
    
    active_users = db.query(func.count(distinct(Shift.userId))).filter(
        Shift.date >= cutoff_date
    ).scalar()
    
    return {
        "metric": "total_active_users",
        "period_days": days,
        "value": active_users or 0,
        "cutoff_date": cutoff_date
    }

@router.get("/users/registrations")
async def get_user_registrations(
    period: str = Query("monthly", description="Period: daily, weekly, or monthly"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """New User Registrations - Count by period"""
    # Note: This assumes createdAt exists. If not, we'll need to add it to User model
    # For now, using total users as proxy
    total_users = db.query(func.count(User.userId)).scalar()
    
    return {
        "metric": "user_registrations",
        "period": period,
        "total_users": total_users or 0,
        "note": "User model needs createdAt field for period-based tracking"
    }

@router.get("/users/retention")
async def get_user_retention(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """User Retention Rate - % of users active in month who were also active in previous month"""
    now = datetime.now()
    current_month_start = datetime(now.year, now.month, 1)
    if now.month == 1:
        prev_month_start = datetime(now.year - 1, 12, 1)
        prev_month_end = datetime(now.year, 1, 1)
    else:
        prev_month_start = datetime(now.year, now.month - 1, 1)
        prev_month_end = datetime(now.year, now.month, 1)
    
    # Get distinct users for current month
    current_month_user_ids = db.query(distinct(Shift.userId)).filter(
        and_(
            Shift.date >= current_month_start.strftime("%Y-%m-%d"),
            Shift.date < now.strftime("%Y-%m-%d")
        )
    ).all()
    current_month_user_ids = [uid[0] for uid in current_month_user_ids]
    
    # Get distinct users for previous month
    prev_month_user_ids = db.query(distinct(Shift.userId)).filter(
        and_(
            Shift.date >= prev_month_start.strftime("%Y-%m-%d"),
            Shift.date < prev_month_end.strftime("%Y-%m-%d")
        )
    ).all()
    prev_month_user_ids = [uid[0] for uid in prev_month_user_ids]
    
    current_count = len(current_month_user_ids)
    prev_count = len(prev_month_user_ids)
    
    # Users active in both months
    retained_users = len(set(current_month_user_ids) & set(prev_month_user_ids))
    
    retention_rate = (retained_users / current_count * 100) if current_count > 0 else 0
    
    return {
        "metric": "user_retention_rate",
        "current_month_active": current_count,
        "previous_month_active": prev_count,
        "retained_users": retained_users,
        "retention_rate_percent": round(retention_rate, 2)
    }

@router.get("/users/profile-completion")
async def get_profile_completion(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Profile Completion Rate - % of users with complete profiles"""
    total_users = db.query(func.count(User.userId)).scalar() or 0
    
    # Users with phone (assuming phone is optional field that indicates completion)
    users_with_phone = db.query(func.count(User.userId)).filter(
        User.phone.isnot(None),
        User.phone != ""
    ).scalar() or 0
    
    completion_rate = (users_with_phone / total_users * 100) if total_users > 0 else 0
    
    return {
        "metric": "profile_completion_rate",
        "total_users": total_users,
        "users_with_complete_profile": users_with_phone,
        "completion_rate_percent": round(completion_rate, 2)
    }

@router.get("/users/availability-set")
async def get_users_with_availability(
    days: int = Query(30, description="Number of days to look back"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Users with Availability Set - Count of users who have set availability in the last N days"""
    cutoff_date = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
    
    users_with_availability = db.query(func.count(distinct(Availability.userId))).filter(
        Availability.date >= cutoff_date
    ).scalar() or 0
    
    return {
        "metric": "users_with_availability_set",
        "period_days": days,
        "value": users_with_availability,
        "cutoff_date": cutoff_date
    }

# ============================================================================
# 2. SHIFT METRICS
# ============================================================================

@router.get("/shifts/total")
async def get_total_shifts(
    period: str = Query("week", description="Period: week, month, or all"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Total Shifts Created - Count by period"""
    query = db.query(func.count(Shift.shiftId))
    
    if period == "week":
        cutoff_date = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")
        query = query.filter(Shift.date >= cutoff_date)
    elif period == "month":
        now = datetime.now()
        month_start = datetime(now.year, now.month, 1).strftime("%Y-%m-%d")
        query = query.filter(Shift.date >= month_start)
    
    total_shifts = query.scalar() or 0
    
    return {
        "metric": "total_shifts_created",
        "period": period,
        "value": total_shifts
    }

@router.get("/shifts/by-type")
async def get_shifts_by_type(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Shifts by Type - First vs second shift distribution"""
    day_shifts = db.query(func.count(Shift.shiftId)).filter(
        Shift.type == "day"
    ).scalar() or 0
    
    night_shifts = db.query(func.count(Shift.shiftId)).filter(
        Shift.type == "night"
    ).scalar() or 0
    
    total = day_shifts + night_shifts
    
    return {
        "metric": "shifts_by_type",
        "day_shifts": day_shifts,
        "night_shifts": night_shifts,
        "total": total,
        "day_percentage": round((day_shifts / total * 100) if total > 0 else 0, 2),
        "night_percentage": round((night_shifts / total * 100) if total > 0 else 0, 2)
    }

@router.get("/shifts/average-per-user")
async def get_average_shifts_per_user(
    period: str = Query("month", description="Period: week or month"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Average Shifts per User - Mean shifts per user per period"""
    query = db.query(Shift.userId, func.count(Shift.shiftId).label('shift_count'))
    
    if period == "week":
        cutoff_date = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")
        query = query.filter(Shift.date >= cutoff_date)
    elif period == "month":
        now = datetime.now()
        month_start = datetime(now.year, now.month, 1).strftime("%Y-%m-%d")
        query = query.filter(Shift.date >= month_start)
    
    user_shift_counts = query.group_by(Shift.userId).all()
    
    if not user_shift_counts:
        return {
            "metric": "average_shifts_per_user",
            "period": period,
            "average": 0,
            "total_users": 0
        }
    
    total_shifts = sum(count for _, count in user_shift_counts)
    total_users = len(user_shift_counts)
    average = total_shifts / total_users if total_users > 0 else 0
    
    return {
        "metric": "average_shifts_per_user",
        "period": period,
        "average": round(average, 2),
        "total_users": total_users,
        "total_shifts": total_shifts
    }

@router.get("/shifts/gap-analysis")
async def get_shift_gap_analysis(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Shift Gap Analysis - Average days between shifts per user"""
    # Get all shifts ordered by user and date
    shifts = db.query(Shift.userId, Shift.date).order_by(
        Shift.userId, Shift.date
    ).all()
    
    if not shifts:
        return {
            "metric": "shift_gap_analysis",
            "average_days_between_shifts": 0,
            "users_analyzed": 0
        }
    
    gaps = []
    current_user_id = None
    prev_date = None
    
    for user_id, date_str in shifts:
        if current_user_id == user_id and prev_date:
            date1 = datetime.strptime(prev_date, "%Y-%m-%d")
            date2 = datetime.strptime(date_str, "%Y-%m-%d")
            gap = (date2 - date1).days
            if gap > 0:
                gaps.append(gap)
        
        current_user_id = user_id
        prev_date = date_str
    
    avg_gap = sum(gaps) / len(gaps) if gaps else 0
    
    return {
        "metric": "shift_gap_analysis",
        "average_days_between_shifts": round(avg_gap, 2),
        "total_gaps_analyzed": len(gaps),
        "users_analyzed": len(set(s[0] for s in shifts))
    }

@router.get("/shifts/weekend-vs-weekday")
async def get_weekend_weekday_shifts(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Weekend vs Weekday Shifts - Ratio of weekend to weekday shifts"""
    shifts = db.query(Shift.date).all()
    
    weekend_count = 0
    weekday_count = 0
    
    for (date_str,) in shifts:
        date_obj = datetime.strptime(date_str, "%Y-%m-%d")
        if date_obj.weekday() >= 5:  # Saturday = 5, Sunday = 6
            weekend_count += 1
        else:
            weekday_count += 1
    
    total = weekend_count + weekday_count
    ratio = (weekend_count / weekday_count) if weekday_count > 0 else 0
    
    return {
        "metric": "weekend_vs_weekday_shifts",
        "weekend_shifts": weekend_count,
        "weekday_shifts": weekday_count,
        "total": total,
        "ratio": round(ratio, 2),
        "weekend_percentage": round((weekend_count / total * 100) if total > 0 else 0, 2)
    }

@router.get("/shifts/lifecycle")
async def get_shift_lifecycle(
    period: str = Query("month", description="Period: week or month"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Shift Lifecycle - Creation, update, and deletion rates"""
    # Note: Shift model has createdAt, but update/deletion tracking would need audit logs
    # For now, we'll use createdAt as proxy for creation rate
    
    query = db.query(func.count(Shift.shiftId))
    
    if period == "week":
        cutoff_date = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")
        query = query.filter(Shift.date >= cutoff_date)
    elif period == "month":
        now = datetime.now()
        month_start = datetime(now.year, now.month, 1).strftime("%Y-%m-%d")
        query = query.filter(Shift.date >= month_start)
    
    creation_rate = query.scalar() or 0
    
    return {
        "metric": "shift_lifecycle",
        "period": period,
        "creation_rate": creation_rate,
        "update_rate": 0,  # Requires audit logging
        "deletion_rate": 0,  # Requires soft delete or audit logging
        "note": "Update and deletion rates require audit logging implementation"
    }

# ============================================================================
# 3. FINANCIAL METRICS
# ============================================================================

@router.get("/financial/total-earnings")
async def get_total_earnings(
    period: str = Query("month", description="Period: week, month, or all"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Total Earnings - Sum of all shift earnings"""
    query = db.query(func.sum(Shift.earnings))
    
    if period == "week":
        cutoff_date = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")
        query = query.filter(Shift.date >= cutoff_date)
    elif period == "month":
        now = datetime.now()
        month_start = datetime(now.year, now.month, 1).strftime("%Y-%m-%d")
        query = query.filter(Shift.date >= month_start)
    
    total_earnings = query.scalar() or 0
    
    return {
        "metric": "total_earnings",
        "period": period,
        "value": round(total_earnings, 2)
    }

@router.get("/financial/average-earnings-per-shift")
async def get_average_earnings_per_shift(
    period: str = Query("month", description="Period: week, month, or all"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Average Earnings per Shift"""
    query = db.query(func.avg(Shift.earnings))
    
    if period == "week":
        cutoff_date = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")
        query = query.filter(Shift.date >= cutoff_date)
    elif period == "month":
        now = datetime.now()
        month_start = datetime(now.year, now.month, 1).strftime("%Y-%m-%d")
        query = query.filter(Shift.date >= month_start)
    
    avg_earnings = query.scalar() or 0
    
    return {
        "metric": "average_earnings_per_shift",
        "period": period,
        "value": round(avg_earnings, 2) if avg_earnings else 0
    }

# ============================================================================
# 4. AVAILABILITY METRICS
# ============================================================================

@router.get("/availability/entries-created")
async def get_availability_entries(
    period: str = Query("month", description="Period: week or month"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Availability Entries Created - Count per period"""
    query = db.query(func.count(Availability.id))
    
    if period == "week":
        cutoff_date = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")
        query = query.filter(Availability.date >= cutoff_date)
    elif period == "month":
        now = datetime.now()
        month_start = datetime(now.year, now.month, 1).strftime("%Y-%m-%d")
        query = query.filter(Availability.date >= month_start)
    
    entries_created = query.scalar() or 0
    
    return {
        "metric": "availability_entries_created",
        "period": period,
        "value": entries_created
    }

@router.get("/availability/update-frequency")
async def get_availability_update_frequency(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Availability Update Frequency - Average updates per user per month"""
    now = datetime.now()
    month_start = datetime(now.year, now.month, 1)
    
    # Count updates per user (entries with updatedAt in current month)
    user_updates = db.query(
        Availability.userId,
        func.count(Availability.id).label('update_count')
    ).filter(
        Availability.updatedAt >= month_start
    ).group_by(Availability.userId).all()
    
    if not user_updates:
        return {
            "metric": "availability_update_frequency",
            "average_updates_per_user": 0,
            "users_with_updates": 0
        }
    
    total_updates = sum(count for _, count in user_updates)
    users_with_updates = len(user_updates)
    avg_updates = total_updates / users_with_updates if users_with_updates > 0 else 0
    
    return {
        "metric": "availability_update_frequency",
        "average_updates_per_user": round(avg_updates, 2),
        "users_with_updates": users_with_updates,
        "total_updates": total_updates
    }

@router.get("/availability/status-distribution")
async def get_availability_status_distribution(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Availability Status Distribution - Counts by status"""
    status_counts = db.query(
        Availability.status,
        func.count(Availability.id).label('count')
    ).group_by(Availability.status).all()
    
    distribution = {status: count for status, count in status_counts}
    total = sum(distribution.values())
    
    percentages = {
        status: round((count / total * 100) if total > 0 else 0, 2)
        for status, count in distribution.items()
    }
    
    return {
        "metric": "availability_status_distribution",
        "distribution": distribution,
        "percentages": percentages,
        "total": total
    }

# ============================================================================
# 5. REPLACEMENT REQUEST METRICS
# ============================================================================

@router.get("/replacement-requests/total")
async def get_total_replacement_requests(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Total Replacement Requests - Count of all replacement requests"""
    total = db.query(func.count(ReplacementRequest.requestId)).scalar() or 0
    
    return {
        "metric": "total_replacement_requests",
        "value": total
    }

@router.get("/replacement-requests/per-user")
async def get_replacement_requests_per_user(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Replacement Requests per User - Average requests per user"""
    user_request_counts = db.query(
        ReplacementRequest.userId,
        func.count(ReplacementRequest.requestId).label('request_count')
    ).group_by(ReplacementRequest.userId).all()
    
    if not user_request_counts:
        return {
            "metric": "replacement_requests_per_user",
            "average": 0,
            "total_users": 0
        }
    
    total_requests = sum(count for _, count in user_request_counts)
    total_users = len(user_request_counts)
    average = total_requests / total_users if total_users > 0 else 0
    
    return {
        "metric": "replacement_requests_per_user",
        "average": round(average, 2),
        "total_users": total_users,
        "total_requests": total_requests
    }

@router.get("/replacement-requests/rate")
async def get_replacement_request_rate(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Replacement Request Rate - Requests per 100 shifts"""
    total_requests = db.query(func.count(ReplacementRequest.requestId)).scalar() or 0
    total_shifts = db.query(func.count(Shift.shiftId)).scalar() or 0
    
    rate_per_100 = (total_requests / total_shifts * 100) if total_shifts > 0 else 0
    
    return {
        "metric": "replacement_request_rate",
        "total_requests": total_requests,
        "total_shifts": total_shifts,
        "rate_per_100_shifts": round(rate_per_100, 2)
    }

@router.get("/replacement-requests/performance")
async def get_replacement_request_performance(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Replacement Request Performance - Success rate and average time to approval"""
    requests = db.query(
        ReplacementRequest.status,
        ReplacementRequest.createdAt
    ).all()
    
    if not requests:
        return {
            "metric": "replacement_request_performance",
            "total_requests": 0,
            "success_rate_percent": 0,
            "average_time_to_approval_hours": 0
        }
    
    approved = sum(1 for status, _ in requests if status == "approved")
    total = len(requests)
    success_rate = (approved / total * 100) if total > 0 else 0
    
    # Calculate average time to approval (for approved requests)
    approved_times = []
    for status, created_at in requests:
        if status == "approved" and created_at:
            # Note: This assumes there's an updatedAt or approvedAt field
            # For now, we'll use createdAt as proxy
            pass
    
    return {
        "metric": "replacement_request_performance",
        "total_requests": total,
        "approved": approved,
        "pending": sum(1 for s, _ in requests if s == "pending"),
        "rejected": sum(1 for s, _ in requests if s == "rejected"),
        "success_rate_percent": round(success_rate, 2),
        "note": "Average time to approval requires approvedAt timestamp field"
    }

@router.get("/replacement-requests/reasons")
async def get_replacement_request_reasons(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Replacement Request Reasons - Most common reasons"""
    # Get all reasons (non-null)
    reasons = db.query(ReplacementRequest.reason).filter(
        ReplacementRequest.reason.isnot(None),
        ReplacementRequest.reason != ""
    ).all()
    
    reason_counts = {}
    for (reason,) in reasons:
        reason_counts[reason] = reason_counts.get(reason, 0) + 1
    
    # Sort by count
    sorted_reasons = sorted(reason_counts.items(), key=lambda x: x[1], reverse=True)
    
    return {
        "metric": "replacement_request_reasons",
        "total_requests_with_reasons": len(reasons),
        "most_common_reasons": dict(sorted_reasons[:10])  # Top 10
    }

@router.get("/replacement-requests/by-shift-type")
async def get_replacement_requests_by_shift_type(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Replacement Requests by Shift Type - Day vs night request distribution"""
    requests_with_shifts = db.query(
        Shift.type,
        func.count(ReplacementRequest.requestId).label('count')
    ).join(
        ReplacementRequest, ReplacementRequest.shiftId == Shift.shiftId
    ).group_by(Shift.type).all()
    
    distribution = {shift_type: count for shift_type, count in requests_with_shifts}
    total = sum(distribution.values())
    
    return {
        "metric": "replacement_requests_by_shift_type",
        "day_requests": distribution.get("day", 0),
        "night_requests": distribution.get("night", 0),
        "total": total,
        "day_percentage": round((distribution.get("day", 0) / total * 100) if total > 0 else 0, 2),
        "night_percentage": round((distribution.get("night", 0) / total * 100) if total > 0 else 0, 2)
    }

@router.get("/replacement-requests/by-day-of-week")
async def get_replacement_requests_by_day_of_week(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Replacement Requests by Day of Week - Distribution by weekday"""
    requests_with_shifts = db.query(
        Shift.date,
        func.count(ReplacementRequest.requestId).label('count')
    ).join(
        ReplacementRequest, ReplacementRequest.shiftId == Shift.shiftId
    ).group_by(Shift.date).all()
    
    day_counts = {
        "Monday": 0, "Tuesday": 0, "Wednesday": 0, "Thursday": 0,
        "Friday": 0, "Saturday": 0, "Sunday": 0
    }
    
    for date_str, count in requests_with_shifts:
        date_obj = datetime.strptime(date_str, "%Y-%m-%d")
        day_name = date_obj.strftime("%A")
        day_counts[day_name] = day_counts.get(day_name, 0) + count
    
    total = sum(day_counts.values())
    percentages = {
        day: round((count / total * 100) if total > 0 else 0, 2)
        for day, count in day_counts.items()
    }
    
    return {
        "metric": "replacement_requests_by_day_of_week",
        "distribution": day_counts,
        "percentages": percentages,
        "total": total
    }

# ============================================================================
# 6. OPERATIONAL METRICS
# ============================================================================

@router.get("/operational/schedule-coverage")
async def get_schedule_coverage(
    period: str = Query("month", description="Period: week or month"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Schedule Coverage - % of days with at least one shift scheduled"""
    now = datetime.now()
    
    if period == "week":
        start_date = now - timedelta(days=7)
        days_in_period = 7
    else:  # month
        start_date = datetime(now.year, now.month, 1)
        if now.month == 12:
            end_date = datetime(now.year + 1, 1, 1)
        else:
            end_date = datetime(now.year, now.month + 1, 1)
        days_in_period = (end_date - start_date).days
    
    unique_dates = db.query(distinct(Shift.date)).filter(
        Shift.date >= start_date.strftime("%Y-%m-%d")
    ).all()
    
    days_with_shifts = len(unique_dates)
    coverage = (days_with_shifts / days_in_period * 100) if days_in_period > 0 else 0
    
    return {
        "metric": "schedule_coverage",
        "period": period,
        "days_with_shifts": days_with_shifts,
        "total_days_in_period": days_in_period,
        "coverage_percent": round(coverage, 2)
    }

@router.get("/operational/data-quality")
async def get_data_quality(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Data Quality - Shifts with missing data, incomplete profiles"""
    total_shifts = db.query(func.count(Shift.shiftId)).scalar() or 0
    
    # Shifts missing earnings or hours
    shifts_missing_data = db.query(func.count(Shift.shiftId)).filter(
        or_(
            Shift.earnings == 0,
            Shift.hours == 0,
            Shift.position.is_(None),
            Shift.position == ""
        )
    ).scalar() or 0
    
    # Incomplete profiles (users without phone)
    total_users = db.query(func.count(User.userId)).scalar() or 0
    incomplete_profiles = db.query(func.count(User.userId)).filter(
        or_(
            User.phone.is_(None),
            User.phone == ""
        )
    ).scalar() or 0
    
    return {
        "metric": "data_quality",
        "total_shifts": total_shifts,
        "shifts_with_missing_data": shifts_missing_data,
        "shifts_data_completeness_percent": round(((total_shifts - shifts_missing_data) / total_shifts * 100) if total_shifts > 0 else 0, 2),
        "total_users": total_users,
        "incomplete_profiles": incomplete_profiles,
        "profile_completeness_percent": round(((total_users - incomplete_profiles) / total_users * 100) if total_users > 0 else 0, 2)
    }

# ============================================================================
# 7. TIME-BASED ANALYTICS
# ============================================================================

@router.get("/analytics/active-users")
async def get_active_users_analytics(
    period: str = Query("monthly", description="Period: daily, weekly, or monthly"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Time-Based Active Users - DAU, WAU, MAU"""
    now = datetime.now()
    
    if period == "daily":
        start_date = now - timedelta(days=1)
        unique_users = db.query(func.count(distinct(Shift.userId))).filter(
            Shift.date >= start_date.strftime("%Y-%m-%d")
        ).scalar() or 0
        metric_name = "DAU"
    elif period == "weekly":
        start_date = now - timedelta(days=7)
        unique_users = db.query(func.count(distinct(Shift.userId))).filter(
            Shift.date >= start_date.strftime("%Y-%m-%d")
        ).scalar() or 0
        metric_name = "WAU"
    else:  # monthly
        start_date = datetime(now.year, now.month, 1)
        unique_users = db.query(func.count(distinct(Shift.userId))).filter(
            Shift.date >= start_date.strftime("%Y-%m-%d")
        ).scalar() or 0
        metric_name = "MAU"
    
    return {
        "metric": f"{metric_name}_active_users",
        "period": period,
        "value": unique_users,
        "start_date": start_date.strftime("%Y-%m-%d")
    }

@router.get("/analytics/shifts-trend")
async def get_shifts_trend(
    months: int = Query(6, description="Number of months to analyze"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Shifts Created Trend - Month-over-month shift creation trend"""
    now = datetime.now()
    trends = []
    
    for i in range(months):
        month_date = datetime(now.year, now.month - i, 1)
        if month_date.month == 0:
            month_date = datetime(month_date.year - 1, 12, 1)
        
        if month_date.month == 12:
            next_month = datetime(month_date.year + 1, 1, 1)
        else:
            next_month = datetime(month_date.year, month_date.month + 1, 1)
        
        month_shifts = db.query(func.count(Shift.shiftId)).filter(
            and_(
                Shift.date >= month_date.strftime("%Y-%m-%d"),
                Shift.date < next_month.strftime("%Y-%m-%d")
            )
        ).scalar() or 0
        
        trends.append({
            "month": month_date.strftime("%Y-%m"),
            "shifts": month_shifts
        })
    
    trends.reverse()  # Oldest to newest
    
    return {
        "metric": "shifts_created_trend",
        "period_months": months,
        "trend": trends
    }

# ============================================================================
# 8. SUMMARY/DASHBOARD ENDPOINT
# ============================================================================

@router.get("/dashboard")
async def get_dashboard_metrics(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Comprehensive dashboard with key metrics"""
    now = datetime.now()
    month_start = datetime(now.year, now.month, 1).strftime("%Y-%m-%d")
    thirty_days_ago = (datetime.now() - timedelta(days=30)).strftime("%Y-%m-%d")
    
    # Quick calculations
    total_users = db.query(func.count(User.userId)).scalar() or 0
    active_users_30d = db.query(func.count(distinct(Shift.userId))).filter(
        Shift.date >= thirty_days_ago
    ).scalar() or 0
    
    total_shifts = db.query(func.count(Shift.shiftId)).scalar() or 0
    month_shifts = db.query(func.count(Shift.shiftId)).filter(
        Shift.date >= month_start
    ).scalar() or 0
    
    total_earnings = db.query(func.sum(Shift.earnings)).scalar() or 0
    month_earnings = db.query(func.sum(Shift.earnings)).filter(
        Shift.date >= month_start
    ).scalar() or 0
    
    total_requests = db.query(func.count(ReplacementRequest.requestId)).scalar() or 0
    
    return {
        "users": {
            "total": total_users,
            "active_30d": active_users_30d
        },
        "shifts": {
            "total": total_shifts,
            "this_month": month_shifts
        },
        "earnings": {
            "total": round(total_earnings, 2),
            "this_month": round(month_earnings, 2)
        },
        "replacement_requests": {
            "total": total_requests
        },
        "last_updated": datetime.now().isoformat()
    }

