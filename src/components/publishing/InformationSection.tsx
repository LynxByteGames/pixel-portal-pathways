
import React from "react";
import { Card } from "@/components/ui/card";
import { Shield, Rocket, Users } from "lucide-react";

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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-accent/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
