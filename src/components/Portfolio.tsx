
import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const portfolioItems = [
  { title: "Gold Mining Simulator", image: "/goldmining_sim.jpg" },
  { title: "Dig Deep", image: "/capsule_616x353.jpg" },
  { title: "Hole.io", image: "/holeio.jpg" },
  { title: "Astro Miner", image: "/astro_minerr.jpg" },
  { title: "Wild West Dynasty", image: "/header.jpg" },
  { title: "Zombie Raft", image: "./zombie_raft.png" },
];

const Portfolio = () => {
  // Pre-calculated animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 20, 
        stiffness: 80 
      }
    }
  };

  return (
    <section className="py-16 bg-dark will-change-transform">
      <div className="container mx-auto px-4 md:px-6 text-center">
      <span className="inline-block px-4 py-1 rounded-full bg-purple-primary/10 text-purple-accent mb-4 text-sm font-medium uppercase tracking-wider">
      PORTFOLIO
    </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
        One of the games we worked on        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={`portfolio-item-${index}`}
              className="will-change-transform"
              variants={cardVariants}
            >
              <Card className="overflow-hidden bg-purple-primary/10 border border-purple-primary/30 transition-transform duration-300 hover:scale-105 will-change-transform">
                <div className="h-48 w-full relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                  <h3 className="absolute bottom-3 left-3 text-white font-bold text-xl">{item.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Portfolio);
