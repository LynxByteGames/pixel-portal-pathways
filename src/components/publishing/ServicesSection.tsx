
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "FREE PUBLISHING, PORTING & MARKETING",
    description: "We support games by investing in their development and console releases, all at no cost to developers. We handle porting, marketing, and publishing based on a revenue share model for console game sales.",
    details: "In most cases, the profit split is 30/70 (developer/publisher) until the investment costs are recouped, and 45/55 (developer/publisher) after the investment has been returned. Importantly, all revenue and IP from the PC version remain 100% yours."
  },
  {
    title: "PUBLISHING A READY GAME",
    description: "If you have already ported your game and are only looking for a publishing partner, we're here to help! Reach out to us, and if we find a good fit, we would love to collaborate."
  },
  {
    title: "SUPPORT WITH PORTING AND PUBLISHING",
    description: "Need professional advice on porting or publishing? Our team is always ready to assist with consultations and expert guidance!"
  }
];

const ServicesSection = () => {
  return (
    <section className=" py-20">
            <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/20 to-purple-accent/20 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FREE PORTING AND PUBLISHING
        </motion.h2>
        
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1E1B4B]/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  <span className="text-white font-semibold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  {service.details && (
                    <p className="text-gray-400 text-sm">{service.details}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
