import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

// Función para eliminar tildes y normalizar texto (para búsqueda flexible)
const removeAccents = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    let id = localStorage.getItem('sessionId');
    if (!id) {
      id = Math.random().toString(36).substring(2);
      localStorage.setItem('sessionId', id);
    }
    setSessionId(id);
  }, []);

  useEffect(() => {
    // Mensaje de bienvenida al abrir el chat
    if (isOpen && messages.length === 0) {
      setMessages([{
        text: "¡Hola! ¿Tienes alguna pregunta sobre nuestra fundación? Puedes elegir una opción o escribirnos.",
        isBot: true
      }]);
      setShowOptions(true);
    }
  }, [isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const messageText = inputMessage.trim();
    if (!messageText) return;

    setInputMessage('');
    setIsLoading(true);

    setMessages(prev => [...prev, {
      text: messageText,
      isBot: false
    }]);

    // Responder dependiendo del contenido del mensaje
    let botResponse = "Lo siento, no entiendo esa pregunta. ¿Podrías reformularla?";
    const normalizedMessage = removeAccents(messageText);

    // Respuestas a palabras clave, ahora más flexibles
    if (normalizedMessage.includes("quienes son") || normalizedMessage.includes("quienes somos") || normalizedMessage.includes("quien es") || normalizedMessage.includes("quien somos")) {
      botResponse = "Somos la Fundación Ressurgir, una organización dedicada a ayudar a personas con adicciones, brindando programas de prevención, tratamiento y acompañamiento a sus familias.";
    } else if (normalizedMessage.includes("donaciones") || normalizedMessage.includes("como donar") || normalizedMessage.includes("donar") || normalizedMessage.includes("hacer una donacion")) {
      botResponse = "Puedes hacer una donación a través de transferencia bancaria, donaciones de insumos, o incluso ayudarnos como voluntario. ¡Tu apoyo es muy importante!";
    } else if (normalizedMessage.includes("servicios") || normalizedMessage.includes("que ofrecen") || normalizedMessage.includes("programas") || normalizedMessage.includes("tratamiento")) {
      botResponse = "Ofrecemos programas de tratamiento para personas con adicciones, así como talleres y charlas para prevenirlas. Si estás interesado, podemos brindarte más detalles.";
    } else if (normalizedMessage.includes("contacto") || normalizedMessage.includes("donde estamos") || normalizedMessage.includes("ubicacion")) {
      botResponse = "Estamos ubicados en Valle de los chillos, Quito, Ecuador. Puedes llamarnos al (+593) 963494220 o al (+593)  987427765.";
    } else if (normalizedMessage.includes("voluntariado") || normalizedMessage.includes("como ser voluntario") || normalizedMessage.includes("quiero ayudar")) {
      botResponse = "Si deseas ser voluntario, puedes escribirnos a nuestro correo electrónico voluntarios@ressurgir.org o llamarnos para recibir más información.";
    } else if (normalizedMessage.includes("actividades") || normalizedMessage.includes("eventos") || normalizedMessage.includes("proyectos")) {
      botResponse = "Contamos con diversas actividades como charlas educativas, programas de prevención y eventos especiales. Mantente al tanto de nuestras redes sociales para conocer más detalles.";
    } else if (normalizedMessage.includes("horarios") || normalizedMessage.includes("cuando abren") || normalizedMessage.includes("horarios de atención")) {
      botResponse = "Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00. Sábados de 9:00 a 13:00. También contamos con un servicio de emergencia 24/7 ¡Te esperamos!";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: botResponse,
        isBot: true
      }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleQuickOption = (option) => {
    let userMessage = '';
    let botResponse = '';

    switch (option) {
      case 'about':
        userMessage = '¿Quiénes son?';
        botResponse = 'Somos la Fundación Ressurgir, una organización dedicada a acompañar a personas en proceso de recuperación de adicciones, brindando contención, tratamiento y apoyo a los pacientes como a sus familias.';
        break;
      case 'donations':
        userMessage = '¿Cómo hacer donaciones?';
        botResponse = 'Puedes colaborar con nosotros a través de transferencias bancarias, donaciones de insumos o tiempo como voluntario. ¡Tu ayuda marca la diferencia!';
        break;
      case 'services':
        userMessage = '¿Qué servicios ofrecen?';
        botResponse = 'Ofrecemos orientación psicológica, acompañamiento familiar, desintoxicación, y programas de prevención y tratamiento.';
        break;
      case 'contact':
        userMessage = '¡Quiero contactarlos!';
        botResponse = 'Puedes escribirnos al 📞 (593) 963494220 o al 📱 (+593) 987427765. También respondemos en Instagram y Facebook.';
        break;
      case 'volunteering':
        userMessage = '¿Cómo ser voluntario?';
        botResponse = 'Para ser voluntario, puedes escribirnos a voluntarios@ressurgir.org o llamarnos al (593) 96 349 4220 para más información sobre cómo unirte.';
        break;
      default:
        botResponse = 'Gracias por tu interés y recuerda! Si puedes dejarlo por un día, puedes dejarlo por toda la vida!!.';
    }

    // Limpiar y mostrar solo mensaje seleccionado + respuesta + botón para volver
    setMessages([ 
      { text: userMessage, isBot: false },
      { text: botResponse, isBot: true }
    ]);
    setShowOptions(false);
  };

  const resetToOptions = () => {
    setMessages([
      {
        text: "¿En qué más podemos ayudarte? Selecciona una opción:",
        isBot: true
      }
    ]);
    setShowOptions(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'hidden' : 'flex'} items-center justify-center w-16 h-16 rounded-full bg-transparent text-white hover:bg-[#61b2e4] transition-colors overflow-hidden`}
        aria-label="Ask a question"
      >
        <img 
          src="/icons/toallin.gif" 
          alt="Chat assistant"
          className="w-full h-full object-cover"
        />
      </button>

      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col w-80 h-96 bg-white rounded-lg shadow-xl`}>
        <div className="flex items-center justify-between p-4 border-b bg-[#2584C3] text-white rounded-t-lg">
          <h3 className="text-lg font-semibold text-center">!Conversa con nosotros!</h3>
          <button 
            onClick={() => {
              setIsOpen(false);
              setMessages([]);
              setShowOptions(true);
              setInputMessage('');
              setIsLoading(false);
            }} 
            className="p-1 rounded-full hover:bg-blue-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${message.isBot ? 'bg-gray-100' : 'bg-[#61b2e4] text-white'}`}>
                {message.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}

          {showOptions && (
            <div className="flex flex-col gap-2 mt-2">
              <button onClick={() => handleQuickOption('about')} className="bg-blue-100 text-sm text-blue-700 px-3 py-2 rounded-lg text-left hover:bg-blue-200">
                🧑‍🤝‍🧑 ¿Quiénes somos?
              </button>
              <button onClick={() => handleQuickOption('donations')} className="bg-blue-100 text-sm text-blue-700 px-3 py-2 rounded-lg text-left hover:bg-blue-200">
                💸 ¿Cómo hacer donaciones?
              </button>
              <button onClick={() => handleQuickOption('services')} className="bg-blue-100 text-sm text-blue-700 px-3 py-2 rounded-lg text-left hover:bg-blue-200">
                🩺 ¿Qué servicios ofrecemos?
              </button>
              <button onClick={() => handleQuickOption('contact')} className="bg-blue-100 text-sm text-blue-700 px-3 py-2 rounded-lg text-left hover:bg-blue-200">
                📞 ¡Contactanos!
              </button>
              <button onClick={() => handleQuickOption('volunteering')} className="bg-blue-100 text-sm text-blue-700 px-3 py-2 rounded-lg text-left hover:bg-blue-200">
                🙋‍♂️ ¿Cómo ser voluntario?
              </button>
            </div>
          )}

          {!showOptions && (
            <div className="mt-4 flex justify-start">
              <button
                onClick={resetToOptions}
                className="bg-gray-200 text-sm text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300"
              >
                🔙 Ver opciones nuevamente
              </button>
            </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 bg-[#2584C3] text-white rounded-lg hover:bg-[#2584C3] transition-colors disabled:bg-blue-400"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
