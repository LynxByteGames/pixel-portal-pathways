
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pb-16 pt-32 md:pt-40 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-primary via-purple-accent to-pink-500 bg-clip-text text-transparent animate-fadeIn">
            About Us
          </h1>
          
          <p className="text-xl text-white/80 leading-relaxed mb-4 animate-fadeIn" style={{animationDelay: "0.2s"}}>
            We are an experienced team of gaming industry veterans, passionate about porting and publishing 
            games on consoles. Our mission is to help developers & publishers reach new players on console 
            platforms. With a strong focus on precision, creativity, and technical excellence, we ensure 
            smooth transitions to new systems, delivering immersive and polished gaming experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fadeIn" style={{animationDelay: "0.4s"}}>
            <Button className="bg-purple-primary hover:bg-purple-primary/90 shadow-lg shadow-purple-primary/20 border border-purple-primary/30 text-white px-8 py-6 h-auto rounded-xl group transition-all duration-300 btn-shine">
              Learn More
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-purple-accent/50 text-purple-accent hover:text-white hover:bg-purple-accent/20 px-8 py-6 h-auto rounded-xl transition-all duration-300">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
