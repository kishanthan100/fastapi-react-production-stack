from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.services.items.item_services import ItemService
from app.core.security import get_current_user

router = APIRouter()

@router.post("/all_items")
def get_all_items(db: Session = Depends(get_db)):
    item_service = ItemService(db)
    items = item_service.get_all_item()
    return  items
    

# @router.post("/all_items")
# def get_all_items(
#     current_user: dict = Depends(get_current_user),
#     db: Session = Depends(get_db)
# ):
#     item_service = ItemService(db)
#     return item_service.get_all_item()