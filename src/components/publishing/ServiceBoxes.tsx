
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, Upload, Users, Headphones } from 'lucide-react';

const services = [
  {
    title: "Porting",
    icon: <ArrowRightLeft className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "Publishing",
    icon: <Upload className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Founding",
    icon: <Users className="w-8 h-8 text-pink-400" />,
    color: "from-pink-500/20 to-pink-600/20"
  },
  {
    title: "Support",
    icon: <Headphones className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-500/20 to-yellow-600/20"
  }
];

const ServiceBoxes = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-[#1A103C] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-80 h-80 bg-purple-primary/10 rounded-full blur-[80px]"
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-accent/10 rounded-full blur-[80px]"
          animate={{ 
            x: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.3)" 
              }}
              className={`p-6 rounded-xl bg-gradient-to-br ${service.color} backdrop-blur-lg border border-white/10 transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 to-purple-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                <motion.div 
                  className="mb-4 bg-white/10 p-3 rounded-full"
                  whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2 relative">
                  {service.title}
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-primary to-purple-accent absolute bottom-0 left-0 transition-all duration-300 mx-auto right-0"></div>
                </h3>
              </div>
              
              {/* Subtle particle effect */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`
                  }}
                  animate={{
                    y: [0, -40],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 1.5 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBoxes;
