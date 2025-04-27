import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Porting",
    image: "/porting1.png",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "Publishing",
    image: "/porting2.png",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Founding",
    image: "/porting3.png",
    color: "from-pink-500/20 to-pink-600/20"
  },
  {
    title: "Support",
    image: "/porting4.png",
    color: "from-yellow-500/20 to-yellow-600/20"
  }
];

const ServiceBoxes = () => {
  return (
    <section className="py-20 bg-[#1A103C]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl bg-gradient-to-br ${service.color} backdrop-blur-lg border border-white/10 transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-48 h-48 object-contain"
                  />
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
