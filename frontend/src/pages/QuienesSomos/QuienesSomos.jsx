import React, { useEffect } from "react";
import '@styles/QuienesSomos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const equipo = [
  { nombre: "Miguel Fernández", cargo: "Co-Fundador / Director", img: "/imagenes/team1.jpg" },
  { nombre: "Lucía Ramírez", cargo: "Desarrolladora Web", img: "/imagenes/team2.jpg" },
  { nombre: "Sofía López", cargo: "Diseñadora Gráfica", img: "/imagenes/team3.jpg" },
  { nombre: "Carlos Herrera", cargo: "Coordinador de Proyectos", img: "/imagenes/team4.jpg" },
];

const QuienesSomos = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="quienessomos-container">
      {/* Introducción */}
      <section className="introduccion-section">
        <div className="introduccion-texto" data-aos="fade-right" data-aos-delay="100">
          <h1 className="introduccion-titulo">
            Atención integral en salud y bienestar
          </h1>
          <p className="introduccion-parrafo">
            Somos una institución que brinda servicios en el área de la salud: psicología, psiquiatría, medicina general, nutrición, enfermería y atención pre hospitalaria; tanto dentro como fuera de nuestras instalaciones.
            Atendemos a personas de todas las edades en situación de vulnerabilidad, luchando por la equidad y contra la violencia de género.
          </p>
        </div>
        <div className="introduccion-imagenes" data-aos="fade-left" data-aos-delay="300">
          <img src="/images/varias/somos1.jpg" alt="Servicios de salud" className="introduccion-img" data-aos="zoom-in" data-aos-delay="400" />
          <img src="/images/varias/somos2.jpg" alt="Atención comunitaria" className="introduccion-img" data-aos="zoom-in" data-aos-delay="500" />
          <img src="/images/varias/somos3.jpg" alt="Voluntariado médico" className="introduccion-img" data-aos="zoom-in" data-aos-delay="600" />
          <img src="/images/varias/somos4.jpg" alt="Consultas sociales" className="introduccion-img" data-aos="zoom-in" data-aos-delay="700" />
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="misionvision-section">
        <h2 className="misionvision-titulo" data-aos="fade-up" data-aos-delay="100">Nuestra Misión</h2>
        <p className="misionvision-parrafo" data-aos="fade-up" data-aos-delay="200">
          Trabajamos para proporcionar apoyo integral y promover la inclusión social de personas y colectivos en situación de vulnerabilidad, incluyendo adultos, adultos mayores, jóvenes e infantes afectados por la violencia de género o familiar. Nuestra misión es ofrecer recursos, programas y acompañamiento personalizado que fortalezcan su bienestar físico, emocional y social, fomentando su autonomía y dignidad.
        </p>

        <h2 className="misionvision-titulo" data-aos="fade-up" data-aos-delay="300">Nuestra Visión</h2>
        <p className="misionvision-parrafo" data-aos="fade-up" data-aos-delay="400">
          Aspiramos a ser reconocidos como una fundación líder en la mejora de la calidad de vida de personas en riesgo de exclusión social y violencia, mediante programas innovadores y efectivos que generen impacto positivo en la comunidad. Visualizamos un futuro donde cada individuo, sin importar su situación inicial, tenga acceso equitativo a oportunidades de desarrollo personal y social, promoviendo una sociedad más justa e inclusiva.
        </p>
      </section>

      {/* Historia */}
      <section className="historia-section" data-aos="fade-up" data-aos-delay="100">
        <h2 className="historia-titulo">Nuestra Historia</h2>
        <p className="historia-texto">
          La fundación *Misión por tu vida Ressurgir* comenzó en 2021 como el sueño de dos jóvenes comprometidos con ayudar a personas en situación de calle y con problemas de adicción. Tras trabajar en centros de rehabilitación precarios y sin regulación, donde se vivían situaciones de abuso y negligencia, decidieron crear un espacio donde los pacientes fueran tratados con dignidad, amor y disciplina.
        </p>
        <p className="historia-texto" data-aos="fade-up" data-aos-delay="200">
          Desde entonces, hemos evolucionado profesionalmente, logrando un índice de recuperación del 70-100%. Somos parte del comité de adicciones de Zona 2 del MSP y colaboramos activamente dando charlas en colegios, realizando obras sociales, y llevando alimento y esperanza a personas en situación de calle.
        </p>
      </section>

      {/* Valores */}
      <section className="valores-section">
        <h2 className="valores-titulo" data-aos="fade-up" data-aos-delay="100">Nuestros Valores</h2>
        <p className="valores-parrafo" data-aos="fade-up" data-aos-delay="200">
          Nuestros valores son el motor que impulsa nuestras acciones diarias.
        </p>

        <div className="valores-grid">
          <div className="valores-item" data-aos="flip-left" data-aos-delay="300">
            <h3>Amor</h3>
            <p>Atendemos con empatía, afecto y calidez humana.</p>
          </div>
          <div className="valores-item" data-aos="flip-left" data-aos-delay="400">
            <h3>Compromiso</h3>
            <p>Nos involucramos profundamente en cada proceso de recuperación.</p>
          </div>
          <div className="valores-item" data-aos="flip-left" data-aos-delay="500">
            <h3>Justicia</h3>
            <p>Promovemos la equidad y el respeto por los derechos de todos.</p>
          </div>
        </div>
      </section>

      <section className="equipo-section">
      <h2 className="equipo-titulo" data-aos="fade-down" data-aos-duration="800">Nuestro Equipo y Servicios</h2>

      {/* Bloque 1: Imagen izquierda, texto derecha */}
      <div className="equipo-contenido">
        <div className="equipo-imagen-izquierda" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          <img src="/images/varias/equipo1.jpg" alt="Equipo de profesionales" className="equipo-img" />
        </div>

        <div className="equipo-texto" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <p className="equipo-descripcion">
            Contamos con un equipo multidisciplinario de profesionales altamente capacitados que trabajan con vocación y compromiso social. Nuestro equipo está conformado por psicólogos, psiquiatras, médicos generales, enfermeros, nutricionistas, terapeutas ocupacionales y artísticos, así como personal especializado en atención prehospitalaria. También brindamos acompañamiento espiritual y talleres de formación, tanto dentro como fuera de nuestras instalaciones.
          </p>
        </div>
      </div>

      {/* Bloque 2: Texto izquierda, imagen derecha */}
      <div className="equipo-contenido">
        <div className="equipo-texto" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
          <p className="equipo-descripcion">
            Además, ofrecemos un tratamiento integral para personas con dependencia a sustancias, con modalidades ambulatoria y residencial. El tratamiento residencial tiene una duración de seis meses, y se caracteriza por un enfoque humano, disciplinado y amoroso. Nuestros fundadores, quienes tienen experiencia directa en el campo de las adicciones, participan activamente en terapias, charlas y campañas médicas a nivel nacional.
          </p>
        </div>

        <div className="equipo-imagen-derecha" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
          <img src="/images/varias/equipo2.jpg" alt="Profesionales en acción" className="equipo-img" />
        </div>
      </div>
    </section>

      {/* Equipo */}
      {/* <section className="equipo-section">
        <h2 className="equipo-titulo" data-aos="fade-up" data-aos-delay="100">Nuestro Equipo</h2>
        <p className="equipo-descripcion" data-aos="fade-up" data-aos-delay="200">
          El equipo de trabajo incluye a nuestros fundadores, quienes además de liderar, imparten terapias, charlas y campañas médicas a nivel nacional.
        </p>

        <div className="equipo-grid">
          {equipo.map((persona, index) => (
            <div key={index} className="equipo-card" data-aos="fade-up" data-aos-delay={300 + (index * 100)}>
              <img src={persona.img} alt={persona.nombre} className="equipo-imagen" />
              <h3 className="equipo-nombre">{persona.nombre}</h3>
              <p className="equipo-cargo">{persona.cargo}</p>
            </div>
          ))}
        </div>
      </section> */}


    </div>
  );
};

export default QuienesSomos;
