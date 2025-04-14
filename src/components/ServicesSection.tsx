
import React from 'react';
import { ArrowRight, Upload, Download, Users, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, icon: Icon, description, index }) => {
  return (
    <motion.div 
      className="service-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/10 hover:border-purple-primary/50 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.33, 1, 0.68, 1]
        }
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="service-icon w-20 h-20 rounded-full bg-gradient-to-br from-purple-primary to-purple-accent flex items-center justify-center mb-6 shadow-lg shadow-purple-primary/20 group-hover:shadow-purple-primary/40 transition-all duration-500 group-hover:scale-110">
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{title}</h3>
      <p className="text-white/70 mb-6 text-lg">{description}</p>
      <a href="#" className="inline-flex items-center text-purple-accent hover:text-white transition-colors duration-300 group-hover:underline font-medium">
        Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>

      {/* Decorative corner accent */}
      <div className="absolute bottom-3 right-3 w-20 h-20 bg-gradient-to-tl from-purple-primary/20 to-transparent rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Porting",
      icon: Download,
      description: "We bring your games to new platforms with optimized performance and platform-specific features."
    },
    {
      title: "Publishing",
      icon: Upload,
      description: "Let us handle distribution, marketing, and store presence so you can focus on what you do best."
    },
    {
      title: "Founding",
      icon: Users,
      description: "Get the funding and support you need to bring your gaming vision to life."
    },
    {
      title: "Support",
      icon: HeadphonesIcon,
      description: "Ongoing technical support and maintenance to ensure your games remain in pristine condition."
    }
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="services">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-accent/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple-primary/10 text-purple-accent mb-4 text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-primary to-purple-accent bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-xl">
            We specialize in helping game developers and publishers reach their full potential
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              icon={service.icon} 
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
