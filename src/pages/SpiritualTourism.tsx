
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const SpiritualTourism = () => {
  const practices = [
    {
      title: 'Girivalam – The Sacred Circumambulation',
      description: 'Every full moon night, thousands gather to walk the 14-km path around Arunachala Hill.',
      details: 'This meditative pilgrimage purifies the mind and body. Devotees chant mantras, perform pujas at shrines, and experience deep connection to the divine.',
      icon: '🚶‍♂️'
    },
    {
      title: 'Meditation and Self-Inquiry',
      description: 'The teachings of Ramana Maharshi emphasize self-inquiry—asking "Who am I?"',
      details: 'Join guided meditation sessions or practice silent meditation within the peaceful environs of the ashram to dissolve ego and realize true nature.',
      icon: '🧘‍♀️'
    },
    {
      title: 'Temple Rituals Participation',
      description: 'Daily aarti, abhishekam, and archana at Arunachaleswarar Temple.',
      details: 'These rituals help deepen devotion and create a sacred ambiance. Experience direct engagement with spiritual traditions.',
      icon: '🕯️'
    },
    {
      title: 'Yoga and Holistic Healing',
      description: 'Several centers offer yoga classes, pranayama, Ayurveda treatments, and Reiki healing.',
      details: 'These holistic practices complement spiritual growth by promoting physical health and emotional balance.',
      icon: '🕉️'
    }
  ];

  const reasons = [
    {
      title: 'Arunachala Hill – The Spiritual Axis',
      description: 'According to Hindu mythology, Arunachala is the embodiment of Lord Shiva in fire form, one of the five sacred elements.',
      icon: '⛰️'
    },
    {
      title: 'Ancient Temples and Rituals',
      description: 'The Arunachaleswarar Temple, built between 9th-10th centuries, features colossal gopurams and sacred tanks.',
      icon: '🛕'
    },
    {
      title: 'Home of Saint Ramana Maharshi',
      description: 'Linked with one of the 20th century\'s greatest spiritual masters and his teachings on self-inquiry.',
      icon: '👤'
    },
    {
      title: 'Vibrant Spiritual Festivals',
      description: 'Festivals like Karthigai Deepam feature hilltop fire lighting, night-long vigils, and devotional music.',
      icon: '🎉'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Spiritual Tourism in Tiruvannamalai
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            A world-renowned spiritual destination that has drawn seekers, pilgrims, and tourists for centuries. 
            Often called the "Spiritual Heart of South India," this sacred town offers profound religious significance, 
            ancient temples, serene ashrams, and deeply rooted traditions.
          </p>
        </div>
      </section>

      {/* Why Spiritual Haven */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Tiruvannamalai is a Spiritual Haven
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4 text-center">{reason.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Practices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Spiritual Practices and Experiences
          </h2>
          
          <div className="space-y-8">
            {practices.map((practice, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-1 text-center">
                      <div className="text-5xl">{practice.icon}</div>
                    </div>
                    <div className="lg:col-span-11">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {practice.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-4">
                        {practice.description}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {practice.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Your Visit */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Planning Your Spiritual Visit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-600 mb-4">Best Time to Visit</h3>
                <p className="text-gray-600 mb-4">
                  October to March offers pleasant weather and coincides with major festivals. 
                  Full moon days and festival periods are especially auspicious.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-700">
                    <strong>Note:</strong> Festival periods are busier but more spiritually vibrant.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-4">Accommodation Options</h3>
                <p className="text-gray-600 mb-4">
                  Numerous ashrams offer simple lodging for spiritual seekers. 
                  Hotels and guesthouses nearby cater to varying budgets.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-indigo-700">
                    <strong>Tip:</strong> Ashram stays provide authentic spiritual atmosphere.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-600 mb-4">Spiritual Etiquette</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Dress modestly and respectfully</li>
                  <li>• Maintain silence in meditation areas</li>
                  <li>• Remove footwear before entering temples</li>
                  <li>• Respect temple customs and traditions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Local Guides</h3>
                <p className="text-gray-600 text-sm">
                  Hiring knowledgeable local guides can enrich your experience, 
                  providing insights into history, symbolism, and spiritual significance of the sites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Testimonials from Spiritual Travelers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4 text-center">💫</div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "Walking around Arunachala under the full moon was a transformative experience. 
                  The energy was palpable, and the silence inside the Ramana Ashram helped me find peace I hadn't known before."
                </p>
                <p className="text-right text-purple-600 font-semibold">— Anita, USA</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-8">
                <div className="text-4xl mb-4 text-center">🙏</div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "Tiruvannamalai is a sanctuary for the soul. The mix of ancient traditions, 
                  natural beauty, and profound teachings created a journey that I will cherish forever."
                </p>
                <p className="text-right text-orange-600 font-semibold">— Rajesh, India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpiritualTourism;
