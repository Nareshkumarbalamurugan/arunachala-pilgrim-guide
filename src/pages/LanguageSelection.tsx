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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 sm:p-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-orange-700">Select a Language</h1>
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={() => handleLanguageSelect(lang.code)}
          >
            {lang.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
