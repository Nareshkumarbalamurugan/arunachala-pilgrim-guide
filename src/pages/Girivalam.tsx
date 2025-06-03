import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const Girivalam = () => {
  const { t } = useTranslation();

  const tips = [
    'Start Early: Begin before moonrise for serene light and cooler temperatures',
    'Wear Comfortable Footwear: The path is mostly flat but uneven in parts',
    'Carry Water and Light Snacks: Essential for the 14 km journey',
    'Respect the Environment: Keep the path clean and maintain silence',
    'Dress Modestly: Traditional clothing is recommended for sanctity'
  ];

  const benefits = [
    'Dissolves karma and negative energies',
    'Promotes physical and mental well-being',
    'Deepens connection to Lord Shiva',
    'Brings feelings of peace and renewal',
    'Enhances spiritual insight and awakening'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {t('girivalam.pageTitle')}
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('girivalam.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Significance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('girivalam.significance.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('girivalam.significance.description1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('girivalam.significance.description2')}
              </p>
            </div>
            <div className="relative">
              <img
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01jwnzbe31fehvc68x7f51zgfx%2F1748789313_img_1.webp?st=2025-06-02T10%3A49%3A42Z&se=2025-06-08T11%3A49%3A42Z&sks=b&skt=2025-06-02T10%3A49%3A42Z&ske=2025-06-08T11%3A49%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=s%2F%2BmN5caNBOf8nKxlIOVodpWi1pG5OAcoBTH4iomoOo%3D&az=oaivgprodscus"
                alt="Arunachala Hill"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When to Do Girivalam */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('girivalam.whenToGo.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🌕</div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                  {t('girivalam.whenToGo.fullMoon.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('girivalam.whenToGo.fullMoon.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4">
                  {t('girivalam.whenToGo.festivals.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('girivalam.whenToGo.festivals.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Route */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t('girivalam.route.title')}
          </h2>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <div className="text-6xl mb-6">🚶‍♂️</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {t('girivalam.route.distance')}
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('girivalam.route.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('girivalam.route.keyStops.title')}:
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    {t('girivalam.route.keyStops.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('girivalam.route.sacredFeatures.title')}:
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    {t('girivalam.route.sacredFeatures.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('girivalam.tips.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t('girivalam.tips.items', { returnObjects: true }).map((tip: string, index: number) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-2xl mb-3">💡</div>
                  <p className="text-gray-600 leading-relaxed">{tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('girivalam.benefits.title')}
          </h2>

          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🕉️</div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                  {t('girivalam.benefits.subtitle')}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('girivalam.benefits.title')}:
                  </h4>
                  <ul className="space-y-3">
                    {t('girivalam.benefits.items', { returnObjects: true }).map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('girivalam.benefits.experience.title')}:
                  </h4>
                  <p className="text-gray-600 italic leading-relaxed">
                    {t('girivalam.benefits.experience.description')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Girivalam;
