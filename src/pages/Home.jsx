import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaFilePdf } from 'react-icons/fa';
import { useState } from 'react';

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [showResume, setShowResume] = useState(false);

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 to-black text-white">
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0%, 0%) scale(1); opacity: 0.2; }
            33% { transform: translate(20%, -30%) scale(1.3); opacity: 0.3; }
            66% { transform: translate(-15%, 15%) scale(0.9); opacity: 0.25; }
            100% { transform: translate(0%, 0%) scale(1); opacity: 0.2; }
          }
          .animate-blob {
            animation: blob 8s infinite ease-in-out;
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          .button-glow {
            box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
            transition: all 0.3s ease;
          }
          .button-glow:hover {
            box-shadow: 0 0 25px rgba(99, 102, 241, 0.5);
          }
          .button-hover {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          .button-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.1),
              transparent
            );
            transition: 0.5s;
          }
          .button-hover:hover::before {
            left: 100%;
          }
          .button-hover:hover {
            transform: translateY(-2px);
          }
          .cursor-text {
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }
          .button-container:hover .cursor-text {
            opacity: 1;
          }
          .social-icon {
            transition: all 0.3s ease;
          }
          .social-icon:hover {
            transform: translateY(-5px) scale(1.1);
            background: rgba(99, 102, 241, 0.2);
          }
          @keyframes neonPulse {
            0%, 100% { box-shadow: 0 0 5px #4f46e5, 0 0 10px #4f46e5, 0 0 15px #4f46e5; }
            50% { box-shadow: 0 0 10px #4f46e5, 0 0 20px #4f46e5, 0 0 30px #4f46e5; }
          }
          @keyframes borderRotate {
            0% { border-image: linear-gradient(0deg, #3b82f6, #06b6d4) 1; }
            50% { border-image: linear-gradient(180deg, #3b82f6, #06b6d4) 1; }
            100% { border-image: linear-gradient(360deg, #3b82f6, #06b6d4) 1; }
          }
          @keyframes shine {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
          @keyframes borderDance {
            0%, 100% { clip-path: inset(0 0 98% 0); }
            25% { clip-path: inset(0 98% 0 0); }
            50% { clip-path: inset(98% 0 0 0); }
            75% { clip-path: inset(0 0 0 98%); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .work-button {
            background: linear-gradient(90deg, #FF416C, #FF4B2B);
            position: relative;
            isolation: isolate;
            transition: all 0.3s ease;
            border: none;
          }
          .work-button::before {
            content: '';
            position: absolute;
            background: linear-gradient(90deg, #FF416C, #FF4B2B, #FF416C);
            background-size: 200% auto;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            animation: shine 8s linear infinite;
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: inherit;
            z-index: -1;
          }
          .work-button:hover::before {
            opacity: 1;
          }
          .work-button::after {
            content: '';
            position: absolute;
            inset: -3px;
            background: linear-gradient(90deg, #FF416C, #FF4B2B, #FF416C);
            z-index: -2;
            border-radius: 14px;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .work-button:hover::after {
            opacity: 1;
          }
          .work-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(255, 65, 108, 0.3);
          }

          .contact-button-wrapper {
            position: relative;
            border-radius: 14px;
            background: linear-gradient(45deg, #00F260, #0575E6, #00F260);
            padding: 2px;
            animation: shine 3s linear infinite;
            background-size: 200% auto;
          }
          .contact-button {
            background: #111827;
            transition: all 0.3s ease;
            position: relative;
            z-index: 1;
          }
          .contact-button::before,
          .contact-button::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(45deg, #00F260, #0575E6);
            border-radius: inherit;
            transition: opacity 0.3s ease;
            opacity: 0;
            z-index: -1;
          }
          .contact-button::after {
            filter: blur(12px);
          }
          .contact-button:hover::before {
            opacity: 0.1;
          }
          .contact-button:hover::after {
            opacity: 0.3;
          }
          .contact-button:hover {
            color: #00F260;
            text-shadow: 0 0 8px rgba(0, 242, 96, 0.5);
            transform: translateY(-3px);
          }

          .resume-button {
            background: #1f2937;
            position: relative;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
          }
          .resume-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.1),
              transparent
            );
            transition: 0.5s;
          }
          .resume-button:hover::before {
            left: 100%;
          }
          .resume-button:hover {
            background: #2d3748;
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
          .resume-button .icon-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #9ca3af;
            transition: all 0.3s ease;
          }
          .resume-button:hover .icon-wrapper {
            color: #e5e7eb;
            transform: rotate(10deg);
          }
          .resume-button .text {
            color: #e5e7eb;
            transition: all 0.3s ease;
          }
          .resume-button:hover .text {
            color: #f9fafb;
          }
        `}
      </style>

      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 md:w-80 md:h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 md:w-80 md:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-20 w-72 h-72 md:w-80 md:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Section */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="text-center lg:text-left space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
              >
                Hi, I'm <span className="text-white">Harsh Bhardwaj</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                A passionate developer specializing in creating beautiful and functional web applications with modern technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-8"
              >
                <motion.div 
                  className="button-container relative w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/projects"
                    className="work-button inline-flex items-center justify-center w-full sm:w-auto min-w-[180px] h-[52px] px-6 rounded-xl text-white font-bold text-base sm:text-lg transition-all duration-300"
                  >
                    View My Work
                  </Link>
                </motion.div>

                <motion.div 
                  className="button-container relative w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="contact-button-wrapper">
                    <Link
                      to="/contact"
                      className="contact-button inline-flex items-center justify-center w-full sm:w-auto min-w-[180px] h-[52px] px-6 rounded-xl text-emerald-400 font-bold text-base sm:text-lg transition-all duration-300"
                    >
                      Contact Me
                    </Link>
                  </div>
                </motion.div>

                <motion.div 
                  className="button-container relative w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => setShowResume(true)}
                    className="resume-button inline-flex items-center justify-center w-full sm:w-auto min-w-[180px] h-[52px] px-6 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300"
                  >
                    <span className="icon-wrapper">
                      <FaFilePdf className="w-5 h-5" />
                    </span>
                    <span className="text">Resume</span>
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
                className="flex justify-center lg:justify-start gap-6 mt-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="social-icon relative p-3 rounded-full bg-gray-800/50 text-gray-300 hover:text-indigo-400 transition-colors duration-300 backdrop-blur-sm"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Section - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="relative max-w-md mx-auto lg:max-w-none"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/hero-image.jpg"
                  alt="Profile"
                  className="w-full h-auto aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              </div>
              
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 blur-3xl pulse-glow"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border-2 border-gray-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-300 sm:top-6 sm:right-6"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">My Resume</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe src="/resume.pdf" className="w-full h-full rounded-lg" title="Resume" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;