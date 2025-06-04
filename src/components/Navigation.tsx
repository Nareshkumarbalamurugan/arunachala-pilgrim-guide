import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    { name: t('navigation.home'), path: '/', anchor: null },
    { name: t('navigation.temples'), path: '/temples', anchor: null },
    { name: t('navigation.linghams'), path: '/linghams', anchor: null },
    { name: t('navigation.girivalam'), path: '/girivalam', anchor: null },
    { name: t('navigation.festivals'), path: '/festivals', anchor: null },
    { name: t('navigation.stayFood'), path: '/stay-food', anchor: null },
    { name: t('navigation.spiritualTourism'), path: '/spiritual-tourism', anchor: null },
    { name: t('navigation.gettingThere'), path: '/getting-there', anchor: null },
    { name: t('navigation.blog'), path: '/blog', anchor: null },
    { name: t('navigation.contact'), path: '/contact', anchor: null },
  ];

  const handleLinkClick = (path: string, anchor: string | null) => {
    setIsMenuOpen(false);
    if (location.pathname === '/' && anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  // Split menu items into two groups for better layout management
  const firstHalfMenuItems = menuItems.slice(0, 5);
  const secondHalfMenuItems = menuItems.slice(5);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100 w-full">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title - More responsive */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">T</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tiruvannamalai Guide</h1>
              <p className="text-xs text-purple-600">by BKND Groups</p>
            </div>
          </Link>

          {/* Desktop Menu - Split into two rows if needed */}
          <div className="hidden lg:flex flex-col items-center justify-center flex-grow px-4">
            {/* First row of menu items */}
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 mb-1">
              {firstHalfMenuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleLinkClick(item.path, item.anchor)}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative group px-2 py-0.5 text-sm whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            {/* Second row of menu items */}
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
              {secondHalfMenuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleLinkClick(item.path, item.anchor)}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative group px-2 py-0.5 text-sm whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Language Switcher and Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex-shrink-0">
              <LanguageSwitcher />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-purple-600 hover:bg-purple-50 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Full width and better spacing */}
        {isMenuOpen && (
          <div className="lg:hidden py-2 border-t border-purple-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[70vh] overflow-y-auto">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-purple-50 text-sm"
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
