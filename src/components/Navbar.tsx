
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Publishing', path: '/publishing' },
    { name: 'Porting', path: '/porting' },
    { name: 'For Investors', path: '/investors' },
    { name: 'About', path: '#about' },
  ];
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-dark bg-opacity-90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/public/lovable-uploads/a2b63ed7-39de-4220-b35c-4fa5682dd233.png" alt="LYNXBYTE GAMES" className="h-10" />
          <span className="text-xl font-bold text-white">LYNXBYTE GAMES</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Button
            className="bg-highlight text-dark hover:bg-highlight/90 font-medium"
          >
            Pitch Your Game
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-dark py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <Button
            className="bg-highlight text-dark hover:bg-highlight/90 mt-2 w-full font-medium"
          >
            Pitch Your Game
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
