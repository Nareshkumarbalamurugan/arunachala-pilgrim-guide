import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Temples = () => {
  const { t } = useTranslation();
 
  const mainTemples = [
    {
      name: 'Arunachaleswarar Temple',
      description: 'One of the most significant Shiva temples in India, representing the eternal flame. Magnificent example of Dravidian architecture.',
      highlights: ['10-day Karthigai Deepam festival', 'Massive temple complex with towering gopurams', 'Sacred pond and holy tanks'],
      timings: '6 AM – 9 PM daily',
      location: 'Center of Tiruvannamalai town',
      image: 'https://ik.imagekit.io/vitr7ll7f/assets_task_01jwnz2d6bezvap3m6nsxwgcxj_1748789010_img_0.webp?updatedAt=1749457709066',
      mapLink: 'https://maps.app.goo.gl/BsZH1Qc4PEZzBs9P9'
    },
    {
      name: 'Sri Ramana Maharshi Ashram',
      description: 'The peaceful ashram of the revered sage Sri Ramana Maharshi, celebrated worldwide for his teachings on self-inquiry and meditation.',
      highlights: ['Meditation halls and quiet gardens', "Ramana Maharshi's samadhi", 'Library and bookshop with spiritual texts'],
      timings: '6 AM – 8 PM',
      location: 'South of the temple town',
      image: 'https://ik.imagekit.io/vitr7ll7f/assets_task_01jwr9y9wwfzcbbpj3pr7sd2yt_1748867518_img_1.webp?updatedAt=1749457814495',
      mapLink: 'https://maps.app.goo.gl/tFBDAd7EuA4pAfJf6'
    },
    {
      name: 'Virupaksha Cave',
      description: 'A historical cave where Sri Ramana Maharshi lived as a young ascetic. Sacred spot offering glimpse into spiritual journey.',
      highlights: ['Natural rock formations', 'Peaceful surroundings', 'Small shrine nearby'],
      timings: 'Best visited during daytime',
      location: 'Near the base of Arunachala hill',
      image: 'https://ik.imagekit.io/vitr7ll7f/assets_task_01jwnz5x2kem2tmg0ecfag3yg8_1748789120_img_3.webp?updatedAt=1749457992452',
      mapLink: 'https://maps.app.goo.gl/x7Gnb2NBn4hzemEm7'
    }
  ];

  const otherTemples = [
    { name: 'Agni Vinayagar Temple', mapLink: 'https://maps.app.goo.gl/bFhamwGzwnBhEWX27' },
    { name: 'Valampoori Vinayagar Temple', mapLink: 'https://maps.app.goo.gl/yiKd3bfh3TRpgBnLA' },
    { name: 'Durvasar Maha Muni Temple', mapLink: 'https://maps.app.goo.gl/xU2isrAdK9xwMCxm7' },
    { name: 'Nandhi Muga Darshan', mapLink: 'https://timesofindia.indiatimes.com/religion/religious-places/why-does-nandi-face-the-sacred-mountain-instead-of-the-shivalinga-in-thiruvannamalai-temple/articleshow/116079699.cms' },
    { name: 'Ner Annamalaiyar Temple', mapLink: 'https://maps.app.goo.gl/NyrnXKi1yUanpChq9' },
    { name: 'Suriya Lingam', mapLink: 'https://maps.app.goo.gl/cJTwWq2vZkqXHBcn7' },
    { name: 'Adi Annamalai Temple', mapLink: 'https://maps.app.goo.gl/j32xU9u9eCoydzRHA' },
    { name: 'Mookupodi Siddar Shrine', mapLink: 'https://maps.app.goo.gl/hKS7ag67m6tTXzps9' },
    { name: 'Chandra Lingam', mapLink: 'https://maps.app.goo.gl/vxbPr5PJRjnSYy6w5' },
    { name: 'Panchamuga Darshan Shrine', mapLink: 'https://maps.app.goo.gl/mmxF8HYUQ9WpcNm37' },
    { name: 'Subramaniya Swamy Temple', mapLink: 'https://maps.app.goo.gl/i4JiL44EvjJfkwCp8' },
    { name: 'Arunagiri Nadhar Temple', mapLink: 'https://maps.app.goo.gl/tvS2SrQ1Fa59N8DQ7' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {t('temples.pageTitle')}
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('temples.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Main Temples */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {t('temples.mainTemples.title')}
          </h2>

          <div className="space-y-12">
            {['arunachaleswarar', 'ramanaMaharshi', 'virupaksha'].map((temple, index) => (
              <a
                key={temple}
                href={mainTemples[index].mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={mainTemples[index].image}
                        alt={t(`temples.mainTemples.${temple}.name`)}
                        className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {t(`temples.mainTemples.${temple}.name`)}
                        </h3>
                        <span className="flex items-center gap-2 text-orange-600 group-hover:text-orange-700 transition-colors">
                          <MapPin size={20} />
                          <ExternalLink size={16} />
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {t(`temples.mainTemples.${temple}.description`)}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-orange-600 mb-3">Highlights:</h4>
                        <ul className="space-y-2">
                          {t(`temples.mainTemples.${temple}.highlights`, { returnObjects: true }).map((highlight: string, idx: number) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-orange-500 mr-2">•</span>
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong className="text-gray-900">Timings:</strong>
                          <p className="text-gray-600">{t(`temples.mainTemples.${temple}.timings`)}</p>
                        </div>
                        <div>
                          <strong className="text-gray-900">Location:</strong>
                          <p className="text-gray-600">{t(`temples.mainTemples.${temple}.location`)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Other Notable Temples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('temples.otherTemples.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(t('temples.otherTemples.temples', { returnObjects: true })).map(([key, name], index) => (
              <a
                key={key}
                href={otherTemples[index].mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl mb-3">🛕</div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors flex-1">
                        {name}
                      </h3>
                      <span className="flex items-center gap-1 text-orange-600 group-hover:text-orange-700 transition-colors ml-2">
                        <MapPin size={16} />
                        <ExternalLink size={14} />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Tips */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('temples.visitorTips.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-4">
                  {t('temples.visitorTips.etiquette.title')}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {t('temples.visitorTips.etiquette.tips', { returnObjects: true }).map((tip: string, index: number) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-4">
                  {t('temples.visitorTips.practical.title')}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {t('temples.visitorTips.practical.tips', { returnObjects: true }).map((tip: string, index: number) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Temples;
