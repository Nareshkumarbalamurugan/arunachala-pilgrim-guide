
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const featuredStories = [
    {
      title: 'My Spiritual Journey to Arunachala Hill',
      excerpt: 'Discover one devotee\'s transformative experience during the Girivalam walk around Arunachala Hill on a full moon night.',
      author: 'Priya Sharma',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'Spiritual Experience',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop'
    },
    {
      title: 'Meeting Ramana Maharshi: Reflections from the Ashram',
      excerpt: 'An inspiring account of a visitor\'s time at the Ramana Maharshi Ashram, exploring teachings on self-inquiry and silent meditation.',
      author: 'David Wilson',
      date: 'March 10, 2024',
      readTime: '12 min read',
      category: 'Ashram Life',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop'
    },
    {
      title: 'The Karthigai Deepam Festival: A Night of Lights and Devotion',
      excerpt: 'Experience the magic of Karthigai Deepam through a vibrant narrative of the festival\'s celebrations and the sacred fire atop Arunachala.',
      author: 'Lakshmi Devi',
      date: 'February 28, 2024',
      readTime: '10 min read',
      category: 'Festivals',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop'
    }
  ];

  const travelGuides = [
    {
      title: 'Best Time to Visit Tiruvannamalai',
      description: 'Understand seasonal variations, festivals, and weather to plan your trip perfectly.',
      icon: '🗓️'
    },
    {
      title: 'What to Pack for Your Pilgrimage',
      description: 'A handy checklist of essentials for comfort, convenience, and spiritual readiness.',
      icon: '🎒'
    },
    {
      title: 'Navigating Tiruvannamalai: A Local\'s Guide',
      description: 'Discover hidden gems, local eateries, and tranquil spots away from usual tourist paths.',
      icon: '🗺️'
    }
  ];

  const spiritualInsights = [
    {
      title: 'Understanding the Significance of Arunachaleswarar Temple',
      description: 'Dive into the mythology, symbolism, and unique rituals that make this temple profound.',
      icon: '🛕'
    },
    {
      title: 'The Philosophy of Ramana Maharshi',
      description: 'Explore key teachings and how they continue to inspire seekers worldwide.',
      icon: '📚'
    },
    {
      title: 'Meditation Practices in Tiruvannamalai',
      description: 'Learn about different meditation techniques taught in local ashrams and centers.',
      icon: '🧘‍♀️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Blog & Stories
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Welcome to your gateway to vibrant experiences, timeless wisdom, and inspiring journeys of Tiruvannamalai. 
            Discover captivating stories from pilgrims, travelers, and spiritual seekers who have walked these sacred paths.
          </p>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Featured Stories
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {story.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors cursor-pointer">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{story.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{story.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 text-sm font-semibold">
                      {story.readTime}
                    </span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips & Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Travel Tips & Guides
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelGuides.map((guide, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{guide.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {guide.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Insights */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Spiritual Insights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spiritualInsights.map((insight, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{insight.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {insight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Submit */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-xl bg-gradient-to-br from-purple-500 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-2xl font-bold mb-4">Submit Your Story</h3>
                <p className="mb-6 opacity-90">
                  Have a memorable experience from Tiruvannamalai? Share your journey, reflections, and photos 
                  to become part of our growing community.
                </p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  Share Your Experience
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-2xl font-bold mb-4">Community Voices</h3>
                <p className="mb-6 opacity-90">
                  Read real-life experiences from devotees who found solace, healing, and awakening. 
                  Connect with fellow spiritual travelers.
                </p>
                <Button className="bg-white text-orange-600 hover:bg-gray-100">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
