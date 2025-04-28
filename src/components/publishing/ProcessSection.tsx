
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "1.",
    title: "FIRST MEETING & GAME ANALYSIS",
    description: "We gather all the necessary information about your game, including its community, reviews, future plans, etc."
  },
  {
    number: "2.",
    title: "AGREEMENT NEGOTIATION",
    description: "Together, we negotiate the terms and profit-sharing agreement followed by signing a licensing contract."
  },
  {
    number: "3.",
    title: "PORTING PROCESS",
    description: "Our team ports the game to the required consoles. The costs are covered by us or in collaboration with the publisher, meaning this step is entirely free for you as the developer."
  },
  {
    number: "4.",
    title: "MARKETING & PR",
    description: "We promote the game through marketing campaigns and PR, with all costs covered by us. Additionally, we grow the community to ensure a strong launch on consoles."
  },
  {
    number: "5.",
    title: "GAME RELEASE & REVENUE SHARE",
    description: "The game is released, and you start receiving passive revenue from sales monthly."
  },
  {
    number: "6.",
    title: "POST-RELEASE SUPPORT",
    description: "After the game's release, we keep developing it on consoles, participating in promotions and bundles to boost sales, and help port additional content like DLCs and new features."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 relative">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/20 to-purple-accent/20 blur-3xl"></div>
      </div>      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How can <span className="text-yellow-400">we help?</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1E1B4B]/60 backdrop-blur-sm rounded-2xl p-6 relative"
            >
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
              <h2 className='mt-4 text-yellow-500'>COST: 0$</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
