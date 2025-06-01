
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Train, Car, MapPin, Clock } from 'lucide-react';

const GettingThere = () => {
  const airports = [
    {
      name: 'Chennai International Airport (MAA)',
      distance: '185 km',
      travelTime: '4-5 hours by road',
      description: 'Primary international gateway with numerous domestic and international flights daily.',
      icon: '✈️'
    },
    {
      name: 'Bengaluru International Airport (BLR)',
      distance: '160 km', 
      travelTime: '3.5-4 hours by car',
      description: 'Another international airport option. Scenic road journey through Hosur and Krishnagiri.',
      icon: '✈️'
    },
    {
      name: 'Tiruchirappalli International Airport (TRZ)',
      distance: '140 km',
      travelTime: '4-4.5 hours by road',
      description: 'Smaller airport with good domestic connectivity.',
      icon: '✈️'
    }
  ];

  const trainConnections = [
    {
      from: 'Chennai',
      description: 'Multiple daily trains connect Chennai Central and Tiruvannamalai',
      frequency: 'Daily services'
    },
    {
      from: 'Bengaluru',
      description: 'Direct trains on select days; alternatively change at Katpadi Junction',
      frequency: 'Select days'
    },
    {
      from: 'Vellore',
      description: 'Local trains and buses frequently connect the two towns',
      frequency: 'Frequent services'
    }
  ];

  const roadRoutes = [
    {
      from: 'Chennai',
      route: 'Via NH48 and NH77',
      time: '4-5 hours',
      transport: ['Government Buses', 'Private Buses', 'Taxi/Self-drive'],
      description: 'Regular direct buses from Chennai Central Bus Stand and Koyambedu Terminal'
    },
    {
      from: 'Bengaluru', 
      route: 'Via NH77',
      time: '3.5-4 hours',
      transport: ['TNSTC/KSRTC Buses', 'Private Volvo Buses', 'Taxi'],
      description: 'Well-maintained road through scenic rural landscapes'
    },
    {
      from: 'Vellore',
      route: 'Direct route',
      time: '1-1.5 hours',
      transport: ['Frequent buses', 'Shared taxis', 'Private vehicles'],
      description: 'Quick journey due to proximity'
    }
  ];

  const localTransport = [
    { type: 'Auto-Rickshaws', description: 'Most common for short distances', icon: '🛺' },
    { type: 'Cycle Rickshaws', description: 'Eco-friendly and leisurely travel', icon: '🚲' },
    { type: 'Taxis and Cabs', description: 'Available on hire; hotels arrange pickups', icon: '🚗' },
    { type: 'Walking', description: 'Many temples clustered close together', icon: '🚶‍♂️' }
  ];

  const tips = [
    'Best Time: October to March for pleasant weather',
    'Festival Booking: Reserve transport and accommodation early during Karthigai Deepam',
    'Safety: Keep valuables secure in crowded places',
    'Health: Carry water and wear comfortable shoes for walking',
    'Etiquette: Dress modestly and respect temple customs'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Getting to Tiruvannamalai
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Tiruvannamalai is accessible via multiple transport modes, making it easy for pilgrims and travelers 
            worldwide to visit this sacred town. Plan your journey with our comprehensive travel guide.
          </p>
        </div>
      </section>

      {/* By Air */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Plane className="mx-auto mb-4 text-blue-600" size={48} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">By Air</h2>
            <p className="text-lg text-gray-600">Nearest airports with good connectivity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {airports.map((airport, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-center">{airport.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {airport.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="text-blue-500 mr-2" size={16} />
                      <span className="text-gray-600">{airport.distance}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-600">{airport.travelTime}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {airport.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* By Train */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Train className="mx-auto mb-4 text-green-600" size={48} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">By Train</h2>
            <p className="text-lg text-gray-600">Tiruvannamalai Railway Station (TNM)</p>
          </div>
          
          <Card className="shadow-xl mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Railway Connections
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trainConnections.map((connection, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      From {connection.from}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {connection.description}
                    </p>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
                      {connection.frequency}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Major Nearby Junctions:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• <strong>Katpadi Junction (KPD)</strong> — 35 km, major hub with extensive rail connectivity</li>
                  <li>• <strong>Chengam Station</strong> — 30 km, convenient for nearby visits</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* By Road */}
      <section className="py-16 bg-gradient-to-br from-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Car className="mx-auto mb-4 text-orange-600" size={48} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">By Road</h2>
            <p className="text-lg text-gray-600">Well-connected by highways and frequent buses</p>
          </div>
          
          <div className="space-y-8">
            {roadRoutes.map((route, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        From {route.from}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Route:</strong> {route.route}</p>
                        <p><strong>Time:</strong> {route.time}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Transport Options:</h4>
                      <div className="space-y-2">
                        {route.transport.map((option, idx) => (
                          <span key={idx} className="block bg-orange-100 text-orange-800 px-3 py-1 rounded text-xs">
                            {option}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Description:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {route.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Transport */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Local Transport Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localTransport.map((transport, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{transport.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {transport.type}
                    </h3>
                  </div>
                  <p className="text-gray-600">{transport.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Travel Tips & Advice
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
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
      </section>

      <Footer />
    </div>
  );
};

export default GettingThere;
