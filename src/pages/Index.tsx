
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import QuickAccess from '@/components/QuickAccess';
import FeaturedSections from '@/components/FeaturedSections';
import WhyVisit from '@/components/WhyVisit';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/WhatsApp Image 2025-06-03 at 10.45.05_9676064d.jpg')" }}></div>
      <Navigation />
      <Hero />
      <div id="why-visit" className="animate-fade-in-up">
        <WhyVisit />
      </div>
      <div id="quick-access" className="animate-fade-in-up delay-100">
        <QuickAccess />
      </div>
      <div id="featured" className="animate-fade-in-up delay-200">
        <FeaturedSections />
      </div>
      <div id="newsletter" className="animate-fade-in-up delay-300">
        <Newsletter />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
