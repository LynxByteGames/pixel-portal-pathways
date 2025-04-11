
import React from "react";
import Navbar from "@/components/Navbar";
import SplitHero from "@/components/SplitHero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import StatsCounter from "@/components/StatsCounter";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#191930] via-[#1e1e35] to-[#191930]">
      <Navbar />
      <SplitHero />
      <ServicesSection />
      <PartnersSection />
      <PortfolioShowcase />
      <StatsCounter />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
