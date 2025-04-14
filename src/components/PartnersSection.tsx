
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    {
      name: "PlayStation",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png",
      description: "Official partner for PlayStation platforms",
      benefits: ["Developer Access Program", "Global Reach", "Marketing Support"]
    },
    {
      name: "Xbox",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1280px-Xbox_one_logo.svg.png",
      description: "Certified developer for Xbox consoles",
      benefits: ["ID@Xbox Program", "Cross-Platform Tools", "Technical Support"]
    },
    {
      name: "Nintendo Switch",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1280px-Nintendo_Switch_Logo.svg.png",
      description: "Authorized developer for Nintendo Switch",
      benefits: ["Nintendo Developer Portal", "Quality Assurance", "Publishing Support"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#16162d]/50 to-transparent backdrop-blur-lg relative overflow-hidden">
      {/* 3D-like grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwIEwxMDAgMCBMMTAwIDEwMCBMMCAxMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-accent/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple-primary/10 text-purple-accent mb-4 text-sm font-medium uppercase tracking-wider">Trusted By The Best</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-primary to-purple-accent bg-clip-text text-transparent mb-6">
            Official Partners
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-xl">
            We're proud to be official partners with the leading console platforms
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true }}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="partner-logo glass-card p-8 flex items-center justify-center w-60 h-32 hover:border-purple-primary/50 transition-all duration-300 cursor-pointer group">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-12 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300" 
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-[#16162d]/90 backdrop-blur-xl border border-purple-primary/30 text-white shadow-xl">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-white text-xl font-semibold">{partner.name}</h4>
                      <p className="text-white/70 text-sm">{partner.description}</p>
                    </div>
                    <div className="pt-2">
                      <h5 className="text-sm font-medium mb-2 text-purple-accent">Platform Benefits:</h5>
                      <ul className="space-y-2">
                        {partner.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
