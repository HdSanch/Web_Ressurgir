import React from "react";

const MisionVision = () => {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-4xl font-bold text-gray-900">Nuestra Misión</h2>
      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Buscamos impactar comunidades a través de programas sociales sostenibles y transformadores.
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <div>
          <h3 className="text-4xl font-bold text-gray-900">44 millones</h3>
          <p className="text-gray-600">Personas beneficiadas</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-gray-900">$119 billones</h3>
          <p className="text-gray-600">Recursos gestionados</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-gray-900">46,000</h3>
          <p className="text-gray-600">Nuevos voluntarios al año</p>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;