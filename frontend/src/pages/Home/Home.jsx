import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import NewsCarousel from '@components/NewsCarousel';
import Statistics from './Statistics.jsx';
import styles from '@styles/Home.module.css'; 

export default function Home() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="relative isolate px-6 lg:px-8 w-full max-w-5xl mx-auto">
          {/* Background effects */}
          <div
            aria-hidden="true"
            className={`${styles.heroBackground} absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl`}
          />
          {/* Hero Content */}
          <motion.div
            className="text-center py-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className={`text-5xl font-bold tracking-tight text-white drop-shadow-md ${styles.heroText}`}
            >
              Fundación Ressurgir
            </h1>
            <p className="mt-6 text-xl text-white font-medium drop-shadow-md">
              Somos una fundación dedicada a apoyar a personas en su proceso de resurgimiento personal y profesional, brindando oportunidades y acompañamiento integral para un futuro mejor.
            </p>
            {/* Call to Action Button */}
            <motion.button
              onClick={scrollToContent}
              className={`${styles.heroButton} mt-10`}
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
