
import React, { useEffect, useState } from 'react';

interface StatItemProps {
  value: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, description }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = numericValue / steps;
    let currentCount = 0;
    
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= numericValue) {
        currentCount = numericValue;
        clearInterval(interval);
      }
      setCount(Math.floor(currentCount));
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [numericValue]);
  
  return (
    <div className="text-center">
      <div className="flex flex-col items-center">
        <div className="text-4xl md:text-5xl font-bold text-highlight mb-2">
          {isNaN(numericValue) ? value : `${count}${value.includes('+') ? '+' : value.includes('%') ? '%' : value.includes('x') ? 'x' : ''}`}
        </div>
        <p className="text-white/80 text-lg">{description}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-primary/20 to-purple-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem value="95%" description="Task Automation Accuracy" />
          <StatItem value="3x" description="Faster Workflow Completion" />
          <StatItem value="75%" description="Reduction in Manual Tasks" />
          <StatItem value="100+" description="Integrated Applications" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
