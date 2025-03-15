import React from "react";

const ImpactoDonaciones = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 text-center">
      <h2 className="text-5xl font-bold text-white">Tu Donación en Acción</h2>
      <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-300">
        Cada donación ayuda a financiar educación, alimentación y salud para quienes más lo necesitan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 bg-gray-900 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-green-400">$10</h3>
          <p className="text-gray-300">Proporciona libros y materiales escolares a un niño.</p>
        </div>
        <div className="p-6 bg-gray-900 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-green-400">$50</h3>
          <p className="text-gray-300">Alimenta a 10 familias durante una semana.</p>
        </div>
        <div className="p-6 bg-gray-900 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-green-400">$100</h3>
          <p className="text-gray-300">Brinda atención médica a comunidades rurales.</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactoDonaciones;
