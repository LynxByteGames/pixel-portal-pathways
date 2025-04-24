
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublishingHero from "@/components/publishing/PublishingHero";
import TeamSection from "@/components/publishing/TeamSection";
import ServicesSection from "@/components/publishing/ServicesSection";
import ProcessSection from "@/components/publishing/ProcessSection";
import FAQSection from "@/components/publishing/FAQSection";
import SuccessStories from "@/components/SuccessStories";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import InformationSection from "@/components/publishing/InformationSection";
import CalendlySection from "@/components/publishing/CalendlySection";
import StatsCounter from "@/components/StatsCounter";
import CTASection from "@/components/publishing/CTASection";

const Publishing = () => {
  return (
    <div className="min-h-screen bg-[#1A103C] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PublishingHero />
        <TeamSection />
        <ServicesSection />
        <ProcessSection />
        <FAQSection />
        <SuccessStories />
        <PortfolioShowcase />
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
