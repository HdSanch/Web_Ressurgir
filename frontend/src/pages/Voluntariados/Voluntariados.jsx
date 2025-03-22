import React from 'react';
import VolunteerCarousel from '@components/VolunteerCarousel';
import { useNavigate } from 'react-router-dom';

const Voluntariados = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div 
        className="relative bg-gradient-to-r from-white via-blue-300 to-blue-600 py-20 px-12 flex flex-col md:flex-row items-center justify-center"
      >
        {/* Sección de Texto */}
        <div className="relative z-10 text-left text-blue-900 max-w-lg md:w-1/2">
          <h1 className="text-6xl font-extrabold text-pink-600 leading-tight">
            ¡Hazte Voluntario!
          </h1>
          <p className="text-2xl mt-4 text-[#1E3A8A] font-medium">
            Únete a nuestra misión y ayuda a transformar vidas.
          </p>
        </div>

        {/* Imagen */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <img 
            src="/public/images/varias/voluntariado.png" 
            alt="Voluntariado" 
            className="max-w-sm md:max-w-lg drop-shadow-lg"
          />
        </div>
      </div>

      <VolunteerCarousel />

      <div className="text-center mt-10 mb-16">
        <h2 className="text-2xl font-bold text-gray-900">¿Cómo ser voluntario?</h2>
        <p className="text-lg text-gray-700 mt-4">
          Si estás interesado en ser parte de esta noble causa y unirte a nuestra comunidad de voluntarios, 
          contáctanos para más información.
        </p>
        
        <button
          onClick={() => navigate('/contactanos')}
          className="mt-6 bg-[#1e90ff] hover:bg-[#1c7ed6] text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Contactarnos
        </button>
      </div>
    </div>
  );
};

export default Voluntariados;
