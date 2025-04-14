
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }: CategoryFilterProps) => {
  return (
    <>
      {/* Category filter - Desktop */}
      <ScrollArea className="w-full hidden md:block mb-10">
        <div className="flex justify-center space-x-2">
          {categories.map((category, index) => (
            <button
              key={`category-desktop-${index}`}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-primary text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollArea>
      
      {/* Category filter - Mobile */}
      <div className="md:hidden mb-8 px-4">
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white appearance-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
            backgroundSize: "1.5em 1.5em"
          }}
        >
          {categories.map((category, index) => (
            <option key={`category-mobile-${index}`} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CategoryFilter;
