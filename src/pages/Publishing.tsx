
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
import Portfolio from "@/components/Portfolio";
import InformationSection from "@/components/publishing/InformationSection";
import StatsCounter from "@/components/StatsCounter";
import CTASection from "@/components/publishing/CTASection";

const Publishing = () => {
  return (
    <div className="min-h-screen bg-[#1A103C] flex flex-col relative">
      {/* Background gradient effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-accent/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-30"></div>
      </div>

      <ExitIntentPopup />
      <Navbar />
      <main className="flex-grow relative z-10">
        <PublishingHero />
        <ServiceBoxes />
        <TeamSection />
        <ServicesSection />
        <ProcessSection />
        <Portfolio />
        <FAQSection />
        <InformationSection />
        <StatsCounter />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Publishing;
