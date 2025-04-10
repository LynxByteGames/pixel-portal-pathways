
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SplitHero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-20">
      {/* Developer Section */}
      <div 
        className="hero-section group flex-1 bg-cover bg-center relative overflow-hidden transition-all duration-500" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')"
        }} 
        onClick={() => navigate('/publishing')}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-primary/80 via-dark/60 to-dark/80 transition-all duration-500 group-hover:opacity-90"></div>
        
        <div className="hero-content relative z-20 p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg transition-all duration-500 group-hover:translate-y-0">
            I am a developer <br /> looking for publishing
          </h2>
          
          <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <p className="text-lg text-white/90 max-w-md mb-8 shadow-text">
              Get your game in front of millions. We handle marketing, distribution, and more.
            </p>
            
            <button className="cta-button flex items-center shadow-xl shadow-purple-primary/20 hover:shadow-purple-primary/30 hover:translate-y-[-3px] bg-purple-primary text-white">
              Learn More <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Publisher Section */}
      <div 
        className="hero-section group flex-1 bg-cover bg-center relative overflow-hidden transition-all duration-500" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')"
        }} 
        onClick={() => navigate('/porting')}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-accent/80 via-dark/60 to-dark/80 transition-all duration-500 group-hover:opacity-90"></div>
        
        <div className="hero-content relative z-10 p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg transition-all duration-500 group-hover:translate-y-0">
            I am a publisher or developer <br /> looking for porting
          </h2>
          
          <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <p className="text-lg text-white/90 max-w-md mb-8 shadow-text">
              Expand your reach across platforms. Expert porting services for maximum compatibility.
            </p>
            
            <button className="cta-button flex items-center shadow-xl shadow-purple-accent/20 hover:shadow-purple-accent/30 hover:translate-y-[-3px] bg-purple-accent text-white">
              Learn More <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitHero;
