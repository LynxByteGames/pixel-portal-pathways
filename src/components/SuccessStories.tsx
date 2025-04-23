
import React from "react";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    case: "Soulstone Survivors’ Case",
    header: "53% increase in Chinese market share",
    desc: "From 12.9% to 20% market share in 4 months.",
    action: "Get inspired",
    link: "https://blogsite.com/soulstone-case",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    case: "Games Operator’s Case",
    header: "+58K wishlists in 2 weeks",
    desc: "102 influencer videos, 11M total views.",
    action: "Read more",
    link: "https://blogsite.com/games-operator-case",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
  },
];

const SuccessStories = () => (
  <section className="w-full py-20 bg-[#111112]" id="success-stories">
    <div className="container mx-auto px-2">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success stories</h2>
      <p className="text-white/60 text-lg mb-8 max-w-2xl">This isn't luck. This is what we do and your competitors wish they knew how.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {stories.map((s, idx) => (
          <div
            key={s.case}
            className="relative rounded-2xl p-7 pb-6 overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-end min-h-[270px] cursor-pointer group bg-[#1d1d24]"
            style={{
              background: `linear-gradient(120deg, #000 60%, rgba(38,36,39,0.7)), url('${s.img}') center/cover no-repeat`,
            }}
            onClick={() => window.open(s.link, "_blank")}
            tabIndex={0}
            role="button"
            aria-label={s.header}
          >
            <span className="font-semibold text-lg text-yellow-400 mb-2">{s.case}</span>
            <div className="text-white text-2xl md:text-3xl font-bold mb-2">{s.header}</div>
            <div className="text-white/70 text-base mb-5">{s.desc}</div>
            <button
              className="inline-flex items-center px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold shadow hover:bg-yellow-300 focus:outline-none"
              tabIndex={-1}
            >
              {s.action}
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStories;
