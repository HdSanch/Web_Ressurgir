import React, { useState } from "react";
import emailjs from "emailjs-com";
import "@styles/contactanos.css";

const FormularioContacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [asunto, setAsunto] = useState("Consulta General");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: nombre,
      reply_to: correo,
      message: mensaje,
      subject: `${asunto} - ${nombre}`,
    };

    try {
      await emailjs.send(
        "service_whqp4n9",
        "template_6t0xgld",
        templateParams,
        "1lB1BzyzHWYLpfLzh"
      );
      setEnviado(true);
      setNombre("");
      setCorreo("");
      setMensaje("");
      setAsunto("Consulta General");
    } catch (err) {
      setError("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      console.error("Error al enviar mensaje:", err);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="titulo-formulario">Envíanos un Mensaje</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <div>
          <label className="label" htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="input"
          />
        </div>

        <div>
          <label className="label" htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="input"
          />
        </div>

        <div>
          <label className="label" htmlFor="asunto">Asunto:</label>
          <select
            id="asunto"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            required
            className="select"
          >
            <option value="Consulta General">Consulta General</option>
            <option value="Solicitud de Información">Solicitud de Información</option>
            <option value="Interés en Voluntariado">Interés en Voluntariado</option>
            <option value="Oportunidades de Trabajo">Oportunidades de Trabajo</option>
            <option value="Donaciones y Apoyo">Donaciones y Apoyo</option>
          </select>
        </div>

        <div>
          <label className="label" htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            className="textarea"
          ></textarea>
        </div>

        <button type="submit" className="boton-enviar">Enviar</button>
      </form>

      {enviado && <p className="mensaje-exito">¡Mensaje enviado con éxito!</p>}
      {error && <p className="mensaje-error">{error}</p>}
    </div>
  );
};

export default FormularioContacto;