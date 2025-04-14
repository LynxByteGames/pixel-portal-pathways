
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, Laptop, Smartphone, Gamepad, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Porting = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
    }
  };
  
  const platformData = [
    {
      icon: Laptop,
      title: "PC Platforms",
      description: "Windows, macOS, Linux, Steam, Epic Games Store, and more.",
      gradientFrom: "purple-primary",
      gradientTo: "purple-accent"
    },
    {
      icon: Smartphone,
      title: "Mobile Platforms",
      description: "iOS, Android, optimized for various device specifications.",
      gradientFrom: "purple-accent",
      gradientTo: "pink-500"
    },
    {
      icon: Gamepad,
      title: "Console Platforms",
      description: "PlayStation, Xbox, Nintendo Switch, and upcoming platforms.",
      gradientFrom: "highlight",
      gradientTo: "purple-primary"
    }
  ];
  
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-accent/80 via-dark/60 to-dark/90 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmUgeDE9IjAiIHkxPSI0MCIgeDI9IjQwIiB5Mj0iMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] bg-repeat opacity-30"></div>
          
          <motion.div 
            className="container mx-auto px-4 md:px-6 relative z-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-flex items-center text-purple-accent hover:text-purple-primary transition-colors mb-4 group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-purple-primary after:transition-all group-hover:after:w-full">
                Back to Home
              </span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Game <span className="bg-gradient-to-r from-purple-accent to-pink-500 bg-clip-text text-transparent">Porting</span> Services
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Expand your reach across platforms with our expert porting solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <button className="bg-gradient-to-r from-purple-accent to-pink-500 text-white font-bold rounded-lg px-8 py-4 group relative overflow-hidden shadow-xl shadow-purple-accent/20 hover:shadow-purple-accent/40 hover:translate-y-[-3px] transition-all">
                <span className="relative z-10 flex items-center">
                  Get a Porting Quote <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-accent to-purple-accent blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-700"></span>
              </button>
            </motion.div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute top-10 right-10 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 text-white flex items-center shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Sparkles size={14} className="mr-2 text-purple-accent"/> 
              <span className="text-sm font-medium">Multi-platform</span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Content Section */}
        <motion.section 
          className="py-20"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-white mb-8"
                variants={itemVariants}
              >
                Porting <span className="bg-gradient-to-r from-purple-accent to-pink-500 bg-clip-text text-transparent">Information</span>
              </motion.h2>
              
              <div className="space-y-12">
                <motion.p 
                  className="text-lg text-white/80"
                  variants={itemVariants}
                >
                  At PixelPortal, we specialize in bringing your games to new platforms while maintaining the core 
                  experience that makes your title special. Our technical experts handle the complexities of 
                  cross-platform development so you can focus on creating.
                </motion.p>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                  variants={itemVariants}
                >
                  {platformData.map((platform, index) => (
                    <div 
                      key={index} 
                      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-purple-primary/50 group text-center"
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${platform.gradientFrom} to-${platform.gradientTo} flex items-center justify-center mx-auto mb-4 shadow-lg shadow-${platform.gradientFrom}/20 group-hover:shadow-${platform.gradientFrom}/40 transition-all duration-500 group-hover:scale-110`}>
                        <platform.icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{platform.title}</h3>
                      <p className="text-white/70">
                        {platform.description}
                      </p>
                      
                      {/* Decorative corner accent */}
                      <div className="absolute bottom-3 right-3 w-20 h-20 bg-gradient-to-tl from-purple-primary/20 to-transparent rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-purple-accent/50 group"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Our Porting Services Include</h3>
                  
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
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-white mb-4">Why Choose Our Porting Services?</h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        title: "Technical Expertise",
                        description: "Our team has years of experience working with various engines and technologies including Unity, Unreal, custom engines, and more."
                      },
                      {
                        title: "Platform Relationships",
                        description: "We maintain strong relationships with platform holders to ensure smooth certification processes."
                      },
                      {
                        title: "Flexible Engagement Models",
                        description: "Whether you need a complete porting solution or technical assistance for your team, we can adapt to your needs."
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-purple-accent/50 group">
                        <h4 className="text-lg font-medium text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{item.title}</h4>
                        <p className="text-white/70">
                          {item.description}
                        </p>
                        
                        {/* Decorative corner accent */}
                        <div className="absolute bottom-3 right-3 w-20 h-20 bg-gradient-to-tl from-purple-accent/20 to-transparent rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mt-16 text-center"
                  variants={itemVariants}
                >
                  <div className="relative">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-accent/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Ready to expand your game to new platforms?</h3>
                    <button className="bg-gradient-to-r from-purple-accent to-pink-500 text-white font-bold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-accent/30 hover:-translate-y-1 transition-all duration-300 group btn-shine">
                      <span className="flex items-center">
                        Get a Porting Quote <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Porting;
