
import React from "react";
import { Card } from "@/components/ui/card";

const InformationSection = () => {
  return (
    <section className="py-20 bg-[#1A103C]">
      <div className="container mx-auto px-4">
        <Card className="p-8 bg-gradient-to-br from-purple-primary/10 to-purple-accent/10 border border-purple-primary/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Looking for a publisher?
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              We provide comprehensive publishing services, including marketing strategy, 
              community management, and store presence optimization. Our team has extensive 
              experience in bringing games to market successfully, with a proven track record 
              of engaging players and driving sales.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InformationSection;
