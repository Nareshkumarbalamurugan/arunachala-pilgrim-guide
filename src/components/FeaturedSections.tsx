
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST13MSSNCLD2FJ4iaRHjeHHLTNPVLVfpWpbARtD57zhwPGKNbGSysyuJLZICWpt2sxFfhB&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Jt6QK-WsklvUJlqXrS96J22pFgEgFFrOUQ&s',
      link: '/temples',
      buttonText: 'Explore Temples →'
    },
    {
      title: 'Girivalam: The Sacred Hill Walk',
      description: 'Walk the 14 km circumambulation path around Arunachala Hill. Learn about the eight sacred lingams, best timings, and essential tips.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Jt6QK-WsklvUJlqXrS96J22pFgEgFFrOUQ&s',
      link: '/girivalam',
      buttonText: 'Begin Girivalam →'
    },
    {
      title: 'Festivals & Events',
      description: 'Join the vibrant celebrations of Karthigai Deepam, Mahashivaratri, and monthly full moon Girivalam.',
      image: 'data:image/jpeg;base64,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',
      link: '/festivals',
      buttonText: 'View Festival Calendar →'
    },
    {
      title: 'Stay & Food',
      description: 'Find comfortable stays from ashrams to guesthouses and savor local vegetarian cuisine and organic cafes.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpSKcFuEtSTnOlX4AWhPEfulhxilohctzdw&s',
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
          <Card
  key={index}
  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-orange-100"
>
  {/* Image container with fixed height and no overlay */}
  <div className="w-full h-64 relative overflow-hidden">
    <img
      src={section.image}
      alt={section.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Card content */}
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
