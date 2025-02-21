import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-3xl font-bold text-red-600">404 - Página no encontrada</h1>
      <p className="text-gray-600 mt-4">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
