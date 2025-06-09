import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const LanguageSelection = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'తెలుగు' },
  ];

  const handleLanguageSelect = (code: string) => {
    i18n.changeLanguage(code);
    navigate('/index');
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/WhatsApp Image 2025-06-03 at 10.45.05_9676064d.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-yellow-300 drop-shadow-lg animate-fade-in">
          Tiruvannamalai Temples Guide
        </h1>
        <h2 className="text-3xl font-semibold mb-10 text-center text-yellow-200 drop-shadow-md animate-fade-in delay-200">
          Select Language
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          {languages.map((lang, idx) => (
            <Button
              key={lang.code}
              variant="outline"
              size="lg"
              className="flex-1 text-yellow-100 border-yellow-300 bg-yellow-900 hover:bg-yellow-300 hover:text-orange-900 transition-all duration-300 shadow-lg"
              onClick={() => handleLanguageSelect(lang.code)}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {lang.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
