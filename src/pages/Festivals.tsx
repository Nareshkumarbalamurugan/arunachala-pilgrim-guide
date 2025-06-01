import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Festivals = () => {
  const majorFestivals = [
    {
      name: 'Karthigai Deepam',
      when: 'November–December (Karthigai month, full moon day)',
      significance: 'The most iconic festival of Tiruvannamalai, celebrating the divine light of Lord Shiva manifested as the eternal fire atop Arunachala Hill.',
      highlights: [
        'Massive beacon fire lit on the summit of Arunachala Hill',
        'Special poojas and night-long chanting',
        'Temple and town illuminated with thousands of oil lamps'
      ],
      spiritual: 'Symbolizes the victory of light over darkness and the divine presence within.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Maha Shivaratri',
      when: 'February–March (Phalguna month)',
      significance: 'A sacred night dedicated to Lord Shiva, marked by fasting, meditation, and vigil.',
      highlights: [
        'Overnight worship at Arunachaleswarar Temple',
        'Special abhishekams and chants of the Shiva Lingam',
        'Spiritual discourses and cultural performances'
      ],
      spiritual: 'Celebrates the cosmic dance of Shiva and the overcoming of ignorance.',
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&h=400&fit=crop',
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Tiruvannamalai Girivalam Festival',
      when: 'Full moon nights throughout the year',
      significance: 'Devotees circumambulate Arunachala Hill, performing the holy Girivalam pilgrimage by moonlight.',
      highlights: [
        'Thousands participate in the 14 km night walk',
        'Spiritual songs, lamps, and serene atmosphere',
        'Monthly spiritual gathering'
      ],
      spiritual: 'A practice believed to purify karma and enhance spiritual growth.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      name: 'Thai Poosam',
      when: 'January–February (Thai month)',
      significance: 'Dedicated to Lord Murugan (Subramanya), son of Shiva, who is highly revered in Tiruvannamalai.',
      highlights: [
        'Devotional processions with kavadi carried by devotees',
        'Special pujas at the Subramaniya Swamy Temple',
        'Colorful cultural celebrations'
      ],
      spiritual: 'Celebrates courage, devotion, and the divine victory of good over evil.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
      color: 'from-green-500 to-teal-600'
    }
  ];

  const otherFestivals = [
    'Navaratri - Nine nights of worship dedicated to Goddess Durga',
    'Aadi Pooram - Celebrating the goddess\'s grace with rituals',
    'Vaikasi Visakam - Honoring Lord Murugan with festivities',
    'Panguni Uthiram - Celebrates divine marriages and cosmic harmony'
  ];

  const tips = [
    'Plan Early: Book accommodations well in advance',
    'Respect Local Customs: Dress modestly and follow temple etiquette',
    'Stay Hydrated: Carry water and keep personal belongings secure',
    'Participate Mindfully: Join rituals with devotion and respect'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Festivals of Tiruvannamalai
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Tiruvannamalai is a living spiritual canvas painted with vibrant festivals that honor Lord Arunachaleswarar 
            and celebrate the rich cultural heritage of the region. These festivals draw thousands of devotees from 
            across India and the world.
          </p>
        </div>
      </section>

      {/* Major Festivals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Major Festivals
          </h2>
          
          <div className="space-y-16">
            {majorFestivals.map((festival, index) => (
              <Card key={index} className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${festival.color} p-2`}></div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={festival.image} 
                      alt={festival.name}
                      className="w-full h-80 lg:h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {festival.name}
                    </h3>
                    <p className="text-orange-600 font-semibold mb-4">
                      {festival.when}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {festival.significance}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Highlights:</h4>
                      <ul className="space-y-2">
                        {festival.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Spiritual Importance:</h4>
                      <p className="text-gray-600 text-sm">{festival.spiritual}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Festivals */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Other Noteworthy Festivals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherFestivals.map((festival, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🎉</div>
                  <p className="text-gray-700 font-medium">{festival}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Tips */}
      <section className="py-16 bg-gradient-to-br from-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Experience the Festivals
              </h2>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Visiting Tiruvannamalai during these festivals offers a unique chance to witness centuries-old 
                    traditions, devotional fervor, and spiritual grandeur. The vibrant decorations, collective prayers, 
                    sacred music, and overwhelming energy create an unforgettable experience.
                  </p>
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-lg">
                    <p className="font-semibold">✨ Festival Magic</p>
                    <p className="text-sm opacity-90">
                      Join thousands in celebration of divine light, spiritual music, and communal joy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Tips for Festival Visitors
              </h2>
              <div className="space-y-4">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Festivals;
