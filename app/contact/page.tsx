// app/contact/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Image from 'next/image';

const ContactPage = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Track client-side rendering to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants
  const pulseVariants: Variants = {
    initial: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.5, 1],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

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
      
      {/* Contact Form Section */}
      <ContactForm/>

      {/* Map Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Us</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Visit our office or check our location on the map below
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Map Container */}
            <div className="relative h-96 md:h-[500px] w-full">
              {/* Static Map Image - Replace with your actual map */}
              <Image 
                src="https://i.postimg.cc/W1Drq3Dj/location.png" 
                alt="Map location"
                width={1200}
                height={500}
                className="w-full h-full object-cover"
              />
              
              {/* Location Hotspot */}
              <motion.div
                variants={pulseVariants}
                initial="initial"
                animate="animate"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                  <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping"></div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">My WorkPlace</p>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-3 bg-white dark:bg-gray-800 rotate-45"></div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Map Info */}
            <div className="p-6 bg-white dark:bg-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Eidgah Para, Chuadanga
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Located in the heart of the city's tech district
                  </p>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://maps.app.goo.gl/TcDQB2CCo2WbbV7L9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg flex items-center gap-2"
                >
                  Get Directions
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;