
import React from 'react';
import { motion } from 'framer-motion';

const PublishingHero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-[#2B1F5C] to-[#1E1B4B] overflow-hidden">
      <div className="container mx-auto px-4 h-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <img 
              src="/lovable-uploads/21fd0f43-d5f2-4ed1-a1a3-37e22ad2e28c.png" 
              alt="Gaming devices"
              className="max-w-[90%] h-auto"
            />
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              We help developers{" "}
              <span className="text-yellow-400">reach more players</span>
            </h1>
            <p className="text-lg text-gray-300">
              Publish your game on consoles for free! We handle game porting,
              marketing, publishers, and all the other details.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PublishingHero;
