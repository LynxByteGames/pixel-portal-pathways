
import React from "react";
import { Download, Upload, Users, HeadphonesIcon, Gamepad, Monitor, Smartphone, Box } from "lucide-react";
import { Link } from "react-router-dom";

// Left side platform icons
const PlatformIcons = () => (
  <div className="flex items-center gap-10 mt-8">
    <Gamepad className="w-12 h-12 text-white hover:text-purple-primary transition-colors duration-200" />
    <Monitor className="w-12 h-12 text-white hover:text-purple-primary transition-colors duration-200" />
    <Box className="w-12 h-12 text-white hover:text-purple-primary transition-colors duration-200" />
    <Smartphone className="w-12 h-12 text-white hover:text-purple-primary transition-colors duration-200" />
  </div>
);

const services = [
  {
    title: "Porting",
    icon: <Download className="w-8 h-8" />,
    description:
      "We bring your games to new platforms with optimized performance and platform-specific features.",
    link: "/porting"
  },
  {
    title: "Publishing",
    icon: <Upload className="w-8 h-8" />,
    description:
      "Let us handle distribution, marketing, and store presence so you can focus on what you do best.",
    link: "/publishing"
  },
  {
    title: "Founding",
    icon: <Users className="w-8 h-8" />,
    description:
      "Get the funding and support you need to bring your gaming vision to life.",
    link: "/investors"
  },
  {
    title: "Support",
    icon: <HeadphonesIcon className="w-8 h-8" />,
    description:
      "Ongoing technical support and maintenance to ensure your games remain in pristine condition.",
    link: "#support"
  }
];

const ServiceCard = ({ title, description, icon, link }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}) => (
  <div className="relative rounded-2xl glass-card p-8 flex flex-col items-start h-full hover:-translate-y-2 transition-transform duration-300 group">
    <div className="flex items-center justify-center mb-5 rounded-full w-14 h-14 bg-gradient-to-br from-purple-primary to-purple-accent shadow-lg">
      <span className="text-white group-hover:scale-110 transform transition-transform">{icon}</span>
    </div>
    <h3 className="text-2xl font-bold mb-2 text-gradient-primary">{title}</h3>
    <p className="text-white/80 mb-5">{description}</p>
    <Link
      to={link}
      className="mt-auto inline-block text-purple-accent text-base font-medium hover:underline transition-colors group-hover:text-white"
    >
      Learn more &rarr;
    </Link>
    {/* Glass glow hover */}
    <div className="absolute inset-0 rounded-2xl group-hover:ring-2 group-hover:ring-purple-primary/40 transition-all pointer-events-none" />
  </div>
);

// Main WhatWeDoSection
const WhatWeDoSection = () => (
  <section className="w-full bg-transparent py-24">
    <div className="container mx-auto flex flex-col lg:flex-row gap-16 items-start">
      {/* LEFT column: Title, desc, icons */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight max-w-2xl">
          We help to reach new players
        </h2>
        <div className="text-lg text-white/80 max-w-xl mb-10">
          We are Untold Tales, an indie game publisher that aims to deliver fun and entertaining games that are built around interesting stories. The type of experiences that deliver remarkable joy and narrative to players, be it on PC and consoles.
        </div>
        <PlatformIcons />
      </div>
      {/* RIGHT column: 4 cards */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map(s => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
