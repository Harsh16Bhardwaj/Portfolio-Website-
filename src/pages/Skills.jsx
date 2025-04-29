import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5 } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiSocketdotio, SiMongodb, SiPostgresql, SiRedis, SiPrisma } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { RiDatabase2Line } from 'react-icons/ri';
import { BsTools, BsDatabase, BsBox } from 'react-icons/bs';

const SkillCategory = ({ title, icon: Icon, skills, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 sm:mb-16 bg-gray-800/50 rounded-2xl p-4 sm:p-8 border border-gray-700/50 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="p-2 sm:p-3 rounded-xl bg-indigo-500/20">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mt-1">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillCard = ({ icon: Icon, name, level, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className={`p-2 sm:p-3 rounded-xl ${color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">{name}</h3>
          <div className="mt-2 sm:mt-3">
            <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1">
              <span>Proficiency</span>
              <span>{level}%</span>
            </div>
            <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className={`h-full rounded-full ${color}`}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { icon: SiNextdotjs, name: 'Next.js', level: 80, color: 'bg-black' },
    { icon: FaReact, name: 'React.js', level: 90, color: 'bg-blue-500' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
    { icon: BsBox, name: 'Shadcn', level: 85, color: 'bg-purple-500' },
    { icon: FaHtml5, name: 'HTML', level: 95, color: 'bg-orange-500' },
    { icon: RiDatabase2Line, name: 'Canvas API', level: 80, color: 'bg-green-500' },
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: 'Node.js', level: 90, color: 'bg-green-500' },
    { icon: SiExpress, name: 'Express.js', level: 85, color: 'bg-gray-500' },
    { icon: SiSocketdotio, name: 'Socket.io', level: 80, color: 'bg-black' },
    { icon: RiDatabase2Line, name: 'REST APIs', level: 90, color: 'bg-blue-500' },
  ];

  const databaseSkills = [
    { icon: SiMongodb, name: 'MongoDB', level: 85, color: 'bg-green-600' },
    { icon: SiPostgresql, name: 'PostgreSQL', level: 80, color: 'bg-blue-700' },
    { icon: BiLogoPostgresql, name: 'NeonDB', level: 75, color: 'bg-blue-500' },
    { icon: RiDatabase2Line, name: 'AstraDB', level: 70, color: 'bg-purple-500' },
    { icon: SiRedis, name: 'Redis', level: 65, color: 'bg-red-500' },
    { icon: SiPrisma, name: 'Prisma', level: 75, color: 'bg-blue-400' },
    { icon: RiDatabase2Line, name: 'Turso', level: 70, color: 'bg-indigo-500' },
  ];

  const toolsSkills = [
    { icon: BsTools, name: 'Langflow', level: 90, color: 'bg-blue-500' },
    { icon: BsTools, name: 'n8n', level: 75, color: 'bg-green-500' },
    { icon: BsTools, name: 'Cloudinary', level: 85, color: 'bg-yellow-500' },
    { icon: BsTools, name: 'NodeMailer', level: 90, color: 'bg-red-500' },
    { icon: BsDatabase, name: 'Kafka', level: 60, color: 'bg-black' },
    { icon: BsTools, name: 'Gemini API', level: 75, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-4">
            Technical Skills
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive showcase of my technical expertise and proficiency across various domains
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          <SkillCategory 
            title="Frontend Development" 
            icon={FaReact} 
            skills={frontendSkills}
            description="Modern frontend technologies and frameworks for building responsive and interactive user interfaces"
          />
          
          <SkillCategory 
            title="Backend Development" 
            icon={FaNodeJs} 
            skills={backendSkills}
            description="Server-side technologies and APIs for building robust and scalable applications"
          />
          
          <SkillCategory 
            title="Databases" 
            icon={RiDatabase2Line} 
            skills={databaseSkills}
            description="Various database technologies for efficient data storage and management"
          />
          
          <SkillCategory 
            title="Tools & Platforms" 
            icon={BsTools} 
            skills={toolsSkills}
            description="Essential tools and platforms that enhance development workflow and capabilities"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20 text-center"
        >
          <div className="inline-block p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <p className="text-sm sm:text-lg text-gray-400">
              Continuously learning and expanding my skill set to stay at the forefront of technology
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 