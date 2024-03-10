#!/bin/bash

for dir in */ ; 
do
	echo "Preparing migrations for ${dir%/*}"
	python manage.py makemigrations ${dir%/*}
done

echo "Making migrations"
python manage.py migrate
echo "Starting gunicorn"
gunicorn -b 0.0.0.0:8000 main.wsgi:application