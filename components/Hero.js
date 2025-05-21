"use client"; // Enables Client Component for Next.js, allowing client-side features like Framer Motion

// Import motion, useScroll, and useTransform from Framer Motion for animations and scroll-based effects
import { motion, useScroll, useTransform } from 'framer-motion';

// Define the Hero component as the default export
export default function Hero() {
  // Array of headline texts to display in the hero section
  const headlines = [
    "Unlocking Algorithmic Alpha",
    "Data-Driven Strategies",
    "Systematic Quant Investing",
  ];

  // Use useScroll to track the scroll position
  const { scrollY } = useScroll();
  // Transform scrollY to create a parallax effect for the headline text (moves up as user scrolls)
  const yText = useTransform(scrollY, [0, 300], [0, -50]);
  // Transform scrollY to create a parallax effect for the buttons (moves down as user scrolls)
  const yButtons = useTransform(scrollY, [0, 300], [0, 20]);

  // Generate an array of 10 particle objects for background animation, each with a unique ID and random initial position
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    initialX: Math.random() * 100, // Random x-position (0-100%)
    initialY: Math.random() * 100, // Random y-position (0-100%)
  }));

  // Render the Hero section
  return (
    // Section with minimum height of full screen, centered content, and responsive background
    <section className="bg-green-100 dark:bg-gray-800 min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Gradient background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-transparent" // Gradient overlay
        animate={{
          opacity: [0.3, 0.5, 0.3], // Fade in and out
          x: [-50, 50, -50], // Move horizontally
        }}
        transition={{
          repeat: Infinity, // Loop animation indefinitely
          duration: 10, // Animation cycle duration
          ease: 'easeInOut', // Smooth easing function
        }}
      />
      {/* Particle animations for visual effect */}
      {particles.map((particle) => (
        // Individual animated particle
        <motion.div
          key={particle.id} // Unique key for React list rendering
          className="absolute w-2 h-2 bg-green-400 dark:bg-green-300 rounded-full" // Small circular particle
          style={{
            left: `${particle.initialX}%`, // Position based on random x-coordinate
            top: `${particle.initialY}%`, // Position based on random y-coordinate
          }}
          animate={{
            y: [0, -20, 0], // Move up and down
            opacity: [0.5, 1, 0.5], // Fade in and out
          }}
          transition={{
            repeat: Infinity, // Loop animation indefinitely
            duration: Math.random() * 5 + 5, // Random duration between 5-10 seconds
            delay: Math.random() * 2, // Random delay up to 2 seconds
            ease: 'easeInOut', // Smooth easing function
          }}
        />
      ))}
      {/* Main content container with centered text and higher z-index to appear above background */}
      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        {/* Animated headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-green-700 dark:text-green-300 mb-6" // Responsive text size and color
          style={{ y: yText }} // Apply parallax scroll effect
          initial={{ opacity: 0, y: -50 }} // Initial state: transparent and offset upward
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 1 }} // Animation duration of 1 second
        >
          {headlines[0]} 
        </motion.h1>
        {/* Animated description text */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8" // Responsive text size and color
          initial={{ opacity: 0 }} // Initial state: transparent
          animate={{ opacity: 1 }} // Animate to visible
          transition={{ delay: 0.5, duration: 1 }} // Delayed animation for staggered effect
        >
          Create, backtest, and deploy Quant AI/ML portfolios without writing code.
        </motion.p>
        {/* Animated button group */}
        <motion.div
          className="flex justify-center space-x-4" // Center buttons with spacing
          style={{ y: yButtons }} // Apply parallax scroll effect
          initial={{ opacity: 0 }} // Initial state: transparent
          animate={{ opacity: 1 }} // Animate to visible
          transition={{ delay: 1, duration: 1 }} // Delayed animation for staggered effect
        >
          {/* Get Started button with hover and tap animations */}
          <motion.button
            className="px-6 py-3 bg-green-600 text-white rounded-md" // Primary button styling
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" }} // Scale up and add shadow on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
          >
            Get Started
          </motion.button>
          {/* Watch Demo button with hover and tap animations */}
          <motion.button
            className="px-6 py-3 border border-green-600 text-green-600 dark:text-green-300 dark:border-green-300 rounded-md" // Secondary button styling
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" }} // Scale up and add shadow on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}