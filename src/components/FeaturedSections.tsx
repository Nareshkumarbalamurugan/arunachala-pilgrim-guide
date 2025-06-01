
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedSections = () => {
  const sections = [
    {
      title: 'Sacred Temples of Tiruvannamalai',
      description: 'Discover the history, significance, and visiting details of Arunachaleswarar Temple, Ramana Maharshi Ashram, and other spiritual landmarks.',
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&h=400&fit=crop',
      link: '/temples',
      buttonText: 'Explore Temples →'
    },
    {
      title: 'Girivalam: The Sacred Hill Walk',
      description: 'Walk the 14 km circumambulation path around Arunachala Hill. Learn about the eight sacred lingams, best timings, and essential tips.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
      link: '/girivalam',
      buttonText: 'Begin Girivalam →'
    },
    {
      title: 'Festivals & Events',
      description: 'Join the vibrant celebrations of Karthigai Deepam, Mahashivaratri, and monthly full moon Girivalam.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop',
      link: '/festivals',
      buttonText: 'View Festival Calendar →'
    },
    {
      title: 'Stay & Food',
      description: 'Find comfortable stays from ashrams to guesthouses and savor local vegetarian cuisine and organic cafes.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
      link: '/stay-food',
      buttonText: 'Find Your Stay & Food →'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Sections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to plan your perfect spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-orange-100">
              <div className="relative overflow-hidden">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-200">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {section.description}
                </p>
                <Link to={section.link}>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white group-hover:shadow-lg transition-all duration-200">
                    {section.buttonText}
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSections;
