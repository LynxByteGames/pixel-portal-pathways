
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const PartnersSection = () => {
  const partners = [
    {
      name: "PlayStation",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png",
      description: "Official partner for PlayStation platforms"
    },
    {
      name: "Xbox",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1280px-Xbox_one_logo.svg.png",
      description: "Certified developer for Xbox consoles"
    },
    {
      name: "Nintendo Switch",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1280px-Nintendo_Switch_Logo.svg.png",
      description: "Authorized developer for Nintendo Switch"
    }
  ];

  return (
    <section className="py-16 bg-white/5 backdrop-blur-lg relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-primary to-purple-accent bg-clip-text text-transparent mb-2">
            Official Partners
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We're proud to be official partners with the leading console platforms
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div className="partner-logo bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer w-44 h-24">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-10 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-dark/90 border border-purple-primary/30 text-white">
                <div className="flex justify-between space-x-4">
                  <div>
                    <h4 className="text-white font-semibold">{partner.name}</h4>
                    <p className="text-white/70 text-sm">{partner.description}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
