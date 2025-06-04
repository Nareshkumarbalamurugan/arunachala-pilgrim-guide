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

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-6 mr-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleLinkClick(item.path, item.anchor)}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            <div className="border-l pl-6 border-gray-200">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="flex-shrink-0">
              <LanguageSwitcher />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-purple-600 hover:bg-purple-50 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-purple-100">
            <div className="flex flex-col space-y-2">
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
