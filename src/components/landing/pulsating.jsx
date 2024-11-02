import React, { useEffect, useState } from 'react';
import './Pulsating.css';

const PulsatingArrow = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY < 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        isVisible && (
            <div className="pulsating-arrow-container">
                <div className="pulsating-arrow">&#x2193;</div>
            </div>
        )
    );
};

export default PulsatingArrow;
