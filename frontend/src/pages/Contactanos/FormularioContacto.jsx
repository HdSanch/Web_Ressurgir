import React, { useState } from "react";
import emailjs from "emailjs-com";

const FormularioContacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [asunto, setAsunto] = useState("Consulta General"); // Asunto por defecto
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: nombre,  // Nombre del remitente
      reply_to: correo,   // Correo del remitente
      message: mensaje,   // Contenido del mensaje
      subject: `${asunto} - ${nombre}`, // Asunto seleccionado por el usuario
    };

    try {
      await emailjs.send(
        "service_whqp4n9", // Service ID
        "template_6t0xgld", // Template ID (asegúrate de que es el correcto)
        templateParams,
        "1lB1BzyzHWYLpfLzh" // Public Key
      );
      setEnviado(true);
      setNombre("");
      setCorreo("");
      setMensaje("");
      setAsunto("Consulta General"); // Reiniciar el asunto seleccionado
    } catch (err) {
      setError("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      console.error("Error al enviar mensaje:", err);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-center text-pink-600">Envíanos un Mensaje</h2>
      <form onSubmit={handleSubmit} className="space-y-6 mt-6">
        {/* Campo Nombre */}
        <div>
          <label className="block text-gray-600 font-medium" htmlFor="nombre">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>

        {/* Campo Correo */}
        <div>
          <label className="block text-gray-600 font-medium" htmlFor="correo">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>

        {/* Campo Asunto (Selección) */}
        <div>
          <label className="block text-gray-600 font-medium" htmlFor="asunto">
            Asunto:
          </label>
          <select
            id="asunto"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          >
            <option value="Consulta General">Consulta General</option>
            <option value="Solicitud de Información">Solicitud de Información</option>
            <option value="Interés en Voluntariado">Interés en Voluntariado</option>
            <option value="Oportunidades de Trabajo">Oportunidades de Trabajo</option>
            <option value="Donaciones y Apoyo">Donaciones y Apoyo</option>
          </select>
        </div>

        {/* Campo Mensaje */}
        <div>
          <label className="block text-gray-600 font-medium" htmlFor="mensaje">
            Mensaje:
          </label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          ></textarea>
        </div>

        {/* Botón de Enviar */}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-pink-700 transition"
        >
          Enviar
        </button>
      </form>

      {/* Mensaje de Confirmación */}
      {enviado && <p className="text-green-600 text-center mt-4">¡Mensaje enviado con éxito!</p>}
      {error && <p className="text-red-600 text-center mt-4">{error}</p>}
    </div>
  );
};

export default FormularioContacto;
