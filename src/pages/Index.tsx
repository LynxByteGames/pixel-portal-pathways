import React, { Suspense, lazy, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
const SplitHero = lazy(() => import("@/components/SplitHero"));
import WhatWeDoSection from "@/components/WhatWeDoSection";

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

const Index = () => {
  useEffect(() => {
    const preloadImages = [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1920",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1920"
    ];
    
    preloadImages.forEach(image => {
      const img = new Image();
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
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <WhatWeDoSection />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
