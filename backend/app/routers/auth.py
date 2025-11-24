"""
Authentication routes
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.auth import create_access_token, get_current_user, hash_password, verify_password
from app.models.user import User
from pydantic import BaseModel, EmailStr
from typing import Optional
import uuid

router = APIRouter()

class LoginRequest(BaseModel):
    email: str
    password: str

class RegisterRequest(BaseModel):
    name: str
    email: EmailStr
    password: str
    position: str = "Официант"
    phone: Optional[str] = None

class LogoutResponse(BaseModel):
    success: bool
    message: str

@router.post("/register")
async def register(user_data: RegisterRequest, db: Session = Depends(get_db)):
    """
    Register a new user
    """
    # Check if user with this email already exists
    existing_user = db.query(User).filter(User.email == user_data.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email already exists"
        )
    
    # Generate user ID
    user_id = f"user-{uuid.uuid4().hex[:8]}"
    
    # Hash password
    password_hash = hash_password(user_data.password)
    
    # Create new user
    new_user = User(
        userId=user_id,
        name=user_data.name,
        email=user_data.email,
        position=user_data.position,
        phone=user_data.phone,
        password_hash=password_hash
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    # Create access token
    access_token = create_access_token(data={"sub": new_user.userId})
    
    return {
        "success": True,
        "message": "User registered successfully",
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "userId": new_user.userId,
            "name": new_user.name,
            "email": new_user.email,
            "position": new_user.position
        }
    }

@router.post("/login")
async def login(credentials: LoginRequest, db: Session = Depends(get_db)):
    """
    Login endpoint with password verification
    """
    user = db.query(User).filter(User.email == credentials.email).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    # Verify password
    if not verify_password(credentials.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    access_token = create_access_token(data={"sub": user.userId})
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "userId": user.userId,
            "name": user.name,
            "email": user.email
        }
    }

@router.post("/logout")
async def logout(current_user: User = Depends(get_current_user)):
    """Logout endpoint"""
    return {
        "success": True,
        "message": "Выход выполнен"
    }

