import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const Festivals = () => {
  const { t } = useTranslation();

  const majorFestivalKeys = ['karthigaiDeepam', 'mahaShivaratri', 'girivalamFestival', 'thaiPoosam'];

  const festivalColors: { [key: string]: string } = {
    karthigaiDeepam: 'from-orange-500 to-red-600',
    mahaShivaratri: 'from-blue-500 to-purple-600',
    girivalamFestival: 'from-indigo-500 to-blue-600',
    thaiPoosam: 'from-green-500 to-teal-600'
  };

  const festivalImages: { [key: string]: string } = {
    karthigaiDeepam: 'https://ik.imagekit.io/vitr7ll7f/assets_task_01jwny0tx0efnvd951hkkkkcnk_1748787907_img_1.webp?updatedAt=1749457991889',
    mahaShivaratri: 'https://ik.imagekit.io/vitr7ll7f/assets_task_01jwnzx7zeeg885tentt6dspsa_1748789868_img_1.webp?updatedAt=1749457992332',
    girivalamFestival: 'https://ik.imagekit.io/vitr7ll7f/assets_task_01jwnzbe31fehvc68x7f51zgfx_1748789313_img_1.webp?updatedAt=1749457992506',
    thaiPoosam: 'https://ik.imagekit.io/vitr7ll7f/assets_task_01jwp01gtwe00rb3s1r3sn7zbq_1748790036_img_1.webp?updatedAt=1749457992288'
  };

  const otherFestivals = t('festivals.otherFestivals', { returnObjects: true }) as string[];
  const tips = t('festivals.tips', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {t('festivals.pageTitle')}
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('festivals.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Major Festivals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {t('festivals.majorFestivalsTitle')}
          </h2>

          <div className="space-y-16">
            {majorFestivalKeys.map((key, index) => {
              const festivalName = t(`festivals.majorFestivals.${key}.name`);
              const festivalWhen = t(`festivals.majorFestivals.${key}.when`);
              const festivalSignificance = t(`festivals.majorFestivals.${key}.significance`);
              const festivalHighlights = t(`festivals.majorFestivals.${key}.highlights`, { returnObjects: true }) as string[];
              const festivalSpiritual = t(`festivals.majorFestivals.${key}.spiritual`);

              return (
                <Card key={index} className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className={`bg-gradient-to-r ${festivalColors[key]} p-2`}></div>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={festivalImages[key]}
                        alt={festivalName}
                        className="w-full h-80 lg:h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {festivalName}
                      </h3>
                      <p className="text-orange-600 font-semibold mb-4">
                        {festivalWhen}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {festivalSignificance}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('festivals.majorFestivals.karthigaiDeepam.highlights', { returnObjects: true }) ? t('common.highlights', { defaultValue: 'Highlights:' }) : ''}</h4>
                        <ul className="space-y-2">
                          {Array.isArray(festivalHighlights) && festivalHighlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-orange-500 mr-2">•</span>
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">{t('festivals.majorFestivals.karthigaiDeepam.spiritual', { returnObjects: true }) ? t('common.spiritualImportance', { defaultValue: 'Spiritual Importance:' }) : ''}</h4>
                        <p className="text-gray-600 text-sm">{festivalSpiritual}</p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Festivals */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('festivals.otherFestivalsTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(otherFestivals) && otherFestivals.map((festival, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🎉</div>
                  <p className="text-gray-700 font-medium">{festival}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Tips */}
      <section className="py-16 bg-gradient-to-br from-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('festivals.experienceSection.title')}
              </h2>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {t('festivals.experienceSection.description')}
                  </p>
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-lg">
                    <p className="font-semibold">{t('festivals.experienceSection.magicTitle')}</p>
                    <p className="text-sm opacity-90">
                      {t('festivals.experienceSection.magicDescription')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('festivals.tipsTitle')}
              </h2>
              <div className="space-y-4">
                {Array.isArray(tips) && tips.map((tip, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="text-2xl mr-4">💡</div>
                        <p className="text-gray-700">{tip}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Festivals;
