import { useRef, useEffect, useState } from 'react';
import { FaDev } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {Tilt} from 'react-tilt';

const Blog = () => {
  const ref = useRef(null);
  const [featuredBlog, setFeaturedBlog] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Right Way to SEO: Enhance Your Visibility with These Key Points',
      description:
        'Master SEO with proven techniques: keyword research, on-page optimization, link building, and technical tweaks to skyrocket your site\'s ranking.',
      image: 'https://res.cloudinary.com/dikc4f9ip/image/upload/v1746030363/premium_photo-1684356819161-ddd759e4a4ae_mu61ww.jpg',
      link: 'https://dev.to/harsh_bhardwaj_809a89d3a7/right-way-to-seo-enhance-your-visibility-with-these-key-points-44do',
    },
    {
      id: 2,
      title: 'In Quest of Clarity: The Methodical Madness Behind Research',
      description:
        'Navigate research chaos with a structured approach—set clear objectives, gather data systematically, and synthesize insights effectively.',
      image: 'https://res.cloudinary.com/dikc4f9ip/image/upload/v1746030365/photo-1457369804613-52c61a468e7d_gtn8xd.jpg',
      link: 'https://dev.to/harsh_bhardwaj_809a89d3a7/in-quest-of-clarity-the-methodical-madness-behind-research-3ief',
    },
    {
      id: 3,
      title: 'Stability in Sorting Algorithms',
      description:
        'Dive into sorting algorithm stability, why it matters for data integrity, and how stable vs. unstable algorithms like merge sort and quicksort differ.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      link: 'https://dev.to/harsh_bhardwaj_809a89d3a7/stability-in-sorting-algorithms-18hd',
    },
    {
      id: 4,
      title: 'Selection Sorts',
      description:
        'Explore selection sort\'s mechanics, step-by-step process, O(n²) complexity, and its practical use for small datasets or educational purposes.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      link: 'https://dev.to/harsh_bhardwaj_809a89d3a7/selection-sorts-3hdf',
    },
  ];

  // Randomly select Blog of the Day
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * blogPosts.length);
    setFeaturedBlog(blogPosts[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <style>
        {`
          .golden-border {
            border: 1px solid #FFD700;
          }
          .regular-border {
            border: 1px solid #4B0082;
          }
          @media (max-width: 375px) {
            .blog-container {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            .blog-card {
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
          }
        `}
      </style>

      <div className="blog-container max-w-7xl mx-auto relative z-100">
        {/* Header and Featured Blog Side-by-Side */}
        <div className="flex flex-col  justify-center items-center md:flex-row md:items-start md:gap-8 mb-6 sm:mb-12">
          <motion.div
            ref={ref}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 mb-20 sm:mb-0 flex flex-col items-center justify-center h-auto md:h-[380px] text-center md:text-left md:mb-0"
          >
            <h2 className="text-2xl  sm:text-3xl md:text-4xl font-bold underline underline-offset-8 decoration-pink-400 decoration-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600">
              My Tech Chronicles
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-300">
              Insights on code, algorithms, and tech adventures
            </p>
          </motion.div>

          {featuredBlog && (
            <Tilt
              className="Tilt w-full md:w-1/3"
              options={{
                max: 15,
                scale: 1.05,
                speed: 400,
                glare: true,
                'max-glare': 0.2,
              }}
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="blog-card w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden golden-border shadow-md"
                style={{ zIndex: 110 }}
              >
                <a
                  href={featuredBlog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400 mb-2 line-clamp-1">
                      {featuredBlog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3 line-clamp-2 md:line-clamp-3">
                      {featuredBlog.description}
                    </p>
                    <div className="flex items-center text-amber-300 hover:text-amber-200 transition-colors duration-300 text-sm">
                      <span>Read on Dev.to</span>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
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
                    </div>
                  </div>
                </a>
              </motion.div>
            </Tilt>
          )}
        </div>

        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white text-center pt-4 mt-20 mb-6 sm:mb-8">
          Read Others
        </h2>

        {/* Grid of Other Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {blogPosts
            .filter((post) => post.id !== (featuredBlog?.id || 0))
            .map((post, index) => (
              <Tilt
                key={post.id}
                className="Tilt"
                options={{
                  max: 15,
                  scale: 1.05,
                  speed: 400,
                  glare: true,
                  'max-glare': 0.2,
                }}
              >
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="blog-card relative regular-border bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-md"
                  style={{ zIndex: 100 }}
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                    </div>
                    <div className="p-3 sm:p-4 md:p-5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3 line-clamp-2 md:line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300 text-xs sm:text-sm">
                        <span>Read on Dev.to</span>
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
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
                      </div>
                    </div>
                  </a>
                </motion.div>
              </Tilt>
            ))}
        </div>

        {/* Call to Action */}
        <Tilt
          className="Tilt"
          options={{
            max: 15,
            scale: 1.05,
            speed: 400,
            glare: true,
            'max-glare': 0.2,
          }}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden regular-border bg-gradient-to-r from-gray-800 to-gray-900 shadow-md"
          >
            <div className="p-4 sm:p-6 md:p-8 text-center">
              <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <FaDev className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Follow My Dev.to Journey
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 md:mb-6 max-w-md mx-auto">
                Join me for insights on coding, algorithms, and tech with a golden touch.
              </p>
              <a
                href="https://dev.to/harsh_bhardwaj_809a89d3a7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-600 text-gray-900 font-medium hover:from-yellow-500 hover:to-amber-700 transition-all duration-300 cursor-pointer text-sm sm:text-base"
              >
                Visit My Dev.to Profile
              </a>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </div>
  );
};

export default Blog;