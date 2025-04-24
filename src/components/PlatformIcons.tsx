
import React from "react";

// Ikony SVG oparte o istniejącą PlatformRow (minimalne, szybkie svg dla płynności)
import { SiPlaystation, SiBox, SiNintendoswitch, SiSteam} from "react-icons/si";
import { FaXbox } from "react-icons/fa";


const platforms = [
  { key: "ps", title: "PlayStation", svg: <SiPlaystation className="w-9 h-9 text-[#6a79f3]" /> },
  { key: "xbox", title: "Xbox", svg: <FaXbox className="w-9 h-9 text-[#59c36a]" /> },
  { key: "switch", title: "Nintendo Switch", svg: <SiNintendoswitch className="w-9 h-9 text-[#f35352]" /> },
  { key: "steam", title: "Steam", svg: <SiSteam className="w-9 h-9 text-[#c083e2]" /> },
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
