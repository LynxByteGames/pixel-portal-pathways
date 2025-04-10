
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Publishing = () => {
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')" }}>
          <div className="absolute inset-0 bg-dark opacity-70"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <Link to="/" className="inline-flex items-center text-purple-primary hover:text-purple-accent transition-colors mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Game Publishing Services
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Take your game to the next level with our comprehensive publishing solutions.
            </p>
          </div>
        </div>
        
        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">
                Publishing <span className="text-highlight">Information</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-lg text-white/80">
                  At PixelPortal, we understand the challenges indie developers face when bringing their games to market. 
                  Our publishing services are designed to handle the business aspects of game release, allowing you to 
                  focus on what you do best - creating amazing games.
                </p>
                
                <div className="bg-purple-primary/10 border border-purple-primary/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">What We Offer</h3>
                  
                  <ul className="space-y-3">
                    {[
                      "Global distribution across major platforms",
                      "Marketing and PR campaigns",
                      "Community management and player engagement",
                      "Localization services for global reach",
                      "Funding opportunities for promising projects",
                      "QA testing and certification support"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-highlight shrink-0 mr-3 mt-0.5" />
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Our Publishing Process</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-dark border border-white/20 rounded-lg p-5">
                      <div className="text-highlight text-2xl font-bold mb-2">01</div>
                      <h4 className="text-lg font-medium text-white mb-2">Submission</h4>
                      <p className="text-white/70">
                        Submit your game for evaluation. We'll review your concept, prototype, or finished game.
                      </p>
                    </div>
                    
                    <div className="bg-dark border border-white/20 rounded-lg p-5">
                      <div className="text-highlight text-2xl font-bold mb-2">02</div>
                      <h4 className="text-lg font-medium text-white mb-2">Evaluation</h4>
                      <p className="text-white/70">
                        Our team assesses market potential, quality, and fit with our publishing portfolio.
                      </p>
                    </div>
                    
                    <div className="bg-dark border border-white/20 rounded-lg p-5">
                      <div className="text-highlight text-2xl font-bold mb-2">03</div>
                      <h4 className="text-lg font-medium text-white mb-2">Partnership</h4>
                      <p className="text-white/70">
                        We create a custom publishing plan tailored to your game's unique needs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Ready to publish your game?</h3>
                  <button className="bg-highlight text-dark font-bold px-8 py-3 rounded-md hover:bg-highlight/80 transition-colors">
                    Submit Your Game
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Publishing;
