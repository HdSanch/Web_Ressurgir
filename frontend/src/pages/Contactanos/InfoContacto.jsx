import React from 'react';

const InfoContacto = () => {
  return (
    <div className="mb-12 text-center">
      <h2 className="contactanos-subheader">Información de Contacto</h2>
      <p className="text-lg text-gray-600">Teléfono: 0939649440</p>
      <p className="text-lg text-gray-600">Dirección: 1705011, Quito 170501</p>
      <p className="text-lg text-gray-600">Correo Electrónico: contacto@fundacion.com</p>
      <h3 className="text-xl font-semibold mt-8">Síguenos en nuestras redes sociales</h3>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.facebook.com/tuFundacion" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
        <a href="https://www.instagram.com/tuFundacion" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">Instagram</a>
        <a href="https://www.twitter.com/tuFundacion" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a>
      </div>
    </div>
  );
};

export default InfoContacto;
