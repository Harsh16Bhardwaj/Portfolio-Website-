import React, { useEffect, useRef } from "react";
import "./poject.css"; // Import CSS file for styling
import Project1 from "./projects1";
import Project2 from "./projects2";
import img from "../assets/cover.png";
import img2 from "../assets/4.png";
import Project4 from "./project4";
import img3 from "../assets/3.png";
import img1 from "../assets/1.png";
const Projects = () => {
  const sectionsRef = useRef([]);
  const currentSectionRef = useRef(0);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      if (isScrollingRef.current) return; // Prevent multiple triggers

      isScrollingRef.current = true;

      // Determine if we're scrolling down or up
      if (event.deltaY > 0) {
        // Scroll down
        if (currentSectionRef.current < sectionsRef.current.length - 1) {
          currentSectionRef.current++;
        }
      } else {
        // Scroll up
        if (currentSectionRef.current > 0) {
          currentSectionRef.current--;
        }
      }

      scrollToSection(currentSectionRef.current);

      // Reset scrolling state after a brief delay
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800); // Adjust this timeout as needed
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-container">
      <img src={img} className="project-img" alt="" />
      <div ref={(el) => (sectionsRef.current[0] = el)} className="section" style={{backgroundImage: `url(${img3})`}}>
        <Project1 />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)} className="section" style={{backgroundImage: `url(${img2})`}}>
        <Project2 />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)} className="section" style={{backgroundImage: `url(${img1})`}}>
        <Project4 />
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Projects;
