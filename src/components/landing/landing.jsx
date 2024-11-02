import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './landing.css';
import HeroSection from './herosection';

const ThreeScene = () => {
    const mountRef = useRef(null);
    const [showText, setShowText] = useState(false);
    const [greeting, setGreeting] = useState("");
    const [showHeroSection, setShowHeroSection] = useState(false); // Ensure you set this to true when needed
    const mouseRef = useRef({ x: 0, y: 0 });
    const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const now = new Date();
        const istOffset = 5.5 * 60; // IST offset in minutes
        const istTime = new Date(now.getTime() + (now.getTimezoneOffset() + istOffset) * 60000);
        const hours = istTime.getHours();

        if (hours >= 5 && hours < 12) {
            setGreeting("Good Morning");
        } else if (hours >= 12 && hours < 17) {
            setGreeting("Good Afternoon");
        } else if (hours >= 17) {
            setGreeting("Good Evening");
        } else {
            setGreeting("Good Night");
        }
    }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js';
        script.async = true;

        script.onload = initScene;

        document.body.appendChild(script);
        return () => {
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const initScene = () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor(0x000000);
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const layers = [
            { distance: 200, count: 300, speedFactor: 0.1 },
            { distance: 150, count: 300, speedFactor: 0.2 },
            { distance: 100, count: 200, speedFactor: 0.3 },
            { distance: 150, count: 150, speedFactor: 0.4 }
        ];

        const starGroups = layers.map(() => new THREE.Group());
        const allStars = [];

        layers.forEach((layer, layerIndex) => {
            const starField = starGroups[layerIndex];

            const createStar = () => {
                const size = Math.random() * (0.15 * (1 + layerIndex * 0.5)) + 0.05;
                const geometry = new THREE.SphereGeometry(size, 8, 8);
                const material = new THREE.MeshBasicMaterial({ 
                    color: 0xffffff, 
                    opacity: 0.9 - (layerIndex * 0.1), 
                    transparent: true 
                });
                const star = new THREE.Mesh(geometry, material);

                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(Math.random() * 2 - 1);
                const radius = layer.distance + (Math.random() * 20 - 10);
                
                star.position.set(
                    radius * Math.sin(phi) * Math.cos(theta),
                    radius * Math.sin(phi) * Math.sin(theta),
                    radius * Math.cos(phi)
                );
                
                star.originalPosition = star.position.clone();
                star.originalScale = star.scale.clone();
                star.speedFactor = layer.speedFactor;
                
                return star;
            };

            for (let i = 0; i < layer.count; i++) {
                const star = createStar();
                allStars.push(star);
                starField.add(star);
            }
            scene.add(starField);
        });

        camera.position.z = 50;
        let rotationSpeed = 0.1;
        const targetSpeed = 0.002;
        const transitionDuration = 1500;
        let startTime = null;
        let transitionStarted = false;

        const handleMouseMove = (event) => {
            mouseRef.current = {
                x: event.clientX,
                y: event.clientY
            };
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = (time) => {
            requestAnimationFrame(animate);

            if (!transitionStarted && time > 1500) {
                setShowText(true);
                startTime = time;
                transitionStarted = true;
            }

            if (transitionStarted) {
                if (time - startTime < transitionDuration) {
                    const progress = (time - startTime) / transitionDuration;
                    rotationSpeed = 0.15 - (0.15 - targetSpeed) * progress;
                } else {
                    rotationSpeed = targetSpeed;
                }
            }

            starGroups.forEach((group, index) => {
                group.rotation.y += rotationSpeed * (1 + index * 0.1);
            });

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    };

    const handleFollowerMove = (e) => {
        setFollowerPosition({
            x: e.clientX,
            y: e.clientY
        });
    };
    const handleButtonClick = () => {
        setShowHeroSection(true); // Update state to show HeroSection
    };


    return (
        <div 
            style={{ 
                width: '100vw', 
                height: '100vh', 
                position: 'relative',
                overflow: 'hidden',
                touchAction: 'none'
            }}
            onMouseMove={handleFollowerMove}
        >
            <div ref={mountRef} className="bgDiv" />
            {showHeroSection ? <HeroSection /> : (showText && (
                <div
                    className="centeredText"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '2.5rem',
                        textShadow: '0px 0px 5px rgba(255,255,255,0.8)',
                    }}
                >
                    <h3>{greeting},<span style={{
                        color: '#b60000',
                        textShadow: '0px 0px 0px rgba(255,255,255,0)',
                        fontSize: '3.4rem',
                        fontFamily: 'Poppins',
                        fontWeight: '800'
                    }}> GentleMan</span></h3>
                    <div className='text-center'>
                        <button className="btn-grad" onClick={handleButtonClick}>Begin</button> {/* Updated to call handler */}
                    </div>
                    <div
                className="pointer-events-none absolute tracker"
                style={{
                    transform: `translate(${followerPosition.x - 458}px, ${followerPosition.y - 450}px)`,
                    transition: 'transform 0.05s linear'
                }}
            />
                </div>
                
            ))}
            
        </div>
    );
};

export default ThreeScene;
