
import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const heroData = [
  {
    key: "publishing",
    gradient: "from-[#9b87f5]/90 via-[#7e69ab]/70 to-[#1EAEDB]/80",
    overlay: "bg-gradient-to-br from-[#201F32]/80 to-[#181827]/90",
    bg: "url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1920')",
    badgeIcon: <ExternalLink size={14} className="mr-1"/>,
    badgeText: "No Upfront Cost",
    headline: "Jestem deweloperem, szukam wydawcy",
    desc: "Wyjdź ze swoją grą do milionów graczy. Zajmiemy się marketingiem, dystrybucją i technikaliami.",
    button: { text: "Dowiedz się więcej", link: "/publishing" },
    iconColor: "text-purple-accent",
    label: "Dla Deweloperów",
  },
  {
    key: "porting",
    gradient: "from-[#c083e2]/90 via-[#9b87f5]/80 to-[#33C3F0]/70",
    overlay: "bg-gradient-to-br from-[#28213A]/80 to-[#191930]/90",
    bg: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1920')",
    badgeIcon: <ExternalLink size={14} className="mr-1"/>,
    badgeText: "Multi-platform",
    headline: "Jestem wydawcą lub deweloperem, szukam portingu",
    desc: "Zwiększ zasięg na nowe platformy. Eksperckie portowanie bez kompromisów.",
    button: { text: "Dowiedz się więcej", link: "/porting" },
    iconColor: "text-pink-500",
    label: "Dla Wydawców i Deweloperów",
  },
];

const SplitHero = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState<null | "publishing" | "porting">(null);

  return (
    <section className="relative z-10 min-h-[78vh] md:min-h-screen flex flex-col md:flex-row rounded-3xl overflow-hidden mt-6 md:mt-10 shadow-2xl shadow-black/30 glass-card">
      {heroData.map((side, i) => (
        <motion.div
          key={side.key}
          onClick={() => navigate(side.button.link)}
          onMouseEnter={() => setHover(side.key as "publishing" | "porting")}
          onMouseLeave={() => setHover(null)}
          className={`group relative flex-1 flex items-center cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(.41,1.4,.32,1)]
            ${hover === null ? "" : (hover === side.key ? "md:flex-[1.2] z-30" : "md:flex-[0.8] opacity-60 z-20")}
            ${i == 0 ? "border-r-0 md:border-r border-white/10" : ""}
            shadow-none hover:shadow-xl`}
          style={{
            backgroundImage: `${side.bg}`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Animated glass/gradient overlay */}
          <div className={`absolute inset-0 ${side.overlay} z-0 backdrop-blur-xl transition-all drop-shadow-lg`} />

          {/* Subtle animated gradient border on hover */}
          <motion.div
            className={`absolute inset-0 rounded-3xl pointer-events-none z-0`}
            style={{ border: hover === side.key ? "2px solid #c083e255" : "2px solid transparent", transition: "border-color 0.5s" }}
            aria-hidden
          />
          {/* Content */}
          <motion.div 
            className="relative z-10 px-6 md:px-12 py-20 w-full flex flex-col items-start max-w-xl gap-4"
            initial={{ opacity: 0, y: 64 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            <span className={`mb-3 text-sm font-medium px-4 py-1 rounded-full border border-white/10 bg-white/10 shadow-lg flex items-center gap-2 backdrop-blur ${side.iconColor}`}>
              {side.iconColor === "text-purple-accent" 
                ? <span className="w-2 h-2 bg-purple-accent rounded-full mr-2 animate-pulse" /> 
                : <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse" />
              }
              <span className="tracking-wide">{side.label}</span>
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white md:text-left bg-gradient-to-r bg-clip-text text-transparent from-white via-purple-primary to-pink-500 animate-fadeIn" style={{ lineHeight: "1.08" }}>
              {side.headline}
            </h2>
            <p className="text-lg text-white/90 max-w-md mb-3 md:mb-5 font-medium">{side.desc}</p>
            <button
              onClick={e => { e.stopPropagation(); navigate(side.button.link); }}
              className="relative flex items-center group/btn px-7 py-3 mt-1 rounded-2xl font-semibold bg-gradient-to-r from-[#9b87f5] via-[#c083e2] to-[#33C3F0] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white shadow-lg btn-shine overflow-hidden transition-all duration-300"
            >
              <span className="z-10">{side.button.text}</span>
              <ChevronRight className="ml-2 z-10 group-hover/btn:translate-x-2 duration-200" size={20} />
            </button>
            {/* Floating badge */}
            <div
              className="absolute top-8 right-8 bg-white/10 backdrop-blur-lg shadow-lg flex items-center text-white/90 px-6 py-2 rounded-full border border-white/10 text-xs font-bold"
              style={{ pointerEvents: "none" }}
            >
              {side.badgeIcon}
              <span>{side.badgeText}</span>
            </div>
          </motion.div>
          {/* Click hint for desktop */}
          <div className="hidden md:flex absolute bottom-8 right-8 animate-fadeIn opacity-60 backdrop-blur-sm px-3 py-1 rounded-full bg-black/10 border border-white/10 z-10 pointer-events-none group-hover:opacity-100 transition-all duration-400">
            <span className="text-xs text-white/80">Kliknij, aby przejść</span>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default memo(SplitHero);

