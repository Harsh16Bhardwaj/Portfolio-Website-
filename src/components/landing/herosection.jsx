import React, { useEffect, useRef, useState } from 'react';
import './herosection.css';
import Socials from '../socials/socials';
import PulsatingArrow from './pulsating';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <h1>Hello,</h1>
            <h2><span className='harsh'>Harsh</span> THIS SIDE</h2>
            <p>A creative frontend developer skilled in React, Three.js, and GSAP, with a strong interest in cloud infrastructure and Kubernetes. Passionate about interactive design and tech, blending frontend expertise and cinematic storytelling.</p>
            <Socials />
            <PulsatingArrow />
        </div>
    );
}

export default HeroSection;
