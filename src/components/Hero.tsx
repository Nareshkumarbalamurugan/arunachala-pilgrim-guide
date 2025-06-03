
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('https://videos.openai.com/vg-assets/assets%2Ftask_01jwr80a3jfmn8z31p37e0jjym%2F1748865478_img_0.webp?st=2025-06-02T10%3A42%3A16Z&se=2025-06-08T11%3A42%3A16Z&sks=b&skt=2025-06-02T10%3A42%3A16Z&ske=2025-06-08T11%3A42%3A16Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=moPOvUGr9Dw0VZ6kNovx90Z8u6xNZFx7TFnCzPTkzgI%3D&az=oaivgprodscus')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
              Discover the Sacred Heart of Tamil Nadu
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in leading-relaxed">
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
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
              >
                Plan Your Trip
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
