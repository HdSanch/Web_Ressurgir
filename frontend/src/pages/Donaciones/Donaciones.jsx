import React from "react";
import FormularioDonacion from "./FormularioDonacion";
import ImpactoDonaciones from "./ImpactoDonaciones";

const Donaciones = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-black text-white min-h-screen">
      <header className="text-center py-24">
        <h1 className="text-6xl font-extrabold">Haz la Diferencia</h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-300">
          Con tu donación, podemos impactar más vidas y construir un futuro mejor. Cada contribución cuenta.
        </p>
      </header>

      <FormularioDonacion />
      <ImpactoDonaciones />
    </div>
  );
};

export default Donaciones;