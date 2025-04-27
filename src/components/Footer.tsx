
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
          <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-4 group">
  <div className="relative flex items-center space-x-2">
    <div className="absolute inset-0 bg-purple-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <img 
      alt="LYNXBYTE GAMES" 
      className="h-16 w-auto relative transition-transform duration-300 group-hover:scale-105" 
      src="/SYGNET-białe.png" 
    />
    <img 
      alt="LYNXBYTE GAMES" 
      className="h-8 w-auto relative transition-transform duration-300 group-hover:scale-105" 
      src="/NAPISY-białe.png" 
    />
  </div>
  </Link>
  </div>
            <p className="text-white/70 mb-4 pt-4">
              Connecting game developers with global audiences through publishing and porting excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/lynxbyte-games" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/publishing" className="text-white/70 hover:text-white transition-colors">
                  Game Publishing
                </Link>
              </li>
              <li>
                <Link to="/porting" className="text-white/70 hover:text-white transition-colors">
                  Game Porting
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-white/70 hover:text-white transition-colors">
                  LYNXBYTE GAMES PROSTA SPÓŁKA AKCYJNA
                </a>
              </li>
              <li>
                <a  className="text-white/70 hover:text-white transition-colors">
                  NIP/EU VAT PL6793324030
                </a>
              </li>
              <li>
                <a className="text-white/70 hover:text-white transition-colors">
                KRS 0001158887
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="text-highlight mr-2 mt-0.5" />
                <span className="text-white/70">Poland, Cracow, Zamknięta 10/1.5 30-554</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-highlight mr-2" />
                <span className="text-white/70">contact@lynxbytegames.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} LYNXBYTE GAMES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
