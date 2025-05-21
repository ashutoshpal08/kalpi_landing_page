"use client"; // Enables Client Component for Next.js, allowing client-side features like Framer Motion

// Import motion and useInView from Framer Motion for animations and viewport detection
import { motion, useInView } from 'framer-motion';
// Import useRef from React to create a reference for tracking element visibility
import { useRef } from 'react';

// Define the Features component as the default export
export default function Features() {
  // Array of feature objects containing title and description for each feature card
  const features = [
    {
      title: "No-Code Strategy Builder",
      description: "Build complex quantitative strategies with our intuitive click and drop interface. No coding required.",
    },
    {
      title: "Advanced Backtesting",
      description: "Test your strategies against historical data with detailed performance metrics and analytics.",
    },
    {
      title: "Portfolio Creation",
      description: "Create equal & custom weighted portfolios with ease with rebalancing options.",
    },
    {
      title: "Machine Learning & AI Strategy",
      description: "Use AI/ML techniques to build, combine and optimize strategies.",
    },
    {
      title: "Strategy Marketplace",
      description: "Discover and subscribe to proven strategies from professional Quant researchers.",
    },
    {
      title: "Multi-Factor Model",
      description: "Create a multi-factor portfolio for robust risk adjusted returns.",
    },
  ];

  // Create a ref to track the container element for visibility detection
  const ref = useRef(null);
  // Use useInView hook to detect when the container is in view, triggering animation once with a -50px margin
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Define animation variants for the container to control staggered child animations
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state: fully transparent
    visible: {
      opacity: 1, // Final state: fully opaque
      transition: {
        staggerChildren: 0.2, // Stagger animation of child elements by 0.2 seconds
      },
    },
  };

  // Define animation variants for individual feature cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: transparent and offset downward
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } // Animate to opaque and original position over 0.5 seconds
    },
  };

  // Render the Features section
  return (
    // Section with padding and responsive background color for light/dark mode
    <section className="py-20 bg-white dark:bg-gray-900">
      {/* Container for centering content with max-width and horizontal padding */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Animated section title with fade-in and slide-up effect */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-green-700 dark:text-green-300 mb-10"
          initial={{ opacity: 0, y: -20 }} // Start transparent and offset upward
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.5 }} // Animation duration of 0.5 seconds
        >
          Why Choose Kalpi Capital?
        </motion.h2>
        {/* Grid container for feature cards with responsive column layout */}
        <motion.div
          ref={ref} // Attach ref for visibility tracking
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" // Responsive grid: 1/2/3 columns
          variants={containerVariants} // Apply container animation variants
          initial="hidden" // Start in hidden state
          animate={isInView ? 'visible' : 'hidden'} // Animate based on visibility
        >
          {/* Map over features array to render each feature card */}
          {features.map((feature, index) => (
            // Individual animated feature card
            <motion.div
              key={index} // Unique key for React list rendering
              className="p-6 bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition-shadow min-h-[300px]" // Styling for card with hover effect
              variants={cardVariants} // Apply card animation variants
            >
              {/* Feature title with consistent styling */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {feature.title}
              </h3>
              {/* Feature description with consistent styling */}
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}