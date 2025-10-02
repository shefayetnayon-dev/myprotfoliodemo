"use client";

import { motion } from 'framer-motion';
import { useState, useEffect, use } from 'react'; // use ইমপোর্ট করুন
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // params প্রমিজ আনওয়ার্প করুন
  const { slug } = use(params);
  
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch('/blog.json');
        const data: BlogPost[] = await response.json();
        const post = data.find(post => post.slug === slug);
        
        if (!post) {
          notFound();
        }
        
        setBlogPost(post);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]); // এখন slug একটি স্ট্রিং

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="h-10 bg-gray-200 rounded-lg w-3/4 mb-6"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
          
          <div className="h-64 bg-gray-200 rounded-xl mb-8"></div>
          
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!blogPost) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-200 opacity-20 dark:bg-purple-900 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-200 opacity-20 dark:bg-indigo-900 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back to blog button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </motion.button>
          </Link>
        </motion.div>

        {/* Blog post header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {formatDate(blogPost.date)}
            <span className="mx-2">•</span>
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full">
              {blogPost.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {blogPost.title}
          </h1>
        </motion.div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-8"
        >
          <Image
            src={`https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`}
            alt={blogPost.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Blog post content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200">
            <p className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              {blogPost.excerpt}
            </p>
            <div className="whitespace-pre-line">
              {blogPost.content}
            </div>
          </div>
        </motion.div>

        {/* Related posts section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* You can fetch and display related posts here */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-40 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">Related Post Title</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Excerpt of related post content...</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-40 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">Related Post Title</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Excerpt of related post content...</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to blog button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full overflow-hidden group"
            >
              <span className="relative z-10">View All Blog Posts</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}