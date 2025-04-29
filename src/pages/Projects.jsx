import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of your first project and its key features.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of your second project and its key features.',
    image: '/project2.jpg',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of your third project and its key features.',
    image: '/project3.jpg',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-lg leading-8 text-gray-300"
          >
            Here are some of the projects I've worked on recently.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-indigo-400">
                    <a href={project.link}>
                      <span className="absolute inset-0" />
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 