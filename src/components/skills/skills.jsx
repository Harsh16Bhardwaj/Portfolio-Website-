import React, { useEffect, useState } from "react";

import "./skills.css";
import Harsh from "../assets/Harsh.jpg";
import Resume from "../assets/Harsh Bhardwaj Resume.pdf";

const skills = [
  { name: "React.js", link: "https://github.com/your-username/react-repo" },
  { name: "GSAP", link: "https://github.com/your-username/nodejs-repo" },
  { name: "JavaScript", link: "https://github.com/your-username/python-repo" },
  { name: "Tailwind", link: "https://github.com/your-username/aws-repo" },
  { name: "Three.js", link: "https://github.com/your-username/docker-repo" },
  { name: "Github", link: "https://github.com/your-username/mongodb-repo" },
];

const SkillsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.querySelector(".orbit");
      container.style.transform = `rotate(${(Date.now() / 100) % 360}deg)`;
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="idk">
      <div className="skills-section">
        <a
          href="https://github.com/your-username/react-repo"
          className="central-skill-link"
        >
          Frontend
        </a>
        <div className="orbit">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="orbit-item"
              style={{
                transform: `rotate(${(360 / skills.length) * index}deg) translate(165px) rotate(-${(360 / skills.length) * index}deg)`,
              }}
            >
              {skill.name}
            </a>
          ))}
        </div>
      </div>
      <div className="content-div">
        <h2>FrontEnd Web Developer</h2>
        <p>
          I am a FrontEnd Web Developer with a passion for creating beautiful
          and functional websites. I have experience with React.js, GSAP,
          JavaScript, Tailwind, Three.js, and Github.
        </p>
        <div>
          <a
            href={Resume}
            download
            className="resume-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Recruiter ?
          </a>
          <a href="" className="repos-button">Watch Repos</a>
        </div>
        <a href="" className="projects-button bg-gray-300 rounded-lg p-2 mt-5 pl-10 pr-10 font-bold hover:bg-teal-400 transition-all duration-500">Check Projects</a>
      </div>
      <div className="resume-div">
        <img
          src={Harsh}
          className="resume"
          alt="Resume"
          style={{
            transform: isHovered ? 'translate(-25vh) rotate(-20deg)' : 'translate(0px) rotate(0deg)',
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
