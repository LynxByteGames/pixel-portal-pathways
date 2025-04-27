
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-dark to-dark">
      {/* Animated decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-accent/10 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-primary/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full shadow-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.8)"
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-light to-purple-accent bg-clip-text text-transparent">
            Ready to Level Up Your Game?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join the ranks of successful game developers who've partnered with us to reach millions of players worldwide.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg"
              className="relative bg-gradient-to-r from-purple-primary to-purple-accent hover:opacity-90 text-white font-bold text-lg px-12 py-6 h-auto transform transition-all duration-300 shadow-lg hover:shadow-xl shadow-purple-primary/20 rounded-xl overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Start Your Journey
                <Zap className="ml-2 h-6 w-6 group-hover:animate-pulse" />
              </span>
              {/* Shine effect */}
              <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-primary to-purple-accent blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
