import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, X, HeartHandshake, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsCarousel from '@components/NewsCarousel';
import Statistics from './Statistics';

const CTAButton = ({ href, label }) => (
  <a
    href={href}
    className="group inline-flex items-center gap-3 bg-pink-600 text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300"
  >
    <HeartHandshake size={18} className="transition-transform group-hover:scale-110" />
    {label}
  </a>
);

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Acompañamos procesos de transformación personal y profesional con oportunidades reales y acompañamiento integral.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayText(fullText.slice(0, index));
      if (index >= fullText.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lg md:text-xl text-white/90 text-center max-w-2xl whitespace-pre-wrap block h-[5rem] overflow-hidden">
      {displayText}&nbsp;
    </p>
  );
};

const SectionWrapper = ({ id, bg, children, full = false, noOverlay = false }) => (
  <motion.section
    id={id}
    className={`relative ${full ? 'w-full px-0' : 'px-6'} min-h-screen py-32 md:py-52 bg-fixed bg-cover bg-center text-white flex items-center justify-center`}
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})` }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.2 }}
  >
    {noOverlay ? (
      <div className="relative z-10 w-full">{children}</div>
    ) : (
      <motion.div
        className={`relative z-10 ${full ? 'w-full max-w-none' : 'max-w-5xl mx-auto text-center'} bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-xl`}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    )}
  </motion.section>
);

export default function HeroWithSummaryNav() {
  return (
    <main className="relative scroll-smooth bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      <section
        className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-cover bg-center text-white bg-fixed"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/IMG-20250517-WA0010.jpg')` }}
      >
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/40 p-2 rounded-full">
            <Facebook size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/40 p-2 rounded-full">
            <Instagram size={18} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/40 p-2 rounded-full">
            <X size={18} />
          </a>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center max-w-2xl w-full">
          <motion.img
            src="/icons/logo1.png"
            alt="Logo Fundación Ressurgir"
            className="w-[160px] md:w-[200px] block mx-auto transform-gpu"
            whileHover={{ rotate: -2, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          />
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-xl mt-4"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Fundación Ressurgir
          </h1>
          <div className="w-full mt-4">
            <TypingEffect />
          </div>
          <div className="mt-6">
            <CTAButton href="/donaciones" label="Haz una donación" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm tracking-wide animate-pulse">
          <span className="border-b border-white pb-1">Desliza para conocer más</span>
        </div>
      </section>

      <SectionWrapper id="news" bg="/images/IMG-20250517-WA0029.jpg" full noOverlay>
        <NewsCarousel />
      </SectionWrapper>

      {/* Sección ¿Quiénes somos? */}
<SectionWrapper id="about" bg="/images/IMG-20250517-WA0023.jpg">
  <div className="grid lg:grid-cols-2 gap-10 items-center text-left">
    <div className="space-y-8">
      <motion.h2 className="text-4xl md:text-5xl font-black text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Users size={36} className="inline-block text-pink-500 mr-2" /> Transformamos vidas reales
      </motion.h2>
      <p className="text-lg md:text-xl text-white/90 leading-relaxed">
        Nuestra fundación está compuesta por personas que superaron sus propias batallas. Acompañamos con cercanía y respeto cada proceso de rehabilitación, brindando herramientas prácticas para un nuevo comienzo.
      </p>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <HeartHandshake className="text-rose-400 mt-1" />
          <span className="text-white/80 text-base">Equipo multidisciplinario con enfoque humano y cercano.</span>
        </li>
        <li className="flex items-start gap-3">
          <Users className="text-yellow-300 mt-1" />
          <span className="text-white/80 text-base">Talleres, espacios de contención y comunidad activa.</span>
        </li>
        <li className="flex items-start gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-blue-400 mt-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span className="text-white/80 text-base">Historias de éxito que inspiran a seguir adelante.</span>
        </li>
      </ul>
      <CTAButton href="/quienessomos" label="Conoce nuestra historia" />
    </div>
    <motion.img src="/images/IMG-20250517-WA0025.jpg" alt="Nuestro equipo trabajando en comunidad" className="rounded-3xl shadow-2xl w-full object-cover h-full max-h-[480px]" loading="lazy" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} />
  </div>
</SectionWrapper>

{/* Sección Emprendimientos */}
<SectionWrapper id="projects" bg="/images/IMG-20250517-WA0024.jpg">
  <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-white">Más que talleres, oportunidades de vida</h2>
      <p className="text-lg md:text-xl text-white/90 mt-4">
        A través de panadería, carpintería, huertas urbanas y más, nuestros beneficiarios transforman su rutina, generan ingresos y descubren talentos.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="bg-pink-500/20 p-6 rounded-2xl hover:bg-pink-500/30 transition shadow-md">
        <h4 className="text-xl font-bold text-white mb-2">Panadería artesanal</h4>
        <p className="text-white/80 text-base">Productos horneados con dedicación, vendidos en ferias y comercios aliados.</p>
      </div>
      <div className="bg-pink-500/20 p-6 rounded-2xl hover:bg-white/10 transition shadow-md border border-white/10">
        <h4 className="text-xl font-bold text-white mb-2">Taller de carpintería</h4>
        <p className="text-white/80 text-base">Reutilización de maderas y creación de piezas útiles con valor emocional.</p>
      </div>
      <div className="bg-pink-500/20 p-6 rounded-2xl hover:bg-white/10 transition shadow-md border border-white/10">
        <h4 className="text-xl font-bold text-white mb-2">Agricultura urbana</h4>
        <p className="text-white/80 text-base">Huertas como terapia ocupacional, autoconsumo y aprendizaje colectivo.</p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-10">
      <div className="flex-1 space-y-4 text-center lg:text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Conoce los emprendimientos individuales</h3>
        <p className="text-white/80 text-base">
          Muchos pacientes crean sus propios proyectos: productos naturales, artesanías, costura, pintura y más. Son fruto de su esfuerzo, talento y visión de futuro.
        </p>
        <div className="pt-4">
          <CTAButton href="/emprendimientos" label="Explorar todos los emprendimientos" />
        </div>
      </div>
      <div className="flex-1">
        <img
          src="/images/IMG-20250517-WA0015.jpg"
          alt="Emprendimientos de los pacientes"
          className="w-full h-auto rounded-2xl shadow-2xl object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</SectionWrapper>

{/* Sección Servicios */}
<SectionWrapper id="services" bg="/images/IMG-20250517-WA0030.jpg" noOverlay>
  <div className="max-w-4xl mx-auto text-center text-white py-20 px-6 bg-gradient-to-br from-cyan-700 to-blue-800 rounded-3xl shadow-2xl">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 border-b-4 border-white/30 inline-block pb-2">
      Servicios de la Fundación
    </h2>
    <p className="text-lg md:text-xl text-white/90 mb-10">
      Ofrecemos un enfoque integral para el tratamiento de adicciones, combinando atención médica, psicológica y terapéutica para apoyar tu proceso de recuperación.
    </p>

    <div className="flex flex-wrap justify-center gap-4 mb-10">
      <button className="inline-flex items-center gap-2 bg-white text-cyan-800 px-6 py-2.5 rounded-full font-semibold shadow-md hover:scale-105 transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6M6 12V6M18 12V6M6 6h12" /></svg>
        Psicología
      </button>
      <button className="inline-flex items-center gap-2 bg-white text-cyan-800 px-6 py-2.5 rounded-full font-semibold shadow-md hover:scale-105 transition">
        <HeartHandshake size={18} /> Terapia
      </button>
      <button className="inline-flex items-center gap-2 bg-white text-cyan-800 px-6 py-2.5 rounded-full font-semibold shadow-md hover:scale-105 transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M12 3v18" /></svg>
        Desintoxicación
      </button>
      <button className="inline-flex items-center gap-2 bg-white text-cyan-800 px-6 py-2.5 rounded-full font-semibold shadow-md hover:scale-105 transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
        Servicios Médicos
      </button>
    </div>

    <CTAButton href="/servicios" label="Mira más sobre nuestros servicios" />
  </div>
</SectionWrapper>






{/* Sección Colabora */}
<SectionWrapper id="collaborate" bg="/images/IMG-20250517-WA0027.jpg">
  <div className="text-center max-w-4xl mx-auto space-y-6">
    <h2 className="text-4xl md:text-5xl font-black text-white">Haz la diferencia, hoy</h2>
    <p className="text-lg md:text-xl text-white/90">
      Desde víveres hasta conocimiento, cada aporte construye una red que sostiene y empodera.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white/10 p-5 rounded-xl backdrop-blur-md hover:bg-white/20 transition shadow">
        <h4 className="text-lg font-semibold text-white mb-1">Voluntariado</h4>
        <p className="text-white/80 text-sm">Únete con tu tiempo y habilidades para mentorías o acompañamientos.</p>
      </div>
      <div className="bg-white/10 p-5 rounded-xl backdrop-blur-md hover:bg-white/20 transition shadow">
        <h4 className="text-lg font-semibold text-white mb-1">Donaciones materiales</h4>
        <p className="text-white/80 text-sm">Desde ropa hasta herramientas, todo ayuda en el proceso.</p>
      </div>
      <div className="bg-white/10 p-5 rounded-xl backdrop-blur-md hover:bg-white/20 transition shadow">
        <h4 className="text-lg font-semibold text-white mb-1">Apoyo financiero</h4>
        <p className="text-white/80 text-sm">Suma desde un café mensual. Cada aporte nos acerca a más personas.</p>
      </div>
    </div>
    <CTAButton href="/donaciones" label="Cómo ayudar" />
  </div>
</SectionWrapper>

{/* Sección Test */}
<SectionWrapper id="tests" bg="/images/IMG-20250517-WA0028.jpg">
  <div className="text-center max-w-3xl mx-auto space-y-6">
    <h2 className="text-4xl md:text-5xl font-black text-white">¿Necesitas ayuda?</h2>
    <p className="text-lg md:text-xl text-white/90">
      Realiza nuestros tests confidenciales y gratuitos para identificar señales de estrés, ansiedad o adicciones.
    </p>
    <p className="text-lg md:text-xl text-white/80">
      Si algo te inquieta, hablarlo es el primer paso. Estamos aquí para escucharte.
    </p>
    <CTAButton href="/tests" label="Hacer el test" />
  </div>
</SectionWrapper>


      <section className="bg-white py-24">
        <Statistics />
      </section>
    </main>
  );
}