
import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';
import { PanelRight, Gamepad2 } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const games = [
  { 
    id: "game-1",
    title: "Game Alpha", 
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Action RPG",
    platforms: ["PlayStation", "Xbox", "PC"]
  },
  { 
    id: "game-2",
    title: "Game Beta", 
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Strategy",
    platforms: ["Nintendo Switch", "PC"] 
  },
  { 
    id: "game-3",
    title: "Game Gamma", 
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Puzzle",
    platforms: ["Mobile", "PC"] 
  },
  { 
    id: "game-4",
    title: "Game Delta", 
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Adventure",
    platforms: ["PlayStation", "Xbox", "Nintendo Switch"] 
  },
  { 
    id: "game-5",
    title: "Game Epsilon", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Simulation",
    platforms: ["PC", "Mobile"] 
  },
  { 
    id: "game-6",
    title: "Game Zeta", 
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Platformer",
    platforms: ["PlayStation", "Xbox", "Nintendo Switch", "PC"] 
  },
];

// Filter buttons
const categories = ["All", "Action RPG", "Strategy", "Puzzle", "Adventure", "Simulation", "Platformer"];

// Pre-calculated animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      damping: 25,
      stiffness: 100,
      duration: 0.4
    }
  }
};

const GameCard = React.memo(({ game, index }) => {
  return (
    <motion.div
      className="will-change-transform"
      variants={itemVariants}
      layout
    >
      <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:scale-[1.03] hover:border-purple-primary/40 hover:shadow-lg hover:shadow-purple-primary/20 group h-full will-change-transform">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={game.image} 
            alt={game.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1 will-change-transform"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>
          
          {/* Platform badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {game.platforms.map((platform, i) => (
              <span 
                key={`${game.id}-platform-${i}`}
                className="bg-black/40 backdrop-blur-sm text-white/90 text-xs px-2 py-1 rounded-full border border-white/10"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
        <CardContent className="p-5 relative">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-accent transition-colors">{game.title}</h3>
          <p className="text-white/60 mb-2">{game.category}</p>
          
          <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Gamepad2 size={16} className="text-purple-primary" />
              <span className="text-white/70 text-sm">Featured Game</span>
            </div>
            <button className="text-purple-accent hover:text-white flex items-center gap-1 text-sm">
              Details <PanelRight size={14} />
            </button>
          </div>
          
          {/* Decorative corner accent */}
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </CardContent>
      </Card>
    </motion.div>
  );
});

GameCard.displayName = 'GameCard';

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
        
        {/* Category filter - Desktop */}
        <ScrollArea className="w-full hidden md:block mb-10">
          <div className="flex justify-center space-x-2">
            {categories.map((category, index) => (
              <button
                key={`category-desktop-${index}`}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-purple-primary text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollArea>
        
        {/* Category filter - Mobile */}
        <div className="md:hidden mb-8 px-4">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white appearance-none"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "1.5em 1.5em"
            }}
          >
            {categories.map((category, index) => (
              <option key={`category-mobile-${index}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
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
                  <GameCard game={game} index={0} />
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
