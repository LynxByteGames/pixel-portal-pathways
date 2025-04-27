
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
  return (
    <section className="py-20 bg-[#1A103C] relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-accent/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-primary to-purple-accent blur-xl opacity-30 rounded-full scale-150"></div>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;
