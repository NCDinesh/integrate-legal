import React from "react";
import "./Projects.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

const Projects = () => {
  return (
    <>
      <div className="section projects" id="projects">
        <div className="wrapper">
          <h2>Our Projects</h2>
          <div className="project-container">
            <img src={project1} alt="" />
            <img src={project2} alt="" />
            <img src={project3} alt="" />
            <img src={project4} alt="" />
            <img src={project5} alt="" className="hide" />
            <img src={project6} alt="" className="hide" />
          </div>

          <a href="#" className="btn cyan">
            View All
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
