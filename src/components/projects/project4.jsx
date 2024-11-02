import React from "react";
import "./poject.css"; // Import CSS file for styling
import img from "../assets/cover.png"; // Replace with your project cover image


const Projects4 = () => {
  return (
    <div>
      <img className="bg" src={img} alt="Background" />
      <div className="projects-container">
        <section className="section1">
          <div className="left-section">
            <h2>03.</h2>
            <h1>Avenge Quest</h1>
          </div>
          <div className="right-section">
            <h3>Project Description</h3>
            <p>
              Battle Cards is an interactive card game where players can collect and battle with their favorite pop culture characters. Utilize strategy, character types, and unique abilities to dominate your opponents!
            </p>
            <h3>My Role</h3>
            <p>
              As the lead designer and developer, I crafted the user interface, implemented game mechanics, and designed the card collection system. My focus was on creating an engaging and balanced gameplay experience.
            </p>
            <h3>Technologies Used</h3>
            <p>
              <span style={{ color: "Red" }}>React,</span> Node.js,
              <span style={{ color: "Red" }}>MongoDB,</span> Express,
              <span style={{ color: "Red" }}>Tailwind CSS,</span> and more.
            </p>
            <div>
              <a href="https://your-live-site-link.com">
                <button>Live Site</button>
              </a>
              <button>Watch Demo</button>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default Projects4;
