
import React from 'react';

const CompanyInfo = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            About <span className="text-highlight">LYNXBYTE GAMES</span>
          </h2>
          
          <p className="text-3xl text-white/80 mb-5 font-semibold">
            We help developers reach more players!
          </p>
          
          <p className="text-lg text-white/80 mb-8">
            Publish your game on consoles for free! We handle game porting, marketing, publishers, and all the other details.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-purple-primary/10 p-6 rounded-lg border border-purple-primary/30 hover:border-highlight transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">Publishing Excellence</h3>
              <p className="text-white/70">
                Our publishing team has decades of combined experience bringing games to market successfully.
              </p>
            </div>
            
            <div className="bg-purple-accent/10 p-6 rounded-lg border border-purple-accent/30 hover:border-highlight transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">Porting Expertise</h3>
              <p className="text-white/70">
                We specialize in bringing your games to new platforms with optimal performance and native feel.
              </p>
            </div>
            
            <div className="bg-highlight/10 p-6 rounded-lg border border-highlight/30 hover:border-highlight transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-white">Developer Focused</h3>
              <p className="text-white/70">
                We believe in transparent partnerships that put creators first while maximizing reach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
