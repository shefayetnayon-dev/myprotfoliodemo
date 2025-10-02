// components/Navbar.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiX } from 'react-icons/fi';


interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
}

interface SearchResult {
  type: 'blog' | 'page';
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch blog posts for search
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/blog.json');
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  // Handle search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Search in blog posts
    blogPosts.forEach(post => {
      if (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      ) {
        results.push({
          type: 'blog',
          title: post.title,
          slug: `/blog/${post.slug}`,
          excerpt: post.excerpt,
          category: post.category
        });
      }
    });

    // Search in pages
    const pages = [
      { title: 'Home', slug: '/' },
      { title: 'About', slug: '/about' },
      { title: 'Services', slug: '/services' },
      { title: 'Portfolio', slug: '/portfolio' },
      { title: 'Pricing', slug: '/pricing' },
      { title: 'Blog', slug: '/blog' },
      { title: 'Contact', slug: '/contact' },
    ];

    pages.forEach(page => {
      if (page.title.toLowerCase().includes(query)) {
        results.push({
          type: 'page',
          title: page.title,
          slug: page.slug
        });
      }
    });

    setSearchResults(results.slice(0, 5)); // Limit to 5 results
  }, [searchQuery, blogPosts]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Menu items
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Service', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Price', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-lg shadow-md py-2 text-gray-800' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left section: Profile image and name */}
          <div className="flex items-center space-x-3">
            {/* Profile image with circular border and animation */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500 shadow-lg transform transition-transform duration-300 hover:scale-110">
                <Link href={'/'}>
                  <Image 
                    src="https://i.postimg.cc/DZdMRq12/94421575-1462621767243736-3919540940481495040-n.jpg"
                    fill
                    alt="Shefayet Nayon"   
                    className="object-cover"
                    // Fallback image if profile.jpg doesn't exist
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://ui-avatars.com/api/?name=Shefayet+Nayon&background=6366f1&color=fff";
                    }}
                  />
                </Link>
            </div>
            {/* Name with gradient text */}
            <Link href={'/'}>
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Shefayet Nayon
              </span>
            </Link>
          </div>

          {/* Desktop Menu - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 rounded-md text-sm text-gray-300 font-bold hover:text-indigo-400 transition-all duration-200 group"
              >
                {item.name}
                {/* Underline animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right section: Search and button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search input with animation */}
            <div className="relative" ref={searchRef}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                  className="pl-10 pr-10 py-2 text-amber-50 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 w-40 focus:w-56"
                />
                <FiSearch className="absolute left-3 top-2.5 h-5 w-5 text-white" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 hover:text-gray-600"
                  >
                    <FiX />
                  </button>
                )}
              </div>
              
              {/* Search results dropdown */}
              <AnimatePresence>
                {isSearchOpen && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-h-96 overflow-y-auto"
                  >
                    <div className="p-2">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.slug}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <div className="flex items-start">
                            {result.type === 'blog' && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 mr-3">
                                Blog
                              </span>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {result.title}
                              </p>
                              {result.excerpt && (
                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                  {result.excerpt}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 p-3 text-center">
                      <Link
                        href="/blog"
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                      >
                        View all results
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* No results message */}
              <AnimatePresence>
                {isSearchOpen && searchQuery && searchResults.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 text-center"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      No results found for "{searchQuery}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Hire Me button with hover effect */}
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5">
              <Link href={'/contact'}>Hire Me</Link>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - shown when toggled */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 pt-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    {/* Underline animation for mobile */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
              
              {/* Mobile search */}
              <div className="mt-4 px-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search blog"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <FiSearch className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 hover:text-gray-600"
                    >
                      <FiX />
                    </button>
                  )}
                </div>
                
                {/* Mobile search results */}
                {searchQuery && searchResults.length > 0 && (
                  <div className="mt-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
                    <div className="p-3">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.slug}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setSearchQuery('');
                          }}
                          className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <div className="flex items-start">
                            {result.type === 'blog' && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 mr-3">
                                Blog
                              </span>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {result.title}
                              </p>
                              {result.excerpt && (
                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                  {result.excerpt}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {searchResults.length >= 5 && (
                      <div className="border-t border-gray-200 dark:border-gray-700 p-3 text-center">
                        <Link
                          href="/blog"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setSearchQuery('');
                          }}
                          className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                        >
                          View all results
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Mobile no results */}
                {searchQuery && searchResults.length === 0 && (
                  <div className="mt-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      No results found for "{searchQuery}"
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex flex-col space-y-3">
                {/* Mobile Hire Me button */}
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 rounded-full font-medium shadow-md">
                 <Link href={'/contact'}>Hire Me</Link>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;