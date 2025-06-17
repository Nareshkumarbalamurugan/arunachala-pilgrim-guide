
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const SpiritualTourism = () => {
  const { t } = useTranslation();

  const practices = [
    {
      title: t('spiritualTourism.practices.girivalam.title'),
      description: t('spiritualTourism.practices.girivalam.description'),
      details: t('spiritualTourism.practices.girivalam.details'),
      icon: '🚶‍♂️'
    },
    {
      title: t('spiritualTourism.practices.meditation.title'),
      description: t('spiritualTourism.practices.meditation.description'),
      details: t('spiritualTourism.practices.meditation.details'),
      icon: '🧘‍♀️'
    },
    {
      title: t('spiritualTourism.practices.templeRituals.title'),
      description: t('spiritualTourism.practices.templeRituals.description'),
      details: t('spiritualTourism.practices.templeRituals.details'),
      icon: '🕯️'
    },
    {
      title: t('spiritualTourism.practices.yoga.title'),
      description: t('spiritualTourism.practices.yoga.description'),
      details: t('spiritualTourism.practices.yoga.details'),
      icon: '🕉️'
    }
  ];

  const reasons = [
    {
      title: t('spiritualTourism.why.0.title'),
      description: t('spiritualTourism.why.0.description'),
      icon: '⛰️'
    },
    {
      title: t('spiritualTourism.why.1.title'),
      description: t('spiritualTourism.why.1.description'),
      icon: '🛕'
    },
    {
      title: t('spiritualTourism.why.2.title'),
      description: t('spiritualTourism.why.2.description'),
      icon: '👤'
    },
    {
      title: t('spiritualTourism.why.3.title'),
      description: t('spiritualTourism.why.3.description'),
      icon: '🎉'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {t('spiritualTourism.pageTitle')}
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('spiritualTourism.pageDescription')}
          </p>
        </div>
      </section>

      {/* Why Spiritual Haven */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {t('spiritualTourism.whyTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4 text-center">{reason.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Practices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('spiritualTourism.practicesTitle')}
          </h2>

          <div className="space-y-8">
            {practices.map((practice, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-1 text-center">
                      <div className="text-5xl">{practice.icon}</div>
                    </div>
                    <div className="lg:col-span-11">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {practice.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-4">
                        {practice.description}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {practice.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Your Visit */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('spiritualTourism.planning.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-600 mb-4">{t('spiritualTourism.planning.bestTimeTitle')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('spiritualTourism.planning.bestTimeDesc')}
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-700">
                    <strong>{t('spiritualTourism.planning.bestTimeNote')}</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-4">{t('spiritualTourism.planning.accommodationTitle')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('spiritualTourism.planning.accommodationDesc')}
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-indigo-700">
                    <strong>{t('spiritualTourism.planning.accommodationTip')}</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-600 mb-4">{t('spiritualTourism.planning.etiquetteTitle')}</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  {(t('spiritualTourism.planning.etiquetteList', { returnObjects: true }) as string[]).map((rule, index) => (
                    <li key={index}>• {rule}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-orange-600 mb-4">{t('spiritualTourism.planning.guidesTitle')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('spiritualTourism.planning.guidesDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpiritualTourism;
