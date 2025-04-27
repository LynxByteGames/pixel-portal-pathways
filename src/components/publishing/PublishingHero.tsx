
import React from 'react';
import { motion } from 'framer-motion';

const PublishingHero = () => {
  return (
    <section className="relative min-h-[80vh] bg-[#1A103C] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-primary/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 h-full py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <img 
              src="/lovable-uploads/28ecd23a-05ff-48fb-bdf2-d0890460ce73.png" 
              alt="Gaming devices"
              className="max-w-[90%] h-auto relative z-10"
            />
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white relative z-10"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-accent to-purple-primary">
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
