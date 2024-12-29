import React, { useEffect } from "react";
import "./Testimonials.css";
import testimonial from "../../assets/testimonial.png";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";
import leftarrow from "../../assets/leftarrow.svg";
import rightarrow from "../../assets/rightarrow.svg";
import Glider from "glider-js"; // Ensure Glider.js is installed
import "glider-js/glider.min.css";

const Testimonials = () => {
  useEffect(() => {
    // Initialize Glider
    const gliderElement = document.querySelector(".glider");
    new Glider(gliderElement, {
      slidesToShow: 1,
      dots: ".dots",
      draggable: true,
      arrows: {
        prev: ".slider-prev",
        next: ".slider-next",
      },
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="section testimonials" id="testimonials">
        <h2>Testimonials</h2>
        <div className="glider">
          {/* Slide 1 */}
          <div className="container-testimonials">
            <div className="left">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                harum perspiciatis suscipit. Exercitationem voluptate mollitia,
                molestias omnis sed asperiores laudantium tempora, incidunt
                recusandae aliquam fugiat vero inventore dolorem id expedita?
              </p>
              <p className="testimonialtext">
                Darlene Richards, <span>Amazon</span>
              </p>
            </div>
            <div className="right">
              <img src={testimonial} alt="Testimonial 1" />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="container-testimonials">
            <div className="left">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                harum perspiciatis suscipit. Exercitationem voluptate mollitia,
                molestias omnis sed asperiores laudantium tempora, incidunt
                recusandae aliquam fugiat vero inventore dolorem id expedita?
              </p>
              <p className="testimonialtext">
                Tara Green, <span>Ferrari</span>
              </p>
            </div>
            <div className="right">
              <img src={testimonial2} alt="Testimonial 2" />
            </div>
          </div>
          {/* Slide 3 */}
          <div className="container-testimonials">
            <div className="left">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                harum perspiciatis suscipit. Exercitationem voluptate mollitia,
                molestias omnis sed asperiores laudantium tempora, incidunt
                recusandae aliquam fugiat vero inventore dolorem id expedita?
              </p>
              <p className="testimonialtext">
                Peter Williams, <span>Louis Vuitton</span>
              </p>
            </div>
            <div className="right">
              <img src={testimonial3} alt="Testimonial 3" />
            </div>
          </div>
        </div>

        <div className="slidebutton">
          <button className="slider-prev">
            <img src={leftarrow} alt="Previous" />
          </button>
          <button className="slider-next">
            <img src={rightarrow} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
