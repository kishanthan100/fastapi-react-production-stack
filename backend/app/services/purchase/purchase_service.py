from sqlalchemy.orm import Session
from app.db.models.purchase_model import Purchase

class PurchaseService:
    def __init__(self, db: Session):
        """Inject database session at initialization"""
        self.db = db
    
    def get_all_details(self): 
        """Get an item by its ID"""
        return self.db.query(Purchase).all()


