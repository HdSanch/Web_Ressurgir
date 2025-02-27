import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";
import Emprendimientos from './pages/Emprendimientos/Emprendimientos.jsx';
import Testimonios from './pages/Testimonios/Testimonios.jsx';
import Contactanos from './pages/Contactanos/Contactanos.jsx';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Tests from './pages/Test/SeleccionTest.jsx';
import TestPage from './pages/Test/TestPages.jsx';
import Chatbot from './components/Chatbot';
import NotFound from './NotFound.jsx';
import Voluntariados from './pages/Voluntariados/Voluntariados.jsx';
import './index.css';

function App() {
  return (
    <Router>
      {/* Usamos flexbox en el contenedor principal */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Chatbot />

        {/* Contenedor de Routes que ocupa el espacio disponible */}
        <div className="flex-grow mt-16 lg:mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienessomos" element={<QuienesSomos />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/test/:testId" element={<TestPage />} /> 
            <Route path="/emprendimientos" element={<Emprendimientos />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/voluntariados" element={<Voluntariados />} />
            {/* Ruta para manejar páginas no encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
