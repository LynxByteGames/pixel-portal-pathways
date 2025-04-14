
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, Upload, ChevronRight, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Publishing = () => {
  const navigate = useNavigate();
  
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

  const handleSubmitGame = () => {
    // In a real app, this would open a form or modal
    // For now, we'll just show an alert
    alert("Thank you for your interest! Our team will contact you shortly.");
  };
  
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-primary/80 via-dark/60 to-dark/90 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] bg-repeat opacity-30"></div>
          
          <motion.div 
            className="container mx-auto px-4 md:px-6 relative z-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-flex items-center text-purple-primary hover:text-purple-accent transition-colors mb-4 group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-purple-accent after:transition-all group-hover:after:w-full">
                Back to Home
              </span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Game <span className="bg-gradient-to-r from-purple-primary to-purple-accent bg-clip-text text-transparent">Publishing</span> Services
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Take your game to the next level with our comprehensive publishing solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <button 
                onClick={handleSubmitGame}
                className="bg-gradient-to-r from-purple-primary to-purple-accent text-white font-bold rounded-lg px-8 py-4 group relative overflow-hidden shadow-xl shadow-purple-primary/20 hover:shadow-purple-primary/40 hover:translate-y-[-3px] transition-all"
              >
                <span className="relative z-10 flex items-center">
                  Submit Your Game <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-primary to-purple-primary blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-700"></span>
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
              <span className="text-sm font-medium">No Upfront Cost</span>
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
                Publishing <span className="bg-gradient-to-r from-purple-primary to-purple-accent bg-clip-text text-transparent">Information</span>
              </motion.h2>
              
              <div className="space-y-8">
                <motion.p 
                  className="text-lg text-white/80"
                  variants={itemVariants}
                >
                  At PixelPortal, we understand the challenges indie developers face when bringing their games to market. 
                  Our publishing services are designed to handle the business aspects of game release, allowing you to 
                  focus on what you do best - creating amazing games.
                </motion.p>
                
                <motion.div 
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-purple-primary/50 group"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">What We Offer</h3>
                  
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
                        <CheckCircle size={20} className="text-purple-accent shrink-0 mr-3 mt-0.5" />
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute bottom-3 right-3 w-20 h-20 bg-gradient-to-tl from-purple-primary/20 to-transparent rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-white mb-4">Our Publishing Process</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-purple-primary/50 group">
                      <div className="service-icon w-16 h-16 rounded-full bg-gradient-to-br from-purple-primary to-purple-accent flex items-center justify-center mb-6 shadow-lg shadow-purple-primary/20 group-hover:shadow-purple-primary/40 transition-all duration-500 group-hover:scale-110">
                        <Upload className="text-white" size={24} />
                      </div>
                      <div className="text-highlight text-2xl font-bold mb-2">01</div>
                      <h4 className="text-lg font-medium text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Submission</h4>
                      <p className="text-white/70">
                        Submit your game for evaluation. We'll review your concept, prototype, or finished game.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-purple-primary/50 group">
                      <div className="service-icon w-16 h-16 rounded-full bg-gradient-to-br from-purple-primary to-purple-accent flex items-center justify-center mb-6 shadow-lg shadow-purple-primary/20 group-hover:shadow-purple-primary/40 transition-all duration-500 group-hover:scale-110">
                        <Sparkles className="text-white" size={24} />
                      </div>
                      <div className="text-highlight text-2xl font-bold mb-2">02</div>
                      <h4 className="text-lg font-medium text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Evaluation</h4>
                      <p className="text-white/70">
                        Our team assesses market potential, quality, and fit with our publishing portfolio.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-purple-primary/50 group">
                      <div className="service-icon w-16 h-16 rounded-full bg-gradient-to-br from-purple-primary to-purple-accent flex items-center justify-center mb-6 shadow-lg shadow-purple-primary/20 group-hover:shadow-purple-primary/40 transition-all duration-500 group-hover:scale-110">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div className="text-highlight text-2xl font-bold mb-2">03</div>
                      <h4 className="text-lg font-medium text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Partnership</h4>
                      <p className="text-white/70">
                        We create a custom publishing plan tailored to your game's unique needs.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mt-16 text-center"
                  variants={itemVariants}
                >
                  <div className="relative">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-accent/10 rounded-full blur-3xl"></div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Ready to publish your game?</h3>
                    <button 
                      onClick={handleSubmitGame}
                      className="bg-gradient-to-r from-purple-primary to-purple-accent text-white font-bold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-primary/30 hover:-translate-y-1 transition-all duration-300 group btn-shine"
                    >
                      <span className="flex items-center">
                        Submit Your Game <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
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

export default Publishing;
