from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Hardcoded credentials for demo purposes
# In a real application, you would use a secure database and password hashing
VALID_CREDENTIALS = {
    "admin": "password123"
}

@app.route('/validate_login', methods=['POST'])
def validate_login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if username in VALID_CREDENTIALS and VALID_CREDENTIALS[username] == password:
        return jsonify({"status": "success"}), 200
    return jsonify({"status": "error", "message": "Invalid credentials"}), 401

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
