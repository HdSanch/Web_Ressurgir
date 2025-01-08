import React from 'react';

const FormularioContacto = ({ nombre, setNombre, correo, setCorreo, mensaje, setMensaje, handleSubmit }) => {
  return (
    <div>
      <h2 className="contactanos-subheader">Envíanos un Mensaje</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600" htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-600" htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-600" htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button type="submit" className="contactanos-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioContacto;
