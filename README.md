# realtime-chat

```sh
git clone https://github.com/maurya-ankit/realtime-chat.git
cd realtime-chat
virtualenv .venv
source .venv/bin/activate
pip install -r requiremnets.txt
```
## Now need to setup postgres sql if not already installed
```sh
sudo apt update
sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx curl
sudo -u postgres psql
```
## After above command psql terminal will open `run 👇`
```sh
CREATE DATABASE chatapp;
CREATE USER root WITH PASSWORD postgres;

```
## Also it requires redis to be up and running in order to use websocket with `layering`
```sh
docker run -p 6379:6379 -d redis:5
```
## Now its time to generate build folder required as template in django application as it's excluded from git
```sh
cd frontend
npm run relocate
cd ..
```
## Finally
```sh
python manage.py runserver
```
