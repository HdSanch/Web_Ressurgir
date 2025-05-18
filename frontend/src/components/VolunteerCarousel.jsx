import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';

const volunteerBenefits = [
  {
    id: 1,
    title: "Desarrollo Personal y Profesional",
    image: "/images/varias/voluntariado1.png",
    description: "Adquiere nuevas habilidades, mejora tu liderazgo y fortalece tu capacidad de trabajo en equipo. Participar como voluntario también te brinda una visión más amplia del entorno social y te permite aplicar tus conocimientos en contextos reales."
  },
  {
    id: 2,
    title: "Impacto en la Comunidad",
    image: "/images/varias/voluntariado2.png",
    description: "Ayuda a transformar vidas a través de programas de educación, salud y bienestar social. Para que estas acciones sean posibles, necesitamos diversos insumos que nos permitan brindar hospedaje y alimentación durante estes procesos. Si deseas contribuir con alimentos o algún otro donativo en especie, escríbenos."
  },
  {
    id: 3,
    title: "Oportunidad de Conectar con Personas",
    image: "/images/varias/voluntariado3.png",
    description: "Conoce a personas con intereses similares y forma parte de una red solidaria y comprometida. Comparte experiencias, construye amistades significativas y colabora en un ambiente enriquecedor y humano."
  },
  {
    id: 4,
    title: "Experiencia Gratificante",
    image: "/images/varias/voluntariado4.png",
    description: "Siente la satisfacción de contribuir a una causa noble y ver el impacto de tu ayuda. Cada pequeña contribución, incluso los donativos monetarios, hace una gran diferencia para continuar transformando vidas y sostener las acciones sociales que impulsamos. Si deseas realizar un donativo, contáctanos."
  },
  {
    id: 5,
    title: "Formación y Capacitación Continua",
    image: "/images/varias/voluntariado7.png",
    description: "Recibe formación en prevención de adicciones y desarrollo social, impulsando tu crecimiento personal. Obtén herramientas útiles para tu vida cotidiana y tu desarrollo profesional mientras fortaleces tu compromiso social."
  },
  {
    id: 6,
    title: "Ambiente de Trabajo Solidario",
    image: "/images/varias/voluntariado8.png",
    description: "Únete a un equipo de personas comprometidas con el bienestar social y el cambio positivo. Comparte tus talentos en un entorno colaborativo donde el respeto, la empatía y el apoyo mutuo son fundamentales."
  }
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const VolunteerCarousel = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrentIndex(([prevIndex]) => {
      const newIndex = (prevIndex + newDirection + volunteerBenefits.length) % volunteerBenefits.length;
      return [newIndex, newDirection];
    });
  };

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Beneficios de ser voluntario
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Únete a nuestra comunidad y descubre todo lo que el voluntariado puede ofrecerte.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="relative h-[400px] w-full select-none">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full"
              >
                <Card className="h-full min-h-[415px]">
                  <CardContent className="p-4 sm:p-6 h-full flex flex-col md:flex-row gap-4 sm:gap-6">
                    <div className="w-full md:w-1/2">
                      <img
                        src={volunteerBenefits[currentIndex].image}
                        alt={volunteerBenefits[currentIndex].title}
                        className="w-full h-48 sm:h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-start">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 break-words">
                        {volunteerBenefits[currentIndex].title}
                      </h3>
                      <div className="overflow-y-auto max-h-[200px] sm:max-h-none pr-2">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                          {volunteerBenefits[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicadores / botones */}
          <div className="flex justify-center mt-6 space-x-3">
            {volunteerBenefits.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex([idx, idx > currentIndex ? 1 : -1])}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? "bg-[#1e90ff]" : "bg-gray-300"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerCarousel;
