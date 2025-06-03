
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Linghams = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Sacred Linghams of Tiruvannamalai
          </h1>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Tiruvannamalai is blessed with numerous sacred Linghams, each with its unique spiritual significance 
              and divine energy. These ancient stone representations of Lord Shiva are scattered throughout the 
              town and along the Girivalam path, offering devotees multiple opportunities for worship and meditation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-700">Arunachaleswarar Lingam</CardTitle>
                <CardDescription>The main deity at Arunachaleswarar Temple</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The primary Lingam representing Lord Shiva as Arunachaleswarar, symbolizing the fire element. 
                  This ancient Lingam is the focal point of all major festivals and daily worship rituals.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-700">Chandra Lingam</CardTitle>
                <CardDescription>Moon deity representation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Located along the Girivalam path, this Lingam is associated with lunar energy and is 
                  particularly revered during full moon nights when devotees perform the sacred circumambulation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-700">Suriya Lingam</CardTitle>
                <CardDescription>Sun deity in Lingam form</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Representing the solar energy, this Lingam is worshipped for vitality, health, and spiritual 
                  illumination. Devotees often visit during sunrise for maximum spiritual benefit.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-700">Ner Annamalaiyar</CardTitle>
                <CardDescription>Historic Shiva Lingam</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  An ancient Lingam with deep historical roots, revered for its connection to the early 
                  spiritual traditions of Tiruvannamalai and the manifestation of divine consciousness.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Spiritual Significance</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Each Lingam represents different aspects of divine energy and consciousness
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Worshipping these Linghams is believed to purify negative karma and enhance spiritual growth
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                The Linghams along the Girivalam path create a powerful spiritual circuit of divine energy
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Many devotees report profound spiritual experiences and inner transformation
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Linghams;
