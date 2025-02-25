import React, { useState } from "react";
import "@styles/contactanos.css";
import FormularioContacto from "./FormularioContacto";
import Mapa from "./Mapa";
import InfoContacto from "./InfoContacto";

const Contactanos = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, correo, mensaje });
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white via-blue-100 to-blue-300 p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-900">Contáctanos</h1>
        <p className="text-lg text-center text-gray-700 mt-2">
          Estamos aquí para responder tus preguntas y ayudarte en lo que necesites.
        </p>

        {/* Sección del Mapa */}
        <Mapa />

        {/* Información de Contacto */}
        <InfoContacto />

        {/* Formulario de Contacto */}
        <FormularioContacto
          nombre={nombre}
          setNombre={setNombre}
          correo={correo}
          setCorreo={setCorreo}
          mensaje={mensaje}
          setMensaje={setMensaje}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Contactanos;
