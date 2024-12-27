import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Emprendimientos from './pages/Emprendimientos';
import Testimonios from './pages/Testimonios';
import Contactanos from './pages/Contactanos';
import Navbar from './components/Navbar'; // Asegúrate de que la ruta sea correcta
import Footer from './components/Footer'; // Importa el Footer
import PsychologicalTest from './pages/PsychologicalTest';
import Chatbot from './components/Chatbot';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        {/* Coloca el Navbar aquí para que se vea en todas las páginas */}
        <Navbar />
        <Chatbot />
        {/* Las rutas de tu aplicación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psychologicaltest" element={<PsychologicalTest />} />
          <Route path="/emprendimientos" element={<Emprendimientos />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/contactanos" element={<Contactanos />} />
          {/* Otras rutas */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
