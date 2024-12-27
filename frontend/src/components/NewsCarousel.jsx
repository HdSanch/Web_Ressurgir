import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';


const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample news data - replace with your actual news
  const newsItems = [
    {
      id: 1,
      title: "Nuevo Programa de Capacitación",
      date: "2024-03-15",
      image: "/Noticias/capacitacion.jpg",
      description: "Lanzamos nuestro nuevo programa de capacitación profesional para jóvenes emprendedores."
    },
    {
      id: 2,
      title: "Alianza Estratégica",
      date: "2024-03-10",
      image: "/Noticias/capacitacion.jpg",
      description: "Firmamos una importante alianza con empresas locales para ampliar oportunidades laborales."
    },
    {
      id: 3,
      title: "Impacto Comunitario",
      date: "2024-03-05",
      image: "/Noticias/capacitacion.jpg",
      description: "Celebramos el éxito de nuestro último proyecto comunitario con más de 100 beneficiarios."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Últimas Noticias
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mantente informado sobre nuestras últimas actividades e impacto en la comunidad.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative h-[400px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full"
                >
                  <Card className="h-full">
                    <CardContent className="p-6 h-full flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/2">
                        <img
                          src={newsItems[currentIndex].image}
                          alt={newsItems[currentIndex].title}
                          className="w-full h-48 md:h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-1/2 flex flex-col justify-center">
                        <p className="text-sm text-[#1e90ff] font-semibold mb-2">
                          {new Date(newsItems[currentIndex].date).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {newsItems[currentIndex].title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {newsItems[currentIndex].description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-white hover:text-[#1e90ff] shadow-lg transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-white hover:text-[#1e90ff] shadow-lg transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-[#1e90ff]' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;