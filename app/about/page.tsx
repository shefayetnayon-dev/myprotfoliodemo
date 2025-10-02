// app/about/page.tsx
"use client";

import { motion,Variants } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import About from '../components/About';
import Link from 'next/link';

const AboutPage = () => {
  const timelineData = [
    {
      year: "2016",
      title: "Started My Journey",
      description: "Began my journey in web development with HTML and CSS. Built my first static websites and fell in love with creating digital experiences.",
      icon: "🚀"
    },
    {
      year: "2018",
      title: "Learned JavaScript",
      description: "Mastered JavaScript and started building interactive websites. Discovered the power of DOM manipulation and event handling.",
      icon: "💻"
    },
    {
      year: "2020",
      title: "React & Modern Frameworks",
      description: "Embraced React and modern development frameworks. Started building complex SPAs and learned about state management.",
      icon: "⚛️"
    },
    {
      year: "2022",
      title: "Full Stack Development",
      description: "Expanded my skills to include backend development. Learned Node.js, databases, and became a full-stack developer.",
      icon: "🌐"
    },
    {
      year: "2024",
      title: "Freelance Success",
      description: "Started my freelance career and worked with amazing clients. Built numerous projects and gained valuable industry experience.",
      icon: "🎯"
    },
    {
      year: "Present",
      title: "Continuous Growth",
      description: "Always learning new technologies and improving my craft. Focusing on creating exceptional user experiences and scalable applications.",
      icon: "📈"
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 95, icon: "🎨" },
    { name: "React & Next.js", level: 90, icon: "⚛️" },
    { name: "UI/UX Design", level: 85, icon: "🎯" },
    { name: "Node.js", level: 80, icon: "🔧" },
    { name: "Database Design", level: 75, icon: "💾" },
    { name: "DevOps", level: 70, icon: "🚀" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Always exploring new technologies and finding creative solutions to complex problems.",
      icon: "💡"
    },
    {
      title: "Quality",
      description: "Committed to delivering high-quality, well-tested, and maintainable code.",
      icon: "✨"
    },
    {
      title: "Collaboration",
      description: "Believe in the power of teamwork and open communication to achieve the best results.",
      icon: "🤝"
    },
    {
      title: "Continuous Learning",
      description: "Always eager to learn new skills and stay updated with the latest industry trends.",
      icon: "📚"
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
      transition: { duration: 0.5, ease: "easeOut" }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Video */}
      <About />
      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Key milestones in my development career
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-indigo-600"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 flex justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-lg">
                        {item.icon}
                      </div>
                      <div className="absolute top-10 -left-1 w-4 h-4 rounded-full bg-purple-600"></div>
                    </div>
                  </div>
                  
                  <div className="w-1/2 px-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                      <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skill.icon}</span>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    custom={skill.level}
                    variants={skillBarVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                  ></motion.div>
                </div>
                
                <div className="mt-2 text-right text-sm font-medium text-purple-600 dark:text-purple-400">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Principles that guide my work and growth
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Work Together</h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">Have a project in mind? I'd love to hear about it and help bring your ideas to life.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={'/contact'}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full flex items-center justify-center gap-2 text-lg"
              >Get In Touch <FiArrowRight />
              </motion.button>
              </Link>
              <Link href={'/portfolio'}>
                    <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full flex items-center justify-center gap-2 text-lg"
              >
                View My Work <FiArrowRight />
              </motion.button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;