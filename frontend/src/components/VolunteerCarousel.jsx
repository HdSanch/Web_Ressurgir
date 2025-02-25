import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

// Datos de voluntariados con rutas de imágenes corregidas
const volunteerItems = [
  {
    id: 1,
    title: "Capacitación para Voluntarios",
    date: "2024-04-01",
    image: '/images/Voluntariados/capacitacion.jpg', 
    description: "Entrenamiento especializado para nuevos voluntarios en programas de prevención de adicciones."
  },
  {
    id: 2,
    title: "Trabajo Comunitario",
    date: "2024-03-25",
    image: '/images/Voluntariados/comunidad.jpg',
    description: "Jornada de voluntariado en barrios vulnerables, ofreciendo apoyo y actividades educativas."
  },
  {
    id: 3,
    title: "Charlas de Concienciación",
    date: "2024-03-15",
    image: '/images/Voluntariados/charla.jpg',
    description: "Nuestros voluntarios brindan charlas sobre prevención y tratamiento de adicciones."
  }
];

const VolunteerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % volunteerItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + volunteerItems.length) % volunteerItems.length);
  };

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Oportunidades de Voluntariado
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Únete a nuestra comunidad de voluntarios y ayúdanos a marcar la diferencia.
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
                          src={volunteerItems[currentIndex].image}
                          alt={volunteerItems[currentIndex].title}
                          className="w-full h-48 md:h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-1/2 flex flex-col justify-center">
                        <p className="text-sm text-[#1e90ff] font-semibold mb-2">
                          {new Date(volunteerItems[currentIndex].date).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {volunteerItems[currentIndex].title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {volunteerItems[currentIndex].description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Botones de navegación */}
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
        </div>
      </div>
    </section>
  );
};

export default VolunteerCarousel;
