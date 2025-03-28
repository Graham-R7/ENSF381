import React, { useState } from "react";
import "./HousePricePredictor.css";

const HousePricePredictor = () => {
  const [formData, setFormData] = useState({
    city: "",
    province: "",
    latitude: "",
    longitude: "",
    lease_term: "",
    type: "",
    beds: "",
    baths: "",
    sq_feet: "",
    furnishing: "Unfurnished",
    smoking: "No",
    pets: false,
  });
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/predict_house_price", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction(data.predicted_price);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="predictor-container">
      <h1>House Price Predictor</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="province">Province:</label>
          <input
            type="text"
            id="province"
            name="province"
            value={formData.province}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="number"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleInputChange}
            required
            step="any"
          />
        </div>

        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input
            type="number"
            id="longitude"
            name="longitude"
            value={formData.longitude}
            onChange={handleInputChange}
            required
            step="any"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lease_term">Lease Term:</label>
          <input
            type="text"
            id="lease_term"
            name="lease_term"
            value={formData.lease_term}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type of House:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="beds">Number of Beds:</label>
          <input
            type="number"
            id="beds"
            name="beds"
            value={formData.beds}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="baths">Number of Baths:</label>
          <input
            type="number"
            id="baths"
            name="baths"
            value={formData.baths}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sq_feet">Square Feet:</label>
          <input
            type="number"
            id="sq_feet"
            name="sq_feet"
            value={formData.sq_feet}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="furnishing">Furnishing:</label>
          <select
            id="furnishing"
            name="furnishing"
            value={formData.furnishing}
            onChange={handleInputChange}
            required
          >
            <option value="Unfurnished">Unfurnished</option>
            <option value="Partially Furnished">Partially Furnished</option>
            <option value="Fully Furnished">Fully Furnished</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="smoking">Smoking:</label>
          <select
            id="smoking"
            name="smoking"
            value={formData.smoking}
            onChange={handleInputChange}
            required
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="pets"
              checked={formData.pets}
              onChange={handleInputChange}
            />
            Pets Allowed
          </label>
        </div>

        <button type="submit">Predict Price</button>
      </form>

      {prediction && (
        <div className="prediction-result">
          <strong>Predicted Rental Price: ${prediction.toFixed(2)}</strong>
        </div>
      )}
    </div>
  );
};

export default HousePricePredictor;
