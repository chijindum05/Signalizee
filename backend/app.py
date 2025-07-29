from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/test", methods=["GET"])
def test_api():
    return jsonify({"message": "API is working!"})

if __name__ == "__main__":
    app.run(debug=True)

from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow all origins (or restrict to 'http://localhost:3000')
