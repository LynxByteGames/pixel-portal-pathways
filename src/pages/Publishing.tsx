
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import PublishingHero from "@/components/publishing/PublishingHero";
import ServiceBoxes from "@/components/publishing/ServiceBoxes";
import TeamSection from "@/components/publishing/TeamSection";
import ServicesSection from "@/components/publishing/ServicesSection";
import ProcessSection from "@/components/publishing/ProcessSection";
import FAQSection from "@/components/publishing/FAQSection";
import Portfolio from "@/components/Portfolio";  // Using the Portfolio from Home
import InformationSection from "@/components/publishing/InformationSection";
import CalendlySection from "@/components/publishing/CalendlySection";
import StatsCounter from "@/components/StatsCounter";
import CTASection from "@/components/publishing/CTASection";

const Publishing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-purple-dark flex flex-col">
      <ExitIntentPopup />
      <Navbar />
      <main className="flex-grow">
        <PublishingHero />
        
        <TeamSection />
        <ServiceBoxes />
        <ServicesSection />
        <ProcessSection />
        <Portfolio />
        <FAQSection />
        <InformationSection />
        <CalendlySection />
        <StatsCounter />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Publishing;
