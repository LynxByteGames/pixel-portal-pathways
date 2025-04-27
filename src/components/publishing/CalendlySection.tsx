
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CalendlySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/20 to-purple-accent/20 blur-3xl"></div>
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-purple-primary/10 rounded-full blur-[100px]"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-accent/10 rounded-full blur-[100px]"
          animate={{ 
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-light bg-clip-text text-transparent mb-6">
            Ready to Bring Your Game to Life?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join forces with a publisher who understands your vision and has the expertise to make it a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                className="relative bg-gradient-to-r from-purple-primary to-purple-accent hover:opacity-90 text-white font-semibold text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-purple-primary/30 overflow-hidden group transition-all duration-300 neon-box"
              >
                <span className="relative z-10 flex items-center">
                  Schedule a Call
                  <Sparkles className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                </span>
                {/* Shine effect */}
                <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
                {/* Glow effect */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-primary to-purple-accent blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendlySection;
