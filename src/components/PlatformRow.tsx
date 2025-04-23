
import React from "react";

const iconCommon =
  "w-11 h-11 md:w-12 md:h-12 text-white hover:scale-110 transition-transform duration-150";
const iconList = [
  {
    key: "ps",
    title: "PlayStation",
    svg: (
      <svg viewBox="0 0 48 48" className={iconCommon} fill="none">
        <path d="M18 38V10l10 3v17l7 3v-9.5" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
        <ellipse cx="39" cy="36" rx="4" ry="1.5" fill="#fff" fillOpacity="0.7"/>
      </svg>
    ),
  },
  {
    key: "xbox",
    title: "Xbox",
    svg: (
      <svg viewBox="0 0 48 48" className={iconCommon} fill="none">
        <circle cx="24" cy="24" r="18" stroke="#fff" strokeWidth="3" />
        <path d="M17 17c3 3 6 11 14 14" stroke="#fff" strokeWidth="2"/>
        <path d="M31 17c-3 3-6 11-14 14" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    key: "switch",
    title: "Nintendo Switch",
    svg: (
      <svg viewBox="0 0 48 48" className={iconCommon} fill="none">
        <rect x="7" y="6" width="17" height="36" rx="6" stroke="#fff" strokeWidth="3"/>
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
      <svg viewBox="0 0 48 48" className={iconCommon} fill="none">
        <circle cx="24" cy="24" r="18" stroke="#fff" strokeWidth="3" />
        <circle cx="31" cy="31" r="6" stroke="#fff" strokeWidth="2"/>
        <path d="M14 37l10-7 5 2" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
  },
];

const PlatformRow = () => (
  <div className="flex gap-8 mt-6 mb-2">
    {iconList.map(ic => (
      <div title={ic.title} key={ic.key}>
        {ic.svg}
      </div>
    ))}
  </div>
);

export default PlatformRow;
