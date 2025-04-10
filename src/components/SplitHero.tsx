
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SplitHero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-16" style={{ 
      background: 'linear-gradient(135deg, #6a79f3 0%, #c083e2 100%)'
    }}>
      {/* Developer Section */}
      <div 
        className="hero-section flex-1 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')" }}
        onClick={() => navigate('/publishing')}
      >
        <div className="absolute inset-0 bg-dark opacity-70"></div>
        <img 
          src="/lovable-uploads/a4fd954e-aeb8-4f66-b785-a3cad28cfde0.png" 
          alt="Game controllers and devices" 
          className="absolute right-0 bottom-0 w-2/3 md:w-1/2 z-10"
        />
        <div className="hero-content relative z-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            I am a developer <br/> looking for publishing
          </h2>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg text-white/90 max-w-md mx-auto mb-6">
              Get your game in front of millions. We handle marketing, distribution, and more.
            </p>
          </div>
          <button className="cta-button flex items-center">
            Learn More <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
      
      {/* Publisher Section */}
      <div 
        className="hero-section flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')" }}
        onClick={() => navigate('/porting')}
      >
        <div className="absolute inset-0 bg-dark opacity-70"></div>
        <div className="hero-content relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            I am a publisher or developer <br/> looking for porting
          </h2>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg text-white/90 max-w-md mx-auto mb-6">
              Expand your reach across platforms. Expert porting services for maximum compatibility.
            </p>
          </div>
          <button className="cta-button flex items-center">
            Learn More <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplitHero;
