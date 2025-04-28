
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { GamepadIcon, Users, DollarSign } from 'lucide-react';

// Counter animation hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let rafId;
    let startTimestamp;
    const numericValue = parseInt(end.replace(/[^\d]/g, ''));
    
    if (!inView || isNaN(numericValue)) return;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericValue));
      
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setCount(numericValue);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, inView]);

  return { count, countRef };
};

const StatCard = ({ icon: Icon, value, label, delay }) => {
  const { count, countRef } = useCounter(value);
  const formattedValue = value.replace(/[\d]/g, '');
  
  // Format the display value
  const displayValue = `${count}${formattedValue}`;
  
  return (
    <motion.div 
      className="stat-card text-center p-10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 hover:border-purple-primary/40 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, delay: delay / 1000 }
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-primary to-purple-accent blur-xl opacity-30 rounded-full scale-150 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-primary to-purple-accent shadow-lg shadow-purple-primary/20 group-hover:shadow-purple-primary/40 transition-all duration-500 group-hover:scale-110">
            <Icon className="text-white" size={32} />
          </div>
        </div>
      </div>
      
      <div ref={countRef} className="counter text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-accent bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-primary group-hover:via-purple-accent group-hover:to-white">
        {displayValue}
      </div>
      
      <p className="text-white/70 text-lg group-hover:text-white transition-colors duration-300">{label}</p>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-white/5 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-white/5 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    </motion.div>
  );
};

const StatsCounter = () => {
  const stats = [
    {
      icon: GamepadIcon,
      value: "50+",
      label: "Games that we helped with",
      delay: 100
    },
    {
      icon: Users,
      value: "10000000+",
      label: "Users have downloaded our games",
      delay: 300
    },
    {
      icon: DollarSign,
      value: "600000$+",
      label: "Fundraising achieved",
      delay: 500
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-accent/5 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple-primary/10 text-purple-accent mb-4 text-sm font-medium uppercase tracking-wider">By The Numbers</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
            Our Impact
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-xl">
            We're proud of what we've accomplished with our partners
          </p>
        </motion.div>
      
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
