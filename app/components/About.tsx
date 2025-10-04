// components/About.tsx
"use client";
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Skills data
  const skills = [
    { name: "Design", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "React", level: 85 },
    { name: "NextJs", level: 90 },
    { name: "JavaScript/TypeScript", level: 75 },
    { name: "Bootstrap/Tailwind", level: 90 }
  ];

  // Experience timeline
  const experiences = [
    {
      year: "2020 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of scalable web applications for enterprise clients."
    },
    {
      year: "2018 - 2020",
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      description: "Created responsive user interfaces with modern JavaScript frameworks."
    },
    {
      year: "2016 - 2018",
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      description: "Developed and maintained multiple client websites and applications."
    }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillBarVariants: Variants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden" id='about'>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-200 opacity-20 dark:bg-purple-900 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-indigo-200 opacity-20 dark:bg-indigo-900 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Image and personal info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile image with hover effect */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-1 shadow-xl">
                  <div className="overflow-hidden rounded-2xl">
                    <Image 
                      src="https://i.postimg.cc/NGVyLPxw/shefayet-nayon.png"
                      alt="Shefayet Nayon"
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Personal info cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Name", value: "Shefayet Nayon" },
                  { title: "Location", value: "Chuadanga, Khulna, Bangladesh" },
                  { title: "Experience", value: "7+ Years" },
                  { title: "Education", value: "Computer Science" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5,
                      background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1))"
                    }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right column - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Introduction */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Hello, I'm Shefayet Nayon</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm a passionate full-stack developer with over 7 years of experience creating stunning digital experiences. I specialize in building modern web applications that are both beautiful and highly functional.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  My approach combines technical expertise with creative problem-solving to deliver solutions that exceed client expectations and provide exceptional user experiences.
                </p>
              </div>

              {/* Skills section */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">My Skills</h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          variants={skillBarVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience section */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Experience</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ 
                        x: 10,
                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(99, 102, 241, 0.05))"
                      }}
                      className="relative pl-6 border-l-2 border-purple-500 dark:border-purple-400 transition-all duration-300"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500 dark:bg-purple-400"></div>
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400">{exp.year}</p>
                      <h4 className="font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link href="/contact">
                  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full overflow-hidden group"
                >
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
