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
    <div className="contactanos-grid">
  <div className="contactanos-mapa">
    <Mapa />
    <InfoContacto />
  </div>
  <div className="contactanos-formulario">
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
