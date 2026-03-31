from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.services.purchase.purchase_service import PurchaseService

router = APIRouter()

@router.post("/purchase")
def get_all_items(db: Session = Depends(get_db)):
    purchase_service = PurchaseService(db)
    purchase = purchase_service.get_all_details()
    return  purchase
    

