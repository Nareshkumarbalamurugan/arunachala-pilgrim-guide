import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const HistoryCulture = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Navigation />

      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            🕉️ {t('historyCulture.pageTitle')}
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('historyCulture.pageSubtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-900">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">{t('historyCulture.sacredRoots.title')}</h2>
            <p>{t('historyCulture.sacredRoots.content')}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">{t('historyCulture.mythologyLegends.title')}</h2>
            <h3 className="text-xl font-semibold mb-2">{t('historyCulture.mythologyLegends.pillarOfFire.title')}</h3>
            <p>{t('historyCulture.mythologyLegends.pillarOfFire.content')}</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">{t('historyCulture.mythologyLegends.ardhanareeswara.title')}</h3>
            <p>{t('historyCulture.mythologyLegends.ardhanareeswara.content')}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">{t('historyCulture.architecturalHeritage.title')}</h2>
            <p>{t('historyCulture.architecturalHeritage.content')}</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              {(t('historyCulture.architecturalHeritage.features', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">{t('historyCulture.culturalSpiritualSignificance.title')}</h2>
            <h3 className="text-xl font-semibold mb-2">{t('historyCulture.culturalSpiritualSignificance.tamilLiterature.title')}</h3>
            <p>{t('historyCulture.culturalSpiritualSignificance.tamilLiterature.content')}</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">{t('historyCulture.culturalSpiritualSignificance.ramanaMaharshi.title')}</h3>
            <p>{t('historyCulture.culturalSpiritualSignificance.ramanaMaharshi.content')}</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">{t('historyCulture.culturalSpiritualSignificance.classicalMusicDance.title')}</h3>
            <p>{t('historyCulture.culturalSpiritualSignificance.classicalMusicDance.content')}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">{t('historyCulture.traditionsFestivals.title')}</h2>
            <h3 className="text-xl font-semibold mb-2">{t('historyCulture.traditionsFestivals.girivalam.title')}</h3>
            <p>{t('historyCulture.traditionsFestivals.girivalam.content')}</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">{t('historyCulture.traditionsFestivals.karthigaiDeepam.title')}</h3>
            <p>{t('historyCulture.traditionsFestivals.karthigaiDeepam.content')}</p>
            <p>{t('historyCulture.traditionsFestivals.otherFestivals')}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">{t('historyCulture.ecoSpiritualHarmony.title')}</h2>
            <p>{t('historyCulture.ecoSpiritualHarmony.content')}</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">{t('historyCulture.conclusion.title')}</h2>
            <p>{t('historyCulture.conclusion.content')}</p>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default HistoryCulture;
