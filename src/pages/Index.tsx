
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navigation />
      <Hero />
      <div id="why-visit">
        <WhyVisit />
      </div>
      <div id="quick-access">
        <QuickAccess />
      </div>
      <div id="featured">
        <FeaturedSections />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
