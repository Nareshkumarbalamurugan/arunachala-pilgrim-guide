import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const View360 = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {t('navigation.view360')}
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('360View.subtitle')}
          </p>
        </div>
      </section>
  
        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1749444159617!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0V6b1AtZ1FF!2m2!1d12.23120705824936!2d79.06989230416167!3f275.3901937707736!4f2.4732604935288407!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1749444826543!5m2!1sen!2sin!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDVpdGVLSXc.!2m2!1d12.23161951831423!2d79.06768431124134!3f54.61255439947209!4f-31.94744171978448!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1749445671817!6m8!1m7!1sWKa-F32GmeMSHdxLV7lNlA!2m2!1d12.22952907420139!2d79.06729597850384!3f25.099125!4f0!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1749445782310!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRE1wb0hRdlFF!2m2!1d12.23267587639434!2d79.06791989612732!3f250.90034!4f0!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1749446000994!5m2!1sen!2sin!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRE1wb0hRdlFF!2m2!1d12.23267587639434!2d79.06791989612732!3f225.13815!4f0!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1749446163489!5m2!1sen!2sin!6m8!1m7!1szSj_guy8oJ5g8w87AmkVHg!2m2!1d12.22526999945299!2d79.07473876256459!3f121.88087749591865!4f-24.255414771774554!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  };
export default View360;