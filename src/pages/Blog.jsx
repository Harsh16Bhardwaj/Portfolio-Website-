import { useRef, useEffect, useState } from 'react';
import { FaDev } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const Blog = () => {
  const ref = useRef(null);
  const [featuredBlog, setFeaturedBlog] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Right Way to SEO: Enhance Your Visibility with These Key Points',
      description:
        "Master SEO with proven techniques: keyword research, on-page optimization, link building, and technical tweaks to skyrocket your site's ranking.",
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
        "Explore selection sort's mechanics, step-by-step process, O(n²) complexity, and its practical use for small datasets or educational purposes.",
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      link: 'https://dev.to/harsh_bhardwaj_809a89d3a7/selection-sorts-3hdf',
    },
    {
      id: 5,
      title: 'Data Pipelines: The Backbone of Modern Data Engineering',
      description:
        'Discover the essentials of data pipelines: architecture, ETL processes, and tools for efficient data flow and transformation in modern data engineering.',
      image: 'https://res.cloudinary.com/dimoa9ymu/image/upload/v1747325711/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_8xykei1d26p8sj9dwda5_snxiyj.webp',
      link: 'https://dev.to/harsh_bhardwaj_809a89d3a7/what-is-a-data-pipeline-and-why-you-should-care-25lg',
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
            border: 2px solid #FFD700;
            box-shadow: 0 0 24px 0 #ffd70033;
          }
          .regular-border {
            border: 1px solid #6366f1;
          }
          .blog-badge {
            background: linear-gradient(90deg, #f59e42, #fbbf24, #f59e42);
            color: #fff;
            font-weight: bold;
            font-size: 0.85rem;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            box-shadow: 0 2px 8px #fbbf2433;
            letter-spacing: 0.05em;
            margin-bottom: 0.5rem;
            display: inline-block;
            animation: badgePulse 2s infinite;
          }
          @keyframes badgePulse {
            0%, 100% { box-shadow: 0 2px 8px #fbbf2433; }
            50% { box-shadow: 0 4px 16px #fbbf2466; }
          }
          .blog-card:hover {
            transform: translateY(-6px) scale(1.025);
            box-shadow: 0 8px 32px 0 #6366f155;
            border-color: #a78bfa;
          }
          .blog-card {
            transition: all 0.3s cubic-bezier(.4,2,.3,1);
          }
          .featured-gradient {
            background: linear-gradient(120deg, #232526 0%, #414345 100%);
          }
        `}
      </style>
      <div className="blog-container max-w-7xl mx-auto relative z-100">
        {/* Header and Featured Blog Side-by-Side */}
        <div className="flex flex-col md:flex-row md:gap-10 items-stretch mb-10 sm:mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left py-8"
          >
            <span className="blog-badge mb-4">Blog of the Day</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 mb-2">
              My Tech Chronicles
            </h2>
            <p className="mt-2 text-base sm:text-lg text-gray-300 max-w-md">
              Insights on code, algorithms, and tech adventures.
            </p>
            <div className="mt-6 flex flex-col items-center md:items-start">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-black font-semibold shadow-lg mb-2 animate-pulse">
                Today's Good Read
              </span>
              <span className="text-lg font-semibold text-gray-200">
                {featuredBlog?.title}
              </span>
            </div>
          </motion.div>
          {featuredBlog && (
            <Tilt
              className="Tilt w-full md:w-1/2"
              options={{
                max: 15,
                scale: 1.03,
                speed: 400,
                glare: true,
                'max-glare': 0.18,
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="blog-card golden-border featured-gradient rounded-2xl overflow-hidden shadow-xl flex flex-col h-full"
                style={{ zIndex: 110 }}
              >
                <a
                  href={featuredBlog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer h-full"
                >
                  <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden">
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-full">
                    <h3 className="text-2xl font-bold text-amber-400 mb-2 line-clamp-2">
                      {featuredBlog.title}
                    </h3>
                    <p className="text-base text-gray-200 mb-4 line-clamp-3">
                      {featuredBlog.description}
                    </p>
                    <div className="flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors duration-300 text-base font-semibold">
                      <span>Read on Dev.to</span>
                      <svg
                        className="w-4 h-4 ml-1"
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

        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white text-center pt-4 mb-8">
          Read More Blogs
        </h2>

        {/* Grid of Other Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {blogPosts
            .filter((post) => post.id !== (featuredBlog?.id || 0))
            .map((post) => (
              <Tilt
                key={post.id}
                className="Tilt"
                options={{
                  max: 12,
                  scale: 1.02,
                  speed: 350,
                  glare: true,
                  'max-glare': 0.13,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="blog-card regular-border bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl"
                  style={{ zIndex: 100 }}
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300 text-sm">
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
            max: 10,
            scale: 1.01,
            speed: 300,
            glare: true,
            'max-glare': 0.1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden regular-border bg-gradient-to-r from-gray-800 to-gray-900 shadow-md"
          >
            <div className="p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <FaDev className="w-10 h-10 md:w-12 md:h-12 text-amber-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Follow My Dev.to Journey
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-5 max-w-md mx-auto">
                Join me for insights on coding, algorithms, and tech with a golden touch.
              </p>
              <a
                href="https://dev.to/harsh_bhardwaj_809a89d3a7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-600 text-gray-900 font-semibold hover:from-yellow-500 hover:to-amber-700 transition-all duration-300 cursor-pointer text-base"
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