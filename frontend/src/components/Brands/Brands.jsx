import React from "react";
import "./Brands.css";
import Google from "../../assets/Google.png";
import Microsoft from "../../assets/Microsoft.png";
import Netflix from "../../assets/Netflix.png";
import Unity from "../../assets/Unity.png";
import Amazon from "../../assets/Amazon.png";

const Brands = () => {
  return (
    <>
      <div className="wrapper">
        <div className="section brand">
          <h2>Our Clients</h2>
          <div className="brand-container">
            <div className="brand1">
              <img src={Microsoft} alt="" />
              <img src={Google} alt="" />
              <img src={Netflix} alt="" />
            </div>

            <div className="brand2">
              <img src={Unity} alt="" />
              <img src={Amazon} alt="" />
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Brands;
