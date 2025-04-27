
import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  return (
    <section className="bg-[#1A103C] py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-accent/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-accent to-purple-primary">
            We are an <span className="text-yellow-400">experienced team...</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mb-16">
            ...of gaming industry veterans, passionate about porting and publishing games on consoles. 
            Our mission is to help developers reach new players on console platforms. With a strong focus on precision, 
            creativity, and technical excellence, we ensure smooth transitions to new systems, delivering immersive and 
            polished gaming experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
