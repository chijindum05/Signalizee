# backend/app.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify(message="Hello from your Flask backend!")

if __name__ == '__main__':
    app.run(debug=True)
