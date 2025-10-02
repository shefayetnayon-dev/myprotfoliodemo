// components/Testimonials.tsx
"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials = () => {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Working with Shefayet was an absolute game-changer for our project. His attention to detail and innovative approach to frontend development transformed our user experience completely. The website he built not only looks stunning but performs flawlessly across all devices.",
      avatar: "https://i.postimg.cc/tCHbmTdm/filters-no-upscale.webp",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "StartupHub",
      content: "Shefayet's expertise in modern web technologies is unmatched. He delivered our complex web application ahead of schedule and exceeded all our expectations. His ability to translate our vision into a beautiful, functional interface is remarkable.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "BrandVision",
      content: "The portfolio website Shefayet created for our company has significantly increased our conversion rates. His understanding of UI/UX principles and ability to create engaging user journeys is exceptional. Highly recommend his services!",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO",
      company: "InnovateTech",
      content: "Shefayet's technical skills are top-notch, but what really sets him apart is his communication and problem-solving abilities. He doesn't just code; he provides solutions that align perfectly with business objectives.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Creative Director",
      company: "DesignStudio",
      content: "Working with Shefayet was a breath of fresh air. His collaborative approach and ability to bring creative visions to life is outstanding. The animations and micro-interactions he implemented added so much value to our project.",
      avatar: "https://i.postimg.cc/BZzs5ptP/images-6.jpg",
      rating: 5
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Memoize handlers to prevent unnecessary re-renders
  const handleNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const handleDotClick = useCallback((index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  }, [currentIndex]);

  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || !isClient) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isClient, handleNext]); // Added handleNext to dependency array

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  // Animation variants
  const slideVariants = {
    hiddenRight: { x: 300, opacity: 0 },
    hiddenLeft: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0
    })
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  // Only render particles on client side to avoid hydration mismatch
  const renderParticles = () => {
    if (!isClient) return null;
    
    return [...Array(15)].map((_, i) => {
      // Generate consistent random values for each particle
      const size = Math.random() * 4 + 1;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.3 + 0.1;
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
            ease: "linear"
          }}
        />
      );
    });
  };

  // Loading state to avoid hydration mismatch
  if (!isClient) {
    return (
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Clients</span> Say
            </h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Don't just take my word for it - hear from some of the amazing people I've had the pleasure of working with
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Placeholder for testimonial carousel */}
          <div className="max-w-4xl mx-auto h-96 flex items-center justify-center">
            <div className="text-white">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
      
      {/* Floating elements - only rendered on client */}
      {renderParticles()}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Clients</span> Say
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Don't just take my word for it - hear from some of the amazing people I've had the pleasure of working with
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Testimonial carousel */}
        <div 
          className="max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative h-96 flex items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute w-full"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-purple-500/30">
                          <Image
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Quote icon */}
                        <div className="text-purple-400 mb-4">
                          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        
                        {/* Testimonial text */}
                        <p className="text-lg md:text-xl text-white mb-6 italic">
                          "{testimonials[currentIndex].content}"
                        </p>
                        
                        {/* Rating */}
                        <div className="flex justify-center md:justify-start mb-4">
                          {renderStars(testimonials[currentIndex].rating)}
                        </div>
                        
                        {/* Author info */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {testimonials[currentIndex].name}
                          </h3>
                          <p className="text-purple-300">
                            {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => handleDotClick(dotIndex)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  dotIndex === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional testimonials grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-purple-300">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-300 text-sm line-clamp-2">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default Testimonials;