
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-dark to-dark">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-primary/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-light">
            Ready to Level Up Your Game?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join the ranks of successful game developers who've partnered with us to reach millions of players worldwide.
          </p>
          <a 
  href="https://forms.gle/i8mde8Es6Fj287YC8"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-400 hover:opacity-90 text-white font-bold text-lg px-12 py-6 h-auto rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl shadow-purple-600/20"
>
  Pitch your game
  <ArrowRight className="ml-3 h-6 w-6 text-white" />
</a>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
