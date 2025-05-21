"use client"; // Enables Client Component for Next.js, allowing client-side features like Framer Motion

// Import Image component from Next.js for optimized image handling
import Image from 'next/image';
// Import motion and useInView from Framer Motion for animations and viewport detection
import { motion, useInView } from 'framer-motion';
// Import useRef from React to create a reference for tracking element visibility
import { useRef } from 'react';

// Define the Footer component as the default export
export default function Footer() {
  // Create a ref to track the footer element for visibility detection
  const ref = useRef(null);
  // Use useInView hook to detect when the footer is in view, triggering animation once with a -50px margin
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Render the Footer section
  return (
    // Animated footer with responsive background color and margin-top auto to stick to bottom
    <motion.footer
      ref={ref} // Attach ref for visibility tracking
      className="bg-gray-100 dark:bg-gray-900 py-10 mt-auto" // Light/dark mode styling with padding
      initial={{ opacity: 0 }} // Initial state: fully transparent
      animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Animate to visible when in view
      transition={{ duration: 0.8 }} // Animation duration of 0.8 seconds
    >
      {/* Container for centering content with max-width and responsive grid layout */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo section */}
        <div>
          {/* Display Kalpi Capital logo using Next.js Image component for optimization */}
          <Image
            src="/kalpilogo.jpeg" // Path to logo image
            alt="Kalpi Capital Logo" // Alt text for accessibility
            width={150} // Fixed width
            height={50} // Fixed height
            className="object-contain mb-4" // Ensure logo fits container with margin below
          />
        </div>
        {/* Quick Links section */}
        <div>
          {/* Section heading for navigation links */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
          {/* List of navigation links */}
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                Strategy Builder
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                Backtest
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                My Strategies
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                Marketplace
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Us section */}
        <div>
          {/* Section heading for contact information */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Contact Us</h3>
          {/* Display phone number */}
          <p className="text-gray-600 dark:text-gray-400">+91-8879191901</p>
          {/* Display email address */}
          <p className="text-gray-600 dark:text-gray-400">info@kalpicapital.com</p>
        </div>
        {/* Newsletter subscription section */}
        <div>
          {/* Section heading for newsletter */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Newsletter</h3>
          {/* Description for newsletter subscription */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Subscribe for updates on market trends and quantitative research.
          </p>
          {/* Email input field for newsletter subscription */}
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-2 border rounded-md mb-2 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200" // Responsive styling for light/dark mode
          />
          {/* Subscribe button */}
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Subscribe
          </button>
        </div>
      </div>
      {/* Footer bottom section with copyright and legal links */}
      <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
        © 2023 Kalpi Capital. All rights reserved. |{' '}
        <a href="#" className="hover:text-green-600 dark:hover:text-green-400">Terms of Service</a> |{' '}
        <a href="#" className="hover:text-green-600 dark:hover:text-green-400">Privacy Policy</a> |{' '}
        <a href="#" className="hover:text-green-600 dark:hover:text-green-400">Disclaimer</a>
      </div>
    </motion.footer>
  );
}