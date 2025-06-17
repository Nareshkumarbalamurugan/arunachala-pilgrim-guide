
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Train, Car, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GettingThere = () => {
  const { t } = useTranslation();

  const airports = [
    {
      name: t('gettingThere.byAir.airports.chennai.name'),
      distance: t('gettingThere.byAir.airports.chennai.distance'),
      travelTime: t('gettingThere.byAir.airports.chennai.travelTime'),
      description: t('gettingThere.byAir.airports.chennai.description'),
      icon: '✈️'
    },
    {
      name: t('gettingThere.byAir.airports.bangalore.name'),
      distance: t('gettingThere.byAir.airports.bangalore.distance'),
      travelTime: t('gettingThere.byAir.airports.bangalore.travelTime'),
      description: t('gettingThere.byAir.airports.bangalore.description'),
      icon: '✈️'
    },
    {
      name: t('gettingThere.byAir.airports.trichy.name'),
      distance: t('gettingThere.byAir.airports.trichy.distance'),
      travelTime: t('gettingThere.byAir.airports.trichy.travelTime'),
      description: t('gettingThere.byAir.airports.trichy.description'),
      icon: '✈️'
    }
  ];

  const trainConnections = [
    {
      from: t('gettingThere.byTrain.connections.chennai.from'),
      description: t('gettingThere.byTrain.connections.chennai.description'),
      frequency: t('gettingThere.byTrain.connections.chennai.frequency')
    },
    {
      from: t('gettingThere.byTrain.connections.bangalore.from'),
      description: t('gettingThere.byTrain.connections.bangalore.description'),
      frequency: t('gettingThere.byTrain.connections.bangalore.frequency')
    },
    {
      from: t('gettingThere.byTrain.connections.vellore.from'),
      description: t('gettingThere.byTrain.connections.vellore.description'),
      frequency: t('gettingThere.byTrain.connections.vellore.frequency')
    }
  ];

  const roadRoutes = [
    {
      from: t('gettingThere.byRoad.routes.chennai.from'),
      route: t('gettingThere.byRoad.routes.chennai.route'),
      time: t('gettingThere.byRoad.routes.chennai.time'),
      transport: t('gettingThere.byRoad.routes.chennai.transport', { returnObjects: true }) as string[],
      description: t('gettingThere.byRoad.routes.chennai.description')
    },
    {
      from: t('gettingThere.byRoad.routes.bangalore.from'),
      route: t('gettingThere.byRoad.routes.bangalore.route'),
      time: t('gettingThere.byRoad.routes.bangalore.time'),
      transport: t('gettingThere.byRoad.routes.bangalore.transport', { returnObjects: true }) as string[],
      description: t('gettingThere.byRoad.routes.bangalore.description')
    },
    {
      from: t('gettingThere.byRoad.routes.vellore.from'),
      route: t('gettingThere.byRoad.routes.vellore.route'),
      time: t('gettingThere.byRoad.routes.vellore.time'),
      transport: t('gettingThere.byRoad.routes.vellore.transport', { returnObjects: true }) as string[],
      description: t('gettingThere.byRoad.routes.vellore.description')
    }
  ];

  const localTransport = [
    {
      type: t('gettingThere.localTransport.options.autoRickshaws.type'),
      description: t('gettingThere.localTransport.options.autoRickshaws.description'),
      icon: '🛺'
    },
    {
      type: t('gettingThere.localTransport.options.taxis.type'),
      description: t('gettingThere.localTransport.options.taxis.description'),
      icon: '🚗'
    },
    {
      type: t('gettingThere.localTransport.options.walking.type'),
      description: t('gettingThere.localTransport.options.walking.description'),
      icon: '🚶‍♂️'
    }
  ];

  const tips = t('gettingThere.travelTips.tips', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('gettingThere.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('gettingThere.hero.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* By Air Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Plane className="inline-block mr-2 mb-1" />
              {t('gettingThere.byAir.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('gettingThere.byAir.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {airports.map((airport, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{airport.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{airport.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{airport.distance}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{airport.travelTime}</span>
                  </div>
                  <p className="text-gray-600">{airport.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* By Train Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Train className="inline-block mr-2 mb-1" />
              {t('gettingThere.byTrain.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('gettingThere.byTrain.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainConnections.map((connection, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{connection.from}</h3>
                  <p className="text-gray-600 mb-4">{connection.description}</p>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{connection.frequency}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{t('gettingThere.byTrain.nearbyJunctions.title')}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>{t('gettingThere.byTrain.nearbyJunctions.katpadi')}</li>
            </ul>
          </div>
        </section>

        {/* By Road Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Car className="inline-block mr-2 mb-1" />
              {t('gettingThere.byRoad.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('gettingThere.byRoad.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadRoutes.map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{route.from}</h3>
                  <div className="text-gray-600 mb-2">
                    <strong>{route.route}</strong>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{route.time}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{route.description}</p>
                  <div className="space-y-1">
                    {route.transport.map((t, i) => (
                      <div key={i} className="text-gray-600">• {t}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Local Transport Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('gettingThere.localTransport.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localTransport.map((transport, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{transport.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{transport.type}</h3>
                  <p className="text-gray-600">{transport.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Travel Tips Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('gettingThere.travelTips.title')}</h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span className="text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default GettingThere;
