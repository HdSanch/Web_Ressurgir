import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

// Beneficios y razones para ser voluntario
const volunteerBenefits = [
  {
    id: 1,
    title: "Desarrollo Personal y Profesional",
    image: "/assets/images/varias/voluntariado1.png",
    description: "Adquiere nuevas habilidades, mejora tu liderazgo y fortalece tu capacidad de trabajo en equipo."
  },
  {
    id: 2,
    title: "Impacto en la Comunidad",
    image: "/assets/images/varias/voluntariado2.png",
    description: "Ayuda a transformar vidas a través de programas de educación, salud y bienestar social."
  },
  {
    id: 3,
    title: "Oportunidad de Conectar con Personas",
    image: "/assets/images/varias/voluntariado3.png",
    description: "Conoce a personas con intereses similares y forma parte de una red solidaria y comprometida."
  },
  {
    id: 4,
    title: "Experiencia Gratificante",
    image: "/assets/images/varias/voluntariado4.png",
    description: "Siente la satisfacción de contribuir a una causa noble y ver el impacto de tu ayuda."
  },
  {
    id: 5,
    title: "Formación y Capacitación Continua",
    image: "/assets/images/varias/voluntariado5.png",
    description: "Recibe formación en prevención de adicciones y desarrollo social, impulsando tu crecimiento personal."
  },
  {
    id: 6,
    title: "Ambiente de Trabajo Solidario",
    image: "/assets/images/varias/voluntariado6.png",
    description: "Únete a un equipo de personas comprometidas con el bienestar social y el cambio positivo."
  }
];

const VolunteerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % volunteerBenefits.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + volunteerBenefits.length) % volunteerBenefits.length);
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
            Beneficios de ser voluntario
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Únete a nuestra comunidad y descubre todo lo que el voluntariado puede ofrecerte.
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
                          src={volunteerBenefits[currentIndex].image}
                          alt={volunteerBenefits[currentIndex].title}
                          className="w-full h-48 md:h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {volunteerBenefits[currentIndex].title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {volunteerBenefits[currentIndex].description}
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
