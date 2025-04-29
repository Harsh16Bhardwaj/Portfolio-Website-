import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Star SVG Component
const Star = ({ size = 20, color = '#9333ea' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 .587l3.668 7.431 8.167 1.191-5.917 5.767 1.396 8.134L12 18.897l-7.314 3.853 1.396-8.134L.165 8.209l8.167-1.191L12 .587z" />
  </svg>
);

const Sorry = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);

  // Cursor trail effect
  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Falling stars effect
  useEffect(() => {
    const addStar = () => {
      const newStar = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: -20,
        size: Math.random() * 20 + 10,
        color: ['#6366f1', '#9333ea', '#ec4899'][Math.floor(Math.random() * 3)],
        speed: Math.random() * 5 + 2,
      };
      setStars((prev) => [...prev, newStar]);
    };

    const interval = setInterval(addStar, 500);
    return () => clearInterval(interval);
  }, []);

  // Update star positions
  useEffect(() => {
    const updateStars = () => {
      setStars((prev) =>
        prev
          .map((star) => ({
            ...star,
            y: star.y + star.speed,
          }))
          .filter((star) => star.y < window.innerHeight)
      );
    };
    const animationFrame = requestAnimationFrame(function animate() {
      updateStars();
      requestAnimationFrame(animate);
    });
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <style>
        {`
          .glow-on-hover:hover {
            box-shadow: 0 0 15px rgba(99, 102, 241, 0.6), 0 0 25px rgba(147, 51, 234, 0.4);
          }
          .pulse-bg {
            animation: pulse 6s infinite ease-in-out;
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.4; }
          }
          .neon-border {
            position: relative;
            border: 2px solid transparent;
            background-clip: padding-box;
            border-radius: 12px;
          }
          .neon-border::before {
            content: '';
            position: absolute;
            top: -4px;
            left: -4px;
            right: -4px;
            bottom: -4px;
            background: linear-gradient(45deg, #6366f1, #9333ea, #ec4899);
            border-radius: 16px;
            z-index: -1;
            animation: neonGlow 3s infinite;
          }
          @keyframes neonGlow {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
          .cursor-trail {
            position: fixed;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent);
            pointer-events: none;
            z-index: 10;
          }
        `}
      </style>

      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pulse-bg" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pulse-bg" />
      </div>

      {/* Cursor Trail */}
      <motion.div
        className="cursor-trail"
        style={{ left: cursorPos.x - 8, top: cursorPos.y - 8 }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Falling Stars */}
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute pointer-events-none"
            style={{ left: star.x, top: star.y }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: window.innerHeight }}
            exit={{ opacity: 0 }}
            transition={{ duration: star.speed, ease: 'linear' }}
          >
            <Star size={star.size} color={star.color} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-100 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl text-center neon-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Oops, Project Not Live Yet!
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Sorry, this project is still under construction. I’m working hard to bring it to life with some awesome features. Stay tuned!
          </motion.p>
          <motion.div
            className="mb-8 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Tech abstract"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Sorry;