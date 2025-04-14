
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { PanelRight, Gamepad2 } from 'lucide-react';
import { Game } from '@/types/game';

// Animation variants for the card
export const itemVariants = {
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

export interface GameCardProps {
  game: Game;
  index: number;
}

const GameCard = ({ game, index }: GameCardProps) => {
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
};

export default React.memo(GameCard);
