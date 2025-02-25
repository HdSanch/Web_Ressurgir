import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const InfoContacto = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold text-blue-900">Información de Contacto</h2>
      <div className="mt-4 space-y-2 text-gray-700">
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaPhone className="text-blue-600" /> 0963494220
        </p>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaMapMarkerAlt className="text-red-500" /> Calle Río Putumayo y Pasaje E
        </p>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaEnvelope className="text-yellow-500" /> fund.misionportuvidaressurgir@gmail.com
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-8">Síguenos en nuestras redes sociales</h3>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://www.facebook.com/tuFundacion" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800 transition" />
        </a>
        <a href="https://www.instagram.com/tuFundacion" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-600 text-2xl hover:text-pink-800 transition" />
        </a>
        <a href="https://www.twitter.com/tuFundacion" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600 transition" />
        </a>
      </div>
    </div>
  );
};

export default InfoContacto;
