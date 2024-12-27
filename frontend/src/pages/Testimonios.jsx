import React, { useState, useEffect } from 'react';

const Testimonios = () => {
  const [personasAyudadas, setPersonasAyudadas] = useState(0);
  const [videos, setVideos] = useState([]);
  const [frasesMotivadoras, setFrasesMotivadoras] = useState([]);
  const [redesSociales, setRedesSociales] = useState([]);

  useEffect(() => {
    // Simulación de obtener datos desde un backend o API
    const totalPersonasAyudadas = 1500; // Ejemplo de cantidad de personas ayudadas
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
    <div className="relative w-full overflow">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 w-full">Testimonios de la Fundación</h1>

      {/* Sección del total de personas ayudadas con imagen de fondo fija */}
      <div
        className="relative w-full h-screen bg-fixed bg-center bg-cover flex items-center justify-center shadow-xl overflow-hidden"
        style={{
          backgroundImage: "url('/images_empre/ayuda-mutua.jpg')", // Cambia esta URL por la imagen que desees
        }}
      >
        <div className="bg-black bg-opacity-60 p-12 text-center w-full">
          <h2 className="text-5xl font-semibold text-white">Personas Ayudadas</h2>
          <p className="text-7xl font-bold text-white mt-4">{personasAyudadas}</p>
        </div>
      </div>

      {/* Sección de videos de testimonios con resumen y frase debajo */}
      <div className="w-full mt-16 mb-8">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">Videos de Testimonios</h2>
        <div className="space-y-12">
          {videos.map((video, index) => (
            <div key={video.id} className="w-full bg-white shadow-lg hover:shadow-2xl transition duration-300 p-6">
              {/* Grid para video y resumen */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                {/* Video */}
                <div className="w-full">
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
                {/* Resumen */}
                <div className="text-gray-700 w-full">
                  <h3 className="text-2xl font-semibold mb-4">{video.titulo}</h3>
                  <p className="text-lg">{video.resumen}</p>
                </div>
              </div>
              {/* Sección de frase motivadora debajo del video */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg w-full mt-8 p-6 text-center">
                <p className="italic text-2xl">"{frasesMotivadoras[index % frasesMotivadoras.length].frase}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de redes sociales ocupando todo el ancho */}
      <div
        className="relative w-full py-16 text-center bg-fixed bg-cover bg-center flex items-center justify-center shadow-xl overflow-hidden"
        style={{
          backgroundImage: "url('/images_empre/gente.jpg')", // Imagen de fondo detrás de las redes sociales
          backgroundSize: '50%', // Cambia el porcentaje según tus necesidades

        }}
      >
        <div className="bg-black bg-opacity-60 p-8 w-full text-white">
          <h2 className="text-3xl font-semibold mb-4">¿Quieres conocer más vivencias?</h2>
          <p className="text-xl mb-6">Únete a nuestras redes sociales:</p>
          <div className="flex justify-center space-x-6">
            {redesSociales.map((red) => (
              <a
                key={red.id}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold hover:underline hover:text-yellow-200 transition duration-300"
              >
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
