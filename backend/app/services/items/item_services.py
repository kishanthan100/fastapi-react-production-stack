from sqlalchemy.orm import Session
from app.db.models.item_model import Items   

class ItemService:
    def __init__(self, db: Session):
        """Inject database session at initialization"""
        self.db = db
    
    def get_all_item(self): 
        """Get an item by its ID"""
        return self.db.query(Items).all()


