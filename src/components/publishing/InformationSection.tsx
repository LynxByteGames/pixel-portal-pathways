
import React from "react";
import { Card } from "@/components/ui/card";
import { Shield, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const InformationSection = () => {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-purple-accent" />,
      title: "Secure Partnership",
      description: "Your IP remains yours. We focus on bringing your vision to life while protecting your interests."
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-accent" />,
      title: "Fast Time to Market",
      description: "Our experienced team ensures your game reaches players quickly and efficiently."
    },
    {
      icon: <Users className="w-10 h-10 text-purple-accent" />,
      title: "Global Reach",
      description: "Access worldwide markets and connect with players across different platforms."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-40 left-1/4 w-96 h-96 bg-purple-primary/20 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-1/4 w-96 h-96 bg-purple-accent/20 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-accent/50 transition-all duration-300 rounded-xl overflow-hidden group relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 to-purple-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <motion.div 
                    className="mb-6 bg-purple-primary/20 p-4 rounded-full"
                    whileHover={{ rotate: [0, 10, -10, 0], scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-purple-light bg-clip-text text-transparent mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
