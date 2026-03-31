from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.session import engine, Base
from app.api.v1.endpoints.auth_route import router as auth_route
from app.api.v1.endpoints.items.item_route import router as item_route
from app.api.v1.endpoints.purchase.purchase_route import router as purchase_route

app = FastAPI(
    title="FASTAPI-REACT-APP",
    description="API for React app",
    version="1.0.0"
)
origins = [
    "http://localhost",
    "http://127.0.0.1",
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

Base.metadata.create_all(bind=engine)

app.include_router(auth_route, prefix="/api")
app.include_router(item_route, prefix="/api")
app.include_router(purchase_route, prefix="/api")