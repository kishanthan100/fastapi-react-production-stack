from fastapi import APIRouter, Depends, HTTPException,Response,Request
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.user_schema import UserLogin, UserRegister
from app.services.auth_service import UserService
from app.core.security import create_access_token, create_refresh_token, get_current_user


router = APIRouter()

@router.post("/register")
def register(data: UserRegister, db: Session = Depends(get_db)):
    user_service = UserService(db)
    try:
        user = user_service.create_user(data.name, data.email, data.password)
    except ValueError as e:
        raise HTTPException(status_code=409, detail=str(e))
    return {"message": "User registered successfully", "user": {"id": user.id, "email": user.email}}
  

     






@router.post("/login")
def login(data: UserLogin, 
          response:Response,
          request:Request,
          db: Session = Depends(get_db)
          ):
    user_service = UserService(db)
    user = user_service.authenticate_user(data.email, data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = create_access_token({
                                        "sub":str(user.id),
                                        "email":(user.email)
                                        })
    
    refresh_token= create_refresh_token({
                                   "sub":str(user.id),
                                    "email":(user.email) 
                                    })
    print("set cokies")                               
    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        secure=False,
        samesite="lax",
        path="/"
    )

    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=False,
        samesite="lax",
        path="/"
    )
    
    return {"message": "Login successful", "user": {"id": user.id, "email": user.email},"a_token":access_token,"refresh":refresh_token}



@router.post("/logout")
def logout(response:Response):
    response.delete_cookie("access_token")
    response.delete_cookie("refresh_token")

    return {"token has been deleted"}


@router.get("/me")
def get_current_user_route(current_user: dict = Depends(get_current_user)):
    print("Current user:", current_user) 
    return current_user



    