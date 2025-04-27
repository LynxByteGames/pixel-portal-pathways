
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import PublishingHero from "@/components/publishing/PublishingHero";
import ServiceBoxes from "@/components/publishing/ServiceBoxes";
import TeamSection from "@/components/publishing/TeamSection";
import ServicesSection from "@/components/publishing/ServicesSection";
import ProcessSection from "@/components/publishing/ProcessSection";
import FAQSection from "@/components/publishing/FAQSection";
import Portfolio from "@/components/Portfolio";
import InformationSection from "@/components/publishing/InformationSection";
import CTASection from "@/components/publishing/CTASection";
import StatsCounter from "@/components/StatsCounter";
import { motion, useAnimation } from "framer-motion";

const Publishing = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Animate sections when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(".animate-on-scroll").forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-purple-dark flex flex-col">
      <ExitIntentPopup />
      <Navbar />
      <main className="flex-grow overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <PublishingHero />
        </motion.div>
        
        <div className="animate-on-scroll transition-all duration-500 opacity-0 translate-y-8 section-visible:opacity-100 section-visible:translate-y-0">
          <ServiceBoxes />
        </div>
        
        <div className="animate-on-scroll transition-all duration-500 opacity-0 translate-y-8 section-visible:opacity-100 section-visible:translate-y-0 delay-150">
          <TeamSection />
        </div>
        
        <div className="animate-on-scroll transition-all duration-500 opacity-0 translate-y-8 section-visible:opacity-100 section-visible:translate-y-0 delay-150">
          <ServicesSection />
        </div>
        
        <div className="animate-on-scroll transition-all duration-500 opacity-0 translate-y-8 section-visible:opacity-100 section-visible:translate-y-0 delay-150">
          <ProcessSection />
        </div>
        
        <div className="animate-on-scroll transition-all duration-500 opacity-0 translate-y-8 section-visible:opacity-100 section-visible:translate-y-0 delay-150">
          <Portfolio />
        </div>
        
        <div className="animate-on-scroll transition-all duration-500 opacity-0 translate-y-8 section-visible:opacity-100 section-visible:translate-y-0 delay-150">
          <FAQSection />
        </div>
        
        <div className="animate-on-scroll transition-all duration-500 opacity-0 translate-y-8 section-visible:opacity-100 section-visible:translate-y-0 delay-150">
          <InformationSection />
        </div>
        
        <div className="animate-on-scroll transition-all duration-500 opacity-0 translate-y-8 section-visible:opacity-100 section-visible:translate-y-0 delay-150">
          <CTASection />
        </div>
        
        <div className="animate-on-scroll transition-all duration-500 opacity-0 translate-y-8 section-visible:opacity-100 section-visible:translate-y-0 delay-150">
          <StatsCounter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Publishing;
