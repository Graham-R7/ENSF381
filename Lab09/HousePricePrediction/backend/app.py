from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

USERS = {
    "alice": "password123",
    "bob": "secure456",
    "charlie": "qwerty789",
    "diana": "hunter2",
    "eve": "passpass",
    "frank": "letmein",
    "grace": "trustno1",
    "heidi": "admin123",
    "ivan": "welcome1",
    "judy": "password1",
}

model = joblib.load("./src/random_forest_model.pkl")

@app.route('/validate_login', methods=['POST'])
def validate_login():
    data = request.json
    username, password = data.get("username"), data.get("password")
    if USERS.get(username) == password:
        return jsonify({"success": True, "message": "Login successful!"})
    return jsonify({"success": False, "message": "Invalid username or password"}), 401

@app.route('/predict_house_price', methods=['POST'])
def predict_house_price():
    data = request.json
    sample_data = [
        data['city'], data['province'], float(data['latitude']),
        float(data['longitude']), data['lease_term'], data['type'],
        float(data['beds']), float(data['baths']), float(data['sq_feet']),
        data['furnishing'], data['smoking'], data.get('pets', False), data.get('pets', False)
    ]

    sample_df = pd.DataFrame([sample_data], columns=[
        'city', 'province', 'latitude', 'longitude', 'lease_term',
        'type', 'beds', 'baths', 'sq_feet', 'furnishing',
        'smoking', 'cats', 'dogs'
    ])

    predicted_price = model.predict(sample_df)
    return jsonify({"predicted_price": float(predicted_price[0])})

if __name__ == "__main__":
    app.run(debug=True)
