"use client"

import React, { useEffect, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Facebook,
  Instagram,
  X, 
  Users,
  Heart,
  ShieldCheck,
  Globe,
  Target,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Lightbulb,
  Star,
  ArrowRight,
  MessageCircle,
  HeartHandshake,
  Gift,
  Clock,
  CheckCircle,
  HandIcon as Hands,
} from "lucide-react"
import NewsCarousel from "../../components/NewsCarousel";



const CTAButton = ({ href, label, variant = "primary", icon: Icon = HeartHandshake }) => (
  <motion.a
    href={href}
    className={`group inline-flex items-center gap-3 font-semibold px-8 py-4 rounded-full shadow-xl transition-all duration-500 transform hover:scale-105 ${
      variant === "primary"
        ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700"
        : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
    }`}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon size={20} className="transition-transform group-hover:scale-110 group-hover:rotate-12" />
    {label}
  </motion.a>
)

// Floating elements for visual interest
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    className="absolute"
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
)

// Enhanced typing effect with cursor
const TypingEffect = () => {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText =
    "Acompañamos procesos de transformación personal y profesional con oportunidades reales y acompañamiento integral."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index++
      setDisplayText(fullText.slice(0, index))
      if (index >= fullText.length) clearInterval(interval)
    }, 30)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <p className="text-base sm:text-lg md:text-xl text-white/90 text-center max-w-4xl leading-relaxed mx-auto">
      {displayText}
      <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
    </p>
  )
}

// Curved section wrapper with enhanced animations
const CurvedSection = ({ id, bg, children, curveTop = true, curveBottom = true, className = "" }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Curved top */}
      {curveTop && (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="white"
            ></path>
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 py-20 md:py-32">{children}</div>

      {/* Curved bottom */}
      {curveBottom && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-20 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="white"
            ></path>
          </svg>
        </div>
      )}

      {/* Floating decorative elements */}
      <FloatingElement delay={0}>
        <div className="top-20 left-10 w-4 h-4 bg-white/20 rounded-full blur-sm"></div>
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="top-40 right-20 w-6 h-6 bg-pink-300/30 rounded-full blur-sm"></div>
      </FloatingElement>
      <FloatingElement delay={4}>
        <div className="bottom-32 left-1/4 w-3 h-3 bg-blue-300/40 rounded-full blur-sm"></div>
      </FloatingElement>
    </motion.section>
  )
}

