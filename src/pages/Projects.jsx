import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'NyayVaad',
    description: 'An AI-powered legal consultancy platform offering affordable case management and insights.',
    image: 'https://res.cloudinary.com/dikc4f9ip/image/upload/v1745945464/nyayvaad_n8j9vc.png' ,
    technologies: ['Next.js', 'Langflow', 'Gemini API', 'Prisma', 'SQLite', 'Turso', 'Shadcn'],
    github: '#https://github.com/Harsh16Bhardwaj/NyayVaad',
    live: '#',
    color: 'from-indigo-900 to-purple-900',
    problem: 'High costs and inefficiencies in legal consultancy and case management.',
    approach: 'Developed a scalable legal-tech pipeline with AI-driven summarization, reducing court judgment length by 67%. Integrated a comprehensive case dashboard for efficient management.',
    workflow: 'Used Next.js for the frontend, Prisma with SQLite/Turso for data management, and Gemini API for AI insights. Implemented Shadcn for UI components.',
  },
  {
    id: 2,
    title: 'NameFrame',
    description: 'A dynamic event certification solution for sending personalized certificates.',
    image: 'https://res.cloudinary.com/dikc4f9ip/image/upload/v1745945464/nameframe_xyuvr2.png',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NeonDB', 'NodeMailer', 'Shadcn', 'Canvas'],
    github: '#https://github.com/Harsh16Bhardwaj/NameFrame',
    live: '#',
    color: 'from-blue-500 to-cyan-500',
    problem: 'Challenges in sending personalized certificates at scale due to email limits and downtime.',
    approach: 'Built a dynamic mailer with auto sender rotation and Kafka queues to ensure reliable delivery with less than 1% downtime.',
    workflow: 'Used Next.js and Shadcn for the frontend, Prisma with PostgreSQL/NeonDB for data, and NodeMailer with Canvas for certificate generation.',
  },
  {
    id: 3,
    title: 'Seedha-Sauda',
    description: 'A peer-to-peer file-sharing platform with secure, temporary transfers via QR code.',
    image: 'https://res.cloudinary.com/dikc4f9ip/image/upload/v1745945463/seeda_r8do3h.png',
    technologies: ['MERN', 'Cloudinary', 'Socket.io', 'QrJs', 'MongoDB'],
    github: 'https://github.com/Harsh16Bhardwaj/Seedha-Sauda',
    live: '#',
    color: 'from-red-500 to-red-800',
    problem: 'Lack of secure, user-friendly peer-to-peer file-sharing solutions without loggin in. Something we expereince during labs',
    approach: 'Created a platform using QR code scanning for direct connections and automatic file deletion from Cloudinary post-session for privacy, a simple Socket.io connection for real-time file transfer, and a Cloudinary integration for secure file storage.',
    workflow: 'Implemented MERN stack with Socket.io for real-time connections and QrJs for QR code generation, switched between datbases and simple backend session storing. A pretty simple flow.',
  },
];

const ProjectCard = ({ project, index, onClick }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="relative group"
    >
      <Tilt className="Tilt" options={{ max: 15, scale: 1.05, speed: 400 }}>
        <div
          onClick={() => onClick(project)}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 text-left">{project.title}</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <motion.a
                href={project.github}
                className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href={project.live}
                className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1 }}
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>Live Demo</span>
              </motion.a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border-2 border-gray-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-300"
        >
          <FaTimes className="w-6 h-6" />
        </button>
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
        </div>
        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-left">{project.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Problem Statement</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.problem}</p>
              <h3 className="text-xl font-semibold text-white mb-2">Approach</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.approach}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Workflow</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.workflow}</p>
              <h3 className="text-xl font-semibold text-white mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-gray-700 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <motion.a
              href={project.github}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaGithub className="w-5 h-5" />
              <span>View on GitHub</span>
            </motion.a>
            <motion.a
              href={project.live}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
              <span>Live Demo</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8">
      <style>
        {`
          .glow-on-hover:hover {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.6), 0 0 30px rgba(147, 51, 234, 0.4);
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work in building innovative web applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;