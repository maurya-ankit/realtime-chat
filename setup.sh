#! /bin/sh
virtualenv .venv
source .venv/bin/activate
pip install -r requiremnets.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver