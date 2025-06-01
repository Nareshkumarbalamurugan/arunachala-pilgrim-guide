
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhyVisit = () => {
  const reasons = [
    {
      icon: '✨',
      title: 'Home of Arunachala',
      description: 'The Eternal Fire Lingam of Shiva',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🕉️',
      title: 'Saints & Sages',
      description: 'Birthplace of Sri Ramana Maharshi',
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      icon: '🌕',
      title: 'Sacred Girivalam',
      description: 'Monthly Full Moon pilgrimage walk',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '🛕',
      title: 'Ancient Temples',
      description: 'Explore spiritual landmarks & ashrams',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      icon: '🧘',
      title: 'Peaceful Retreats',
      description: 'Meditation, yoga & self-discovery',
      gradient: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Why Visit Tiruvannamalai?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the spiritual energy and divine presence of this sacred town
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-purple-100 hover:border-purple-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${reason.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
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
