import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Harsh16Bhardwaj', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/harsh-bhardwaj-80297b285/', label: 'LinkedIn' },
  ];

  const learningTech = ['TypeScript', 'GraphQL', 'Docker', 'Redis'];

  // Handle cursor trail effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <style>
        {`
          .glow-on-hover:hover {
            box-shadow: 0 0 15px rgba(99, 102, 241, 0.6), 0 0 25px rgba(147, 51, 234, 0.4);
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.4; }
          }
          .pulse-bg {
            animation: pulse 6s infinite ease-in-out;
          }
          .gradient-border {
            position: relative;
            background: linear-gradient(to right, #6366f1, #9333ea, #ec4899);
            background-size: 200% 200%;
            animation: gradientShift 8s ease infinite;
          }
          .gradient-border::before {
            content: '';
            position: absolute;
            inset: 0;
            background: inherit;
            filter: blur(20px);
            opacity: 0.3;
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .cursor-trail {
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.5), transparent);
            pointer-events: none;
            z-index: 10;
            transition: transform 0.1s ease;
          }
        `}
      </style>

      {/* Cursor Trail */}
      <motion.div
        className="cursor-trail"
        style={{ left: cursorPos.x - 10, top: cursorPos.y - 10 }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated Gradient Border */}
      <div className="gradient-border h-1 w-full absolute top-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Background Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pulse-bg" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pulse-bg" />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-2">
              About Harsh
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Full-Stack Developer passionate about building intuitive web apps with MERN and Next.js. Thrives in hackathons and loves learning new tech.
            </p>
          </motion.div>

          {/* Center: Navigation & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 glow-on-hover rounded-full p-2"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <div className="flex gap-6 text-sm font-medium text-gray-300">
              <Link
                to="/"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Right: Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center md:items-end text-center md:text-right"
          >
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-2">
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-2 max-w-xs">
              {learningTech.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300 glow-on-hover"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom: Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
          <p className="text-sm font-medium text-gray-300">
            © {new Date().getFullYear()} Harsh Bhardwaj. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Built with{' '}
            <motion.span
              className="text-indigo-400"
              whileHover={{ scale: 1.1 }}
            >
              Next.js
            </motion.span>{' '}
            &{' '}
            <motion.span
              className="text-purple-400"
              whileHover={{ scale: 1.1 }}
            >
              Passion
            </motion.span>{' '}
            <FaCode className="inline-block w-4 h-4 text-pink-400" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;