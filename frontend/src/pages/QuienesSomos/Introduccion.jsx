import React from "react";

const Introduccion = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto py-16 px-6">
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Transformamos la forma en que las personas se conectan
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Nuestra fundación trabaja incansablemente para mejorar la vida de muchas personas a través de programas sociales innovadores.
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-wrap gap-4 justify-center mt-10 lg:mt-0">
        <img src="/imagenes/img1.jpg" alt="Personas conectando" className="w-32 h-40 rounded-lg shadow-lg" />
        <img src="/imagenes/img2.jpg" alt="Reunión de equipo" className="w-32 h-40 rounded-lg shadow-lg" />
        <img src="/imagenes/img3.jpg" alt="Trabajo en comunidad" className="w-32 h-40 rounded-lg shadow-lg" />
        <img src="/imagenes/img4.jpg" alt="Presentación de proyecto" className="w-32 h-40 rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default Introduccion;