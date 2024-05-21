FROM python:3.8.10

WORKDIR /app

# Copy everything except .venv directory
COPY . .

# Install dependencies (assuming they're in requirements.txt)
RUN pip install -r requirements.txt

# Make server.py executable
RUN chmod +x server.py

# Run server.py
CMD ["python", "server.py"]
