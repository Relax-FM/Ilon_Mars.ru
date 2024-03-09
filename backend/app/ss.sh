#!/bin/bash

echo "Apply database migrations"
python manage.py migrate
echo "Starting server"
gunicorn -b 0.0.0.0:8000 main.wsgi:application