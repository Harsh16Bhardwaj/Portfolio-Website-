import React, { useEffect, useRef } from "react";
import "./poject.css"; // Import CSS file for styling
import img from "../assets/cover.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
const Projects2 = () => {
  return (
    <div>
      <img className="bg" src={img4} alt="" />
      <div className="projects-container">

        <section className="section1">
          <div className="left-section">
            <h2>01.</h2>
            <h1>WATTSHARE</h1>
          </div>
          <div className="right-section">
            <h3>Project Description</h3>
            <p>
              Wattshare is a platform that allows users to share their unused
              electricity with each other. It is a platform that allows users to
              share their unused electricity with each other. It is a platform
              that allows users to share their unused electricity with each
              other.
            </p>
            <h3>My Role</h3>
            <p>
              I am the lead designer and developer for this project. I was
              incharge of creating the buyer interface and profile sections. The
              Map integration and functionalities alongisde other backend roles
              was my primary goal.
            </p>
            <h3>Technologies Used</h3>
            <p>
              <span style={{ color: "Red" }}>React,</span> Node.js,
              <span style={{ color: "Red" }}>Appwrite,</span> MongoDB,{" "}
              <span style={{ color: "Red" }}>Tailwind CSS,</span> Leaflet,{" "}
              <span style={{ color: "Red" }}>AOS</span>
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
