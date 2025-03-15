import React from "react";

const Valores = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-900">Nuestros Valores</h2>
      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Nuestros valores guían cada acción que tomamos como fundación.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 text-left">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Excelencia</h3>
          <p className="text-gray-600">Buscamos lo mejor en cada iniciativa.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Colaboración</h3>
          <p className="text-gray-600">El trabajo en equipo nos fortalece.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Responsabilidad</h3>
          <p className="text-gray-600">Actuamos con ética y compromiso social.</p>
        </div>
      </div>
    </section>
  );
};

export default Valores;