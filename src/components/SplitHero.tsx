
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Sparkles, MousePointer } from 'lucide-react';

const SplitHero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-24">
      {/* Developer Section */}
      <div 
        className="hero-section group flex-1 bg-cover bg-center relative overflow-hidden transition-all duration-500 cursor-pointer" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')"
        }} 
        onClick={() => navigate('/publishing')}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-primary/80 via-dark/60 to-dark/80 transition-all duration-500 group-hover:opacity-90"></div>
        
        {/* Animated neon border that appears on hover */}
        <div className="absolute inset-0 border-2 border-purple-primary/0 group-hover:border-purple-primary/50 transition-all duration-500 opacity-0 group-hover:opacity-100 z-10"></div>
        
        {/* Content */}
        <div className="hero-content relative z-20 p-8 md:p-12 flex flex-col h-full justify-center">
          <div className="mb-2 text-purple-accent/80 flex items-center">
            <Sparkles className="mr-2 animate-pulse" size={20} /> 
            <span className="uppercase tracking-wider text-sm font-semibold">For Game Developers</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:text-gradient">
            I am a developer <br /> looking for publishing
          </h2>
          
          <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <p className="text-lg text-white/90 max-w-md mb-8 shadow-text">
              Get your game in front of millions. We handle marketing, distribution, and more.
            </p>
            
            <button className="cta-button flex items-center shadow-xl shadow-purple-primary/30 hover:shadow-purple-primary/50 hover:translate-y-[-3px] bg-gradient-to-r from-purple-primary to-purple-accent text-white rounded-lg px-6 py-3 group-hover:animate-pulse-subtle">
              Learn More <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </button>
          </div>
          
          {/* Click indicator that appears on hover */}
          <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center text-white/70">
            <MousePointer className="animate-bounce mr-2" size={16} />
            <span className="text-sm">Click to explore</span>
          </div>
        </div>
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
      
      {/* Publisher Section */}
      <div 
        className="hero-section group flex-1 bg-cover bg-center relative overflow-hidden transition-all duration-500 cursor-pointer" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')"
        }} 
        onClick={() => navigate('/porting')}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-accent/80 via-dark/60 to-dark/80 transition-all duration-500 group-hover:opacity-90"></div>
        
        {/* Animated neon border that appears on hover */}
        <div className="absolute inset-0 border-2 border-purple-accent/0 group-hover:border-purple-accent/50 transition-all duration-500 opacity-0 group-hover:opacity-100 z-10"></div>
        
        {/* Content */}
        <div className="hero-content relative z-10 p-8 md:p-12 flex flex-col h-full justify-center">
          <div className="mb-2 text-pink-500/80 flex items-center">
            <Sparkles className="mr-2 animate-pulse" size={20} /> 
            <span className="uppercase tracking-wider text-sm font-semibold">For Publishers & Developers</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:text-gradient">
            I am a publisher or developer <br /> looking for porting
          </h2>
          
          <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <p className="text-lg text-white/90 max-w-md mb-8 shadow-text">
              Expand your reach across platforms. Expert porting services for maximum compatibility.
            </p>
            
            <button className="cta-button flex items-center shadow-xl shadow-purple-accent/30 hover:shadow-purple-accent/50 hover:translate-y-[-3px] bg-gradient-to-r from-purple-accent to-pink-500 text-white rounded-lg px-6 py-3 group-hover:animate-pulse-subtle">
              Learn More <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </button>
          </div>
          
          {/* Click indicator that appears on hover */}
          <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center text-white/70">
            <MousePointer className="animate-bounce mr-2" size={16} />
            <span className="text-sm">Click to explore</span>
          </div>
        </div>
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default SplitHero;
