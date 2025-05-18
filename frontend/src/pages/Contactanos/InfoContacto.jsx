import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "@styles/contactanos.css";


const InfoContacto = () => {
  return (
    <div className="info-contacto">
      <h2 className="titulo-contacto">Información de Contacto</h2>
      <div className="datos-contacto">
        <p className="dato-item">
          <FaPhone className="icono-telefono" /> 0963494220
        </p>
        <p className="dato-item">
          <FaMapMarkerAlt className="icono-direccion" /> Calle Río Putumayo y Pasaje E
        </p>
        <p className="dato-item">
          <FaEnvelope className="icono-email" /> fund.misionportuvidaressurgir@gmail.com
        </p>
      </div>

      <h3 className="subtitulo-redes">Síguenos en nuestras redes sociales</h3>
      <div className="redes-sociales">
        <a
          href="https://www.facebook.com/tuFundacion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="red-social-icono red-facebook" />
        </a>
        <a
          href="https://www.instagram.com/tuFundacion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="red-social-icono red-instagram" />
        </a>
        <a
          href="https://www.twitter.com/tuFundacion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="red-social-icono red-twitter" />
        </a>
      </div>
    </div>
  );
};

export default InfoContacto;