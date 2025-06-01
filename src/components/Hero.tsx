
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('data:image/jpeg;base64,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')`
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold mb-4 animate-pulse">
                ✨ Sacred Spiritual Destination
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
              Discover the Sacred Heart of Tamil Nadu
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in leading-relaxed">
              Your Complete Guide to Temples, Girivalam, Stays & Spiritual Journeys in Tiruvannamalai
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-gray-300">Sacred Temples</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-blue-300">14km</div>
                <div className="text-sm text-gray-300">Girivalam Path</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-green-300">1000+</div>
                <div className="text-sm text-gray-300">Years History</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-purple-300">365</div>
                <div className="text-sm text-gray-300">Days Sacred</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border-0"
              >
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-black hover:bg-black hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
              >
                Plan Tour Trip
              </Button>
            </div>
          </div>

          {/* Right Side - Interactive Elements */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              {/* Feature Cards */}
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Sacred Temples</h3>
                      <p className="text-gray-300">Explore ancient spiritual landmarks</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-3 rounded-full">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Festivals & Events</h3>
                      <p className="text-gray-300">Join vibrant spiritual celebrations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-400 to-teal-500 p-3 rounded-full">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Spiritual Community</h3>
                      <p className="text-gray-300">Connect with fellow seekers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-float animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
