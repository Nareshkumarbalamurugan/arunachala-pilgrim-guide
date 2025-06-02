
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedSections = () => {
  const sections = [
    {
      title: 'Sacred Temples of Tiruvannamalai',
      description: 'Discover the history, significance, and visiting details of Arunachaleswarar Temple, Ramana Maharshi Ashram, and other spiritual landmarks.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jwr9gzwpftyvdq2k0nj3hth5%2F1748867077_img_0.webp?st=2025-06-02T10%3A49%3A05Z&se=2025-06-08T11%3A49%3A05Z&sks=b&skt=2025-06-02T10%3A49%3A05Z&ske=2025-06-08T11%3A49%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=GYctqCAqZrMrXUARy5d%2B6XyBYwACNYhubZ8aTRDfkLg%3D&az=oaivgprodscus',
      link: '/temples',
      buttonText: 'Explore Temples →'
    },
    {
      title: 'Girivalam: The Sacred Hill Walk',
      description: 'Walk the 14 km circumambulation path around Arunachala Hill. Learn about the eight sacred lingams, best timings, and essential tips.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jwnzbe31fehvc68x7f51zgfx%2F1748789313_img_0.webp?st=2025-06-02T10%3A49%3A42Z&se=2025-06-08T11%3A49%3A42Z&sks=b&skt=2025-06-02T10%3A49%3A42Z&ske=2025-06-08T11%3A49%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3wDm%2BwR75gm026KuTaKFXGWCiY8IEgk2HOtuwSVXngA%3D&az=oaivgprodscus',
      link: '/girivalam',
      buttonText: 'Begin Girivalam →'
    },
    {
      title: 'Festivals & Events',
      description: 'Join the vibrant celebrations of Karthigai Deepam, Mahashivaratri, and monthly full moon Girivalam.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jwr930vce0vv9pc3xc3etrvk%2F1748866623_img_0.webp?st=2025-06-02T10%3A23%3A46Z&se=2025-06-08T11%3A23%3A46Z&sks=b&skt=2025-06-02T10%3A23%3A46Z&ske=2025-06-08T11%3A23%3A46Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=yFJjD0kO%2F5633vPTYitDFBGKGRC%2Bd5fLYshK3TSC%2FHg%3D&az=oaivgprodscus',
      link: '/festivals',
      buttonText: 'View Festival Calendar →'
    },
    {
      title: 'Stay & Food',
      description: 'Find comfortable stays from ashrams to guesthouses and savor local vegetarian cuisine and organic cafes.',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jwnzr0g5f5dacx3xdxcdqr47%2F1748789710_img_2.webp?st=2025-06-02T10%3A49%3A42Z&se=2025-06-08T11%3A49%3A42Z&sks=b&skt=2025-06-02T10%3A49%3A42Z&ske=2025-06-08T11%3A49%3A42Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=%2FhHZ7FS0v5buaLCoBc1J3KcSXKmVGo9Sjw0lIslGuzM%3D&az=oaivgprodscus',
      link: '/stay-food',
      buttonText: 'Find Your Stay & Food →'
    }
  ];

  return (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Featured Sections
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to plan your perfect spiritual journey
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <Card
  key={index}
  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-orange-100"
>
  {/* Image container with fixed height and no overlay */}
  <div className="w-full h-64 relative overflow-hidden">
    <img
      src={section.image}
      alt={section.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Card content */}
  <CardContent className="p-6">
    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-200">
      {section.title}
    </h3>
    <p className="text-gray-600 mb-6 leading-relaxed">
      {section.description}
    </p>
    <Link to={section.link}>
      <Button className="bg-orange-600 hover:bg-orange-700 text-white group-hover:shadow-lg transition-all duration-200">
        {section.buttonText}
        <ArrowRight className="ml-2" size={16} />
      </Button>
    </Link>
  </CardContent>
</Card>

        ))}
      </div>
    </div>
  </section>
);
};
export default FeaturedSections;