// Enhanced card component with glassmorphism
const GlassCard = ({ children, className = "", hover = true }) => (
  <motion.div
    className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl ${className}`}
    whileHover={hover ? { y: -8, scale: 1.02 } : {}}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
    {children}
  </motion.div>
)

export default function EnhancedFoundationHome() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <main className="relative scroll-smooth bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('/images/IMG-20250517-WA0010.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Animated background overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-blue-600/20"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(37, 99, 235, 0.2))",
              "linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(236, 72, 153, 0.2))",
              "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(37, 99, 235, 0.2))",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Social Media Sidebar */}
        <motion.div
          className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 flex flex-col gap-4 z-20"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { icon: Facebook, href: "https://facebook.com", color: "hover:bg-blue-600" },
            { icon: Instagram, href: "https://instagram.com", color: "hover:bg-pink-600" },
            { icon: X, href: "https://x.com", color: "hover:bg-gray-800" },
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white/20 backdrop-blur-md p-3 rounded-full transition-all duration-300 ${color} hover:scale-110`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Main Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl w-full px-4 pb-24">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          >
            <motion.img
              src="/images/logodefinitivo.png"
              alt="Logo Fundación Ressurgir"
              className="w-[160px] sm:w-[180px] md:w-[220px] lg:w-[240px] block mx-auto transform-gpu"
              whileHover={{ rotate: -3, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-2xl mt-6 bg-gradient-to-r from-white via-pink-200 to-blue-200 bg-clip-text text-transparent text-center"
            style={{ fontFamily: "Dancing Script, cursive" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Fundación Ressurgir
          </motion.h1>

          <motion.div
            className="w-full mt-6 md:mt-8 px-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <TypingEffect />
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <CTAButton href="/donaciones" label="Haz una donación" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
  className="absolute bottom-10 inset-x-0 flex justify-center z-20"
  animate={{ y: [0, 6, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <div className="flex flex-col items-center space-y-2">
    <span className="text-sm text-white/90">Desliza para conocer más</span>
    <div className="w-7 h-12 border-2 border-white/80 rounded-full flex items-start justify-center p-1">
      <motion.div
        className="w-1.5 h-3 bg-white rounded-full"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  </div>
</motion.div>



      </section>

      <NewsCarousel />


      {/* Quiénes Somos Section */}
      <CurvedSection id="quienes-somos" bg="/images/IMG-20250517-WA0023.jpg" className="text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 bg-clip-text text-transparent"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Quiénes Somos
            </motion.h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Una historia de <span className="text-yellow-300 font-semibold">transformación</span> que nació del amor y
              la determinación de cambiar vidas
            </p>
          </motion.div>

          {/* Story Timeline */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {[
              {
                icon: <ShieldCheck className="w-12 h-12 text-yellow-300" />,
                title: "Nacimos de una necesidad",
                description:
                  "En 2021, dos jóvenes decidieron romper el ciclo de violencia e injusticia que presenciaron en centros precarios.",
                highlight: "Un acto de valentía y compasión",
              },
              {
                icon: <Heart className="w-12 h-12 text-rose-300" />,
                title: "Un hogar, no una prisión",
                description:
                  "Creamos un espacio seguro, con reglas, pero también con amor. Aquí cada paciente es escuchado, alimentado y valorado.",
                highlight: "Amor y disciplina pueden coexistir",
              },
              {
                icon: <Globe className="w-12 h-12 text-cyan-300" />,
                title: "Impacto nacional",
                description:
                  "Hoy formamos parte del Comité de Adicciones de Zona 2 del Ministerio de Salud. Visitamos colegios, ayudamos en las calles.",
                highlight: "+500 personas impactadas",
              },
              {
                icon: <Users className="w-12 h-12 text-indigo-300" />,
                title: "Fundadores presentes",
                description:
                  "No delegan. Siguen al frente, impartiendo terapias, liderando campañas y mostrando que sí se puede renacer.",
                highlight: "Acompañamos con el corazón",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/90 leading-relaxed mb-4">{item.description}</p>
                      <div className="bg-gradient-to-r from-yellow-400/20 to-pink-400/20 p-3 rounded-xl border-l-4 border-yellow-300">
                        <p className="text-yellow-200 font-medium italic">{item.highlight}</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Mission & Vision */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <div className="text-center">
                <Target className="w-16 h-16 text-rose-300 mx-auto mb-4" />
                <h4 className="text-3xl font-bold text-rose-300 mb-4">Misión</h4>
                <p className="text-white/90 text-lg leading-relaxed">
                  Apoyar integralmente a personas en situación de vulnerabilidad, fortaleciendo su autonomía, dignidad y
                  bienestar.
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-center">
                <Lightbulb className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                <h4 className="text-3xl font-bold text-blue-300 mb-4">Visión</h4>
                <p className="text-white/90 text-lg leading-relaxed">
                  Ser referentes en programas que restituyen derechos y reconstruyen vidas, promoviendo una sociedad
                  justa e inclusiva.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CTAButton href="/quienessomos" label="Conoce nuestra historia completa" icon={BookOpen} />
          </motion.div>
        </div>
      </CurvedSection>

      {/* Nuestros Programas Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
              Nuestros{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
                Programas
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos un enfoque integral que combina tratamiento médico, apoyo psicológico y desarrollo de
              habilidades para la vida
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Heart className="w-12 h-12 text-pink-500" />,
                title: "Tratamiento Integral",
                description: "Desintoxicación médica, terapia psicológica y acompañamiento emocional personalizado",
                features: ["Atención médica 24/7", "Terapia individual y grupal", "Apoyo familiar"],
              },
              {
                icon: <Users className="w-12 h-12 text-blue-500" />,
                title: "Reinserción Social",
                description: "Programas de capacitación laboral y desarrollo de habilidades para la vida independiente",
                features: ["Talleres de oficios", "Orientación laboral", "Seguimiento post-tratamiento"],
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-green-500" />,
                title: "Prevención Comunitaria",
                description: "Charlas educativas en colegios y comunidades para prevenir el consumo de sustancias",
                features: ["Talleres preventivos", "Capacitación a educadores", "Campañas de concientización"],
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-4">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </div>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CTAButton href="/servicios" label="Conoce todos nuestros programas" icon={ArrowRight} />
          </motion.div>
        </div>
      </section>

      {/* Historias de Vida Section */}
      <CurvedSection id="historias" bg="/images/IMG-20250517-WA0024.jpg" className="text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
              Historias de Vida
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Testimonios reales de transformación, esperanza y segundas oportunidades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Carlos M.",
                age: "28 años",
                story:
                  "Después de 3 años en las calles, encontré en Ressurgir no solo un hogar, sino una familia que me ayudó a recuperar mi dignidad.",
                achievement: "Hoy tengo mi propia panadería",
                icon: <Star className="w-6 h-6 text-yellow-300" />,
              },
              {
                name: "María L.",
                age: "35 años",
                story:
                  "Perdí la custodia de mis hijos por las drogas. Gracias al programa integral, pude reunirme con ellos y reconstruir mi vida.",
                achievement: "Reunificación familiar exitosa",
                icon: <Heart className="w-6 h-6 text-pink-300" />,
              },
              {
                name: "Andrés R.",
                age: "24 años",
                story:
                  "Llegué sin esperanza, pero los talleres de carpintería me dieron un propósito. Ahora enseño a otros lo que aprendí.",
                achievement: "Instructor de carpintería",
                icon: <Users className="w-6 h-6 text-blue-300" />,
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {story.icon}
                    <div>
                      <h3 className="text-xl font-bold text-white">{story.name}</h3>
                      <p className="text-white/70">{story.age}</p>
                    </div>
                  </div>
                  <blockquote className="text-white/90 italic mb-4 leading-relaxed">"{story.story}"</blockquote>
                  <div className="bg-gradient-to-r from-green-400/20 to-blue-400/20 p-3 rounded-xl">
                    <p className="text-green-200 font-semibold text-sm">✨ {story.achievement}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CTAButton href="/emprendimientos" label="Conoce como puedes ayudar al talento de nuestros pacientes" icon={MessageCircle} />
          </motion.div>
        </div>
      </CurvedSection>

      {/* Voluntariado y Donaciones Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">Únete</span> a
              Nuestra Misión
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tu apoyo puede cambiar vidas. Descubre las diferentes formas de contribuir a nuestra causa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Voluntariado */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-4">
                  <Hands className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Voluntariado</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comparte tu tiempo, conocimientos y experiencia para impactar directamente en la vida de nuestros
                  beneficiarios
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Mentorías profesionales",
                  "Talleres de habilidades",
                  "Apoyo en actividades recreativas",
                  "Acompañamiento terapéutico",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <CTAButton href="/donaciones" label="Quiero ser voluntario" icon={Hands} />
            </motion.div>

            {/* Donaciones */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex p-4 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl mb-4">
                  <Gift className="w-12 h-12 text-pink-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Donaciones</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cada contribución, sin importar el monto, nos ayuda a mantener nuestros programas y llegar a más
                  personas
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Donaciones monetarias",
                  "Alimentos y productos básicos",
                  "Materiales para talleres",
                  "Equipamiento médico",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <CTAButton href="/donaciones" label="Hacer una donación" icon={Gift} />
            </motion.div>
          </div>

          {/* Impact Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Vidas impactadas" },
              { number: "50+", label: "Voluntarios activos" },
              { number: "15+", label: "Empresas aliadas" },
              { number: "3", label: "Años transformando" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contacto y Ayuda Urgente Section */}
      <CurvedSection id="contacto" bg="/images/IMG-20250517-WA0028.jpg" className="text-white" curveBottom={false}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-yellow-200">
              ¿Necesitas Ayuda?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Estamos aquí para ti las 24 horas. No estás solo en este proceso
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Ayuda Urgente */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="text-center h-full">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-red-500/20 rounded-2xl mb-4">
                    <Phone className="w-12 h-12 text-red-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Línea de Crisis</h3>
                  <p className="text-white/90 mb-6">
                    Si tú o alguien que conoces necesita ayuda inmediata, contáctanos ahora
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-red-500/20 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-200 mb-1">📞 +593 99 123 4567</div>
                    <div className="text-white/80">Disponible 24/7</div>
                  </div>
                  <div className="bg-blue-500/20 p-4 rounded-xl">
                    <div className="text-lg font-semibold text-blue-200 mb-1">💬 WhatsApp</div>
                    <div className="text-white/80">Respuesta inmediata</div>
                  </div>
                </div>

                <CTAButton href="tel:+593991234567" label="Llamar ahora" icon={Phone} variant="primary" />
              </GlassCard>
            </motion.div>

            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-blue-500/20 rounded-2xl mb-4">
                    <MapPin className="w-12 h-12 text-blue-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Visítanos</h3>
                  <p className="text-white/90 mb-6">
                    Nuestras puertas están siempre abiertas para quienes buscan una nueva oportunidad
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-blue-300 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Dirección</div>
                      <div className="text-white/80">Av. Principal 123, Quito, Ecuador</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-blue-300 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-white/80">info@ressurgir.org</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-blue-300 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Horarios</div>
                      <div className="text-white/80">Lun - Dom: 24 horas</div>
                    </div>
                  </div>
                </div>

                <CTAButton href="/contactos" label="Más información" icon={Mail} variant="secondary" />
              </GlassCard>
            </motion.div>
          </div>

          {/* Test de Evaluación */}
          <motion.div
            className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="inline-flex p-4 bg-purple-500/20 rounded-2xl mb-4">
                <CheckCircle className="w-12 h-12 text-purple-300" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Evaluación Gratuita</h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Realiza nuestro test confidencial para identificar señales de riesgo y recibir orientación personalizada
              </p>
            </div>

            <CTAButton href="/tests" label="Realizar test gratuito" icon={CheckCircle} />
          </motion.div>
        </div>
      </CurvedSection>
    </main>
  )
}