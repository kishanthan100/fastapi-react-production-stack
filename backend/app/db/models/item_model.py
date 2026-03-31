from sqlalchemy import Column, Integer, String
from app.db.session import Base

class Items(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True)
    item_name = Column(String)
    category = Column(String, unique=True, index=True)
    territory = Column(String)
    img_url = Column(String)
    