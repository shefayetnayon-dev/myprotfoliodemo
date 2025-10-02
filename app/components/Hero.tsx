// components/Hero.tsx
"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Floating animation for elements - properly typed
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  // Stagger animation for text
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Calculate parallax movement
  const calculateParallax = (speed: number) => {
    if (!heroRef.current) return { x: 0, y: 0 };

    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const moveX = (mousePosition.x - centerX) * speed;
    const moveY = (mousePosition.y - centerY) * speed;

    return { x: moveX, y: moveY };
  };

  // Generate particles only on client side
  const renderParticles = () => {
    if (!isClient) return null;

    return [...Array(20)].map((_, i) => {
      // Generate consistent random values for each particle
      const size = Math.random() * 4 + 1;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.2;
      const duration = Math.random() * 10 + 10;
      const moveY = -Math.random() * 100 - 50;
      const moveX = (Math.random() - 0.5) * 100;

      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: size,
            height: size,
            top: `${top}%`,
            left: `${left}%`,
            opacity
          }}
          animate={{
            y: [0, moveY],
            x: [0, moveX],
            opacity: [opacity, 0]
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear" as const
          }}
        />
      );
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-3xl"
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut" as const
            }
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-pink-600 opacity-20 blur-3xl"
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut" as const
            }
          }}
        />

        {/* Floating particles - only rendered on client */}
        {renderParticles()}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-white">Crafting Digital</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
                Experiences That
              </span>
              <span className="block text-white mt-2">Inspire & Convert</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl lg:max-w-xl mx-auto lg:mx-0"
            >
              I'm Shefayet Nayon, a passionate developer creating stunning web experiences with cutting-edge technology and design.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Link href={'/portfolio'}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full overflow-hidden group"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </motion.button>
              </Link>
              <Link href={'/contact'}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right content - Animated card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              x: calculateParallax(0.02).x,
              y: calculateParallax(0.02).y
            }}
          >
            {/* Main card */}
            <motion.div
              className="relative bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/10 p-1 shadow-2xl"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
                      <Image
                        src="https://i.postimg.cc/DZdMRq12/94421575-1462621767243736-3919540940481495040-n.jpg"
                        alt="Shefayet Nayon"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Shefayet Nayon</h3>
                      <p className="text-purple-400">Full Stack Developer</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { title: "Projects", value: "50+" },
                      { title: "Experience", value: "5+ Years" },
                      { title: "Clients", value: "30+" },
                      { title: "Awards", value: "7" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-800/50 p-4 rounded-xl border border-white/5"
                        whileHover={{ y: -5, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-gray-400 text-sm">{item.title}</p>
                        <p className="text-white text-xl font-bold">{item.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Lightning Fast Performance" },
                      { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", text: "Innovative Solutions" },
                      { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", text: "User-Centric Design" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d={item.icon} />
                          </svg>
                        </div>
                        <span className="text-gray-300">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating elements around card */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-20 blur-xl"
              animate={floatingAnimation}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-indigo-600 opacity-20 blur-xl"
              animate={{
                y: [0, -20, 0],
                transition: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut" as const
                }
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;