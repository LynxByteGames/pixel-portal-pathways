
import React from "react";
import { Download, Upload, Users, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import PlatformRow from "./PlatformRow";

// Now with bolder card backgrounds and additional hover
const services = [
  {
    title: "Porting",
    icon: <Download className="w-8 h-8" />,
    description:
      "Bring your games to new platforms with top-tier optimization and full platform feature support.",
    link: "/porting",
    gradient: "from-indigo-600 via-purple-600 to-fuchsia-600/80",
  },
  {
    title: "Publishing",
    icon: <Upload className="w-8 h-8" />,
    description:
      "Let us handle your distribution, marketing, and store presence so you can focus on creating.",
    link: "/publishing",
    gradient: "from-fuchsia-700 via-pink-600 to-yellow-400/80",
  },
  {
    title: "Founding",
    icon: <Users className="w-8 h-8" />,
    description:
      "Get funding and industry support to realize your true game vision.",
    link: "/investors",
    gradient: "from-yellow-500 via-orange-500 to-pink-500/70",
  },
  {
    title: "Support",
    icon: <HeadphonesIcon className="w-8 h-8" />,
    description:
      "Ongoing technical support and maintenance to keep your games in their prime.",
    link: "#support",
    gradient: "from-green-500 via-cyan-500 to-fuchsia-500/80",
  },
];

const ServiceCard = ({
  title,
  description,
  icon,
  link,
  gradient,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  gradient: string;
}) => (
  <div className="relative rounded-2xl p-1 group hover:-translate-y-2 transition-transform duration-300 flex h-full">
    {/* Outer gradient border */}
    <div className={`absolute inset-0 z-0 rounded-2xl opacity-80 blur-sm bg-gradient-to-br ${gradient}`} />
    <div className="relative z-10 rounded-2xl bg-gradient-to-br from-black/80 to-black/60 p-6 flex flex-col items-start h-full shadow-lg group-hover:scale-105 transition-all">
      <div className={`flex items-center justify-center mb-4 rounded-full w-14 h-14 bg-gradient-to-br ${gradient}`}>
        <span className="text-white group-hover:scale-110 transform transition-transform">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gradient-primary bg-gradient-to-r from-purple-primary via-purple-accent to-fuchsia-400 bg-clip-text text-transparent">{title}</h3>
      <p className="text-white/80 mb-5 text-sm min-h-[48px]">{description}</p>
      <Link
        to={link}
        className="mt-auto inline-block text-purple-accent text-base font-medium hover:underline group-hover:text-white transition-colors"
      >
        Learn more &rarr;
      </Link>
    </div>
  </div>
);

const WhatWeDoSection = () => (
  <section className="w-full bg-transparent py-24" id="whatwedo">
    <div className="container mx-auto flex flex-col lg:flex-row gap-14 items-start">
      {/* LEFT: Title, desc, icons */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-7 text-white leading-tight max-w-2xl">
          We help reach new player
        </h2>
        <div className="text-lg text-white/80 max-w-xl mb-7">
          We are Untold Tales, an indie game publisher striving to deliver fun, story-rich experiences that bring remarkable joy to players—on PC and consoles worldwide. <br />
          Our passionate team adeptly supports, finances, publishes, and ports games across all major entertainment platforms.
        </div>
        {/* PLATFORM ICONS */}
        <PlatformRow />
      </div>
      {/* RIGHT: Service cards */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map(s => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
