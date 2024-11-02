import React, { useState } from 'react';
import { Code2, Palette, Brain, Music, Coffee, Book, ExternalLink } from 'lucide-react';

const CurrentInterests = () => {
  const [activeCard, setActiveCard] = useState(null);

  const projects = [
    {
      title: "Building ML Models",
      icon: <Brain className="w-6 h-6" />,
      description: "Working on neural networks for image classification",
      progress: 65,
      tags: ["Python", "TensorFlow", "Computer Vision"],
      link: "#"
    },
    {
      title: "Web Development",
      icon: <Code2 className="w-6 h-6" />,
      description: "Creating responsive React components with modern animations",
      progress: 80,
      tags: ["React", "Tailwind", "TypeScript"],
      link: "#"
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      description: "Designing user interfaces with focus on accessibility",
      progress: 45,
      tags: ["Figma", "Design Systems", "A11y"],
      link: "#"
    },
    {
      title: "Music Production",
      icon: <Music className="w-6 h-6" />,
      description: "Creating electronic music and learning sound design",
      progress: 30,
      tags: ["Ableton", "Synthesis", "Mixing"],
      link: "#"
    },
    {
      title: "Reading List",
      icon: <Book className="w-6 h-6" />,
      description: "Currently reading: 'Design Patterns in Software Architecture'",
      progress: 55,
      tags: ["Software Design", "Architecture", "Best Practices"],
      link: "#"
    },
    {
      title: "Side Projects",
      icon: <Coffee className="w-6 h-6" />,
      description: "Building a personal task management system",
      progress: 25,
      tags: ["Next.js", "MongoDB", "AWS"],
      link: "#"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Currently Working On</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl
              ${activeCard === index ? 'scale-105' : 'hover:scale-102'}`}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                </div>
                <a href={project.link} className="text-gray-400 hover:text-gray-600">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-500">Progress</span>
                  <span className="text-sm text-gray-500">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentInterests;