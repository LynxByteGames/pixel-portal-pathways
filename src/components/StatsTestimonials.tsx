
import React from "react";
import { Star } from "lucide-react";

const stats = [
  { value: "+50", label: "Games that we helped with" },
  { value: "+10.000.000", label: "Users have downloaded our games" },
  { value: "+600.000$", label: "Fundrising through private investors" },
];

const testimonials = [
  {
    logo: "Newfangled",
    text: "HUQIAO helped grow our Chinese wishlists to being our second biggest country after the USA.",
    author: "Henry Hoffman",
    position: "CEO, Newfangled Games",
    stars: 5,
  },
  {
    logo: "Pretty Soon",
    text: "Huqiao didn’t just open the Chinese market for us – they taught us how to understand it. Unlike typical publishers who create information barriers, the Huqiao team shares knowledge and actively involves us in the process. They're true enthusiasts who really know their stuff.",
    author: "Aleksandra Michalska",
    position: "Head of Marketing, Pretty Soon",
    stars: 5,
  },
  {
    logo: "Game Smithing",
    text: "We are excited to see where this collaboration will lead the game in the long term.",
    author: "Allan Smith",
    position: "Founder, Game Smithing",
    stars: 5,
  },
  {
    logo: "Butterscotch Shenanigans",
    text: "China was our biggest market for Crashlands, but we needed help reaching players on unfamiliar platforms in a language we don’t understand. Huqiao autonomously handled our presence in China while we focused on development, giving us peace of mind.",
    author: "Adam Coster",
    position: "Founder and CEO, Butterscotch Shenanigans",
    stars: 5,
  },
];

const StatsTestimonials = () => (
  <section className="w-full bg-[#111112] pt-16 pb-20" id="testimonials">
    <div className="container mx-auto px-2">
      {/* Stats row */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 mb-8 border-b border-white/15 pb-8">
        {stats.map(stat => (
          <div key={stat.label} className="flex flex-col items-center justify-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-1">{stat.value}</div>
            <div className="text-white/70 text-base sm:text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
      {/* Testimonials row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map(t => (
          <div key={t.logo} className="bg-gradient-to-br from-[#18181c] via-[#222232] to-[#18181c] rounded-2xl p-7 border border-white/10 shadow-lg flex flex-col h-full">
            <div className="flex flex-col gap-1 min-h-12 mb-3">
              <div className="font-bold text-lg text-white mb-0.5">{t.logo}</div>
            </div>
            <div className="text-white/80 text-sm mb-3 flex-1">{t.text}</div>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, i) =>
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                )}
              </div>
              <div className="ml-2 text-white text-sm font-semibold">{t.author}</div>
            </div>
            <div className="text-white/50 text-xs">{t.position}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(StatsTestimonials);
