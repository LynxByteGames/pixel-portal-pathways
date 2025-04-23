
import React from "react";

// Ikony SVG oparte o istniejącą PlatformRow (minimalne, szybkie svg dla płynności)
const platforms = [
  {
    key: "ps",
    title: "PlayStation",
    svg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9 text-white/90" fill="none">
        <path d="M18 38V10l10 3v17l7 3v-9.5" stroke="#6a79f3" strokeWidth="3" strokeLinejoin="round" />
        <ellipse cx="39" cy="36" rx="4" ry="1.5" fill="#6a79f3" fillOpacity="0.7"/>
      </svg>
    ),
  },
  {
    key: "xbox",
    title: "Xbox",
    svg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9 text-white/90" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#59c36a" strokeWidth="3" />
        <path d="M17 17c3 3 6 11 14 14" stroke="#fff" strokeWidth="2"/>
        <path d="M31 17c-3 3-6 11-14 14" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    key: "switch",
    title: "Nintendo Switch",
    svg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9 text-white/90" fill="none">
        <rect x="7" y="6" width="17" height="36" rx="6" stroke="#f35352" strokeWidth="3"/>
        <rect x="24" y="6" width="17" height="36" rx="6" stroke="#fff" strokeWidth="3"/>
        <circle cx="15.5" cy="13.5" r="2" fill="#fff" />
        <circle cx="32.5" cy="34.5" r="2" fill="#fff" />
      </svg>
    ),
  },
  {
    key: "steam",
    title: "Steam",
    svg: (
      <svg viewBox="0 0 48 48" className="w-9 h-9 text-white/90" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#c083e2" strokeWidth="3" />
        <circle cx="31" cy="31" r="6" stroke="#fff" strokeWidth="2"/>
        <path d="M14 37l10-7 5 2" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
  },
];

const PlatformIcons = () => (
  <div className="flex gap-5 mt-6">
    {platforms.map((icon) => (
      <div title={icon.title} key={icon.key} className="rounded-lg p-2 bg-black/10 hover:bg-white/5 transition-transform duration-200 hover:scale-110 cursor-pointer">
        {icon.svg}
      </div>
    ))}
  </div>
);

export default PlatformIcons;
