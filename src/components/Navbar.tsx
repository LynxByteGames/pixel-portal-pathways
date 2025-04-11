import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = React.useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'Publishing', path: '/publishing' },
    { name: 'Porting', path: '/porting' },
    { name: 'For Investors', path: '/investors' },
    { name: 'About', path: '#about' }
  ], []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-5 transition-all duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4">
          <img 
            alt="LYNXBYTE GAMES" 
            className="h-20 w-auto" 
            src="/lovable-uploads/8f471edf-00bd-403b-b576-55bc62ddd306.png" 
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent tracking-tight">LYNXBYTE GAMES</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`nav-link text-lg transition-all duration-300 ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Button className="bg-gradient-to-r from-purple-primary to-purple-accent hover:from-purple-primary/90 hover:to-purple-accent/90 text-white font-medium px-6 py-6 h-auto text-base rounded-lg shadow-lg shadow-purple-primary/30 transition-all duration-300 hover:translate-y-[-2px] btn-shine">
            Pitch Your Game
          </Button>
        </div>
        
        <button 
          className="md:hidden text-white bg-purple-primary/20 p-2 rounded-full" 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-dark/95 backdrop-blur-lg py-6 px-6 flex flex-col space-y-5 border-b border-white/10 animate-fadeIn">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link text-lg ${location.pathname === link.path ? 'active' : ''}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <Button className="bg-gradient-to-r from-purple-primary to-purple-accent mt-3 w-full font-medium py-6 h-auto text-base rounded-lg shadow-lg shadow-purple-primary/20 btn-shine">
            Pitch Your Game
          </Button>
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);
