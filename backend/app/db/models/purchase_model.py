from sqlalchemy import Column, Integer, String
from app.db.session import Base

class Purchase(Base):
    __tablename__ = "purchases"

    id = Column(Integer, primary_key=True)
    amount = Column(Integer)
    date = Column(String)
    item_name = Column(String)
    item_category = Column(String)
    


    