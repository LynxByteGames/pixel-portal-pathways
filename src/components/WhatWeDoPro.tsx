
import React from "react";
import PlatformIcons from "./PlatformIcons";
import ServiceBox from "./ServiceBox";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Porting",
    desc: "Seamless technical porting for all major platforms. Expand your reach, effortlessly.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M6 12h1a1 1 0 011 1v1a1 1 0 001 1h6a1 1 0 001-1v-1a1 1 0 011-1h1a2 2 0 002-2v-1a2 2 0 00-2-2h-1a1 1 0 01-1-1V7a1 1 0 00-1-1H8a1 1 0 00-1 1v1a1 1 0 01-1 1H5a2 2 0 00-2 2v1a2 2 0 002 2z" stroke="#6a79f3" strokeWidth="2" />
        <circle cx="9" cy="10" r="0.75" fill="#6a79f3" />
        <circle cx="15" cy="10" r="0.75" fill="#6a79f3" />
      </svg>
    ),
    color: "#6a79f3"
  },
  {
    title: "Publishing",
    desc: "Unlock new markets with expert game publishing and localization tailored to each region.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16v10H4z" stroke="#c083e2" strokeWidth="2" />
        <path d="M6 5v2m12-2v2M9 12h6m-3-3v6" stroke="#c083e2" strokeWidth="2" />
        <path d="M2 7h20" stroke="#c083e2" strokeWidth="2" />
      </svg>
    ),
    color: "#c083e2"
  },
  {
    title: "Funding",
    desc: "Secure reliable funding to help develop and grow your game vision.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="#59c36a" strokeWidth="2" />
        <path d="M12 8v8m-3-4h6" stroke="#59c36a" strokeWidth="2" />
        <circle cx="12" cy="12" r="1" fill="#59c36a" />
      </svg>
    ),
    color: "#59c36a"
  },
  {
    title: "Support",
    desc: "Dedicated experts to help you overcome every market challenge. Full-cycle support.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#cbd5e1" strokeWidth="2" />
        <path d="M12 8a3 3 0 013 3c0 2-3 2-3 4" stroke="#cbd5e1" strokeWidth="2" />
        <circle cx="12" cy="17" r="1" fill="#cbd5e1" />
      </svg>
    ),
    color: "#cbd5e1"
  }
];



const WhatWeDoPro = () => (
  <section className="w-full bg-[#191a22] py-16 md:py-24" id="what-we-do">
    <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
      {/* LEFT SIDE */}
      <div className="flex-1 max-w-lg md:pr-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          We help reach new player
        </h2>
        <p className="mb-5 text-white/80">
          Unlock your game’s full potential with our all-in-one publishing, porting, funding, and growth expertise. We connect passionate developers with new global players—combining marketing mastery and deep platform knowledge to help studios like yours succeed on every major console and region.
        </p>
        <PlatformIcons />
      </div>
      {/* RIGHT SIDE */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 w-full">
        {SERVICES.map((srv) => (
          <ServiceBox
            key={srv.title}
            icon={srv.icon}
            title={srv.title}
            desc={srv.desc}
            color={srv.color}
          />
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDoPro;
