
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqSections = [
    {
      title: '📍 About Tiruvannamalai',
      questions: [
        {
          q: 'What is Tiruvannamalai famous for?',
          a: 'Tiruvannamalai is one of the most sacred Shaivite towns in India, famous for the Arunachaleswarar Temple, Girivalam (circumambulation of the holy hill), and ashrams like Ramana Maharshi Ashram. It is also one of the Pancha Bhoota Sthalams (Fire element).'
        },
        {
          q: 'When is the best time to visit?',
          a: 'The best time is from October to March, especially during Karthigai Deepam (usually in November/December), when the town comes alive with spiritual energy and festivals.'
        }
      ]
    },
    {
      title: '🛕 Temples and Spiritual Activities',
      questions: [
        {
          q: 'Is Girivalam allowed throughout the year?',
          a: 'Yes, Girivalam (walking around Arunachala hill) can be done any day, but Pournami (Full Moon) nights are considered especially powerful, attracting thousands of devotees.'
        },
        {
          q: 'Can foreigners visit the temples and ashrams?',
          a: 'Absolutely. Most temples and ashrams are open to all visitors, regardless of nationality or religion. Modest clothing and respectful behavior are expected.'
        },
        {
          q: 'Are there guided spiritual tours available?',
          a: 'Yes. Several local guides and organizations offer guided temple walks, Girivalam tours, and ashram visits. Contact us for personalized recommendations.'
        }
      ]
    },
    {
      title: '🛏️ Accommodation & Food',
      questions: [
        {
          q: 'What kind of lodging options are available?',
          a: 'From budget guesthouses to heritage stays and spiritual retreats, Tiruvannamalai has a wide range of accommodations. Visit our Stay & Lodging page for curated suggestions.'
        },
        {
          q: 'Are there vegetarian food options easily available?',
          a: 'Yes. The town has numerous pure vegetarian restaurants, ashram canteens, and health cafés serving South Indian and international cuisine.'
        }
      ]
    },
    {
      title: '🚗 Getting There',
      questions: [
        {
          q: 'How do I reach Tiruvannamalai?',
          a: 'By Train: The nearest station is Tiruvannamalai (station code: TNM), well connected to Chennai, Bangalore, and Madurai. By Road: Easily accessible by buses and taxis from Chennai (195 km), Bangalore (200 km), Pondicherry (110 km), and Vellore (80 km). By Air: Nearest airports are Chennai (MAA) and Bangalore (BLR). Check our Getting There page for detailed travel guidance.'
        }
      ]
    },
    {
      title: '🌕 Festivals & Events',
      questions: [
        {
          q: 'What is Karthigai Deepam?',
          a: 'It\'s Tiruvannamalai\'s most important festival, symbolizing the manifestation of Lord Shiva as an infinite pillar of fire. A massive beacon is lit atop Arunachala hill, visible across the region.'
        },
        {
          q: 'Are there any monthly or weekly rituals I should attend?',
          a: 'Yes, Full Moon Girivalam, Pradosham, and weekly Abhishekams at Arunachaleswarar Temple are highly recommended spiritual events.'
        }
      ]
    },
    {
      title: '💬 General Questions',
      questions: [
        {
          q: 'Is Tiruvannamalai safe for solo travelers?',
          a: 'Yes. Tiruvannamalai is considered a safe destination for pilgrims and solo travelers. Always take standard precautions, especially during late hours.'
        },
        {
          q: 'Do I need to book in advance during festivals?',
          a: 'Yes. Accommodation, train tickets, and taxis get booked quickly around Karthigai Deepam and Full Moon days. Plan and book early.'
        },
        {
          q: 'Can I contribute my blog/story?',
          a: 'We\'d love to feature your spiritual experiences! Visit our Blog/Stories page or email us with your content idea.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Have questions about Tiruvannamalai, spiritual travel, or how to plan your visit? 
            We've compiled answers to the most common queries. If you don't find what you're looking for, 
            feel free to contact us.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {section.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${sectionIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left hover:text-blue-600 transition-colors">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-2xl bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-12">
              <div className="text-5xl mb-6">❓</div>
              <h2 className="text-3xl font-bold mb-6">
                Still have questions?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                We're just an email away and ready to help with your Tiruvannamalai journey
              </p>
              <div className="space-y-4">
                <p className="text-lg">
                  <strong>Email:</strong> kamaleshkumarbalamurugan@gmail.com
                </p>
                <p className="opacity-90">
                  Or explore more information throughout our website
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
