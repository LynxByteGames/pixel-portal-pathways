
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import GameCard from '@/components/portfolio/GameCard';
import CategoryFilter from '@/components/portfolio/CategoryFilter';
import { games, categories, containerVariants } from '@/data/gamesData';

const PortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter games by category - memoized to prevent recalculation on re-renders
  const filteredGames = useMemo(() => {
    return activeCategory === "All" 
      ? games 
      : games.filter(game => game.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-24 relative overflow-hidden will-change-transform" id="portfolio">
      {/* Background effect */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-5"
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}  
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#16162d]/80 to-[#111122]/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple-primary/10 text-purple-accent mb-4 text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-primary to-purple-accent bg-clip-text text-transparent">
            Games We've Worked On
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-xl">
            We've helped bring these titles to multiple platforms
          </p>
        </motion.div>
        
        {/* Category filters */}
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        {/* Desktop grid with layout animation */}
        <motion.div 
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 will-change-transform"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          layout
        >
          {filteredGames.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </motion.div>
        
        {/* Mobile carousel with performance optimizations */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredGames.map((game, index) => (
                <CarouselItem key={game.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <GameCard game={game} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="relative static left-0 right-auto bg-purple-primary/20 hover:bg-purple-primary/40 border-purple-primary/30 text-white" />
              <CarouselNext className="relative static right-0 left-auto bg-purple-primary/20 hover:bg-purple-primary/40 border-purple-primary/30 text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PortfolioShowcase);
