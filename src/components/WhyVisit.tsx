import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const WhyVisit = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: t('home.whyVisit.reasons.arunachala.icon'),
      title: t('home.whyVisit.reasons.arunachala.title'),
      description: t('home.whyVisit.reasons.arunachala.description'),
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: t('home.whyVisit.reasons.saints.icon'),
      title: t('home.whyVisit.reasons.saints.title'),
      description: t('home.whyVisit.reasons.saints.description'),
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      icon: t('home.whyVisit.reasons.girivalam.icon'),
      title: t('home.whyVisit.reasons.girivalam.title'),
      description: t('home.whyVisit.reasons.girivalam.description'),
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: t('home.whyVisit.reasons.temples.icon'),
      title: t('home.whyVisit.reasons.temples.title'),
      description: t('home.whyVisit.reasons.temples.description'),
      gradient: 'from-pink-400 to-red-500'
    },
    {
      icon: t('home.whyVisit.reasons.retreats.icon'),
      title: t('home.whyVisit.reasons.retreats.title'),
      description: t('home.whyVisit.reasons.retreats.description'),
      gradient: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {t('home.whyVisit.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.whyVisit.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-purple-100 hover:border-purple-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${reason.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVisit;
