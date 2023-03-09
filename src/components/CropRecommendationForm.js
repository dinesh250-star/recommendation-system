import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/cropform.css";
import { Helmet } from "react-helmet";
import Modal from "./Modal";
function CropRecommendationForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/result");
  };

  return (
    <div className="form-body">
      <div className="card">
        <div className="form-heading">
          <center>
            <h3>
              Crop Recommender<span className="crop_icon">🧑‍🌾</span>
            </h3>
          </center>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Amount of Nitrogen in Soil"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Amount of Phosphorus in Soil"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Amount of Potassium in Soil"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Temperature (in Celcius)"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Humidity (in %)"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="pH value of Soil"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Rainfall (in mm)"
              />
            </div>
            <button type="submit" class="btn custom-btn" onClick={handleSubmit}>
              Recommend
            </button>
          </form>
        </div>
        <Modal />
      </div>
    </div>
  );
}

export default CropRecommendationForm;
