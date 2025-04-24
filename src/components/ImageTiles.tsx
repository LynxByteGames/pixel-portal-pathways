
import React from "react";

// Just a subset for demo; for real use, consider externalizing URLs
const images = [
  "/astro_miner.png",
  "/holeio.jpg",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
  "/goldmining_sim.jpg",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
  "/goldmining_sim.jpg",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
];

const tileSizes = [
  "col-span-2 row-span-2",
  "",
  "col-span-2",
  "",
  "row-span-2",
  "col-span-3",
  "col-span-3",
  "col-span-2 row-span-2",
  "",
  "",
  "",
  ""
];

const ImageTiles = () => (
  <section className="w-full py-12 md:py-20 overflow-x-auto">
    <div
      className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] gap-3 md:gap-5 px-2 md:px-0 grid-flow-dense"
    >
      {images.slice(0, 12).map((url, i) => {
        const tileClass = tileSizes[i] || "";
        return (
          <div
            key={url + i}
            className={`bg-black/80 rounded-lg overflow-hidden shadow-lg relative group ${tileClass}`}
          >
            <img
              src={url}
              loading="lazy"
              decoding="async"
              alt={`Game ${i + 1}`}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              style={{ background: "#222" }}
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-40 transition-opacity"></div>
          </div>
        );
      })}
    </div>
  </section>
);


export default React.memo(ImageTiles);
