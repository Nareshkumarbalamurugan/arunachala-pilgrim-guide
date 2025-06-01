
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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Navigation />
      <Hero />
      <WhyVisit />
      <QuickAccess />
      <FeaturedSections />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
