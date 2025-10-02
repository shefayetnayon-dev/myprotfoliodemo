// components/Pricing.tsx
"use client";
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  // Pricing tiers
  const pricingTiers = [
    {
      name: "Silver",
      price: isAnnual ? "$80/month" : "$100/month",
      description: "Perfect for individuals starting their frontend journey",
      features: [
        "Responsive Website Design",
        "Basic UI/UX Implementation",
        "5 Pages Website",
        "Contact Form Integration",
        "Mobile Optimization",
        "Basic SEO Setup",
        "1 Month Support",
        "Source Code Delivery"
      ],
      popular: false,
      priceValue: isAnnual ? 80 : 100
    },
    {
      name: "Gold",
      price: isAnnual ? "$400/month" : "$500/month",
      description: "Ideal for growing businesses and startups",
      features: [
        "Everything in Silver",
        "Custom Web Application",
        "Advanced UI/UX Design",
        "Up to 15 Pages",
        "E-commerce Integration",
        "CMS Implementation",
        "API Integration",
        "Performance Optimization",
        "Advanced SEO",
        "3 Months Support",
        "Analytics Setup"
      ],
      popular: true,
      priceValue: isAnnual ? 400 : 500
    },
    {
      name: "Diamond",
      price: isAnnual ? "$800/month" : "$1000/month",
      description: "For enterprises requiring premium frontend solutions",
      features: [
        "Everything in Gold",
        "Complex Web Applications",
        "Progressive Web Apps (PWA)",
        "Unlimited Pages",
        "Custom Dashboard",
        "Third-party Service Integration",
        "Real-time Features",
        "Advanced Animations",
        "Micro-interactions",
        "A/B Testing Setup",
        "6 Months Priority Support",
        "Dedicated Project Manager",
        "Custom Training Sessions"
      ],
      popular: false,
      priceValue: isAnnual ? 800 : 1000
    }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden" id='pricing'>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-200 opacity-20 dark:bg-purple-900 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-200 opacity-20 dark:bg-indigo-900 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Pricing</span> Plans
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Choose the perfect plan for your frontend development needs. All plans include a 14-day money-back guarantee.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full ml-1">Save 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={`relative rounded-2xl overflow-hidden ${
                tier.popular 
                  ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-2xl transform scale-105 md:scale-110' 
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg'
              }`}
              whileHover={{ y: -10 }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-4 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-l-full">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                {/* Tier name */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-2xl font-bold ${tier.popular ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                    {tier.name}
                  </h3>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    tier.popular ? 'bg-white/20' : 'bg-purple-100 dark:bg-purple-900/30'
                  }`}>
                    {tier.name === 'Silver' && (
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    )}
                    {tier.name === 'Gold' && (
                      <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                    {tier.name === 'Diamond' && (
                      <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Price */}
                <div className="mb-6">
                  <div className={`text-4xl font-bold ${tier.popular ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                    {tier.price}
                  </div>
                  <p className={`text-sm ${tier.popular ? 'text-purple-200' : 'text-gray-600 dark:text-gray-400'}`}>
                    {tier.description}
                  </p>
                </div>
                
                {/* Features list */}
                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                        tier.popular ? 'text-purple-200' : 'text-purple-600 dark:text-purple-400'
                      }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={tier.popular ? 'text-purple-100' : 'text-gray-600 dark:text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-full font-medium text-sm ${
                    tier.popular 
                      ? 'bg-white text-purple-600 hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700'
                  } transition-all duration-300 relative overflow-hidden group`}
                >
                  <span className="relative z-10">Get Started</span>
                  {!tier.popular && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If none of the above plans fit your requirements, I can create a custom package tailored to your specific needs. Contact me for a personalized quote.
            </p>
            <Link href="/contact">
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full overflow-hidden group"
            >
              <span className="relative z-10">Contact for Custom Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;