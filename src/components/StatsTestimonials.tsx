
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
      
    </div>
  </section>
);

export default React.memo(StatsTestimonials);
