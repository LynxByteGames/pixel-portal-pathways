
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const portfolioItems = [
  { title: "Game 1", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
  { title: "Game 2", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
  { title: "Game 3", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
  { title: "Game 4", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
  { title: "Game 5", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
  { title: "Game 6", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" },
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
          Portfolio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-purple-primary/10 border border-purple-primary/30 transition-all duration-300 hover:scale-105">
              <div className="h-48 w-full relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                <h3 className="absolute bottom-3 left-3 text-white font-bold text-xl">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
