import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-blue-200 text-center px-6">
      
      {/* 🔹 Imagen de error */}
      <img 
        src="/assets/images/varias/404.png" 
        alt="Página no encontrada"
        className="w-80 md:w-96 mb-6 drop-shadow-lg"
      />

      {/* 🔹 Título con animación */}
      <h1 className="text-5xl font-extrabold text-red-600 animate-bounce">
        404 - Página no encontrada
      </h1>

      {/* 🔹 Mensaje descriptivo */}
      <p className="text-lg text-gray-700 mt-4 max-w-lg">
        Lo sentimos, la página que buscas no existe o ha sido movida.  
        Puedes regresar a la página principal y seguir explorando.
      </p>

      {/* 🔹 Botón de regreso */}
      <Link 
        to="/" 
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
