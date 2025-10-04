// app/portfolio/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ContactForm from '../components/ContactForm';
import Image from 'next/image';

const PortfolioPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Track client-side rendering to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration",
      category: "web",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 2,
      title: "Advance Note Maker",
      description: "Advance Note Maker Good options for Our daily Life",
      category: "web",
      image: "https://i.postimg.cc/q7kTwHbC/notemaker.png",
      technologies: ["Vanila JavaScript", "HTML", "Custom CSS"],
      githubUrl: "https://github.com/shefayetnayon-dev/noteAPPs",
      liveUrl: "https://shefayetnayonnote.netlify.app/"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with interactive maps",
      category: "web",
      image: "https://images.unsplash.com/photo-1592210454359-904ecfed744e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 4,
      title: "Music Streaming",
      description: "A music streaming service is a streaming media service that focuses on digital audio, including music",
      category: "Web and Mobile",
      image: "https://i.postimg.cc/8C9s0Cq0/music.png",
      technologies: ["React", "NextJS", "TailwindCSS"],
      githubUrl: "https://github.com/shefayetnayon-dev/music",
      liveUrl: "https://music-shefayetnayon.vercel.app/"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website with modern design",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Content management system for bloggers",
      category: "web",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  // const skills = [
  //   { name: "Frontend Development", level: 95, icon: <FiLayout className="w-6 h-6" /> },
  //   { name: "Backend Development", level: 85, icon: <FiServer className="w-6 h-6" /> },
  //   { name: "Database Management", level: 80, icon: <FiDatabase className="w-6 h-6" /> },
  //   { name: "Mobile Development", level: 75, icon: <FiSmartphone className="w-6 h-6" /> },
  //   { name: "UI/UX Design", level: 90, icon: <FiCode className="w-6 h-6" /> }
  // ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // const itemVariants = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: { duration: 0.5 }
  //   }
  // };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  // const skillBarVariants = {
  //   hidden: { width: 0 },
  //   visible: (level: number) => ({
  //     width: `${level}%`,
  //     transition: {
  //       duration: 1,
  //       ease: "easeOut"
  //     }
  //   })
  // };

  // If not client-side yet, show loading state
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
     
      {/* Projects Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            {['all', 'web', 'mobile'].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium capitalize ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden h-48">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={600}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.category}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      <FiGithub className="w-5 h-5" />
                    </motion.a>
                    
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      Live Demo <FiExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default PortfolioPage;
