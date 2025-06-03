import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('footer.quickLinks.links.home'), path: '/' },
    { name: t('footer.quickLinks.links.temples'), path: '/temples' },
    { name: t('footer.quickLinks.links.girivalam'), path: '/girivalam' },
    { name: t('footer.quickLinks.links.festivals'), path: '/festivals' },
    { name: t('footer.quickLinks.links.stayLodging'), path: '/stay-food' },
    { name: t('footer.quickLinks.links.foodCafes'), path: '/stay-food' },
    { name: t('footer.quickLinks.links.spiritualTourism'), path: '/spiritual-tourism' },
    { name: t('footer.quickLinks.links.gettingThere'), path: '/getting-there' },
    { name: t('footer.quickLinks.links.blog'), path: '/blog' },
    { name: t('footer.quickLinks.links.contact'), path: '/contact' },
    { name: t('footer.quickLinks.links.faq'), path: '/faq' }
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
                <h3 className="text-xl font-bold">{t('footer.about.title')}</h3>
                <p className="text-sm text-purple-400">{t('footer.about.subtitle')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.about.description')}
            </p>
            <div className="text-gray-400">
              <p><strong>{t('footer.about.contact.email')}:</strong> kamaleshkumarbalamurugan@gmail.com</p>
              <p><strong>{t('footer.about.contact.location')}:</strong> {t('footer.about.contact.address')}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-400">{t('footer.quickLinks.title')}</h4>
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
            <h4 className="text-lg font-semibold mb-6 text-purple-400">{t('footer.morePages.title')}</h4>
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
                {t('footer.bottom.tagline')}
              </h4>
              <p className="text-gray-300 text-sm">
                {t('footer.bottom.welcomeText')}
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                {t('footer.bottom.copyright')}
              </p>
              <p className="text-purple-400 text-sm mt-1">
                {t('footer.bottom.craftedWith')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
