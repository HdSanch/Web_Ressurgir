import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, BookOpen, ArrowRight } from 'lucide-react';
import NewsCarousel from '../components/NewsCarousel';

// Statistics data
const stats = [
  { id: 1, name: 'Personas Ayudadas', value: '500+', icon: Users },
  { id: 2, name: 'Años de Experiencia', value: '10+', icon: Heart },
  { id: 3, name: 'Programas Activos', value: '5', icon: BookOpen },
];

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
            className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            style={{
              height: '120%',
              background: 'linear-gradient(to top right, #f08080, #1e90ff)',
              opacity: 0.3,
            }}
          />

          {/* Hero Content */}
          <motion.div
            className="text-center py-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl font-bold tracking-tight text-white drop-shadow-md"
              style={{ fontFamily: 'Dancing Script, sans-serif' }}
            >
              Fundación Ressurgir
            </h1>
            <p className="mt-6 text-xl text-white font-medium drop-shadow-md">
              Somos una fundación dedicada a apoyar a personas en su proceso de resurgimiento personal y profesional, brindando oportunidades y acompañamiento integral para un futuro mejor.
            </p>

            {/* Call to Action Button */}
            <motion.button
              onClick={scrollToContent}
              className="mt-10 rounded-md bg-white px-5 py-3 text-base font-semibold text-[#1e90ff] shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-300"
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Nuestro Impacto
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Trabajamos incansablemente para hacer una diferencia en la vida de las personas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stat.id * 0.1 }}
                >
                  <Icon className="h-12 w-12 text-[#1e90ff] mb-4" />
                  <dt className="text-base text-gray-600">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-gray-900 mt-2">{stat.value}</dd>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}