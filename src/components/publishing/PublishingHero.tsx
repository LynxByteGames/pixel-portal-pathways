
import React from 'react';
import { motion } from 'framer-motion';

const PublishingHero = () => {
  return (
<section className="relative min-h-[100vh] bg-gradient-to-br from-[#6a79f3] via-[#191919] to-[#c083e2] overflow-hidden pt-8">
<div className=" mx-auto px-4 h-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <img 
              src="/hero_img.png" 
              alt="Gaming devices"
              className="max-w-[80%] h-auto hidden z-50 md:block"
              
            />
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white z-50"
          >
            <h1 className="text-6xl lg:text-6xl font-bold mb-6">
              We help developers{" "}
              <span className="text-yellow-400">reach more players</span>
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              Publish your game on consoles for free! We handle game porting,
              marketing, publishers, and all the other details.
            </p>
            <a
  href="https://drive.google.com/file/d/1O7OCqwpo_w5KWdp6Q4bGRic_nbGcxV2f/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-gradient-to-r from-purple-primary to-purple-accent hover:opacity-90 text-white font-semibold text-lg px-8 py-6 h-auto rounded-lg"
>
  Open our pitch deck
</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PublishingHero;
