import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="wrapper">
        <div className="section contact" id="contact">
          <h2>Contact Us</h2>
          <form action="#">
            <div className="group">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>

            <div className="group">
              <textarea placeholder="Message" />
            </div>

            <a href="#" className="btn cyan">
              Send Message
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
