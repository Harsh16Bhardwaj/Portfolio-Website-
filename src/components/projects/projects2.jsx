import React from "react";
import "./poject.css"; // Import CSS file for styling
import img from "../assets/cover.png";
import img4 from "../assets/3.png"; // Keep the same background image

const Projects2 = () => {
  return (
    <div>
      <img className="bg" src={img4} alt="" />
      <div className="projects-container">
        <section className="section1">
          <div className="left-section">
            <h2>02.</h2>
            <h1>SAN SAM</h1>
          </div>
          <div className="right-section">
            <h3>Project Description</h3>
            <p>
              San Sam is an educational website featuring multi-formatted games catering to all sections of society. The platform aims to enhance learning experiences through interactive and engaging content.
            </p>
            <h3>My Role</h3>
            <p>
              I was the lead web developer, responsible for all creative and development tasks and designs. My work involved multiple formatting games and designing them to increase interactivity and retention.
            </p>
            <h3>Technologies Used</h3>
            <p>
              <span style={{ color: "Red" }}>Tailwind CSS,</span> React,{" "}
              <span style={{ color: "Red" }}>JavaScript,</span> CSS,{" "}
              <span style={{ color: "Red" }}>Canva,</span> Appwrite
            </p>
            <div>
              <a href="">
                <button>Live Site</button>
              </a>
              <button>Watch Demo</button>
            </div>
          </div>
        </section>
        <section className="section2"></section>
        <section className="section3"></section>
      </div>
    </div>
  );
};

export default Projects2;
