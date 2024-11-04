import React, { useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap"; // Make sure to import gsap
import "../landing/mainsection/herosection.css"
const Socials = () => {
    useEffect(() => {
        const icons = document.querySelectorAll('.icon');

        const handleMouseEnter = (icon) => {
            gsap.to(icon, { scale: 1.1, duration: 0.3 });
        };

        const handleMouseLeave = (icon) => {
            gsap.to(icon, { scale: 1, duration: 0.3 });
        };

        icons.forEach(icon => {
            icon.addEventListener('mouseenter', () => handleMouseEnter(icon));
            icon.addEventListener('mouseleave', () => handleMouseLeave(icon));
        });

        // Cleanup event listeners on unmount
        return () => {
            icons.forEach(icon => {
                icon.removeEventListener('mouseenter', () => handleMouseEnter(icon));
                icon.removeEventListener('mouseleave', () => handleMouseLeave(icon));
            });
        };
    }, []);

    return (
        <div className="social-icons floating">
            <FaXTwitter className="icon twitter" />
            <FaLinkedin className="icon linkedin" />
            <FaInstagram className="icon instagram" />
            <FaYoutube className="icon youtube" />
            <FaGithub className="icon github" />
        </div>
    );
};

export default Socials;
