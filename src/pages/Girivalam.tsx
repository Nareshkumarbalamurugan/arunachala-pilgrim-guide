
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Girivalam = () => {
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
            Girivalam: The Sacred Hill Walk
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Girivalam, also known as Arunachala Pradakshina, is the revered spiritual practice of circumambulating 
            the sacred Arunachala Hill. This 14-kilometer journey brings spiritual purification, blessings, and liberation.
          </p>
        </div>
      </section>

      {/* Significance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Significance of Girivalam
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Arunachala Hill itself is considered a manifestation of Lord Shiva in the form of fire (Agni), 
                one of the five elemental forms (Pancha Bhoota Stalas). Performing Girivalam is not just a physical 
                journey but a deeply spiritual pilgrimage symbolizing surrender, devotion, and union with the divine.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The circumambulation path is dotted with temples, shrines, sacred spots, and natural beauty, 
                allowing pilgrims to immerse themselves in the divine presence and experience spiritual awakening.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop" 
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
            When to Do Girivalam
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🌕</div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Full Moon Night</h3>
                <p className="text-gray-600 leading-relaxed">
                  The most auspicious time when thousands of devotees gather to walk the path by moonlight, 
                  creating a magical and serene atmosphere.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Festival Days</h3>
                <p className="text-gray-600 leading-relaxed">
                  Special festivals such as Karthigai Deepam and Maha Shivaratri also see large numbers 
                  of pilgrims performing this sacred walk.
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
            The Girivalam Route
          </h2>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <div className="text-6xl mb-6">🚶‍♂️</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">14 Kilometers</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The path encircles Arunachala Hill and is well-marked and accessible, featuring important temples, 
                sacred spots, shrines dedicated to various deities, and natural features imbued with spiritual significance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Stops Include:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Arunachaleswarar Temple</li>
                    <li>• Seshadri Swamigal Ashram</li>
                    <li>• Various Sacred Shrines</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sacred Features:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Holy streams and trees</li>
                    <li>• Eight sacred lingams</li>
                    <li>• Natural rock formations</li>
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
            Tips for Girivalam
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
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
            Spiritual Benefits
          </h2>
          
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🕉️</div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                  Transformative Experience
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Spiritual Benefits:</h4>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Experience Report:</h4>
                  <p className="text-gray-600 italic leading-relaxed">
                    "Many devotees report feelings of peace, renewal, and spiritual insight after completing 
                    the circumambulation. The energy of Arunachala is truly transformative."
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
