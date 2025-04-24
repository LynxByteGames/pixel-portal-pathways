
import React from "react";

const CalendlySection = () => {
  return (
    <section className="py-20 bg-[#1A103C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Schedule a Meeting</h2>
          <p className="text-white/70 text-lg mb-8">Let's discuss how we can help bring your game to market</p>
        </div>
        <div className="flex justify-center">
          <iframe
            src="https://calendly.com/your-calendly-link"
            style={{ width: "100%", height: "700px", border: "none" }}
            title="Schedule a meeting"
          />
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
