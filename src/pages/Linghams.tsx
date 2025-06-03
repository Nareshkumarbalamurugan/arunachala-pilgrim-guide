import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Compass, Mountain, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const lingamKeys = ['indra', 'agni', 'yama', 'nirudhi', 'varuna', 'vayu', 'kubera', 'eesanya'];

const Linghams = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/arunachala-sunset.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl font-bold mb-6 text-white">{t('linghams.pageTitle')}</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            {t('linghams.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Lingams Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {lingamKeys.map((key) => (
            <a
              key={key}
              href={t(`linghams.lingams.${key}.mapLink`)}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-orange-600">
                      <Compass size={28} />
                    </div>
                    <span className="flex items-center gap-1 text-orange-600 group-hover:text-orange-700 transition-colors">
                      <MapPin size={16} />
                      <ExternalLink size={14} />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {t(`linghams.lingams.${key}.direction`)} – {t(`linghams.lingams.${key}.name`)}
                  </h3>
                  <p className="text-sm text-gray-600 italic mb-2">
                    {t(`linghams.lingams.${key}.deity`)}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {t(`linghams.lingams.${key}.description`)}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-2" size={16} />
                    {t(`linghams.lingams.${key}.location`)}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-red-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('linghams.cta.title')}
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            {t('linghams.cta.description')}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Linghams;