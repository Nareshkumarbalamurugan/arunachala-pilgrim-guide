
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Temples', path: '/temples' },
    { name: 'Girivalam', path: '/girivalam' },
    { name: 'Festivals', path: '/festivals' },
    { name: 'Stay & Lodging', path: '/stay-food' },
    { name: 'Food & Cafés', path: '/stay-food' },
    { name: 'Spiritual Tourism', path: '/spiritual-tourism' },
    { name: 'Getting There', path: '/getting-there' },
    { name: 'Blog / Stories', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' }
  ];

  const handleLinkClick = (path: string) => {
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tiruvannamalai Guide</h3>
                <p className="text-sm text-purple-400">by BKND Groups</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              BKND Groups is dedicated to promoting the spiritual, cultural, and natural beauty of Tiruvannamalai. 
              We help travelers explore this sacred land through reliable information, curated guides, and community-powered insights.
            </p>
            <div className="text-gray-400">
              <p><strong>Email:</strong> kamaleshkumarbalamurugan@gmail.com</p>
              <p><strong>Location:</strong> Tiruvannamalai, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="block text-gray-300 hover:text-purple-400 transition-colors duration-200 group"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-400">More Pages</h4>
            <div className="space-y-3">
              {quickLinks.slice(6).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="block text-gray-300 hover:text-purple-400 transition-colors duration-200 group"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">
                🧭 Explore. Experience. Enlighten.
              </h4>
              <p className="text-gray-300 text-sm">
                Whether you are a spiritual seeker, casual traveler, or cultural enthusiast, Tiruvannamalai welcomes you.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 BKND Groups – All rights reserved.
              </p>
              <p className="text-purple-400 text-sm mt-1">
                Crafted with devotion in Tiruvannamalai ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
