
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Clock } from 'lucide-react';

const StayFood = () => {
  const hotels = [
    {
      name: 'Athena Hotel',
      type: '4-star',
      description: 'Just 1 km from Ramana Ashram, featuring spacious rooms, rooftop pool, spa services, and vegetarian restaurant.',
      features: ['Rooftop Pool', 'Spa Services', 'Vegetarian Restaurant', 'Free WiFi'],
      rating: 4.5
    },
    {
      name: 'Sparsa Resort Thiruvannamalai',
      type: 'Luxury Resort',
      description: 'Luxury resort with serene views of Arunachala Hill, spa, outdoor pool, and yoga sessions.',
      features: ['Arunachala Views', 'Spa & Wellness', 'Outdoor Pool', 'Yoga Sessions'],
      rating: 4.7
    },
    {
      name: 'Hotel Himalayaa',
      type: '3.5-star',
      description: 'Modern rooms, free breakfast, Wi-Fi, and parking. Popular for comfortable stay and excellent service.',
      features: ['Free Breakfast', 'Free WiFi', 'Parking', 'Modern Rooms'],
      rating: 4.3
    }
  ];

  const ashrams = [
    {
      name: 'Sri Ramana Ashram',
      description: 'The spiritual home of Bhagavan Sri Ramana Maharshi, offering tranquil environment for meditation and self-inquiry.',
      features: ['Meditation Halls', 'Silent Atmosphere', 'Library', 'Spiritual Teachings']
    },
    {
      name: 'Yogi Ram Surat Kumar Ashram',
      description: 'Known for its calm atmosphere, daily poojas, and spiritual activities — ideal for seekers.',
      features: ['Daily Poojas', 'Peaceful Environment', 'Spiritual Activities', 'Healing Sessions']
    },
    {
      name: 'Seshadri Swamigal Ashram',
      description: 'Dedicated to the silent saint, offering meditation and spiritual discourses near Ramana Ashram.',
      features: ['Meditation Sessions', 'Spiritual Discourses', 'Quiet Gardens', 'Study Programs']
    }
  ];

  const restaurants = [
    {
      name: 'Sri Abirami Hotel',
      cuisine: 'South Indian & Chinese',
      description: 'Popular local spot famous for flavorful biryanis and quick service at budget-friendly prices.',
      specialties: ['Biryani', 'South Indian Thali', 'Chinese Dishes'],
      type: 'Local Favorite'
    },
    {
      name: 'The Dreaming Tree',
      cuisine: 'Global Fusion',
      description: 'Rooftop café with peaceful ambiance, offering raw, vegan, and gluten-free options.',
      specialties: ['Vegan Options', 'Raw Food', 'Healthy Meals'],
      type: 'Rooftop Café'
    },
    {
      name: 'Shanti Café',
      cuisine: 'Continental & Indian',
      description: 'Known for freshly brewed coffee, omelets, and daily deliveries from Pondicherry bakery.',
      specialties: ['Fresh Coffee', 'Croissants', 'Sandwiches'],
      type: 'Cozy Café'
    }
  ];

  const tips = [
    'Best Time to Visit: November to February for cooler weather',
    'Advance Booking: Essential during festivals and pilgrimage seasons',
    'Local Transport: Most accommodations arrange taxis for sightseeing',
    'Vegetarian Food: Widely available throughout the town'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Stay & Food in Tiruvannamalai
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Discover comfortable accommodations and delightful culinary experiences that complement your spiritual journey. 
            From peaceful ashrams to luxury resorts, and traditional South Indian cuisine to international flavors.
          </p>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Top Hotels in Tiruvannamalai
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {hotel.type}
                    </span>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="ml-1 text-sm font-semibold">{hotel.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {hotel.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {hotel.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hotel.features.map((feature, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ashrams Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ashrams & Spiritual Stays
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ashrams.map((ashram, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4 text-center">🕉️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {ashram.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {ashram.description}
                  </p>
                  <div className="space-y-2">
                    {ashram.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-orange-500 mr-2">•</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-16 bg-gradient-to-br from-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Food & Cafés
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {restaurant.type}
                    </span>
                    <MapPin className="text-gray-400" size={16} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {restaurant.name}
                  </h3>
                  
                  <p className="text-orange-600 font-medium text-sm mb-3">
                    {restaurant.cuisine}
                  </p>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {restaurant.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((item, idx) => (
                        <span key={idx} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tips for Booking & Visiting
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

export default StayFood;
