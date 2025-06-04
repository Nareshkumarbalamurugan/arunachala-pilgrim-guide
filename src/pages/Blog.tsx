import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();

  const featuredStories = [
    {
      key: 'spiritualJourney',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jwr9v1neetv80z7091c4jnye%2F1748867403_img_0.webp?st=2025-06-02T10%3A46%3A00Z&se=2025-06-08T11%3A46%3A00Z&sks=b&skt=2025-06-02T10%3A46%3A00Z&ske=2025-06-08T11%3A46%3A00Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3b%2F%2Ff36Dou3GECEJK9PEaGxK1p%2Bnm5gQov1Pw52Wzuc%3D&az=oaivgprodscus?w=600&h=400&fit=crop',
      date: 'March 15, 2024',
      readTime: '8 min read'
    },
    {
      key: 'ramanaReflections',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jwr9y9wwfzcbbpj3pr7sd2yt%2F1748867518_img_1.webp?st=2025-06-02T10%3A48%3A18Z&se=2025-06-08T11%3A48%3A18Z&sks=b&skt=2025-06-02T10%3A48%3A18Z&ske=2025-06-08T11%3A48%3A18Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=ls7otAn1FGYnAqSs9pDWDhR9pGyxSOKrB8Qz3It%2FhFQ%3D&az=oaivgprodscus?w=600&h=400&fit=crop',
      date: 'March 10, 2024',
      readTime: '12 min read'
    },
    {
      key: 'karthigaiDeepam',
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jwr9rme4f2nt06w4qzpj7dq6%2F1748867315_img_1.webp?st=2025-06-02T10%3A49%3A05Z&se=2025-06-08T11%3A49%3A05Z&sks=b&skt=2025-06-02T10%3A49%3A05Z&ske=2025-06-08T11%3A49%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Csfk%2FTSwVZAtSgA2Bn%2ByAdQYF8jM%2BVq5FrzxW0NstCk%3D&az=oaivgprodscus?w=600&h=400&fit=crop',
      date: 'February 28, 2024',
      readTime: '10 min read'
    }
  ];

  const travelGuides = [
    { key: 'bestTime', icon: '🗓️' },
    { key: 'packing', icon: '🎒' },
    { key: 'navigation', icon: '🗺️' }
  ];

  const spiritualInsights = [
    { key: 'temple', icon: '🛕' },
    { key: 'philosophy', icon: '📚' },
    { key: 'meditation', icon: '🧘‍♀️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {t('blog.hero.title')}
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('blog.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {t('blog.featuredStories.title')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <Card key={story.key} className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={t(`blog.featuredStories.stories.${story.key}.title`)}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {t(`blog.featuredStories.stories.${story.key}.category`)}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors cursor-pointer">
                    {t(`blog.featuredStories.stories.${story.key}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {t(`blog.featuredStories.stories.${story.key}.excerpt`)}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{t(`blog.featuredStories.stories.${story.key}.author`)}</span>
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
                      {t('blog.featuredStories.readMore')}
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
            {t('blog.travelGuides.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelGuides.map((guide) => (
              <Card key={guide.key} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{guide.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`blog.travelGuides.guides.${guide.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`blog.travelGuides.guides.${guide.key}.description`)}
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
            {t('blog.spiritualInsights.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spiritualInsights.map((insight) => (
              <Card key={insight.key} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{insight.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`blog.spiritualInsights.insights.${insight.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`blog.spiritualInsights.insights.${insight.key}.description`)}
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
                <h3 className="text-2xl font-bold mb-4">{t('blog.community.submitStory.title')}</h3>
                <p className="mb-6 opacity-90">
                  {t('blog.community.submitStory.description')}
                </p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  {t('blog.community.submitStory.button')}
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-xl bg-gradient-to-br from-orange-500 to-red-600 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-2xl font-bold mb-4">{t('blog.community.voices.title')}</h3>
                <p className="mb-6 opacity-90">
                  {t('blog.community.voices.description')}
                </p>
                <Button className="bg-white text-orange-600 hover:bg-gray-100">
                  {t('blog.community.voices.button')}
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
