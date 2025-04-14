
import { Game } from '@/types/game';

// Game data
export const games: Game[] = [
  { 
    id: "game-1",
    title: "Game Alpha", 
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Action RPG",
    platforms: ["PlayStation", "Xbox", "PC"]
  },
  { 
    id: "game-2",
    title: "Game Beta", 
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Strategy",
    platforms: ["Nintendo Switch", "PC"] 
  },
  { 
    id: "game-3",
    title: "Game Gamma", 
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Puzzle",
    platforms: ["Mobile", "PC"] 
  },
  { 
    id: "game-4",
    title: "Game Delta", 
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Adventure",
    platforms: ["PlayStation", "Xbox", "Nintendo Switch"] 
  },
  { 
    id: "game-5",
    title: "Game Epsilon", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Simulation",
    platforms: ["PC", "Mobile"] 
  },
  { 
    id: "game-6",
    title: "Game Zeta", 
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Platformer",
    platforms: ["PlayStation", "Xbox", "Nintendo Switch", "PC"] 
  },
];

// Filter buttons
export const categories = ["All", "Action RPG", "Strategy", "Puzzle", "Adventure", "Simulation", "Platformer"];

// Animation variant for container
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
