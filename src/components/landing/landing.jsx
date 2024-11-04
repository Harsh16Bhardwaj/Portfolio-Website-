import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './landing.css';

const ThreeScene = ({children}) => {
    const mountRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

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

    return (
        <div 
            style={{ 
                width: '100vw', 
                height: '100vh', 
                position: 'relative',
                overflow: 'hidden',
                touchAction: 'none'
            }}
        >
            <div ref={mountRef} className="bgDiv">
                {children}
            </div>
        </div>
    );
};

export default ThreeScene;
