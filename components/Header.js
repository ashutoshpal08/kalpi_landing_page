"use client"; // Enables Client Component for Next.js, allowing client-side features like state management and Framer Motion

// Import Image and Link components from Next.js for optimized image handling and client-side navigation
import Image from 'next/image';
import Link from 'next/link';
// Import useState and useEffect from React for state management and side effects
import { useState, useEffect } from 'react';
// Import motion from Framer Motion for header animation
import { motion } from 'framer-motion';

// Define the Header component as the default export
export default function Header() {
  // State to manage the current theme (light or dark)
  const [theme, setTheme] = useState('light');

  // Effect to initialize theme from localStorage and apply it to the document
  useEffect(() => {
    // Retrieve saved theme from localStorage, default to 'light' if not found
    const savedTheme = localStorage.getItem('theme') || 'light';
    // Update state with the saved theme
    setTheme(savedTheme);
    // Apply dark mode class to document root if saved theme is dark
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    // Switch theme state between light and dark
    const newTheme = theme === 'light' ? 'dark' : 'light';
    // Update state with new theme
    setTheme(newTheme);
    // Save new theme to localStorage
    localStorage.setItem('theme', newTheme);
    // Add or remove dark mode class from document root based on new theme
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Render the Header component
  return (
    // Animated header with fixed positioning, full width, and shadow
    <motion.header
      className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50" // Responsive styling with high z-index
      initial={{ opacity: 0, y: -50 }} // Initial state: transparent and offset upward
      animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
      transition={{ duration: 0.5 }} // Animation duration of 0.5 seconds
    >
      {/* Container for centering content with max-width and padding */}
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo section */}
        <div className="flex items-center">
          {/* Display Kalpi Capital logo using Next.js Image component for optimization */}
          <Image
            src="/kalpilogo.jpeg" // Path to logo image
            alt="Kalpi Capital Logo" // Alt text for accessibility
            width={150} // Fixed width
            height={50} // Fixed height
            className="object-contain" // Ensure logo fits container
          />
        </div>
        {/* Navigation section, hidden on mobile and shown on medium screens and above */}
        <nav className="hidden md:flex space-x-6">
          {/* Link to About section */}
          <Link href="/#about" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
            About
          </Link>
          {/* Link to Solutions section */}
          <Link href="/#solutions" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
            Solutions
          </Link>
          {/* Link to Contact section */}
          <Link href="/#contact" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
            Contact
          </Link>
        </nav>
        {/* Action buttons section */}
        <div className="flex items-center space-x-4">
          {/* Get Started button */}
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Get Started
          </button>
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme} // Call toggleTheme function on click
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600" // Responsive styling for light/dark mode
          >
            {/* Display moon icon for light mode, sun icon for dark mode */}
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </motion.header>
  );
}