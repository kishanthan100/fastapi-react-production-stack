# FastAPI + React Full-Stack Application

## Production-ready full-stack web application using:

1. FastAPI (Backend API)
2. PostgreSQL (Database)
3. Alembic (Migrations)
4. JWT Authentication (HttpOnly cookies)
5. React (Vite) (Frontend SPA)
6. Nginx (Reverse Proxy + Static Hosting)


## Project Structure
```
.
├── backend/
│   ├── alembic/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── db/
│   │   ├── schemas/
│   │   ├── services/
│   ├── main.py
│   ├── pyproject.toml
│   ├── alembic.ini
│
├── frontend/
│   └── reac-app/
│       ├── src/
│       │   ├── assets/
│       │   ├── components/
│       │   ├── config/
│       │   ├── pages/
│       │   ├── services/
│       │   ├── App.jsx
│       │   ├── main.jsx
│       ├── package.json
│       ├── vite.config.js

```


## Authentication Flow
1. User submits credentials
2. Backend validates against PostgreSQL
3. Backend generates:
   ```access_token``` (JWT, HttpOnly cookie)
4. Token automatically included in subsequent  requests
5. Protected routes validate JWT via dependency injection

#### Authentication is stateless and secure via HttpOnly cookies.



## Backend Setup (FastAPI)
1️. Install Dependencies

Using UV:
```
cd backend
uv sync
```

Or pip:
```
pip install -r requirements.txt
```

2. Database Configuration

Update .env or configuration file:
```
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
SECRET_KEY=your_secret_key
ALGORITHM=HS256
```

## Run Migrations
```
alembic upgrade head
```
## Start Backend
```
uvicorn main:app --reload
```

### Backend runs on:
```
http://127.0.0.1:8000
```


## Frontend Setup (React + Vite)
1. Install Dependencies
```
cd frontend/reac-app
npm install
```
2. Run Development Server
```
npm run dev
```
Runs at:
```
http://localhost:5173
```
3. Production Build
```
npm run build
```

Build output:
```
dist/
```


## Production Deployment
### Architecture
```
Client → Nginx → FastAPI → PostgreSQL
```
* React built via npm run build
* Static files served by Nginx
* API proxied via /api/ to FastAPI
* JWT stored in HttpOnly cookie
* Single origin (no CORS required in production)

🧩 Nginx Configuration Overview
```
server {
    listen 80;

    root /usr/share/nginx/html;
    index index.html;

    location /api/ {
        proxy_pass http://backend:8000;
        proxy_set_header Host $host;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
## Security Considerations
* JWT stored in HttpOnly cookie
* Use HTTPS in production
* Set:
```
secure=True
samesite="lax"
```
* Never store JWT in localStorage in production
* Use strong SECRET_KEY
* Enable rate limiting (optional)

## Tech Stack Summary
```
Layer	     Technology
-------------------
Frontend ---->	React + Vite
Backend ----> FastAPI
Database ----> PostgreSQL
ORM ----> SQLAlchemy
Migration ----> Alembic
Auth ----> JWT (HttpOnly)
Server ----> Nginx
Packaging ----> UV
```

## Future Improvements
1. Role-based access control
2. Refresh token rotation
3. Redis for token blacklisting
4. Docker Compose production setup
5. CI/CD pipeline
6. HTTPS via Let's Encrypt


## 🧑‍💻 Author
```
T.Kishanthan
Full-Stack Developer
```
