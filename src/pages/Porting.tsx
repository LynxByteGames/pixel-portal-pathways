
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, Laptop, Smartphone, Gamepad } from "lucide-react";
import { Link } from "react-router-dom";

const Porting = () => {
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')" }}>
          <div className="absolute inset-0 bg-dark opacity-70"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <Link to="/" className="inline-flex items-center text-purple-primary hover:text-purple-accent transition-colors mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Game Porting Services
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Expand your reach across platforms with our expert porting solutions.
            </p>
          </div>
        </div>
        
        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">
                Porting <span className="text-highlight">Information</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-lg text-white/80">
                  At PixelPortal, we specialize in bringing your games to new platforms while maintaining the core 
                  experience that makes your title special. Our technical experts handle the complexities of 
                  cross-platform development so you can focus on creating.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-purple-primary/10 border border-purple-primary/30 rounded-lg p-6 text-center">
                    <Laptop size={40} className="text-highlight mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">PC Platforms</h3>
                    <p className="text-white/70">
                      Windows, macOS, Linux, Steam, Epic Games Store, and more.
                    </p>
                  </div>
                  
                  <div className="bg-purple-accent/10 border border-purple-accent/30 rounded-lg p-6 text-center">
                    <Smartphone size={40} className="text-highlight mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Mobile Platforms</h3>
                    <p className="text-white/70">
                      iOS, Android, optimized for various device specifications.
                    </p>
                  </div>
                  
                  <div className="bg-highlight/10 border border-highlight/30 rounded-lg p-6 text-center">
                    <Gamepad size={40} className="text-highlight mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Console Platforms</h3>
                    <p className="text-white/70">
                      PlayStation, Xbox, Nintendo Switch, and upcoming platforms.
                    </p>
                  </div>
                </div>
                
                <div className="bg-purple-primary/10 border border-purple-primary/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Our Porting Services Include</h3>
                  
                  <ul className="space-y-3">
                    {[
                      "Full technical analysis of your game's architecture",
                      "Platform-specific optimizations for performance",
                      "UI/UX adaptations for different input methods and screen sizes",
                      "Platform certification and compliance management",
                      "QA testing across all target platforms",
                      "Post-launch support and updates"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-highlight shrink-0 mr-3 mt-0.5" />
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Why Choose Our Porting Services?</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-dark border border-white/20 rounded-lg p-5">
                      <h4 className="text-lg font-medium text-white mb-2">Technical Expertise</h4>
                      <p className="text-white/70">
                        Our team has years of experience working with various engines and technologies including Unity, Unreal, custom engines, and more.
                      </p>
                    </div>
                    
                    <div className="bg-dark border border-white/20 rounded-lg p-5">
                      <h4 className="text-lg font-medium text-white mb-2">Platform Relationships</h4>
                      <p className="text-white/70">
                        We maintain strong relationships with platform holders to ensure smooth certification processes.
                      </p>
                    </div>
                    
                    <div className="bg-dark border border-white/20 rounded-lg p-5">
                      <h4 className="text-lg font-medium text-white mb-2">Flexible Engagement Models</h4>
                      <p className="text-white/70">
                        Whether you need a complete porting solution or technical assistance for your team, we can adapt to your needs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Ready to expand your game to new platforms?</h3>
                  <button className="bg-highlight text-dark font-bold px-8 py-3 rounded-md hover:bg-highlight/80 transition-colors">
                    Get a Porting Quote
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

export default Porting;
