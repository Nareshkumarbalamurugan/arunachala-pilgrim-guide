import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeaturedSections = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('home.featuredSections.sections.temples.title'),
      description: t('home.featuredSections.sections.temples.description'),
      image: 'https://ik.imagekit.io/vitr7ll7f/assets_task_01jwr9gzwpftyvdq2k0nj3hth5_1748867077_img_0.webp?updatedAt=1749457992441',
      link: '/temples',
      buttonText: t('home.featuredSections.sections.temples.buttonText')
    },
    {
      title: t('home.featuredSections.sections.girivalam.title'),
      description: t('home.featuredSections.sections.girivalam.description'),
      image: 'https://ik.imagekit.io/vitr7ll7f/assets_task_01jwnzbe31fehvc68x7f51zgfx_1748789313_img_1.webp?updatedAt=1749457992506',
      link: '/girivalam',
      buttonText: t('home.featuredSections.sections.girivalam.buttonText')
    },
    {
      title: t('home.featuredSections.sections.festivals.title'),
      description: t('home.featuredSections.sections.festivals.description'),
      image: 'https://ik.imagekit.io/vitr7ll7f/assets_task_01jwr930vce0vv9pc3xc3etrvk_1748866623_img_0.webp?updatedAt=1749457998107',
      link: '/festivals',
      buttonText: t('home.featuredSections.sections.festivals.buttonText')
    },
    {
      title: t('home.featuredSections.sections.stayFood.title'),
      description: t('home.featuredSections.sections.stayFood.description'),
      image: 'https://ik.imagekit.io/vitr7ll7f/assets_task_01jwnzr0g5f5dacx3xdxcdqr47_1748789710_img_2.webp?updatedAt=1749457991860',
      link: '/stay-food',
      buttonText: t('home.featuredSections.sections.stayFood.buttonText')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('home.featuredSections.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.featuredSections.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-orange-100 flex flex-col h-full"
            >
              {/* Image container with 16:9 aspect ratio */}
              <div className="relative w-full pt-[56.25%] overflow-hidden bg-gradient-to-br from-orange-50 to-purple-50">
                <img
                  src={section.image}
                  alt={section.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-200">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  {section.description}
                </p>
                <Link to={section.link} className="inline-block">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white group-hover:shadow-lg transition-all duration-200 w-full">
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
