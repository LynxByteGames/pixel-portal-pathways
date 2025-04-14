
import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const portfolioItems = [
  { title: "Game 1", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
  { title: "Game 2", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
  { title: "Game 3", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
  { title: "Game 4", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
  { title: "Game 5", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
  { title: "Game 6", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
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
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
          Portfolio
        </h2>
        
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
              loading="lazy"
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
