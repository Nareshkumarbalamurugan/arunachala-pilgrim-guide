
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const QuickAccess = () => {
  const quickLinks = [
    {
      icon: '🛕',
      title: 'Temples Map',
      description: 'Discover ancient temples',
      path: '/temples',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      icon: '🚶',
      title: 'Girivalam Path',
      description: 'Sacred hill walk guide',
      path: '/girivalam',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: '🏨',
      title: 'Places to Stay',
      description: 'Find accommodation',
      path: '/stay-food',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      icon: '📅',
      title: 'Upcoming Festivals',
      description: 'Plan your visit',
      path: '/festivals',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-gray-600">
            Start planning your spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link key={index} to={link.path}>
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-none overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${link.gradient} p-6 text-white`}>
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{link.title}</h3>
                    <p className="opacity-90">{link.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
