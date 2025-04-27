
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PublishingHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-[#2B1F5C] to-[#1E1B4B] overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-purple-primary/30 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-accent/30 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.7, 0.5] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full shadow-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.8)"
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-purple-primary/30 rounded-2xl blur-xl -z-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img 
                src="/lovable-uploads/28ecd23a-05ff-48fb-bdf2-d0890460ce73.png" 
                alt="Gaming devices"
                className="max-w-[90%] h-auto rounded-2xl z-10 relative"
              />
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              We help developers{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">reach more players</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Publish your game on consoles for free! We handle game porting,
              marketing, publishers, and all the other details.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="relative bg-gradient-to-r from-purple-primary to-purple-accent text-white font-semibold text-lg px-8 py-6 h-auto rounded-xl overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Publish Your Game
                    <Zap className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                  </span>
                  {/* Shine effect */}
                  <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-purple-accent/50 text-white hover:text-white hover:bg-purple-accent/20 font-semibold text-lg px-8 py-6 h-auto rounded-xl overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Learn More
                    <Sparkles className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishingHero;
