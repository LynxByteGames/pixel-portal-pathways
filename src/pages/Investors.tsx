
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Stats from '@/components/Stats';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Investors = () => {
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-primary to-purple-accent">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Invest in the Future of Gaming
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Join us on our mission to transform the game publishing and porting landscape
              </p>
            </div>
          </div>
        </section>
        
        {/* Investment Opportunities */}
        <section className="py-16 bg-dark">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
              Investment Opportunities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-purple-primary/10 border border-purple-primary/30 hover:border-highlight transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Market Growth</h3>
                  <p className="text-white/70 mb-4">
                    The global gaming market is projected to reach $300 billion by 2026, with a CAGR of 10.5%.
                  </p>
                  <a href="#" className="flex items-center text-highlight hover:underline">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-accent/10 border border-purple-accent/30 hover:border-highlight transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Strategic Expansion</h3>
                  <p className="text-white/70 mb-4">
                    We're expanding our porting services to include cloud gaming platforms and VR/AR technologies.
                  </p>
                  <a href="#" className="flex items-center text-highlight hover:underline">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-highlight/10 border border-highlight/30 hover:border-highlight transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Revenue Model</h3>
                  <p className="text-white/70 mb-4">
                    Our revenue-sharing model creates sustainable income streams with our growing portfolio of partners.
                  </p>
                  <a href="#" className="flex items-center text-highlight hover:underline">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Company Performance */}
        <Stats />
        
        {/* Contact CTA */}
        <section className="py-16 bg-dark">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Ready to Explore Investment Opportunities?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Contact our investor relations team for more details on how you can be part of our growth story.
              </p>
              <a 
                href="mailto:investors@lynxbytegames.com" 
                className="inline-block bg-highlight text-dark font-bold px-8 py-3 rounded-md transition-all duration-300 hover:bg-highlight/80"
              >
                Contact Investor Relations
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Investors;
