import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Hi, I'm <span className="text-indigo-400">Your Name</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              I'm a passionate developer specializing in creating beautiful and functional web applications.
              With expertise in modern web technologies, I bring ideas to life through clean, efficient code.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/projects"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                View My Work
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-white">
                Contact Me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"
          >
            <img
              src="/hero-image.jpg"
              alt="App screenshot"
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 