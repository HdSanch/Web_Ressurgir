import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import NewsCarousel from '@components/NewsCarousel';
import Statistics from './Statistics.jsx';
import styles from '@styles/Home.module.css'; 

export default function Home() {
  const scrollToContent = () => {
    const heroSection = document.querySelector('section');
    if (heroSection) {
      const heroHeight = heroSection.offsetHeight;
      window.scrollTo({ top: heroHeight, behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[71vh] flex items-center justify-center">
        <div className="relative isolate px-6 lg:px-8 w-full max-w-5xl mx-auto">
          {/* Background effects */}
          <div
            aria-hidden="true"
            className={`${styles.heroBackground} absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl`}
          />
          {/* Hero Content */}
          <motion.div
            className="text-center py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center mb-6">
              <img
                src="/icons/logo1.png"
                alt="Fundación Ressurgir Logo"
                className="w-32 h-32 object-contain mb-4 "
                style={{ imageRendering: 'auto' }}
              /> 
            <h1
              className={`text-5xl font-bold tracking-tight text- drop-shadow-md ${styles.heroText}`}
            >
              Fundación Ressurgir
            </h1>
            </div>
            <p className="mt-6 text-xl text-black font-medium drop-shadow-md">
              Somos una fundación dedicada a apoyar a personas en su proceso de resurgimiento personal y profesional, brindando oportunidades y acompañamiento integral para un futuro mejor.
            </p>
            {/* Call to Action Button */}
            <motion.button
              onClick={scrollToContent}
              className={`${styles.heroButton} mt-11`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce más
              <ArrowRight className="inline-block ml-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section>
        <NewsCarousel />
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gray-50">
        <Statistics />
      </section>
    </main>
  );
}