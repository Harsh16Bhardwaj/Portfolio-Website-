import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import {Tilt} from 'react-tilt';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3, FaGit, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import { DiAws } from 'react-icons/di';

const SkillCard = ({ icon: Icon, name, level, color }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const springProps = useSpring({
    width: inView ? `${level}%` : '0%',
    config: { tension: 100, friction: 20 },
  });

  return (
    <Tilt className="Tilt" options={{ max: 15, scale: 1.05, speed: 400 }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
            <Icon className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
              <animated.div
                className={`h-full rounded-full ${color}`}
                style={springProps}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  const skills = [
    { icon: FaReact, name: 'React', level: 90, color: 'bg-blue-500' },
    { icon: FaNodeJs, name: 'Node.js', level: 85, color: 'bg-green-500' },
    { icon: FaJs, name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { icon: SiTypescript, name: 'TypeScript', level: 80, color: 'bg-blue-600' },
    { icon: FaHtml5, name: 'HTML5', level: 95, color: 'bg-orange-500' },
    { icon: FaCss3, name: 'CSS3', level: 90, color: 'bg-blue-400' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', level: 85, color: 'bg-cyan-500' },
    { icon: SiMongodb, name: 'MongoDB', level: 75, color: 'bg-green-600' },
    { icon: SiPostgresql, name: 'PostgreSQL', level: 70, color: 'bg-blue-700' },
    { icon: FaGit, name: 'Git', level: 90, color: 'bg-red-500' },
    { icon: FaDocker, name: 'Docker', level: 70, color: 'bg-blue-400' },
    { icon: DiAws, name: 'AWS', level: 65, color: 'bg-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A showcase of my technical expertise and proficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
            <p className="text-gray-400">
              Continuously learning and expanding my skill set
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 