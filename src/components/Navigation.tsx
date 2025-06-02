
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import path from 'path';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/', anchor: null },
    { name: 'Temples', path: '/temples', anchor: null },
    {name:'Linghams',path:'..pages/linghams.tsx',anchor:null},
    { name: 'Girivalam', path: '/girivalam', anchor: null },
    { name: 'Festivals', path: '/festivals', anchor: null },
    { name: 'Stay & Food', path: '/stay-food', anchor: null },
    { name: 'Spiritual Tourism', path: '/spiritual-tourism', anchor: null },
    { name: 'Getting There', path: '/getting-there', anchor: null },
    { name: 'Blog', path: '/blog', anchor: null },
    { name: 'Contact', path: '/contact', anchor: null },
  ];

  const handleLinkClick = (path: string, anchor: string | null) => {
    setIsMenuOpen(false);
    if (location.pathname === '/' && anchor) {
      // Smooth scroll to section on homepage
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tiruvannamalai Guide</h1>
              <p className="text-xs text-purple-600">by BKND Groups</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleLinkClick(item.path, item.anchor)}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-purple-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-purple-600" /> : <Menu size={24} className="text-purple-600" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-purple-100">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium px-4 py-2 rounded-md hover:bg-purple-50"
                  onClick={() => handleLinkClick(item.path, item.anchor)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
