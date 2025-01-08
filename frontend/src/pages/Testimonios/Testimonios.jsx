import React, { useState, useEffect } from 'react';
import '@styles/Testimonios.css';

const Testimonios = () => {
  const [personasAyudadas, setPersonasAyudadas] = useState(0);
  const [videos, setVideos] = useState([]);
  const [frasesMotivadoras, setFrasesMotivadoras] = useState([]);
  const [redesSociales, setRedesSociales] = useState([]);

  useEffect(() => {
    // Simulación de obtener datos desde un backend o API
    const totalPersonasAyudadas = 1500;
    const videosEjemplo = [
      {
        id: 1,
        url: 'https://www.youtube.com/embed/ejemplo1',
        titulo: 'Testimonio 1',
        resumen: 'En este video, Juan Pérez cuenta cómo la fundación le ayudó a superar su situación de pobreza mediante capacitaciones laborales.',
      },
      {
        id: 2,
        url: 'https://www.youtube.com/embed/ejemplo2',
        titulo: 'Testimonio 2',
        resumen: 'María Rodríguez relata cómo la fundación le brindó apoyo emocional y financiero tras el fallecimiento de su esposo.',
      },
    ];
    const frasesEjemplo = [
      { id: 1, frase: "La solidaridad es el motor del cambio." },
      { id: 2, frase: "Cada pequeña acción cuenta." },
    ];
    const redesSocialesEjemplo = [
      { id: 1, nombre: 'Facebook', url: 'https://www.facebook.com/tuFundacion', icono: '🔗' },
      { id: 2, nombre: 'Instagram', url: 'https://www.instagram.com/tuFundacion', icono: '📸' },
      { id: 3, nombre: 'Twitter', url: 'https://www.twitter.com/tuFundacion', icono: '🐦' },
    ];

    setPersonasAyudadas(totalPersonasAyudadas);
    setVideos(videosEjemplo);
    setFrasesMotivadoras(frasesEjemplo);
    setRedesSociales(redesSocialesEjemplo);
  }, []);

  return (
    <div className="testimonios-container">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 w-full">Testimonios de la Fundación</h1>

      {/* Sección del total de personas ayudadas con imagen de fondo */}
      <div className="personas-ayudadas h-screen flex items-center justify-center">
        <div className="personas-ayudadas-content">
          <h2 className="text-5xl font-semibold">Personas Ayudadas</h2>
          <p className="text-7xl font-bold mt-4">{personasAyudadas}</p>
        </div>
      </div>

      {/* Sección de videos de testimonios */}
      <div className="videos-section">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">Videos de Testimonios</h2>
        <div className="space-y-12">
          {videos.map((video, index) => (
            <div key={video.id} className="video-container">
              <div className="video-grid">
                <div className="video">
                  <iframe
                    width="100%"
                    height="250"
                    src={video.url}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="video-summary">
                  <h3 className="text-2xl font-semibold mb-4">{video.titulo}</h3>
                  <p className="text-lg">{video.resumen}</p>
                </div>
              </div>
              <div className="motivational-quote">
                <p className="italic text-2xl">"{frasesMotivadoras[index % frasesMotivadoras.length].frase}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de redes sociales */}
      <div className="social-media-section">
        <div className="social-media-content">
          <h2 className="text-3xl font-semibold mb-4">¿Quieres conocer más vivencias?</h2>
          <p className="text-xl mb-6">Únete a nuestras redes sociales:</p>
          <div className="social-media-links">
            {redesSociales.map((red) => (
              <a key={red.id} href={red.url} target="_blank" rel="noopener noreferrer">
                {red.icono} {red.nombre}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
