import React from 'react';
import VolunteerCarousel from '@components/VolunteerCarousel';

const Voluntariados = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Voluntariados</h1>
      <p className="text-center max-w-3xl mx-auto text-lg text-gray-700">
        ¿Te gustaría contribuir a mejorar la vida de muchas personas en situación de vulnerabilidad?
        La Fundación Misión Por Tu Vida Ressurgir está buscando voluntarios comprometidos.
      </p>

      <VolunteerCarousel />

      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-gray-900">¿Cómo participar?</h2>
        <p className="text-lg text-gray-700 mt-4">
          Si estás interesado en ser parte de esta noble causa y tienes el perfil que buscamos,
          por favor envíanos tu CV y una breve carta de motivación a:
        </p>
        <p className="text-lg font-semibold text-[#1e90ff] mt-2">
          fund.misionportuvidaressurgir@gmail.com
        </p>
        <p className="text-lg font-semibold text-gray-800 mt-2">Teléfono: 0963494220</p>
      </div>
    </div>
  );
};

export default Voluntariados;
