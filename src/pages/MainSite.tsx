
import React, { Suspense, lazy, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { motion } from "framer-motion";
const SplitHero = lazy(() => import("@/components/SplitHero"));
import WhatWeDoPro from "@/components/WhatWeDoPro";
import ImageTiles from "@/components/ImageTiles";
import StatsTestimonials from "@/components/StatsTestimonials";
import SuccessStories from "@/components/SuccessStories";
import ContactFormPro from "@/components/ContactFormPro";
import Footer from "@/components/Footer";

const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="relative w-20 h-20">
      <div className="absolute w-full h-full border-4 border-purple-primary/10 rounded-full"></div>
      <div className="absolute w-full h-full border-t-4 border-r-4 border-purple-primary rounded-full animate-spin"></div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="w-3 h-3 bg-purple-accent rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

const MainSite = () => {
  useEffect(() => {
    const preloadImages = [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1920",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1920"
    ];
    preloadImages.forEach(image => {
      const img = new window.Image();
      img.src = image;
    });
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111122] via-[#1a1a30] to-[#111122] bg-fixed overflow-hidden">
      <ExitIntentPopup />
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-accent/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[80px]"></div>
      </div>
      <div className="relative z-10">
        <Navbar />
        <div>
          <motion.div
            key="split-hero"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <Suspense fallback={<SectionLoader />}>
              <SplitHero />
            </Suspense>
          </motion.div>
          <motion.div
            key="what-we-do-section"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <WhatWeDoPro />
          </motion.div>
          <motion.div
            key="image-tiles-section"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <StatsTestimonials />
          </motion.div>
          <motion.div
            key="success-stories-section"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            {/*<ImageTiles />
          </motion.div>
          <motion.div
            key="stats-testimonials-section"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            
            <SuccessStories />
          </motion.div>
          <motion.div
            key="contact-section"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <ContactFormPro />
          */}
            </motion.div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainSite;
