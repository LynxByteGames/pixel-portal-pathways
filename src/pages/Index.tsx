
import React from "react";
import Navbar from "@/components/Navbar";
import SplitHero from "@/components/SplitHero";
import CompanyInfo from "@/components/CompanyInfo";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      <SplitHero />
      <CompanyInfo />
      <Portfolio />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
