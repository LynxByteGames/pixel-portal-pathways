
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublishingHero from "@/components/publishing/PublishingHero";
import TeamSection from "@/components/publishing/TeamSection";
import ServicesSection from "@/components/publishing/ServicesSection";
import ProcessSection from "@/components/publishing/ProcessSection";
import FAQSection from "@/components/publishing/FAQSection";

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
      </main>
      <Footer />
    </div>
  );
};

export default Publishing;
