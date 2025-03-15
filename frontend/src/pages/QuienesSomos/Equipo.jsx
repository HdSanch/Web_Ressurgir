import React from "react";

const equipo = [
  { nombre: "Miguel Fernández", cargo: "Co-Fundador / Director", img: "/imagenes/team1.jpg" },
  { nombre: "Lucía Ramírez", cargo: "Desarrolladora Web", img: "/imagenes/team2.jpg" },
  { nombre: "Sofía López", cargo: "Diseñadora Gráfica", img: "/imagenes/team3.jpg" },
  { nombre: "Carlos Herrera", cargo: "Coordinador de Proyectos", img: "/imagenes/team4.jpg" },
];

const Equipo = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900">Nuestro Equipo</h2>
      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Un equipo apasionado y comprometido con la transformación social.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
        {equipo.map((persona, index) => (
          <div key={index} className="text-center">
            <img src={persona.img} alt={persona.nombre} className="w-24 h-24 mx-auto rounded-full shadow-md" />
            <h3 className="text-lg font-semibold mt-2">{persona.nombre}</h3>
            <p className="text-gray-600 text-sm">{persona.cargo}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipo;