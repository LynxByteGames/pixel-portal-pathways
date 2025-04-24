
import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
};

const ServiceBox: React.FC<Props> = ({ icon, title, desc, color }) => (
  <div
    className={`rounded-xl bg-gradient-to-br from-black/60 to-black/40 shadow-xl border border-white/10 p-6 flex flex-col gap-2 hover:scale-105 transition-transform duration-200`}
    style={{
      boxShadow: `0 4px 20px ${color}18`,
      minHeight: 180,
    }}
  >
    {/* 
    <div className="w-12 h-12 flex items-center justify-center rounded-full mb-2" style={{
      background: color + "22"
    }}>
      {icon}
    </div>
    */}
    <div className="font-semibold text-white text-xl">{title}</div>
    <div className="text-white/60 text-base flex-1">{desc}</div>
  </div>
);

export default ServiceBox;
