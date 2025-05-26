
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CalendlySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/20 to-purple-accent/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still not sure?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join forces with a publisher who understands your vision and has the expertise to make it a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
  href="https://drive.google.com/file/d/1k-75qs4_n_C5F5pPMkXOOyApfY9MQ4HB/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gradient-to-r from-purple-primary to-purple-accent hover:opacity-90 text-white font-semibold text-lg px-8 py-6 h-auto rounded-lg"
>
  Open our pitch deck
</a>

<Button 
  size="lg"
  onClick={() => window.open('https://calendly.com/bartosz-ludera-lynxbytegames/publishing-consultation', '_blank')}
  className="bg-gradient-to-r from-purple-primary to-purple-accent hover:opacity-90 text-white font-semibold text-lg px-8 py-6 h-auto"
>
Schedule free consultation
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
