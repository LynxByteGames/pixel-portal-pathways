
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SplitHero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col md:flex-row h-screen pt-16">
      {/* Developer Section */}
      <div 
        className="hero-section flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')" }}
        onClick={() => navigate('/publishing')}
      >
        <div className="hero-content">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            I am a developer <br/> looking for publishing
          </h2>
          <div className="hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        <div className="hero-content">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            I am a publisher or developer <br/> looking for porting
          </h2>
          <div className="hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
