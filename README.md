# MECH UBU — Full-Stack Website
## Formula SAE Team • Ubon Ratchathani University

### Project Structure
```
Mech_UBU/
├── frontend/     # Next.js 14 + TypeScript + Tailwind CSS
│   └── src/
│       ├── app/          # Pages (Home, About, Projects, Cars, Gallery, Join, Supporter)
│       └── components/   # Reusable UI components
├── backend/      # Django 5 + PostgreSQL + REST API
│   ├── config/   # Django settings
│   └── api/      # Models, Views, Serializers
└── README.md
```

### Quick Start — Frontend
```bash
cd frontend
npm install
npm run dev        # → http://localhost:3000
```

### Quick Start — Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env    # Edit with your DB credentials
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver  # → http://localhost:8000
```

### Tech Stack
| Layer       | Technology                                    |
|-------------|-----------------------------------------------|
| Frontend    | Next.js 14 + React + TypeScript + Tailwind    |
| Backend     | Django 5 + Django REST Framework              |
| Database    | PostgreSQL                                    |
| Hosting     | Vercel (frontend) + Railway (backend)         |
| CDN         | Cloudflare                                    |
| Analytics   | Google Analytics 4                            |
| SEO         | Google Search Console + Sitemap + Robots.txt  |
