import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const location = useLocation();

  // Optimized cursor trail effect
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

  return (
    <header className="bg-gradient-to-r z-[100] from-gray-900 via-gray-800 to-gray-950 text-white relative">
      <style>
        {`
          .glow-on-hover:hover {
            box-shadow: 0 0 15px rgba(99, 102, 241, 0.6), 0 0 25px rgba(147, 51, 234, 0.4);
          }
          .active-underline {
            position: relative;
          }
          .active-underline::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, #6366f1, #9333ea);
            animation: underlineGlow 2s infinite;
          }
          @keyframes underlineGlow {
            0% { transform: scaleX(0.8); opacity: 0.7; }
            50% { transform: scaleX(1); opacity: 1; }
            100% { transform: scaleX(0.8); opacity: 0.7; }
          }
          .cursor-trail {
            position: fixed;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent);
            pointer-events: none;
            z-index: 10;
            transition: transform 0.1s ease;
          }
          .pulse-bg {
            animation: pulse 6s infinite ease-in-out;
            pointer-events: none;
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.4; }
          }
          @media (max-width: 375px) {
            .nav-container {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .mobile-menu {
              max-width: 80%;
            }
          }
        `}
      </style>

      {/* Cursor Trail */}
      <motion.div
        className="cursor-trail"
        style={{ left: cursorPos.x - 6, top: cursorPos.y - 6 }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <nav
        className="nav-container mx-auto flex max-w-7xl items-center justify-between p-3 sm:p-4 lg:p-6 relative z-100"
        aria-label="Global"
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pulse-bg" />
          <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pulse-bg" />
        </div>

        {/* Logo Section */}
        <motion.div
          className="flex lg:flex-1 relative z-110"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link
            to="/"
            className="flex items-center -m-1 p-1 cursor-pointer whitespace-nowrap"
          >
            <motion.span
              className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-pink-400 via-yellow-400/90 to-pink-600"
              whileHover={{ scale: 1.05 }}
            >
              Harsh Bhardwaj
            </motion.span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden relative z-120">
          <motion.button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 glow-on-hover cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden lg:flex lg:gap-x-6 xl:gap-x-8 items-center relative z-110"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold text-gray-300 hover:text-indigo-400 transition-colors duration-300 cursor-pointer ${
                location.pathname === item.href ? 'active-underline' : ''
              }`}
            >
              <motion.span whileHover={{ scale: 1.1 }}>
                {item.name}
              </motion.span>
            </Link>
          ))}
          <motion.a
            href="https://github.com/Harsh16Bhardwaj"
            className="text-gray-300 hover:text-indigo-400 glow-on-hover rounded-full p-1.5 cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/harsh-bhardwaj-80297b285/"
            className="text-gray-300 hover:text-indigo-400 glow-on-hover rounded-full p-1.5 cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <motion.div
          className="fixed inset-0 z-200 bg-black/80 backdrop-blur-md pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
        />
        <Dialog.Panel className="mobile-menu fixed inset-y-0 right-0 z-210 w-full max-w-[80%] sm:max-w-xs bg-gradient-to-br from-gray-800 to-gray-900 px-4 sm:px-6 py-5 sm:py-6 sm:ring-1 sm:ring-white/10">
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="-m-1 p-1 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
                Harsh Bhardwaj
              </span>
            </Link>
            <motion.button
              type="button"
              className="rounded-md p-2 text-gray-300 glow-on-hover cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </motion.button>
          </motion.div>
          <motion.div
            className="mt-5 sm:mt-6 flow-root"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-3 sm:space-y-4 py-5 sm:py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`-mx-2 block rounded-lg px-2 py-1.5 text-sm sm:text-base font-semibold text-gray-300 hover:bg-gray-700 hover:text-indigo-400 transition-all duration-300 cursor-pointer ${
                    location.pathname === item.href ? 'bg-gray-700' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span whileHover={{ scale: 1.05 }}>
                    {item.name}
                  </motion.span>
                </Link>
              ))}
              <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4">
                <motion.a
                  href="https://github.com/Harsh16Bhardwaj"
                  className="text-gray-300 hover:text-indigo-400 glow-on-hover rounded-full p-1.5 sm:p-2 cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                >
                  <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/harsh-bhardwaj-80297b285/"
                  className="text-gray-300 hover:text-indigo-400 glow-on-hover rounded-full p-1.5 sm:p-2 cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;