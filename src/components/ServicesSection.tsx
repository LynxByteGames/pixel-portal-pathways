
import React from 'react';
import { ArrowRight, Upload, Download, Users, HeadphonesIcon } from 'lucide-react';

const ServiceCard = ({ title, icon: Icon, description }) => {
  return (
    <div className="service-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10 hover:border-purple-primary/50 group">
      <div className="service-icon w-16 h-16 rounded-full bg-gradient-to-br from-purple-primary to-purple-accent flex items-center justify-center mb-6 shadow-lg shadow-purple-primary/20 group-hover:shadow-purple-primary/40 transition-all duration-300">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-purple-accent hover:text-white transition-colors duration-300 group-hover:underline">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
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
    <section className="py-16 md:py-24" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-primary to-purple-accent bg-clip-text text-transparent">
            What We Do
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              icon={service.icon} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
