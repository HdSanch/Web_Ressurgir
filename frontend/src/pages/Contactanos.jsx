import React, { useState } from 'react';


const Contactanos = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, correo, mensaje });
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url('/images_empre/fondo.png')`,
        backgroundSize: '5%',
      }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 w-11/12 md:w-3/4 lg:w-2/3">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Contáctanos</h1>

        {/* Sección del Mapa */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Nuestra Ubicación</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.24992316332!2d-78.53698835136721!3d-0.2944878999999949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd1333e98797%3A0x87ba619ad4359425!2sFundaci%C3%B3n%20misi%C3%B3n%20por%20tu%20vida%20Ressurgir!5e0!3m2!1ses-419!2sec!4v1728266890469!5m2!1ses-419!2sec"
            title="Mapa de la Fundación Misión por Tu Vida Ressurgir"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Información de Contacto */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Información de Contacto</h2>
          <p className="text-lg text-gray-600">Teléfono: 0939649440</p>
          <p className="text-lg text-gray-600">Dirección: 1705011, Quito 170501</p>
          <p className="text-lg text-gray-600">Correo Electrónico: contacto@fundacion.com</p>
          <h3 className="text-xl font-semibold mt-8">Síguenos en nuestras redes sociales</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com/tuFundacion" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
            <a href="https://www.instagram.com/tuFundacion" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">Instagram</a>
            <a href="https://www.twitter.com/tuFundacion" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Envíanos un Mensaje</h2>
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
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
