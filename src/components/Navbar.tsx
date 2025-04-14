import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = React.useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'Publishing', path: '/publishing' },
    { name: 'Porting', path: '/porting' },
    { name: 'For Investors', path: '/investors' },
    { name: 'About', path: '#about' }
  ], []);

  const handlePitchGame = () => {
    navigate('/publishing');
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              alt="LYNXBYTE GAMES" 
              className="h-16 w-auto relative transition-transform duration-300 group-hover:scale-105" 
              src="/lovable-uploads/8f471edf-00bd-403b-b576-55bc62ddd306.png" 
            />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent tracking-tight transition-all duration-300 group-hover:from-purple-primary group-hover:via-white group-hover:to-white/80">LYNXBYTE GAMES</span>
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
          
          <Button 
            onClick={handlePitchGame}
            className="bg-gradient-to-r from-purple-primary to-purple-accent hover:from-purple-primary/90 hover:to-purple-accent/90 text-white font-medium px-6 py-6 h-auto text-base rounded-lg shadow-lg shadow-purple-primary/20 transition-all duration-300 hover:translate-y-[-2px] btn-shine"
          >
            Pitch Your Game
          </Button>
        </div>
        
        <button 
          className="md:hidden text-white bg-purple-primary/20 p-3 rounded-full hover:bg-purple-primary/30 transition-colors duration-300" 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-24 left-0 w-full bg-dark/95 backdrop-blur-xl py-6 px-6 flex flex-col space-y-5 border-b border-white/10"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {navLinks.map(link => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link 
                  to={link.path} 
                  className={`nav-link text-lg block py-2 ${location.pathname === link.path ? 'active' : ''}`} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div variants={itemVariants} className="pt-2">
              <Button 
                onClick={handlePitchGame}
                className="bg-gradient-to-r from-purple-primary to-purple-accent w-full font-medium py-6 h-auto text-base rounded-lg shadow-lg shadow-purple-primary/20 btn-shine"
              >
                Pitch Your Game
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default memo(Navbar);
