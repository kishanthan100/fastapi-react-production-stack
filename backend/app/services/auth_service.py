from unittest import result

from sqlalchemy.orm import Session
from app.db.models.user import Users, AuthUsers
from app.core.security import get_hash_password, verify_password

class UserService:
    def __init__(self, db: Session):
        """Inject database session at initialization"""
        self.db = db
    
    def authenticate_user(self, email: str, password: str):
        """No need to pass db every time"""
        user = self.db.query(AuthUsers).filter(AuthUsers.email == email).first()
        if not user:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user
    


    def create_user(self, name: str, email: str, password: str):
        """No need to pass db every time"""
        
        user = self.db.query(AuthUsers).filter(AuthUsers.email == email).first()
        if user:
            raise ValueError("User already existsssss")
        hashed_password = get_hash_password(password)
        new_user = AuthUsers(name=name, email=email, hashed_password=hashed_password)
        self.db.add(new_user)
        self.db.commit()
        self.db.refresh(new_user)
        return new_user