# MECH UBU Backend — Django REST API

## Overview
Backend API service for the MECH UBU website, providing content management
and dynamic data endpoints.

## Tech Stack
- **Framework**: Django 5.x + Django REST Framework
- **Database**: PostgreSQL
- **Auth**: Django built-in + JWT tokens
- **Deploy**: Railway / Render / AWS

## Setup Instructions

### Prerequisites
- Python 3.11+
- PostgreSQL 15+
- pip / pipenv / poetry

### Quick Start
```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your database credentials

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver
```

## API Endpoints
| Method | Endpoint              | Description          |
|--------|----------------------|----------------------|
| GET    | /api/projects/       | List all projects    |
| GET    | /api/projects/:id/   | Project detail       |
| GET    | /api/cars/           | List all cars        |
| GET    | /api/cars/:id/       | Car detail           |
| GET    | /api/seasons/        | List all seasons     |
| GET    | /api/gallery/        | Gallery images       |
| GET    | /api/sponsors/       | Sponsor list         |
| GET    | /api/team-members/   | Team member list     |
| POST   | /api/contact/        | Contact form submit  |
