import React from "react";
import Navbar from "./Navbar";
import "../css/result.css";

function Result() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="form-body">
        <div className="card">
          <div className="form-heading">
            <center>
              <h3>
                Results<span className="crop_icon">📊</span>
              </h3>
            </center>
          </div>
          <div className="result-body">
            <img
              src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg"
              className="result-image"
            ></img>
            <h5 className="accuracy">Accuracy : 95%</h5>
            <h6 className="desc">Description : lorem32</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
