FROM python:3.9

WORKDIR /app

COPY requirements.txt /app/requirements.txt
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt

COPY . /app

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
