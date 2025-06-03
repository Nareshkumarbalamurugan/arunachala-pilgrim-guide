import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Compass, Mountain, ExternalLink } from 'lucide-react';

const lingams = [
  {
    direction: 'East',
    name: 'Indra Lingam',
    deity: 'Lord Indra',
    description:
      'Indra, king of heaven, grants spiritual insight and rides the four-tusked elephant Iravathi. This lingam is close to the eastern tower of the Big Temple on Car Street.',
    location: 'Near Big Temple, Car Street',
    color: 'text-blue-600',
    mapLink: 'https://maps.app.goo.gl/MSD4cptPoMTK7Nek8'
  },
  {
    direction: 'South-East',
    name: 'Agni Lingam',
    deity: 'Lord Agni',
    description:
      'Agni, the god of fire and knowledge, acts as the divine messenger. Worshipped during homas, Agni connects man and gods. Found near Seshadri Ashram.',
    location: 'Seshadri Street, Chengam Road',
    color: 'text-red-600',
    mapLink: 'https://maps.app.goo.gl/HXRxuqYC4u6ujU2y8'
  },
  {
    direction: 'South',
    name: 'Yama Lingam',
    deity: 'Lord Yama',
    description:
      'Yama, the god of death, reminds beings of mortality and dharma. Associated with the stories of Markandeya and Savitri. Located beside cremation grounds.',
    location: 'Cremation grounds, Chengam Road',
    color: 'text-black',
    mapLink: 'https://maps.app.goo.gl/vo5U824q2WgzrxYm8'
  },
  {
    direction: 'South-West',
    name: 'Nirudhi Lingam',
    deity: 'Nirudhi',
    description:
      'Nirudhi governs desires and attachments, helping devotees overcome worldly bonds. Located just after Sonagiri and Shanthi Malai compounds.',
    location: 'Near Sonagiri, Giri Valam Path',
    color: 'text-purple-700',
    mapLink: 'https://maps.app.goo.gl/UFgkrWrNyBXndqbt7'
  },
  {
    direction: 'West',
    name: 'Varuna Lingam',
    deity: 'Lord Varuna',
    description:
      'Varuna, god of waters and cosmic law, rides the Makara. Worshipping him brings clarity and flow. Found before Adi Annamalai village.',
    location: '1 km before Adi Annamalai',
    color: 'text-blue-800',
    mapLink: 'https://maps.app.goo.gl/Fe7hqkwqNQgjvRzR8'
  },
  {
    direction: 'North-West',
    name: 'Vayu Lingam',
    deity: 'Lord Vayu',
    description:
      'Vayu, god of air and breath, sustains life. Known for swift motion and energy. Located near Gosalai on the giri valam route.',
    location: 'Near Gosalai, Giri Valam Path',
    color: 'text-green-600',
    mapLink: 'https://maps.app.goo.gl/VmnPcEAahF8DkVGz6'
  },
  {
    direction: 'North',
    name: 'Kubera Lingam',
    deity: 'Lord Kubera',
    description:
      'Kubera, the god of wealth and Yakshas, blesses prosperity. He worships Shiva at Arunachala. Located before entering the town.',
    location: 'Before re-entering Tiruvannamalai',
    color: 'text-yellow-700',
    mapLink: 'https://maps.app.goo.gl/CoJYCWnbqoQvCBU8A'
  },
  {
    direction: 'North-East',
    name: 'Eesanya Lingam',
    deity: 'Eesanyar',
    description:
      'Isanyar, a Rudra of Shiva, bears the ash-covered body and sacred symbols. Associated with transcendence. Found near the new bus stand.',
    location: 'Near Old Cremation Grounds, Bus Stand Road',
    color: 'text-gray-700',
    mapLink: 'https://maps.app.goo.gl/HsDAzYmBYbEBqWkF9'
  }
];

const Linghams = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/arunachala-sunset.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl font-bold mb-6 text-white">Ashta Lingams of Arunachala</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Eight sacred lingams placed around Arunachala, each facing one of the cardinal directions, represent the Ashta Dikpalakas (Guardians of Directions). Pilgrims receive unique blessings from each as they perform Giri Pradakshina.
          </p>
        </div>
      </section>

      {/* Lingams Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {lingams.map((lingam, index) => (
            <a
              key={index}
              href={lingam.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <div className={`flex items-center justify-between mb-4`}>
                    <div className={`flex items-center ${lingam.color}`}>
                      <Compass size={28} />
                    </div>
                    <span className="flex items-center gap-1 text-orange-600 group-hover:text-orange-700 transition-colors">
                      <MapPin size={16} />
                      <ExternalLink size={14} />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {lingam.direction} – {lingam.name}
                  </h3>
                  <p className="text-sm text-gray-600 italic mb-2">Deity: {lingam.deity}</p>
                  <p className="text-gray-700 mb-4">{lingam.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-2" size={16} />
                    {lingam.location}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-red-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Begin Your Sacred Journey</h2>
          <p className="text-gray-600 text-lg mb-6">
            Whether you're planning a physical pilgrimage or spiritual contemplation, the Ashta Lingams offer a unique path to connect with Shiva in all His aspects. Visit, meditate, and feel the presence of Arunachala.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Linghams;