
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const games = [
  { 
    title: "Game Alpha", 
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Action RPG" 
  },
  { 
    title: "Game Beta", 
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Strategy" 
  },
  { 
    title: "Game Gamma", 
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Puzzle" 
  },
  { 
    title: "Game Delta", 
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Adventure" 
  },
  { 
    title: "Game Epsilon", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Simulation" 
  },
  { 
    title: "Game Zeta", 
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Platformer" 
  },
];

const PortfolioShowcase = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="portfolio">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-primary via-purple-accent to-blue-500 bg-clip-text text-transparent">
            A Few Games We Worked On
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We've helped bring these titles to multiple platforms
          </p>
        </div>
        
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {games.map((game, index) => (
              <Card key={index} className="overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.03] hover:border-purple-primary/40 hover:shadow-lg hover:shadow-purple-primary/20 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-accent transition-colors">{game.title}</h3>
                  <p className="text-white/60">{game.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {games.map((game, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={game.image} 
                        alt={game.title} 
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-bold text-white">{game.title}</h3>
                      <p className="text-white/60">{game.category}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="relative static left-0 right-auto bg-purple-primary/20 hover:bg-purple-primary/40 border-purple-primary/30 text-white" />
              <CarouselNext className="relative static right-0 left-auto bg-purple-primary/20 hover:bg-purple-primary/40 border-purple-primary/30 text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
