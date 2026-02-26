#!/bin/bash
set -e

echo "=== Running Migrations ==="
python manage.py migrate --noinput

echo "=== Collecting Static Files ==="
python manage.py collectstatic --noinput 2>/dev/null || true

echo "=== Starting Django Server ==="
python manage.py runserver 0.0.0.0:8000
