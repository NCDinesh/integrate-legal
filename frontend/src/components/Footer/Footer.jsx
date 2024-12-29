import React from "react";
import "./Footer.css";
import logofooter from "../../assets/Logofooter.svg";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="wrapper">
          <div className="section footer">
            <div className="left">
              <img src={logofooter} alt="" />
            </div>

            <div className="right">
              <div className="list-container">
                <div className="container">
                  <h3>Our Services</h3>
                  <ul>
                    <li>Mobile Development</li>
                    <li>Web App Development</li>
                    <li>Theme Development</li>
                    <li>SEO</li>
                  </ul>
                </div>

                <div className="container">
                  <h3>About Us</h3>
                  <ul>
                    <li>GT Web Design</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                  </ul>
                </div>

                <div className="container">
                  <h3>Get Social</h3>
                  <div className="logo">
                    <img src={facebook} alt="" />
                    <img src={insta} alt="" />
                    <img src={twitter} alt="" />
                  </div>
                  <p className="info">info@gtcoding.net</p>
                </div>
              </div>
            </div>
          </div>
          <p className="para">This Website was designed by NC Dinesh</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
