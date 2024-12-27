import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { chatApi } from '../services/chatApi';


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{
    text: "Hello! Have a question about our organization? Feel free to ask and we'll get back to you soon.",
    isBot: true
  }]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');

  // Genera un sessionId único al cargar el componente, si no existe ya en localStorage
  useEffect(() => {
    let id = localStorage.getItem('sessionId');
    if (!id) {
      id = Math.random().toString(36).substring(2);
      localStorage.setItem('sessionId', id);
    }
    setSessionId(id);
  }, []);
  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    const messageText = inputMessage.trim();
    if (!messageText) return;

    setInputMessage('');
    setIsLoading(true);

    // Add user's message to chat
    setMessages(prev => [...prev, {
      text: messageText,
      isBot: false
    }]);

    try {
      const response = await chatApi.sendQuestion(messageText, null, window.location.pathname);

      // Agrega el mensaje de respuesta del bot al chat
      setMessages(prev => [...prev, {
        text: response.answer || "Thank you for your question! We've recorded it and will use it to improve our information resources.",
        isBot: true
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: "Sorry, we couldn't send your question. Please try again later.",
        isBot: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors`}
        aria-label="Ask a question"
      >
        <MessageCircle size={24} />
      </button>

      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col w-80 h-96 bg-white rounded-lg shadow-xl`}
      >
        <div className="flex items-center justify-between p-4 border-b bg-blue-600 text-white rounded-t-lg">
          <h3 className="text-lg font-semibold">Ask a Question</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-blue-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                message.isBot ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-100'
                    : 'bg-blue-600 text-white'
                }`}
              >
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
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
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