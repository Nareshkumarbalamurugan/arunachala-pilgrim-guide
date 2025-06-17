
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LanguageSelection = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', label: 'తెలుగు', flag: '🇮🇳' },
  ];

  const handleLanguageSelect = (code: string) => {
    console.log('Language selected:', code);
    i18n.changeLanguage(code);
    navigate('/index');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/WhatsApp Image 2025-06-03 at 10.45.05_9676064d.jpg')" }}></div>
      
      <div className="max-w-md w-full">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">T</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Tiruvannamalai Guide
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Choose Your Language / மொழியைத் தேர்ந்தெடுக்கவும் / భాషను ఎంచుకోండి
          </p>
        </div>

        {/* Language Selection Cards */}
        <div className="space-y-4">
          {languages.map((lang) => (
            <Card key={lang.code} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full h-20 text-left justify-start px-6 hover:bg-purple-50"
                  onClick={() => handleLanguageSelect(lang.code)}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{lang.flag}</span>
                    <div>
                      <span className="text-xl font-semibold text-gray-900">
                        {lang.label}
                      </span>
                    </div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skip Button */}
        <div className="text-center mt-6">
          <Button 
            variant="outline" 
            onClick={() => handleLanguageSelect('en')}
            className="text-gray-600 hover:text-purple-600"
          >
            Continue in English
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
