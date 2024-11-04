import React, { useEffect, useState } from 'react';
import './herosection.css';
import HeroSection from './herosection';

const Default= ({ onBegin }) => {
    const [showText, setShowText] = useState(false);
    const [greeting, setGreeting] = useState("");
    const [showButton, setShowButton] = useState(false);


    useEffect(() => {
        const now = new Date();
        const istOffset = 5.5 * 60; 
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

        const timer = setTimeout(() => {
            setShowText(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleButtonClick = () => {
        
    };

    return (
        <div>
            {showText && (
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
                        fontWeight: '600',  
                        textShadow: '0px 2px 10px rgba(255,0,0,0.5)',
                        
                    }}> GentleMan</span></h3>
                    <div className='text-center'>
                        <button className="btn-grad" onClick={onBegin}>Begin</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Default;
