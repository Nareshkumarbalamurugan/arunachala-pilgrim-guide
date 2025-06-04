import React, { useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, Send, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      const result = await emailjs.sendForm(
        'service_gkq4n2h',
        'template_s8ai5ce',
        formRef.current,
        'yrJgpVTnTpZndjJdj'
      );

      console.log('Success:', result);
      toast({
        title: t('contact.success.title'),
        description: t('contact.success.description'),
        variant: "default",
      });
      formRef.current.reset();
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      toast({
        title: t('contact.error.title'),
        description: error?.text || t('contact.error.description'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917812813773', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contact.title')}</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      id="from_name"
                      name="from_name"
                      required
                      placeholder={t('contact.form.placeholder.name')}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      id="reply_to"
                      name="reply_to"
                      type="email"
                      required
                      placeholder={t('contact.form.placeholder.email')}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder={t('contact.form.placeholder.message')}
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t('contact.form.sending')
                    ) : (
                      <>
                        {t('contact.form.submit')}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contact.quickContact.title')}</h2>

                  {/* WhatsApp Button */}
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full mb-4 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 h-12"
                  >
                    <MessageSquare className="h-5 w-5" />
                    {t('contact.quickContact.whatsapp')}
                  </Button>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{t('contact.quickContact.phone')}</h3>
                        <p className="text-gray-600">+91 7812813773</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{t('contact.quickContact.email')}</h3>
                        <p className="text-gray-600">kamaleshkumarbalamurugan@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information Card */}
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('contact.responseTime.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('contact.responseTime.description')}
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800">
                      {t('contact.responseTime.availability')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
