
import React, { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";

// Lazy load components
const SplitHero = lazy(() => import("@/components/SplitHero"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection"));
const PortfolioShowcase = lazy(() => import("@/components/PortfolioShowcase"));
const StatsCounter = lazy(() => import("@/components/StatsCounter"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading placeholder
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-10 h-10 border-4 border-purple-primary/20 border-t-purple-primary rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#191930] via-[#1e1e35] to-[#191930]">
      <Navbar />
      
      <Suspense fallback={<SectionLoader />}>
        <SplitHero />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <PartnersSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <PortfolioShowcase />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <StatsCounter />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactForm />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
