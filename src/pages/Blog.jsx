import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDev } from 'react-icons/fa';

const Blog = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Applications with React',
      description: 'Learn how to build scalable and maintainable web applications using React and modern best practices.',
      image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/example1.jpg',
      link: 'https://dev.to/yourusername/post1',
    },
    {
      id: 2,
      title: 'Mastering TypeScript for Better Development',
      description: 'A comprehensive guide to TypeScript and how it can improve your development workflow.',
      image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/example2.jpg',
      link: 'https://dev.to/yourusername/post2',
    },
    {
      id: 3,
      title: 'The Power of Tailwind CSS',
      description: 'Discover how Tailwind CSS can revolutionize your styling workflow and improve productivity.',
      image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/example3.jpg',
      link: 'https://dev.to/yourusername/post3',
    },
    {
      id: 4,
      title: 'Building RESTful APIs with Node.js',
      description: 'A practical guide to building robust and scalable RESTful APIs using Node.js and Express.',
      image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/example4.jpg',
      link: 'https://dev.to/yourusername/post4',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
            My Blog Posts
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Sharing my knowledge and experiences in web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
          <div className="relative p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <FaDev className="w-12 h-12 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Follow me on Dev.to
            </h3>
            <p className="text-gray-400 text-center mb-6">
              Join me on my journey of learning and sharing knowledge about web development.
            </p>
            <div className="flex justify-center">
              <a
                href="https://dev.to/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Visit My Dev.to Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog; 