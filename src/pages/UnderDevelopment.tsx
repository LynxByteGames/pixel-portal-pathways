
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const UnderDevelopment = () => {
  const handleOpenOldVersion = () => {
    // Navigate to the main site
    window.location.href = '/main';
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/8623cfbe-3aee-4feb-8a3c-7bc1a7bfb0e0.png')`
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Pink accent shapes */}
      <div className="absolute top-4 left-4 w-16 h-16 bg-[#ff007e] transform rotate-45"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#ff007e] transform rotate-45"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <img 
              src="/lovable-uploads/21e5c1eb-b51a-4e2b-bce8-cbc8c5956338.png" 
              alt="LynxByte Games Logo"
              className="w-32 h-32 mx-auto mb-8 object-contain"
            />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            UNDER{" "}
            <span className="text-[#ff007e]">DEVELOPMENT</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            <p className="mb-6">
              We are currently not publishing games, but focusing on providing{" "}
              <span className="text-[#ff007e] font-semibold">the best services</span>{" "}
              for developers and publishers.
            </p>
            <p>
              We help game creators reach more players through professional
              porting, marketing, and publishing services.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              onClick={handleOpenOldVersion}
              className="bg-[#ff007e] hover:bg-[#e6006e] text-white font-bold text-lg px-12 py-6 h-auto rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#ff007e]/30"
            >
              Open old version of the site
            </Button>
          </motion.div>

          {/* Animated elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#ff007e] rounded-full opacity-60"
          />
          
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#ff007e] rounded-full opacity-40"
          />
        </div>
      </div>

      {/* Bottom info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-8 text-white/60 text-sm"
      >
        LYNXBYTEGAMES.EU
      </motion.div>
    </div>
  );
};

export default UnderDevelopment;
