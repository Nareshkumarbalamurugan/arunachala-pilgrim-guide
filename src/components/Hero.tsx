import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url('/public/images/WhatsApp Image 2025-06-03 at 10.45.05_9676064d.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold mb-4 animate-pulse">
                {t('home.hero.badge')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in leading-relaxed">
              {t('home.hero.subtitle')}
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-yellow-300">{t('home.hero.stats.temples.value')}</div>
                <div className="text-sm text-gray-300">{t('home.hero.stats.temples.label')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-blue-300">{t('home.hero.stats.girivalam.value')}</div>
                <div className="text-sm text-gray-300">{t('home.hero.stats.girivalam.label')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-green-300">{t('home.hero.stats.history.value')}</div>
                <div className="text-sm text-gray-300">{t('home.hero.stats.history.label')}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-purple-300">{t('home.hero.stats.sacred.value')}</div>
                <div className="text-sm text-gray-300">{t('home.hero.stats.sacred.label')}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border-0"
              >
                {t('home.hero.cta.primary')}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
              >
                {t('home.hero.cta.secondary')}
              </Button>
            </div>
          </div>

          {/* Right Side - Interactive Elements */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              {/* Feature Cards */}
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{t('home.hero.features.temples.title')}</h3>
                      <p className="text-gray-300">{t('home.hero.features.temples.description')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-full">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{t('home.hero.features.festivals.title')}</h3>
                      <p className="text-gray-300">{t('home.hero.features.festivals.description')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-400 to-teal-500 p-3 rounded-full">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{t('home.hero.features.community.title')}</h3>
                      <p className="text-gray-300">{t('home.hero.features.community.description')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-float animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
