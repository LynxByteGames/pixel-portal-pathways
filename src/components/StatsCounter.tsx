
import React from 'react';
import { GamepadIcon, Users, DollarSign } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, delay }) => {
  return (
    <div 
      className="stat-card text-center p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-purple-primary/20 hover:to-purple-accent/20 hover:border-purple-primary/30 animate-fadeIn" 
      style={{animationDelay: `${delay}ms`}}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-primary to-purple-accent shadow-lg shadow-purple-primary/20">
        <Icon className="text-white" size={28} />
      </div>
      <div className="counter text-4xl font-bold mb-2 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
        {value}
      </div>
      <p className="text-white/70">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  const stats = [
    {
      icon: GamepadIcon,
      value: "+50",
      label: "Games that we helped with",
      delay: 100
    },
    {
      icon: Users,
      value: "+10,000,000",
      label: "Users have downloaded our games",
      delay: 300
    },
    {
      icon: DollarSign,
      value: "+600,000$",
      label: "Fundraising achieved",
      delay: 500
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
