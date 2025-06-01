
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhyVisit = () => {
  const reasons = [
    {
      icon: '✨',
      title: 'Home of Arunachala',
      description: 'The Eternal Fire Lingam of Shiva'
    },
    {
      icon: '🕉️',
      title: 'Saints & Sages',
      description: 'Birthplace of Sri Ramana Maharshi'
    },
    {
      icon: '🌕',
      title: 'Sacred Girivalam',
      description: 'Monthly Full Moon pilgrimage walk'
    },
    {
      icon: '🛕',
      title: 'Ancient Temples',
      description: 'Explore spiritual landmarks & ashrams'
    },
    {
      icon: '🧘',
      title: 'Peaceful Retreats',
      description: 'Meditation, yoga & self-discovery'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Visit Tiruvannamalai?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the spiritual energy and divine presence of this sacred town
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-100 hover:border-orange-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVisit;
