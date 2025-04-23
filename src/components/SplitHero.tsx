import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Sparkles, MousePointer, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const SplitHero = () => {
  const navigate = useNavigate();
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | null>(null);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row min-h-screen pt-24"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Developer Section */}
      <motion.div 
        className={`hero-section group flex-1 bg-cover bg-center relative overflow-hidden transition-all duration-700 cursor-pointer ${hoverSide === 'right' ? 'md:flex-[0.7]' : (hoverSide === 'left' ? 'md:flex-[1.3]' : 'flex-1')}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1920')"
        }} 
        onClick={() => navigate('/publishing')}
        onMouseEnter={() => setHoverSide('left')}
        onMouseLeave={() => setHoverSide(null)}
        variants={itemVariants}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-primary/80 via-dark/60 to-dark/90 transition-all duration-700 opacity-90 group-hover:opacity-80"></div>
        
        {/* Particle effect overlay (dots) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] bg-repeat opacity-30"></div>
        
        {/* Animated neon border that appears on hover */}
        <div className="absolute inset-0 border-2 border-purple-primary/0 group-hover:border-purple-primary/60 transition-all duration-700 opacity-0 group-hover:opacity-100 z-10 scale-[0.98] group-hover:scale-100"></div>
        
        {/* Content */}
        <div className="hero-content relative z-20 p-8 md:p-12 flex flex-col h-full justify-center max-w-xl mx-auto md:ml-[10%] md:mx-0">
          <motion.div 
            className="mb-2 text-white/90 flex items-center"
            variants={itemVariants}
          >
            <Sparkles className="mr-2 text-purple-accent" size={20} /> 
            <span className="uppercase tracking-wider text-sm font-semibold">For Game Developers</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg transition-all duration-700 group-hover:translate-y-0 group-hover:scale-105 origin-left"
            variants={itemVariants}
          >
            I am a developer <br /> looking for publishing
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 max-w-md mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Get your game in front of millions. We handle marketing, distribution, and more.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <button 
              onClick={() => navigate('/publishing')}
              className="cta-button flex items-center shadow-xl shadow-purple-primary/40 hover:shadow-purple-primary/60 hover:translate-y-[-3px] bg-gradient-to-r from-purple-primary to-purple-accent text-white font-bold rounded-lg px-8 py-4 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Learn More <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-primary to-purple-primary blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-700"></span>
            </button>
          </motion.div>
          
          {/* Floating badge */}
          <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 text-white flex items-center shadow-lg">
            <ExternalLink size={14} className="mr-2"/> 
            <span className="text-sm font-medium">No Upfront Cost</span>
          </div>
          
          {/* Click indicator that appears on hover */}
          <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center text-white/90 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
            <MousePointer className="animate-bounce mr-2" size={16} />
            <span className="text-sm">Click to explore</span>
          </div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-primary/30 via-purple-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-primary/30 via-purple-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-16 translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      </motion.div>
      
      {/* Publisher Section */}
      <motion.div 
        className={`hero-section group flex-1 bg-cover bg-center relative overflow-hidden transition-all duration-700 cursor-pointer ${hoverSide === 'left' ? 'md:flex-[0.7]' : (hoverSide === 'right' ? 'md:flex-[1.3]' : 'flex-1')}`}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1920')"
        }} 
        onClick={() => navigate('/porting')}
        onMouseEnter={() => setHoverSide('right')}
        onMouseLeave={() => setHoverSide(null)}
        variants={itemVariants}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-accent/80 via-dark/60 to-dark/90 transition-all duration-700 opacity-90 group-hover:opacity-80"></div>
        
        {/* Particle effect overlay (diagonal lines) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmUgeDE9IjAiIHkxPSI0MCIgeDI9IjQwIiB5Mj0iMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] bg-repeat opacity-30"></div>
        
        {/* Animated neon border that appears on hover */}
        <div className="absolute inset-0 border-2 border-purple-accent/0 group-hover:border-purple-accent/60 transition-all duration-700 opacity-0 group-hover:opacity-100 z-10 scale-[0.98] group-hover:scale-100"></div>
        
        {/* Content */}
        <div className="hero-content relative z-20 p-8 md:p-12 flex flex-col h-full justify-center max-w-xl mx-auto md:mr-[10%] md:ml-auto">
          <motion.div 
            className="mb-2 text-white/90 flex items-center"
            variants={itemVariants}
          >
            <Sparkles className="mr-2 text-pink-500" size={20} /> 
            <span className="uppercase tracking-wider text-sm font-semibold">For Publishers & Developers</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg transition-all duration-700 group-hover:translate-y-0 group-hover:scale-105 origin-left"
            variants={itemVariants}
          >
            I am a publisher or developer <br /> looking for porting
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 max-w-md mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Expand your reach across platforms. Expert porting services for maximum compatibility.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <button 
              onClick={() => navigate('/porting')}
              className="cta-button flex items-center shadow-xl shadow-purple-accent/40 hover:shadow-purple-accent/60 hover:translate-y-[-3px] bg-gradient-to-r from-purple-accent to-pink-500 text-white font-bold rounded-lg px-8 py-4 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Learn More <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-accent to-purple-accent blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-700"></span>
            </button>
          </motion.div>
          
          {/* Floating badge */}
          <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 text-white flex items-center shadow-lg">
            <ExternalLink size={14} className="mr-2"/> 
            <span className="text-sm font-medium">Multi-platform</span>
          </div>
          
          {/* Click indicator that appears on hover */}
          <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center text-white/90 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
            <MousePointer className="animate-bounce mr-2" size={16} />
            <span className="text-sm">Click to explore</span>
          </div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-accent/30 via-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-accent/30 via-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-16 translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      </motion.div>
    </motion.div>
  );
};

export default memo(SplitHero);
