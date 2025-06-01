
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Utensils, Bed, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const StayFood = () => {
  const hotels = [
    {
      name: "Athena Hotel",
      type: "4-star hotel",
      description: "Just 1 km from Ramana Ashram, featuring spacious rooms, rooftop pool, spa services, and vegetarian restaurant.",
      features: ["Rooftop Pool", "Spa Services", "Vegetarian Restaurant", "Free WiFi"],
      rating: 4.5,
      link: "#athena-hotel"
    },
    {
      name: "Hotel Himalayaa",
      type: "3.5-star hotel",
      description: "Modern rooms with free breakfast, Wi-Fi, and parking. Popular for excellent service and comfort.",
      features: ["Free Breakfast", "Free WiFi", "Parking", "Modern Rooms"],
      rating: 4.3,
      link: "#hotel-himalayaa"
    },
    {
      name: "Sparsa Resort Thiruvannamalai",
      type: "Luxury resort",
      description: "Luxury resort with serene views of Arunachala Hill, spa, outdoor pool, and yoga sessions.",
      features: ["Arunachala Views", "Spa", "Outdoor Pool", "Yoga Sessions"],
      rating: 4.7,
      link: "#sparsa-resort"
    },
    {
      name: "Hotel Ramakrishna",
      type: "Budget hotel",
      description: "Budget-friendly hotel near town center with basic amenities and easy access to attractions.",
      features: ["Town Center", "Budget Friendly", "Basic Amenities", "Easy Access"],
      rating: 4.0,
      link: "#hotel-ramakrishna"
    }
  ];

  const restaurants = [
    {
      name: "Sri Abirami Hotel",
      type: "Multi-cuisine",
      description: "Popular local spot for South Indian, North Indian dishes, and flavorful biryanis. Budget-friendly with quick service.",
      specialties: ["Biryani", "South Indian", "Chinese", "North Indian"],
      rating: 4.2,
      link: "#sri-abirami"
    },
    {
      name: "Shanti Café",
      type: "Café",
      description: "Known for freshly brewed coffee, croissants from Pondicherry, and peaceful ambiance with lovely views.",
      specialties: ["Coffee", "Croissants", "Sandwiches", "French Pastries"],
      rating: 4.5,
      link: "#shanti-cafe"
    },
    {
      name: "The Dreaming Tree",
      type: "Rooftop café",
      description: "Rooftop café with fusion cuisines including raw, vegan, and gluten-free options. Perfect for relaxing.",
      specialties: ["Vegan Food", "Raw Food", "Gluten-free", "Global Cuisine"],
      rating: 4.4,
      link: "#dreaming-tree"
    },
    {
      name: "Bismillah SS Biryani",
      type: "Local restaurant",
      description: "Budget-friendly gem serving excellent chicken biryani, crispy parottas, and fried rice.",
      specialties: ["Chicken Biryani", "Parottas", "Fried Rice", "Tandoori"],
      rating: 4.1,
      link: "#bismillah-biryani"
    }
  ];

  const ashrams = [
    {
      name: "Sri Ramana Ashram",
      description: "The spiritual home of Bhagavan Sri Ramana Maharshi, offering tranquil environment for meditation and self-inquiry.",
      features: ["Meditation", "Spiritual Study", "Community Meals", "Library"]
    },
    {
      name: "Yogi Ram Surat Kumar Ashram",
      description: "Known for calm atmosphere, daily poojas, and spiritual activities - ideal for peace and healing.",
      features: ["Daily Poojas", "Healing", "Spiritual Activities", "Peaceful Environment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Stay & Food in Tiruvannamalai</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover comfortable accommodations and delicious cuisine options for your spiritual journey
          </p>
        </div>
      </section>

      {/* Hotels Section */}
      <section id="hotels" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🏨 Places to Stay</h2>
            <p className="text-lg text-gray-600">From budget hotels to luxury resorts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {hotels.map((hotel, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-purple-100" id={hotel.link.substring(1)}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-purple-600">{hotel.name}</CardTitle>
                      <p className="text-sm text-gray-500 mb-2">{hotel.type}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{hotel.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{hotel.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.features.map((feature, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Ashrams Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🕉️ Ashrams & Spiritual Stays</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ashrams.map((ashram, index) => (
                <Card key={index} className="border-orange-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-orange-600 mb-3">{ashram.name}</h4>
                    <p className="text-gray-600 mb-4">{ashram.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {ashram.features.map((feature, idx) => (
                        <span key={idx} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section id="restaurants" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🍽️ Food & Cafés</h2>
            <p className="text-lg text-gray-600">Savor authentic flavors and international cuisine</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-green-100" id={restaurant.link.substring(1)}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-green-600">{restaurant.name}</CardTitle>
                      <p className="text-sm text-gray-500 mb-2">{restaurant.type}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{restaurant.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{restaurant.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {restaurant.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Menu
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sweet Treats */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🍰 Sweet Treats & Desserts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-pink-100 hover:shadow-lg transition-all duration-300" id="cake-heaven">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-pink-600 mb-3">Cake Heaven</h4>
                  <p className="text-gray-600">Popular bakery with wide range of cakes and desserts, perfect for sweet lovers.</p>
                </CardContent>
              </Card>
              <Card className="border-pink-100 hover:shadow-lg transition-all duration-300" id="meenakshi-bhavan">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-pink-600 mb-3">Meenakshi Bhavan</h4>
                  <p className="text-gray-600">Renowned for traditional Mysore pak, a must-try South Indian sweet delight.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StayFood;
